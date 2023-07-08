import db from '../db.js';

export default function validateTransaction(transactionSchema) {
    const sessionsColl = db.collection("sessions");

    return async (req, res, next) => {
        const { authorization } = req.headers;
        const token = authorization?.replace("Bearer ", "");
        if (!token) return res.sendStatus(401);

        const { value, description } = req.body;
        if (Number(value) !== parseFloat(value)) return res.status(422).send("O valor deve ser do tipo flutuante (float)");

        const validation = transactionSchema({ value, description });
        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message);
            return res.status(422).send(errors);
        }

        try {
            const user = await sessionsColl.findOne({ token });
            if (!user) return res.sendStatus(401);

            // User found, so save user's info on locals to use it in the controller:
            res.locals.userInfo = { user };
        } catch (error) {
            res.sendStatus(500);
        }

        next();
    }
}