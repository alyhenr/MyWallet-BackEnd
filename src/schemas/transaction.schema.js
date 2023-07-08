import Joi from "joi";

export default (data) => (Joi.object({
    value: Joi.number().required(),
    description: Joi.string().required(),
})).validate(data, { abortEarly: false });