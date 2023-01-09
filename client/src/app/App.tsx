import React, { useEffect, useState } from 'react'
import TableColumn from '../components/tableColumn/TableColumn';
import { IUser } from '../interfacies/interfaceUserAPI'
import uniqId from 'uniqid';
import './App.css';
import DataTable from '../components/dataTable/DataTable';
import { callApi } from '../api/http-client';
import { dateStringNormalize, getPeriodOfTime } from '../utility/utility';


getPeriodOfTime('2021-05-02', '00-00', '00-00', dateStringNormalize, '2021-05-01')


export default function App() {
	const [users, setUsers] = useState<IUser[]>([]);

	


	useEffect(() => {
		callApi('/api/users').then(body => setUsers(body))
	}, [])

	return (
		<table style={{ width: '5rem', padding: '0 200px' }}>
			<tbody>
				<tr>
					<td width="150" className='names'>
						<TableColumn>
							{users.map(it => <tr key={uniqId()}><td>{it.Fullname}</td></tr>)}
						</TableColumn>
					</td>
					<td>
						
						<DataTable users={users} />
					</td>
					<td width="150" className='totalTime'>
						<TableColumn>
							{users.map(it => <tr key={uniqId()}><td>{it.Fullname}</td></tr>)}
						</TableColumn>
					</td>
				</tr>
			</tbody>
		</table>
	)
}




// const getNames = (arr: IUserAPI[]) => {
// 	const userNames: string[] = [];
// 	arr.forEach(user => userNames.push(user.Fullname))

// 	return userNames;
// };