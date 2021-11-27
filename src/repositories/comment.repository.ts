import { EntityRepository, Repository } from 'typeorm';
import { CommentEntity } from '../entities/comment.entity';

@EntityRepository(CommentEntity)
export class CommentRepository extends Repository<CommentEntity> {
	// No custom functions needed
}
