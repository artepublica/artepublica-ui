import { StyleSheet } from 'react-native';
import { Table as TableNative, Row, Rows } from 'react-native-table-component';

type TableProps = {
    headers?: JSX.Element[];
    rows?: JSX.Element[][];
    widthArr?: (number | undefined)[];
};

function Table({ headers, rows, widthArr }: TableProps): JSX.Element {
    const style = styles();

    return (
        <TableNative borderStyle={style.table}>
            <Row widthArr={widthArr as number[]} data={headers} style={style.head} textStyle={style.headText} />
            <Rows widthArr={widthArr as number[]} data={rows} style={style.row} textStyle={style.rowText} />
        </TableNative>
    );
}

export default Table;

function styles() {
    return StyleSheet.create({
        table: {
            //borderWidth: 0,
            //borderColor: '#c8e1ff',
        },
        head: {
            backgroundColor: '#CC1964',
        },
        headText: {
            fontFamily: 'Arial',
            fontSize: 12,
            lineHeight: 20,
            color: '#FFFFFF',
        },
        row: {
            backgroundColor: '#FFFFFF',
        },
        rowText: {
            fontFamily: 'Arial',
            fontSize: 11,
            lineHeight: 17,
            color: '#000000',
        },
    });
}
