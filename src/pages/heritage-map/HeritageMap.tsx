import { Map } from '@base-components';
import { Obra } from '@domain';
import { TypologyTheme, useTheme } from '@utils';

type HeritageMapProps = {
  type: string;
  types: { name: string; heritages: Obra[] }[];
};

function HeritageMap({ type, types }: HeritageMapProps): JSX.Element {
  const { theme } = useTheme();

  const colors = types.reduce<Record<string, string>>(
    (result, tipoReduce, index) => {
      result[tipoReduce.name] =
        type === 'Typology'
          ? (theme.typology[
              tipoReduce.name.toLowerCase() as keyof TypologyTheme
            ] ?? theme.typology.desconhecida)
          : theme.coresGrafico[index];
      return result;
    },
    {},
  );

  const markers = types
    .map((type) => {
      return type.heritages
        .filter(
          (heritage) => heritage.Latitude != null && heritage.Longitude != null,
        )
        .map((heritage) => ({
          position: {
            latitude: heritage.Latitude ?? '0',
            longitude: heritage.Longitude ?? '0',
          },
          color: colors[type.name],
          heritage,
        }));
    })
    .reduce((result, list) => {
      Array.prototype.push.apply(result, list);
      return result;
    }, []);

  return <Map markers={markers} />;
}

export default HeritageMap;
