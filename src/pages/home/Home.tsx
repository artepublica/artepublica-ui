import { ImageSourcePropType, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import imagems from '@assets/imagems';
import { Text, Image } from '@base-components';
import { Obra } from '@domain';
import * as obra_artepublica from '@utils/data/obra_artepublica';

import styles from './styles';

function Home(): JSX.Element {
    const style = styles();
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const obrasComImagem = Object.keys(typed_obra_artepublica)
        .filter((key) => {
            const obra: Obra = typed_obra_artepublica[key];

            const typed_imagems: Record<string, ImageSourcePropType> = imagems;
            const img = typed_imagems[obra.Imagem ?? ''];

            return img != null;
        })
        .sort((keyA, keyB) => {
            const obraA: Obra = typed_obra_artepublica[keyA];
            const obraB: Obra = typed_obra_artepublica[keyB];

            return (obraA.Titulo ?? 'Desconhecida').localeCompare(obraB.Titulo ?? 'Desconhecida');
        });

    const obrasSemImagem = Object.keys(typed_obra_artepublica)
        .filter((key) => {
            const obra: Obra = typed_obra_artepublica[key];

            const typed_imagems: Record<string, ImageSourcePropType> = imagems;
            const img = typed_imagems[obra.Imagem ?? ''];

            return img == null;
        })
        .sort((keyA, keyB) => {
            const obraA: Obra = typed_obra_artepublica[keyA];
            const obraB: Obra = typed_obra_artepublica[keyB];

            return (obraA.Titulo ?? 'Desconhecida').localeCompare(obraB.Titulo ?? 'Desconhecida');
        });

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>Projeto de Doutorado de Aline Rayane de Oliveira</Text>
                <Text>{'Com Imagem:' + obrasComImagem.length}</Text>
                <Text>{'Sem Imagem:' + obrasSemImagem.length}</Text>
                {obrasComImagem.map((key) => {
                    const obra: Obra = typed_obra_artepublica[key];

                    return (
                        <View style={{ paddingTop: 24 }} key={key}>
                            <Text>
                                {obra.Titulo ?? 'Desconhecida'} - {obra.Autores?.map((autor) => autor.Pessoa?.Nome).join(', ') ?? 'Desconhecida'}
                            </Text>
                            <Image source={obra.Imagem} />
                        </View>
                    );
                })}
                {obrasSemImagem.map((key) => {
                    const obra: Obra = typed_obra_artepublica[key];

                    return (
                        <View style={{ paddingTop: 24 }} key={key}>
                            <Text>{obra.Titulo ?? 'Desconhecida'}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
