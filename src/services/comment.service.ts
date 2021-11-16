import { getCustomRepository } from "typeorm";
import { CommentRepository } from "../repositories/comment.repository";
import { CommentContent, CommentCreate } from "../@types";


export class CommentService {
	async get(commentId: string): Promise<CommentContent> {
		try {
			const repository = getCustomRepository(CommentRepository);
			const commentRegister = await repository.findOneOrFail(commentId);

			return commentRegister.commentContent;
		} catch (error) {
			throw new Error(`Error getting post`);
		}
	}

	async create(comment: CommentCreate): Promise<CommentContent> {
		try {
			const repository = getCustomRepository(CommentRepository);
			const commentData = repository.save(comment);

			return commentData;
		} catch (error) {
			throw new Error(`Error creating comment`);
		}
	}

	async delete(commentId: string) {
		try {
			const repository = getCustomRepository(CommentRepository);
			await repository.softDelete({ id: commentId });
		} catch (error) {
			throw new Error(`There is no such post`);
		}
	}
}
