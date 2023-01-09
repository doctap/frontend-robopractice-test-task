import { IUser } from "../interfacies/interfaceUserAPI";

export const usersArr: IUser[] = []

export const callApi = async (url: string) => {
	const response = await fetch(url);
	const body = await response.json();
	if (response.status !== 200) throw Error(body.message);

	return body;
};

callApi('/api/users').then(body => usersArr.push(...body));