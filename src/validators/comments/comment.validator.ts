// External modules
import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

// Internal modules
import { handleMessages } from '../handleMessages';
import fields from './comment.fields';
import messages from './comment.messages';

const commentCreateSchema = Joi.object({
	userId: Joi
		.string()
		.required()
		.messages({
			'any.required': messages.userId.required,
			'string.empty': messages.userId.empty,
		}),
	postId: Joi
		.string()
		.required()
		.messages({
			'any.required': messages.postId.required,
			'string.empty': messages.postId.empty,
		}),
	content: Joi
		.string()
		.min(fields.content.min)
		.max(fields.content.max)
		.required()
		.messages({
			'any.required': messages.content.required,
			'string.empty': messages.content.empty,
			'string.min': messages.content.min,
			'string.max': messages.content.max,
		}),
});

const commentUpdateSchema = Joi.object({
	id: Joi
		.string()
		.required()
		.messages({
			'any.required': messages.id.required,
			'string.empty': messages.id.empty,
		}),
	content: Joi
		.string()
		.min(fields.content.min)
		.max(fields.content.max)
		.required()
		.messages({
			'any.required': messages.content.required,
			'string.empty': messages.content.empty,
			'string.min': messages.content.min,
			'string.max': messages.content.max,
		}),
});

export function commentCreateSchemaValidate(req: Request, res: Response, next: NextFunction) {
	const { error } = commentCreateSchema.validate(req.body, { abortEarly: false });

	if (error) {
		return res.json({
			details: handleMessages(error),
			success: false,
		});
	};

	next();
};

export function commentUpdateSchemaValidate(req: Request, res: Response, next: NextFunction) {
	const { error } = commentUpdateSchema.validate(req.body, { abortEarly: false });

	if (error) {
		return res.json({
			details: handleMessages(error),
			success: false,
		});
	};

	next();
};
