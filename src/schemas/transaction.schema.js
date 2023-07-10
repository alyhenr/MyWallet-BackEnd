import Joi from "joi";

export default (data) => (Joi.object({
    value: Joi.number().greater(0).required(),
    description: Joi.string().required(),
})).validate(data, { abortEarly: false });