import { getCustomRepository } from "typeorm";
import { CommentRepository } from "../repositories/comment.repository";
import { CommentContent, CommentCreate } from "../@types";


export class CommentService {
	async create(comment: CommentCreate): Promise<CommentContent> {
		try {
			const repository = getCustomRepository(CommentRepository);
			const commentData = repository.save(comment);

			return commentData;
		} catch (error) {
			throw new Error(`Error creating comment`);
		}
	}
}
