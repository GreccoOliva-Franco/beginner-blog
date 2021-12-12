import fields from "./user.fields";
import { buildMessage } from "../validator.message";

const messages = {
	username: {
		required: buildMessage('username', 'required'),
		empty: buildMessage('username', 'empty'),
		min: buildMessage('username', 'min', fields.username.min),
		max: buildMessage('username', 'max', fields.username.max),
	},
	password: {
		required: buildMessage('password', 'required'),
		empty: buildMessage('password', 'empty'),
		min: buildMessage('password', 'min', fields.password.min),
		max: buildMessage('password', 'max', fields.password.max),
	},
	name: {
		required: buildMessage('name', 'required'),
		empty: buildMessage('name', 'empty'),
		min: buildMessage('name', 'min', fields.name.min),
		max: buildMessage('name', 'max', fields.name.max),
	},
	lastName: {
		required: buildMessage('last name', 'required'),
		empty: buildMessage('last name', 'empty'),
		min: buildMessage('last name', 'min', fields.lastName.min),
		max: buildMessage('last name', 'max', fields.lastName.max),
	},
	email: {
		required: buildMessage('email', 'required'),
		empty: buildMessage('email', 'empty'),
		email: buildMessage('email', 'email'),
		min: buildMessage('email', 'min', fields.email.min),
		max: buildMessage('email', 'max', fields.email.max),
	},
	profileImage: {
		required: buildMessage('profile image', 'required'),
		empty: buildMessage('profile image', 'empty'),
		min: buildMessage('profile image', 'min', fields.profileImage.min),
		max: buildMessage('profile image', 'max', fields.profileImage.max),
	},
	description: {
		required: buildMessage('description', 'required'),
		empty: buildMessage('description', 'empty'),
		min: buildMessage('description', 'min', fields.description.min),
		max: buildMessage('description', 'max', fields.description.max),
	},
};

export default messages;
