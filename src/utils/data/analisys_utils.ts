export const isDecade = (date: string | undefined, decade: string): boolean => {
    if (date != null && date !== '') {
        try {
            if (date.split('/').length === 3) {
                return date.split('/')[2].startsWith(decade);
            } else if (date.split('/').length === 2) {
                return date.split('/')[1].startsWith(decade);
            } else {
                return date.startsWith(decade);
            }
        } catch {
            console.log(date);
        }
    }
    return false;
};

export const is2020 = (date?: string): boolean => {
    return isDecade(date, '202');
};

export const is2010 = (date?: string): boolean => {
    return isDecade(date, '201');
};

export const is2000 = (date?: string): boolean => {
    return isDecade(date, '200');
};

export const is1990 = (date?: string): boolean => {
    return isDecade(date, '199');
};

export const is1980 = (date?: string): boolean => {
    return isDecade(date, '198');
};

export const is1970 = (date?: string): boolean => {
    return isDecade(date, '197');
};

export const is1960 = (date?: string): boolean => {
    return isDecade(date, '196');
};

export const is1950 = (date?: string): boolean => {
    return isDecade(date, '195');
};

export const is1940 = (date?: string): boolean => {
    return isDecade(date, '194');
};

export const is1930 = (date?: string): boolean => {
    return isDecade(date, '193');
};

export const is1920 = (date?: string): boolean => {
    return isDecade(date, '192');
};

export const is1910 = (date?: string): boolean => {
    return isDecade(date, '191');
};

export const is1900 = (date?: string): boolean => {
    return isDecade(date, '190');
};

export const is1890 = (date?: string): boolean => {
    return isDecade(date, '189');
};

export const is1880 = (date?: string): boolean => {
    return isDecade(date, '188');
};

export const is1870 = (date?: string): boolean => {
    return isDecade(date, '187');
};

export const is1860 = (date?: string): boolean => {
    return isDecade(date, '186');
};

export const is1850 = (date?: string): boolean => {
    return isDecade(date, '185');
};

export const is1840 = (date?: string): boolean => {
    return isDecade(date, '184');
};

export const is1830 = (date?: string): boolean => {
    return isDecade(date, '183');
};

export const is1820 = (date?: string): boolean => {
    return isDecade(date, '182');
};

export const is1810 = (date?: string): boolean => {
    return isDecade(date, '181');
};

export const is1800 = (date?: string): boolean => {
    return isDecade(date, '180');
};

export const is1790 = (date?: string): boolean => {
    return isDecade(date, '179');
};

export const is1780 = (date?: string): boolean => {
    return isDecade(date, '178');
};

export const is1770 = (date?: string): boolean => {
    return isDecade(date, '177');
};

export const is1760 = (date?: string): boolean => {
    return isDecade(date, '176');
};

export const is1750 = (date?: string): boolean => {
    return isDecade(date, '175');
};

export const is1740 = (date?: string): boolean => {
    return isDecade(date, '174');
};

export const is1730 = (date?: string): boolean => {
    return isDecade(date, '173');
};

export const is1720 = (date?: string): boolean => {
    return isDecade(date, '172');
};

export const is1710 = (date?: string): boolean => {
    return isDecade(date, '171');
};

export const is1700 = (date?: string): boolean => {
    return isDecade(date, '170');
};

export const is1690 = (date?: string): boolean => {
    return isDecade(date, '169');
};

export const is1680 = (date?: string): boolean => {
    return isDecade(date, '168');
};

export const is1670 = (date?: string): boolean => {
    return isDecade(date, '167');
};

export const is1660 = (date?: string): boolean => {
    return isDecade(date, '166');
};

export const is1650 = (date?: string): boolean => {
    return isDecade(date, '165');
};

export const is1640 = (date?: string): boolean => {
    return isDecade(date, '164');
};

export const is1630 = (date?: string): boolean => {
    return isDecade(date, '163');
};

export const is1620 = (date?: string): boolean => {
    return isDecade(date, '162');
};

export const is1610 = (date?: string): boolean => {
    return isDecade(date, '161');
};

export const is1600 = (date?: string): boolean => {
    return isDecade(date, '160');
};

export const is1590 = (date?: string): boolean => {
    return isDecade(date, '159');
};

export const is1580 = (date?: string): boolean => {
    return isDecade(date, '158');
};

export const is1570 = (date?: string): boolean => {
    return isDecade(date, '157');
};

export const is1560 = (date?: string): boolean => {
    return isDecade(date, '156');
};

export const is1550 = (date?: string): boolean => {
    return isDecade(date, '155');
};

export const is1540 = (date?: string): boolean => {
    return isDecade(date, '154');
};

export const is1530 = (date?: string): boolean => {
    return isDecade(date, '153');
};

export const is1520 = (date?: string): boolean => {
    return isDecade(date, '152');
};

export const is1510 = (date?: string): boolean => {
    return isDecade(date, '151');
};

export const is1500 = (date?: string): boolean => {
    return isDecade(date, '150');
};

export const isNull = (date?: string): boolean => {
    return date === null || date === ''; // || date.split('/')[1] === null || date.split('/')[1] === '';
};

export const getYear = (date: string | undefined): number => {
    if (date != null && date !== '') {
        try {
            if (date.split('/').length === 3) {
                return parseInt(date.split('/')[2], 10);
            } else if (date.split('/').length === 2) {
                return parseInt(date.split('/')[1], 10);
            } else {
                return parseInt(date, 10);
            }
        } catch {
            console.log(date);
        }
    }
    return 0;
};
