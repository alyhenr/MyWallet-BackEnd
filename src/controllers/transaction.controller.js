import db from '../db.js';

const transactionsColl = db.collection("transactions");

// "/nova-transacao/:tipo"
export const makeTransaction = async (req, res) => {
    const { value, description } = req.body;
    const { tipo } = req.params;
    //Info of the user and the current session, validated in the middleware:
    const { userInfo } = res.locals;
    try {
        switch (tipo) {
            case "entrada": {
                await transactionsColl.insertOne({
                    type: "entrada",
                    session: userInfo.user._id,
                    userId: userInfo.user.id,
                    value,
                    description,
                });
                res.sendStatus(201);
                break;
            }
            case "saida": {
                await transactionsColl.insertOne({
                    type: "saida",
                    session: userInfo.user._id,
                    userId: userInfo.user.id,
                    value,
                    description,
                });
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