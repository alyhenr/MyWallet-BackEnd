import Joi from "joi";

export default (action, data) => {
    switch (action) {
        case 'login': {
            return Joi.object({
                email: Joi.string().email().required(),
                senha: Joi.string().min(3),
            }).validate(data, { abortEarly: false });
        }
        case 'cadastro': {
            return Joi.object({
                nome: Joi.string().required(),
                email: Joi.string().email().required(),
                senha: Joi.string().min(3),
            }).validate(data, { abortEarly: false });
        }
        default:
            break;
    }
}