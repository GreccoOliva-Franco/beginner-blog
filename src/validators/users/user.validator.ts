import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { handleMessages } from '../handleMessages';
import fields from './user.fields';
import messages from './user.messages';

const userCreateSchema = Joi.object({
	username: Joi
		.string()
		.min(fields.username.min)
		.max(fields.username.max)
		.required()
		.messages({
			'any.required': messages.username.required,
			'string.empty': messages.username.empty,
			'string.min': messages.username.min,
			'string.max': messages.username.max,
		}),
	password: Joi
		.string()
		.min(fields.password.min)
		.max(fields.password.max)
		.required()
		.messages({
			'any.required': messages.password.required,
			'string.empty': messages.password.empty,
			'string.min': messages.password.min,
			'string.max': messages.password.max,
		}),
	name: Joi
		.string()
		.min(fields.name.min)
		.max(fields.name.max)
		.required()
		.messages({
			'any.required': messages.name.required,
			'string.empty': messages.name.empty,
			'string.min': messages.name.min,
			'string.max': messages.name.max,
		}),
	lastName: Joi
		.string()
		.min(fields.lastName.min)
		.max(fields.lastName.max)
		.required()
		.messages({
			'any.required': messages.lastName.required,
			'string.empty': messages.name.empty,
			'string.min': messages.name.min,
			'string.max': messages.name.max,
		}),
	email: Joi
		.string()
		.email()
		.min(fields.email.min)
		.max(fields.email.max)
		.required()
		.messages({
			'any.required': messages.email.required,
			'string.empty': messages.email.empty,
			'string.email': messages.email.email,
			'string.min': messages.email.min,
			'string.max': messages.email.max,
		}),
	profileImage: Joi
		.string()
		.min(fields.profileImage.min)
		.max(fields.profileImage.max)
		.messages({
			'string.min': messages.profileImage.min,
			'string.max': messages.profileImage.max,
		}),
	description: Joi
		.string()
		.max(fields.description.max)
		.required()
		.messages({
			'string.max': messages.description.max,
		}),
});

const userUpdateSchema = Joi.object({
	username: Joi
		.string()
		.required()
		.messages({
			'any.required': messages.username.required,
		}),
	name: Joi
		.string()
		.min(fields.name.min)
		.max(fields.name.max)
		.messages({
			'string.min': messages.name.min,
			'string.max': messages.name.max,
		}),
	lastName: Joi
		.string()
		.min(fields.lastName.min)
		.max(fields.lastName.max)
		.required()
		.messages({
			'any.required': messages.lastName.required,
			'string.min': messages.lastName.min,
			'string.max': messages.lastName.min,
		}),
	profileImage: Joi
		.string()
		.min(fields.profileImage.min)
		.max(fields.profileImage.max)
		.messages({
			'string.min': messages.profileImage.min,
			'string.max': messages.profileImage.max,
		}),
	description: Joi
		.string()
		.max(fields.description.max)
		.messages({
			'string.max': messages.description.max,
		}),
});

export function userCreateSchemaValidate(req: Request, res: Response, next: NextFunction) {
	const { error } = userCreateSchema.validate(req.body, { abortEarly: false });

	if (error) {
		return res.json({
			details: handleMessages(error),
			success: false,
		});
	};

	next();
};

export function userUpdateSchemaValidate(req: Request, res: Response, next: NextFunction) {
	const { error } = userUpdateSchema.validate(req.body, { abortEarly: false });

	if (error) {
		return res.json({
			details: handleMessages(error),
			success: false,
		});
	};

	next();
};
