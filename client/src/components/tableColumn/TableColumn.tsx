import React from 'react';

interface ITableColumn {
	children: React.ReactNode;
}

export default function TableColumn(props: ITableColumn) {


	return (
		<table width="100%" cellPadding="2" cellSpacing="1">
			{props.children}
		</table>
	)
}
