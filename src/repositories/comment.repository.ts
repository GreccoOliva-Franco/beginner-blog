import { Repository } from 'typeorm';
import { CommentEntity } from '../entities/comment.entity';

export class CommentRepository extends Repository<CommentEntity> {
	// No custom functions needed
}
