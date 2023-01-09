import React from 'react'
import uniqId from 'uniqid';

interface ITRow {
	cells: string[];
}

export default function TRow(props: ITRow) {
	return (
		<tr>{props.cells.map(cell => <td key={uniqId()}>{cell}</td>)}</tr>
	)
}
