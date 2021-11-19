const fields = {
	username: {
		min: 3,
		max: 30,
	},
	password: {
		min: 8,
		max: 30,
	},
	name: {
		min: 3,
		max: 30,
	},
	lastName: {
		min: 1,
		max: 30,
	},
	email: {
		min: 5,
		max: 50,
	},
	profileImage: {
		min: 3,
		max: 255,
	},
	description: {
		min: 0,
		max: 500,
	},
};

export default fields;
