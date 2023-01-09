import React from 'react';
import TRow from '../tRow/TRow';
import uniqId from 'uniqid';

interface IDataTable {
	rows: string[][];
}

export default function RowList(props: IDataTable) {
	return (
		<tbody>
			{props.rows.map(row => <TRow key={uniqId()} cells={row} />)}
		</tbody>
	)
}
