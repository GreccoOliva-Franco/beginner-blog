import fields from "./comment.fields";
import { buildMessage } from "../validator.message";

const messages = {
	id: {
		required: buildMessage('ID', 'required'),
		empty: buildMessage('ID', 'empty'),
	},
	userId: {
		required: buildMessage('user ID', 'required'),
		empty: buildMessage('user ID', 'empty'),
	},
	postId: {
		required: buildMessage('post ID', 'required'),
		empty: buildMessage('post ID', 'empty'),
	},
	content: {
		required: buildMessage('content', 'required'),
		empty: buildMessage('content', 'empty'),
		min: buildMessage('content', 'min', fields.content.min),
		max: buildMessage('content', 'max', fields.content.max),
	},
};

export default messages;
