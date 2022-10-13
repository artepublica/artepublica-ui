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
                    },
                    Obras: {
                        path: 'obras',
                    },
                    Tipologias: {
                        path: 'tipologias',
                        screens: {
                            Home: {
                                path: '',
                            },
                            GraficoRedeTipologiaObra: {
                                path: 'grafico-rede-tipologia-obra',
                            },
                            Mapa: {
                                path: 'mapa',
                            },
                            Decada: {
                                path: 'decada',
                            },
                        },
                    },
                    Autores: {
                        path: 'autores',
                        screens: {
                            Home: {
                                path: '',
                            },
                            GraficoRedeTipologiaObra: {
                                path: 'grafico-rede-tipologia-obra',
                            },
                            Mapa: {
                                path: 'mapa',
                            },
                            Decada: {
                                path: 'decada',
                            },
                        },
                    },
                    Zonas: {
                        path: 'zonas',
                        screens: {
                            Home: {
                                path: '',
                            },
                            GraficoRedeTipologiaObra: {
                                path: 'grafico-rede-tipologia-obra',
                            },
                            Mapa: {
                                path: 'mapa',
                            },
                            Decada: {
                                path: 'decada',
                            },
                        },
                    },
                    Enderecos: {
                        path: 'enderecos',
                        screens: {
                            Home: {
                                path: '',
                            },
                            GraficoRedeTipologiaObra: {
                                path: 'grafico-rede-tipologia-obra',
                            },
                            Mapa: {
                                path: 'mapa',
                            },
                            Decada: {
                                path: 'decada',
                            },
                        },
                    },
                    Status: {
                        path: 'status',
                        screens: {
                            Home: {
                                path: '',
                            },
                            GraficoRedeTipologiaObra: {
                                path: 'grafico-rede-tipologia-obra',
                            },
                            Mapa: {
                                path: 'mapa',
                            },
                            Decada: {
                                path: 'decada',
                            },
                        },
                    },
                    Mapa: {
                        path: 'mapa',
                    },
                    GraficoPoliticaPublica: {
                        path: 'politicas-publicas',
                    },
                    MapaTodasXRecorte: {
                        path: 'mapa-todas-x-recorte',
                    },
                    Decade: {
                        path: 'decada',
                    },
                    Exposicoes: {
                        path: 'exposicoes',
                    },
                    MandatoPrefeito: {
                        path: 'mandato-prefeito',
                    },
                    Prefeitos: {
                        path: 'prefeitos',
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
