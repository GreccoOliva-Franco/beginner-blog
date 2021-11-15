import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { handleMessages } from './handleMessages';

export const userCreateSchema = Joi.object({
	username: Joi.string()
		.min(3).rule({
			message: 'Username must be at least 3 characters long.',
		})
		.max(30).rule({
			message: 'Username must be at most 30 characters long.',
		})
		.required().messages({
			'any.required': 'Username is required.',
			'string.empty': 'Username cannot be empty.',
			'string.min': 'Username must be at least 3 characters long.',
			'string.max': 'Username must be at most 30 characters long.',
		}),
	password: Joi.string()
		.min(8)
		.max(30)
		.required().messages({
			'any.required': 'Password is required.',
			'string.empty': 'Password cannot be empty.',
			'string.min': 'Password must be at least 8 characters long.',
			'string.max': 'Password must be at most 30 characters long.',
		}),
	name: Joi.required(),
	lastName: Joi.required(),
	email: Joi.required(),
	profileImage: Joi.required(),
	description: Joi.required(),
});

export function userSchemaValidate(req: Request, res: Response, next: NextFunction) {
	const { error } = userCreateSchema.validate(req.body, { abortEarly: false });

	if (error) {
		return res.json({
			details: handleMessages(error),
			success: false,
		});
	}
	next();
}
