import { Map } from '@base-components';
import { Obra } from '@domain';
import { TipologiaTheme, useTheme } from '@utils';

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

    const markers = tipos
        .map((tipo) => {
            return tipo.obras
                .filter((obra) => obra.Latitude != null && obra.Longitude != null)
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

    return <Map markers={markers} />;
}

export default Mapa;
