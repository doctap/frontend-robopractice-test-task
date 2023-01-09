import React from 'react'
import { IUser } from '../../interfacies/interfaceUserAPI'
import { dateStringNormalize, getPeriodOfTime } from '../../utility/utility';
import RowList from '../rowList/RowList'

interface IDataTable {
	users: IUser[];
}

const daysOfMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

export default function DataTable(props: IDataTable) {


	//getPeriodOfTime('2021-05-01', '19-38','14-44',  dateStringNormalize)

	const getTimes = (arr: IUser[]) => {
		let total = [];
		let subArr = [];
		for (let user of arr) {
			for (let i = 0; i < user.Days.length; i++) {
				const day = user.Days[i];
				subArr.push(getPeriodOfTime(day.Date, day.End, day.Start, dateStringNormalize))
			}
			total.push(subArr);
			subArr = [];
		}
		return total;
	};

	return (
		<table>
			<thead><tr>{daysOfMonth.map(num => <td>{num}</td>)}</tr></thead>
			<RowList rows={getTimes(props.users)} />
		</table>
	)
}

let qqq = {
	"id": 188,
	"Fullname": "Adolph Torphy",
	"Days": [
		{ "Date": "2021-05-01", "End": "19-38", "Start": "14-44" },
		{ "Date": "2021-05-02", "End": "12-11", "Start": "11-14" },
		{ "Date": "2021-05-03", "End": "16-40", "Start": "11-10" },
		{ "Date": "2021-05-04", "End": "15-39", "Start": "14-18" },
		{ "Date": "2021-05-05", "End": "14-11", "Start": "13-23" },
		{ "Date": "2021-05-06", "End": "18-27", "Start": "13-49" },
		{ "Date": "2021-05-07", "End": "19-21", "Start": "13-27" },
		{ "Date": "2021-05-08", "End": "17-27", "Start": "11-30" },
		{ "Date": "2021-05-09", "End": "13-47", "Start": "10-38" },
		{ "Date": "2021-05-10", "End": "17-37", "Start": "12-36" },
		{ "Date": "2021-05-11", "End": "13-53", "Start": "11-56" },
		{ "Date": "2021-05-12", "End": "15-24", "Start": "10-39" },
		{ "Date": "2021-05-14", "End": "16-10", "Start": "12-17" },
		{ "Date": "2021-05-15", "End": "18-34", "Start": "14-44" },
		{ "Date": "2021-05-16", "End": "13-49", "Start": "10-51" },
		{ "Date": "2021-05-17", "End": "14-58", "Start": "10-26" },
		{ "Date": "2021-05-18", "End": "15-31", "Start": "14-23" },
		{ "Date": "2021-05-19", "End": "13-41", "Start": "12-59" },
		{ "Date": "2021-05-20", "End": "14-45", "Start": "10-48" },
		{ "Date": "2021-05-21", "End": "19-54", "Start": "14-26" },
		{ "Date": "2021-05-22", "End": "14-44", "Start": "13-49" },
		{ "Date": "2021-05-23", "End": "16-24", "Start": "13-30" },
		{ "Date": "2021-05-24", "End": "17-34", "Start": "14-38" },
		{ "Date": "2021-05-25", "End": "15-31", "Start": "14-37" },
		{ "Date": "2021-05-26", "End": "11-43", "Start": "10-12" },
		{ "Date": "2021-05-27", "End": "15-10", "Start": "11-38" },
		{ "Date": "2021-05-28", "End": "14-23", "Start": "12-28" },
		{ "Date": "2021-05-29", "End": "17-46", "Start": "11-41" },
		{ "Date": "2021-05-30", "End": "18-21", "Start": "12-11" },
		{ "Date": "2021-05-31", "End": "16-18", "Start": "13-42" }
	]
}