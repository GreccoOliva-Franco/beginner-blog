import { Request, Response } from "express";
import { CommentCreate } from "../@types";
import { CommentService } from '../services/comment.service';

class CommentController {
	async get(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const commentData = await new CommentService().get(id);

			return res.json({
				message: "Comment found",
				success: true,
				data: commentData,
			});
		} catch (error) {
			return res.json({
				message: "Comment does not exist",
				success: false,
			});
		}
	}

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

	async delete(req: Request, res: Response) {
		try {
			const { id } = req.params;
			await new CommentService().delete(id);

			return res.json({
				message: "Comment deleted",
				success: true,
			});
		} catch (error) {
			return res.json({
				message: "Error deleting comment",
				success: false,
			});
		}
	}
}

export default new CommentController();
