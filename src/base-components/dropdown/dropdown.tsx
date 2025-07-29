/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, JSX, SetStateAction, useState } from 'react';

import DropDownPicker from 'react-native-dropdown-picker';

import { useTheme } from '@utils';

function Dropdown({
  value,
  setValue,
  items,
  zIndex,
  multiple,
}: {
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
  items: { label: string; value: any; parent?: any }[];
  zIndex?: number;
  multiple?: boolean;
}): JSX.Element {
  const { theme } = useTheme();

  const [open, setOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState(items);

  function setDropdownValue(valorNovo: SetStateAction<string>): void {
    if (value !== valorNovo) {
      setValue(valorNovo);
    }
  }

  return (
    <DropDownPicker
      multiple={multiple}
      theme={theme.dark ? 'DARK' : 'LIGHT'}
      open={open}
      value={value}
      items={dropdownItems}
      setOpen={setOpen}
      setValue={setDropdownValue}
      setItems={setDropdownItems}
      listMode='SCROLLVIEW'
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
