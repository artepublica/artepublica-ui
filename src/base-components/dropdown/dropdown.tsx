/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useState } from 'react';

import DropDownPicker from 'react-native-dropdown-picker';

import { useTheme } from '@utils';

function Dropdown({
    valor,
    setarValor,
    items,
    zIndex,
    multiple,
}: {
    valor: any;
    setarValor: Dispatch<SetStateAction<any>>;
    items: { label: string; value: any; parent?: any }[];
    zIndex?: number;
    multiple?: boolean;
}): JSX.Element {
    const { theme } = useTheme();

    const [
        dropdownAberto,
        tornarDropdownAberto,
    ] = useState(false);
    const [
        itemsDropdown,
        setarItemsDropown,
    ] = useState(items);

    function setarValorDropdown(valorNovo: SetStateAction<string>): void {
        if (valor !== valorNovo) {
            setarValor(valorNovo);
        }
    }

    return (
        <DropDownPicker
            multiple={multiple}
            theme={theme.dark ? 'DARK' : 'LIGHT'}
            open={dropdownAberto}
            value={valor}
            items={itemsDropdown}
            setOpen={tornarDropdownAberto}
            setValue={setarValorDropdown}
            setItems={setarItemsDropown}
            listMode="SCROLLVIEW"
            scrollViewProps={{
                nestedScrollEnabled: true,
            }}
            zIndex={zIndex}
            textStyle={{ color: theme.text.textColor }}
            //arrowIconStyle={{ backgroundColor: theme.text.textColor }}
            dropDownContainerStyle={{ borderColor: theme.text.textColor }}
            selectedItemContainerStyle={{ backgroundColor: '#F2D7E3' }}
            style={{ borderColor: theme.text.textColor }}
            arrowIconContainerStyle={{ borderColor: theme.text.textColor }}
            //iconContainerStyle={{ borderColor: theme.text.textColor }}
            showTickIcon={false}
            categorySelectable
            listChildContainerStyle={{
                paddingLeft: 36,
            }}
        />
    );
}

export default Dropdown;
