// Users
import { UserInfoBasic, UserInfoDetailed, UserInfoFull, UserCreate, UserUpdate } from './users.type';

// Posts
import { PostInfo, PostContent, PostCreate, PostUpdate } from './posts.type';

// Comments
import { CommentInfo, CommentContent, CommentCreate } from './comments.type';

// Auth
import { AuthPayload } from './auth.type';

// Categories
import { CategoryContent, CategoryInfo, CategoryCreate, CategoryInfoFull } from './category.types';

declare global {
	namespace Express {
		// eslint-disable-next-line @typescript-eslint/no-empty-interface
		interface User extends AuthPayload {}
	}
}

export {
	// User
	UserInfoBasic,
	UserInfoDetailed,
	UserInfoFull,
	UserCreate,
	UserUpdate,
	// Posts
	PostInfo,
	PostContent,
	PostCreate,
	PostUpdate,
	// Comments
	CommentInfo,
	CommentContent,
	CommentCreate,
	// Auth
	AuthPayload,
	// Categories
	CategoryCreate,
	CategoryContent,
	CategoryInfo,
	CategoryInfoFull,
};
