import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { TableContentProps } from '../../../types/table'


export default function TableContent(props: TableContentProps) {
    const { rows, columns, rowsPerPage } = props

    const emptyRows = Math.max(0, rowsPerPage - rows.length)

    return (
        <TableBody>
            {rows.map((row, index) => {
                return (
                    <TableRow
                        hover
                        tabIndex={-1}
                        key={index}
                    >
                        {columns.map(col => {
                            return <TableCell align={col.numeric ? 'right' : 'left'}>{row[col.id]}</TableCell>
                        })}
                    </TableRow>
                )
            })}
            {emptyRows > 0 && (
                <TableRow
                    style={{
                        height: 33 * emptyRows,
                    }}
                >
                    <TableCell colSpan={columns.length} />
                </TableRow>
            )}
        </TableBody>
    )
}