export interface IDays {
	Date: string;
	End: string;
	Start: string;
}

export interface IUser {
	id: number;
	Fullname: string;
	Days: IDays[];
}