import { ValidationError } from 'joi';

export function handleMessages(error: ValidationError) {
	return error.details.map((detail) => {
		return {
			label: detail.context.label,
			message: detail.message,
		};
	});
}
