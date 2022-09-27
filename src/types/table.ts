export interface RowData {
    col1: string
    col2: number
    col3: number
    col4: string
}

export interface HeadCell {
    id: keyof RowData
    label: string
    numeric: boolean
}

export type Order = 'asc' | 'desc'

export interface TableContentProps {
    rows: Array<RowData>,
    columns: Array<HeadCell>,
    rowsPerPage: number
}

export interface TableHeaderProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof RowData) => void
    order: Order
    orderBy: string
    columns: Array<HeadCell>
}

export interface TableToolbarProps {
    title: string
}