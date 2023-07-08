import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import db from '../db.js';

const userColl = db.collection("users");
const sessionsColl = db.collection("sessions");

// "/cadastro"
export const signUp = async (req, res) => {
    try {
        if (await userColl.findOne({ email: req.body.email }))
            return res.status(409).send("Email já cadastrado.");
        const newUser = {
            ...req.body,
            senha: bcrypt.hashSync(req.body.senha, 10)
        };

        await userColl.insertOne(newUser);
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// "/"
export const signIn = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const user = await userColl.findOne({ email });
        if (!email) return res.status(404).send("Email não cadastrado.")

        if (bcrypt.compareSync(senha, user.senha)) {
            const token = uuid();
            sessionsColl.insertOne({ id: user._id, token });
            return res.status(200).send({ token });
        } else {
            return res.status(401).send("Senha incorreta");
        }
    } catch (error) {
        res.sendStatus(500);
    }
};
