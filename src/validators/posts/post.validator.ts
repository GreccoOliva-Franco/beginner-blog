import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { handleMessages } from '../handleMessages';
import fields from './post.fields';
import messages from './post.messages';

const postCreateSchema = Joi.object({
	title: Joi
		.string()
		.min(fields.title.min)
		.max(fields.title.min)
		.required()
		.messages({
			'any.required': messages.title.required,
			'string.empty': messages.title.empty,
			'string.min': messages.title.min,
			'string.max': messages.title.max,
		}),
	content: Joi
		.string()
		.min(fields.content.min)
		.required()
		.messages({
			'any.required': messages.content.required,
			'string.empty': messages.content.empty,
			'string.min': messages.content.min,
		}),
	// TODO: REMOVE 'ownerId' WHEN AUTH IS IMPLEMENTED
	ownerId: Joi
		.string()
		.required()
		.messages({
			'any.required': messages.ownerId.required,
			'string.empty': messages.ownerId.empty,
		}),
});

const postUpdateSchema = Joi.object({
	title: Joi
		.string()
		.min(fields.title.min)
		.max(fields.title.max)
		.messages({
			'string.empty': messages.title.empty,
			'string.min': messages.title.min,
			'string.max': messages.title.max,
		}),
	content: Joi
		.string()
		.min(fields.content.min)
		.messages({
			'string.min': messages.content.min,
		}),
	// TODO: REMOVE 'ownerId' WHEN AUTH IS IMPLEMENTED
	ownerId: Joi
		.string()
		.required()
		.messages({
			'any.required': messages.ownerId.required,
			'string.empty': messages.ownerId.empty,
		}),
});

export function postCreateSchemaValidate(req: Request, res: Response, next: NextFunction) {
	const { error } = postCreateSchema.validate(req.body, { abortEarly: false });

	if (error) {
		return res.json({
			details: handleMessages(error),
			success: false,
		});
	};

	next();
};

export function postUpdateSchemaValidate(req: Request, res: Response, next: NextFunction) {
	const { error } = postUpdateSchema.validate(req.body, { abortEarly: false });

	if (error) {
		return res.json({
			details: handleMessages(error),
			success: false,
		});
	};

	next();
};
