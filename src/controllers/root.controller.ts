import { Request, Response } from "express";

class RootController {
	info(req: Request, res: Response) {
		return res.json({
			info: 'Beginner Blog API',
			version: '1.0.0',
		});
	}
}

export default new RootController();
