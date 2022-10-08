import { useState } from 'react';

import { Map, Dropdown } from '@base-components';
import { Obra } from '@domain';
import { TipologiaTheme, useTheme } from '@utils';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

type MapaProps = {
    tipo: string;
    tipos: { nome: string; obras: Obra[] }[];
};

function Mapa({ tipo, tipos }: MapaProps): JSX.Element {
    const { theme } = useTheme();

    const colors = tipos.reduce<Record<string, string>>((result, tipoReduce, index) => {
        result[tipoReduce.nome] = tipo === 'Tipologia' ? theme.tipologia[tipoReduce.nome.toLowerCase() as keyof TipologiaTheme] : theme.coresGrafico[index];
        return result;
    }, {});

    const zonas: string[] = tipos
        .reduce((result, tipoReduce) => {
            const zonasTipo = tipoReduce.obras.map((obra) => obra.Zona ?? 'Desconhecida');

            Array.prototype.push.apply(result, zonasTipo);
            return result;
        }, [])
        .filter(onlyUniqueNotUndefinedString);

    const [
        valorDropdown,
        setarDropdown,
    ] = useState(zonas);

    const markers = tipos
        .map((tipo) => {
            return tipo.obras
                .filter((obra) => obra.Latitude != null && obra.Longitude != null && valorDropdown.includes(obra.Zona ?? 'Desconhecida'))
                .map((obra) => ({
                    position: {
                        latitude: obra.Latitude ?? '0',
                        longitude: obra.Longitude ?? '0',
                    },
                    color: colors[tipo.nome],
                }));
        })
        .reduce((result, list) => {
            Array.prototype.push.apply(result, list);
            return result;
        }, []);

    return (
        <>
            <Dropdown multiple valor={valorDropdown} setarValor={setarDropdown} items={zonas.map((zona) => ({ label: zona, value: zona }))} zIndex={3} />
            <Map markers={markers} />
        </>
    );
}

export default Mapa;
