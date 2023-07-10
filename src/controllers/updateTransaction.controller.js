import { ObjectId } from 'mongodb';

import db from '../db.js';

const transactionsColl = db.collection("transactions");
const walletsColl = db.collection("wallets");

export default async (req, res) => {
    const { tipo, id } = req.params;
    const { value, description } = req.body;
    try {
        const transaction = await transactionsColl.findOneAndUpdate({ _id: new ObjectId(id) }, {
            $set: {
                value,
                description,
            }
        });
        const oldValue = transaction.value['value'];
        await walletsColl.updateOne({ userId: new ObjectId(transaction.value['userId']) }, {
            $inc: { total: (tipo === "entrada" ? 1 : -1) * (value - oldValue) },
        });
        res.sendStatus(204);
    } catch (error) {
        res.sendStatus(500);
    }
}