import { PostCreate, PostUpdate } from './../@types';
import { Request, Response } from 'express';
import { PostService } from '../services/post.service';

class PostController {
	async get(req: Request, res: Response) {
		try {
			const { postId } = req.params;
			const postData = await new PostService.get(postId);

			return res.json({
				message: "Post found",
				success: true,
				data: postData,
			});
		} catch (error) {
			return res.json({
				message: "Post does not exist",
				success: false,
			});
		}
	}

	async create(req: Request, res: Response) {
		try {
			const { title, content, ownerId } = req.body;
			const post: PostCreate = { title, content, ownerId };
			const postData = await new PostService().create(post);

			return res.json({
				message: 'Post created',
				success: true,
				data: postData,
			});
		} catch (error) {
			return {
				message: "Post not created",
				success: false,
				error: error,
			};
		}
	}

	async update(req: Request, res: Response) {
		const { id, ownerId, title, content } = req.body;
		const post: PostUpdate = { id, ownerId, title, content };
		const postData = await new PostService().update(post);

		return res.json({
			message: 'Post updated',
			success: true,
			data: postData,
		});
	}

	async delete(req: Request, res: Response) {
		try {
			const { id } = req.params;
			await new PostService().delete(id);

			return res.json({
				message: "Post deleted",
				success: true,
			});
		} catch (error) {
			return res.json({
				message: "Post doesn't exist",
				success: false,
			});
		};
	};
}

export default new PostController();
