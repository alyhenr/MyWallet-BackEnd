import { ObjectId } from 'mongodb';

import db from '../db.js';

const transactionsColl = db.collection("transactions");
const walletsColl = db.collection("wallets");

export default async (req, res) => {
    const { item_id } = req.params;
    try {
        const transaction = await transactionsColl.findOneAndDelete({ _id: new ObjectId(item_id) });
        const action = transaction.value['type'];
        const value = transaction.value['value'] * (action === "entrada" ? -1 : 1);
        await walletsColl.updateOne({ userId: transaction.value['userId'] }, { $inc: { total: value } });

        res.sendStatus(202);
    } catch (error) {
        console.log(error.message);
        res.sendStatus(500);
    }
};