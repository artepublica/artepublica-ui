import { LinkingOptions } from '@react-navigation/native';
import { createURL } from 'expo-linking';

import { RootNavigatorParamList } from './RootNavigator';

const linking: LinkingOptions<RootNavigatorParamList> = {
    prefixes: [createURL('/')],
    config: {
        initialRouteName: 'RootMenuNavigator',
        screens: {
            RootMenuNavigator: {
                path: '',
                screens: {
                    Home: {
                        path: '',
                        screens: {
                            Mapa: {
                                path: '',
                            },
                            Inventario: {
                                path: 'inventario',
                            },
                        },
                    },
                    Sobre: {
                        path: 'sobre',
                    },
                    Glossario: {
                        path: 'glossario',
                    },
                    Analises_Tipologia: {
                        path: 'analises/tipologia',
                    },
                    Analises_Autores: {
                        path: 'analises/autores',
                    },
                    Analises_Prefeitos: {
                        path: 'analises/prefeitos',
                        screens: {
                            Mandato: {
                                path: '',
                            },
                            Comparacao: {
                                path: 'comparacao',
                            },
                        },
                    },
                },
            },
            Obra: 'obra',
            NotFound: '404',
            NoMatch: '*',
        },
    },
};

export default linking;
