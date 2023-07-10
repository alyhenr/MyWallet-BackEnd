import { ObjectId } from 'mongodb';

import db from '../db.js';

const transactionsColl = db.collection("transactions");
const walletsColl = db.collection("wallets");

export default (req, res, next) => {

}