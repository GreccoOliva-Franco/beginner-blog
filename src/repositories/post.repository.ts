import { PostsEntity } from './../entities/post.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(PostsEntity)
export class PostRepository extends Repository<PostsEntity> {
	// Find
	async findByUserId(userId: string): Promise<PostsEntity[]> {
		return await this.find({ ownerId: userId });
	}
}
