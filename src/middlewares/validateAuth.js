export default function validateAuth(authSchema, action) {
    return (req, res, next) => {
        const validation = authSchema(action, req.body);
        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message);
            return res.status(422).send(errors);
        }
        next();
    }
}
