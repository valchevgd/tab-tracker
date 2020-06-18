const Joi = require('@hapi/joi');

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{5,32}$')
            ).required()
        });

        const {error} = schema.validate(req.body);

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'Invalid email'
                    });
                    break;
                case 'password':
                    res.status(400).send({
                        error: 'Invalid password'
                    });
                    break;
                default:
                    res.status(400).send({
                        error: 'Invalid registration'
                    });
                    break;
            }
        } else {
            next();
        }
    }
}
