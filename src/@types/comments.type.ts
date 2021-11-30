import { PostsEntity } from "../entities/post.entity";
import { UsersEntity } from "../entities/user.entity";

export interface CommentInfo {
  id: string;
  user: UsersEntity;
  post: PostsEntity;
  createdAt: Date;
}

export interface CommentContent extends CommentInfo {
  content: string;
}

export interface CommentCreate {
  userId: string;
  postId: string;
  content: string;
}
