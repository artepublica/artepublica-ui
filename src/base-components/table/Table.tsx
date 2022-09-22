import { StyleSheet, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

type TableProps = {
    headers?: string[];
    rows?: string[][];
    widthArr?: (number | undefined)[];
    width?: number;
};

function Table({ headers, rows, width }: TableProps): JSX.Element {
    const style = styles(width);
    //style={{ width: widthArr ? widthArr[indexCol] : undefined }}
    return (
        <Grid style={style.table}>
            <Row style={style.head}>
                {headers?.map((col, indexCol) => (
                    <Col
                        style={[
                            style.col,
                            indexCol !== headers.length - 1 ? style.headerBorder : undefined,
                        ]}
                        key={indexCol}
                    >
                        <Text style={style.headText}>{col.toUpperCase()}</Text>
                    </Col>
                ))}
            </Row>
            {rows?.map((row, indexRow) => (
                <Row
                    style={[
                        style.row,
                        indexRow % 2 === 0 ? style.rowEven : undefined,
                    ]}
                    key={indexRow}
                >
                    {row?.map((col, indexCol) => (
                        <Col
                            style={[
                                style.col,
                                indexCol !== row.length - 1 ? style.rowBorder : undefined,
                                indexRow % 2 === 0 ? style.rowBorderEven : undefined,
                            ]}
                            key={indexCol}
                        >
                            <Text style={style.rowText}>{col}</Text>
                        </Col>
                    ))}
                </Row>
            ))}
        </Grid>
    );
}

export default Table;

function styles(width?: number) {
    return StyleSheet.create({
        col: {
            //userSelect: 'auto',
        },
        table: {
            flex: null as unknown as number,
            width,
            //cursor: 'text',
            //userSelect: 'auto',
        },
        head: {
            backgroundColor: '#CC1964',
            flex: null as unknown as number,
            //userSelect: 'auto',
        },
        headText: {
            fontFamily: 'Arial',
            fontSize: 12,
            lineHeight: 20,
            color: '#FFFFFF',
            padding: 4,
            //userSelect: 'auto',
        },
        headerBorder: {
            borderRightWidth: 1,
            borderRightColor: '#FFFFFF',
            paddingBottom: -4,
            paddingTop: -4,
        },
        row: {
            backgroundColor: '#FFFFFF',
            //height: 'fit-content',
            flex: null as unknown as number,
            //userSelect: 'auto',
        },
        rowText: {
            fontFamily: 'Arial',
            fontSize: 11,
            lineHeight: 17,
            color: '#000000',
            padding: 4,
            //userSelect: 'auto',
        },
        rowEven: {
            backgroundColor: '#F2D7E3',
        },
        rowBorder: {
            borderRightWidth: 1,
            borderRightColor: '#F2D7E3',
            paddingBottom: -4,
            paddingTop: -4,
        },
        rowBorderEven: {
            borderRightColor: '#FFFFFF',
        },
    });
}
