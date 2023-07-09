import db from "../db.js";

export default async (_, res) => {
    const { auth: token } = res.locals;
    const sessionsColl = db.collection("sessions");
    const transactionsColl = db.collection("transactions");
    const walletsColl = db.collection("wallets");
    try {
        const user = await sessionsColl.findOne({ token });
        if (!user) return res.sendStatus(401);
        const transactions = await transactionsColl.find({
            userId: user.userId,
        }).toArray();
        const userWallet = await walletsColl.findOne({ userId: user.userId });
        res.status(200).send({
            transactions,
            total: userWallet.total,
        });
    } catch (error) {
        res.sendStatus(500);
    }
};