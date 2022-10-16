import { SetStateAction, useState } from 'react';

import { ScrollView, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { Dropdown } from '@base-components';
import { PoliticaPublica } from '@domain';
import { useTheme } from '@utils';
import * as politicapublicas from '@utils/data/politicapublica';

import DependencyWheelNode from './DependencyWheelNode';
import Sankey from './Sankey';

function GraficoPoliticaPublica(): JSX.Element {
    const { theme } = useTheme();

    const typed_politicapublicas: Record<string, PoliticaPublica> = politicapublicas;

    const [
        dropdownAberto,
        tornarDropdownAberto,
    ] = useState(false);
    const [
        valorDropdown,
        setarDropdown,
    ] = useState('EsculturasUrbanas');
    const [
        itemsDropdown,
        setarItemsDropown,
    ] = useState(Object.keys(typed_politicapublicas).map((key) => ({ label: typed_politicapublicas[key].Titulo, value: key })));

    function setarValorDropdown(valor: SetStateAction<string>): void {
        if (valorDropdown !== valor) {
            setarDropdown(valor);
        }
    }

    const [
        valorDropdown2,
        setarDropdown2,
    ] = useState(0);

    const [
        valorDropdown3,
        setarDropdown3,
    ] = useState(0);

    const [
        valorDropdown4,
        setarDropdown4,
    ] = useState(false);

    return (
        <ScrollView style={{ width: '100%', paddingTop: 12, paddingHorizontal: 12 }}>
            <View>
                <DropDownPicker
                    theme={theme.dark ? 'DARK' : 'LIGHT'}
                    open={dropdownAberto}
                    value={valorDropdown}
                    items={itemsDropdown}
                    setOpen={tornarDropdownAberto}
                    setValue={setarValorDropdown}
                    setItems={setarItemsDropown}
                    listMode="SCROLLVIEW"
                    scrollViewProps={{
                        nestedScrollEnabled: true,
                    }}
                    zIndex={4}
                    textStyle={{ color: theme.text.textColor }}
                    //arrowIconStyle={{ backgroundColor: theme.text.textColor }}
                    dropDownContainerStyle={{ borderColor: theme.text.textColor }}
                    selectedItemContainerStyle={{ backgroundColor: '#F2D7E3' }}
                    style={{ borderColor: theme.text.textColor }}
                    arrowIconContainerStyle={{ borderColor: theme.text.textColor }}
                    //iconContainerStyle={{ borderColor: theme.text.textColor }}
                    showTickIcon={false}
                />
                <Dropdown
                    valor={valorDropdown3}
                    setarValor={setarDropdown3}
                    items={[
                        { label: '0', value: 0 },
                        { label: '4', value: 4 },
                        { label: '7', value: 7 },
                        { label: '10', value: 10 },
                        { label: '13', value: 13 },
                        { label: '16', value: 16 },
                    ]}
                    zIndex={3}
                />
                <Dropdown
                    valor={valorDropdown2}
                    setarValor={setarDropdown2}
                    items={[
                        { label: 'Sem Nome', value: 0 },
                        { label: 'Com Nome', value: 1 },
                        { label: 'Nome apenas da politica', value: 2 },
                    ]}
                    zIndex={2}
                />
                <Dropdown
                    valor={valorDropdown4}
                    setarValor={setarDropdown4}
                    items={[
                        { label: 'Nome Normal', value: false },
                        { label: 'Nome Por Cima', value: true },
                    ]}
                    zIndex={1}
                />
                <DependencyWheelNode
                    politicaPublica={typed_politicapublicas[valorDropdown]}
                    peso={valorDropdown3}
                    height={1080}
                    showLabel={valorDropdown2}
                    labelEmCima={valorDropdown4}
                />
                <Sankey
                    politicaPublica={typed_politicapublicas[valorDropdown]}
                    peso={valorDropdown3}
                    height={1080}
                    showLabel={valorDropdown2}
                    labelEmCima={valorDropdown4}
                />
            </View>
        </ScrollView>
    );
}

export default GraficoPoliticaPublica;
