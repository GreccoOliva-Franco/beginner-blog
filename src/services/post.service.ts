import { PostsEntity } from './../entities/post.entity';
import { PostRepository } from '../repositories/post.repository';
import { PostContent, PostInfo, PostCreate, PostUpdate } from './../@types';
import { getCustomRepository } from 'typeorm';
import { ArrayUtils } from '../utils';

export class PostService {
	private repository: PostRepository;
	constructor() {
		this.repository = getCustomRepository(PostRepository);
	}

	async get(postId: string): Promise<PostContent> {
		try {
			const postRegister = await this.repository.findOneOrFail(postId);
			return postRegister.postContent;
		} catch (error) {
			throw new Error(`Error getting post`);
		}
	}

	async create(post: PostCreate): Promise<PostContent> {
		try {
			const Post = Object.assign(new PostsEntity(), post);
            const result = await this.repository.save(Post);
			return result.postContent;
		} catch (error) {
			throw new Error(`Error creating post`);
		}
	}

	async update(post: PostUpdate): Promise<PostInfo> {
		try {
			const postRegister = await this.repository.findOneOrFail({ id: post.id });
			const data = ArrayUtils.removeEmptyKeys(post);
			const newPostRegister = Object.assign(postRegister, data);
			const result = await this.repository.save(newPostRegister);
			return result.postInfo;
		} catch (error) {
			throw new Error(`Error updating post`);
		}
	}

	async delete(postId: string) {
		try {
			await this.repository.softDelete({ id: postId });
		} catch (error) {
			throw new Error(`There is no such post`);
		}
	}
}
