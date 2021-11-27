import { NextFunction, Request, Response } from 'express';
import { Roles } from './../@types/users.type';
export function protectByRole(roles: Roles[]) {
	return (req: Request, res: Response, next: NextFunction) => {
		// TODO: implement a database validation to check if the user has the right role to access the route
		// const { method, baseUrl } = req;
		const userRole = req.user.role.name as unknown as Roles;
		if (userRole === Roles.ADMIN) {
			return next();
		}

		if (roles.includes(userRole)) {
			return next();
		}

		return res.status(401).json({
			message: 'You are not authorized to access this resource',
			success: false,
		});
	};
}
