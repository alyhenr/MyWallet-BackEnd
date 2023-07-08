import db from '../db.js';

const transactionsColl = db.collection("transactions");
const walletsColl = db.collection("wallets");
// "/nova-transacao/:tipo"
export default async (req, res) => {
    const { value, description } = req.body;
    const { tipo } = req.params;
    //Info of the user and the current session, validated in the middleware:
    const { userInfo } = res.locals;
    //Update user's total after each transaction to make it more efficient,
    // only need to find the user's wallet once (by id) after each operation
    // and add or subtract the value of the operation.
    try {
        switch (tipo) {
            case "entrada": {
                await transactionsColl.insertOne({
                    type: "entrada",
                    sessionId: userInfo.user._id,
                    userId: userInfo.user.userId,
                    value,
                    description,
                });
                await walletsColl.updateOne({
                    userId: userInfo.user.userId
                },
                    { $inc: { total: value } })
                res.sendStatus(201);
                break;
            }
            case "saida": {
                await transactionsColl.insertOne({
                    type: "saida",
                    sessionId: userInfo.user._id,
                    userId: userInfo.user.userId,
                    value,
                    description,
                });
                await walletsColl.updateOne({
                    userId: userInfo.user.userId
                },
                    { $inc: { total: -value } })
                res.sendStatus(201);
                break;
            }
            default:
                break;
        }
    } catch (error) {
        res.status(500).send(error);
    }
};