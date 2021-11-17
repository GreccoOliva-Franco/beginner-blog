import { buildMessage } from "../validator.message";
import fields from "./post.fields";

const messages = {
	id: {
		required: buildMessage('id', 'id'),
		empty: buildMessage('id', 'empty'),
		min: buildMessage('id', 'min', fields.id.min),
		max: buildMessage('id', 'max', fields.id.max),
	},
	ownerId: {
		required: buildMessage('id_owner', 'id'),
		empty: buildMessage('id_owner', 'empty'),
		min: buildMessage('id_owner', 'min', fields.ownerId.min),
		max: buildMessage('id_owner', 'max', fields.ownerId.max),
	},
	title: {
		required: buildMessage('title', 'id'),
		empty: buildMessage('title', 'empty'),
		min: buildMessage('title', 'min', fields.title.min),
		max: buildMessage('title', 'max', fields.title.max),
	},
	content: {
		required: buildMessage('content', 'id'),
		empty: buildMessage('content', 'empty'),
		min: buildMessage('content', 'min', fields.content.min),
	},
};

export default messages;
