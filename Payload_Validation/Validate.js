const Joi = require('joi');

const userSchema = Joi.object({
  Username: Joi.string().alphanum().min(3).max(30).required(),
  Email: Joi.string().email().required(),
  Password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

function validateUserPayload(req, res, next) {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  next();
}

module.exports = { validateUserPayload };
