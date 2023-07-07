export default function validateAuth(authSchema) {
    return (req, res, next) => {
        const action = req.originalUrl.replaceAll("/", "") === "" ? "login" : "cadastro";

        const validation = authSchema(action, req.body);
        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message);
            return res.status(422).send(errors);
        }

        next();
    }
}
