import { Request, Response } from "express";
import { CommentCreate } from "../@types";
import { CommentService } from '../services/comment.service';

class CommentController {
	async create(req: Request, res: Response) {
		try {
			const { userId, postId, content } = req.body;
			const comment: CommentCreate = { userId, postId, content };
			const commentData = await new CommentService().create(comment);

			return res.json({
				message: "Comment created",
				success: true,
				data: commentData,
			});
		} catch (error) {
			return res.json({
				message: "Comment not created",
				success: false,
			});
		}
	}
}

export default new CommentController();
