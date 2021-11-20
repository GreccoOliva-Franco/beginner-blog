import { getCustomRepository } from "typeorm";
import { CommentRepository } from "../repositories/comment.repository";
import { CommentContent, CommentCreate } from "../@types";


export class CommentService {
	private repository: CommentRepository;
	constructor() {
		this.repository = getCustomRepository(CommentRepository);
	}

	async get(commentId: string): Promise<CommentContent> {
		try {
			const commentRegister = await this.repository.findOneOrFail(commentId);

			return commentRegister.commentContent;
		} catch (error) {
			throw new Error(`Error getting post`);
		}
	}

	async create(comment: CommentCreate): Promise<CommentContent> {
		try {
			const commentData = await this.repository.save(comment);
			return commentData;
		} catch (error) {
			throw new Error(`Error creating comment`);
		}
	}

	async delete(commentId: string) {
		try {
			await this.repository.softDelete({ id: commentId });
		} catch (error) {
			throw new Error(`There is no such post`);
		}
	}
}
