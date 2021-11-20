export function buildMessage(field: string, property: string, value?: number): string {

	const message = {
		required: `${toCapitalCase(field)} is required.`,
		empty: `${toCapitalCase(field)} can not be empty.`,
		email: `${toCapitalCase(field)} is not a valid email.`,
		min: `${toCapitalCase(field)} must be at least ${value} characters long.`,
		max: `${toCapitalCase(field)} must be at most ${value} characters long.`,
	};
	return message[property];
};

function toCapitalCase(string: string): string {
	return string[0].toUpperCase() + string.slice(1).toLowerCase();
};
