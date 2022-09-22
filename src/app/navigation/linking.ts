import { LinkingOptions } from '@react-navigation/native';
import { createURL } from 'expo-linking';

import { RootNavigatorParamList } from './RootNavigator';

const linking: LinkingOptions<RootNavigatorParamList> = {
    prefixes: [createURL('/')],
    config: {
        initialRouteName: 'BottomTab',
        screens: {
            BottomTab: {
                path: '',
                screens: {
                    Home: {
                        path: '',
                    },
                    Obras: {
                        path: 'obras',
                        screens: {
                            Home: {
                                path: '',
                            },
                            Tipologias: {
                                path: 'tipologias',
                                screens: {
                                    Home: {
                                        path: '',
                                    },
                                    TabelaTipologiaObra: {
                                        path: 'tabela-tipologia-obra',
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
                                    TabelaTipologiaObra: {
                                        path: 'tabela-tipologia-obra',
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
                            Naturezas: {
                                path: 'naturezas',
                                screens: {
                                    Home: {
                                        path: '',
                                    },
                                    TabelaTipologiaObra: {
                                        path: 'tabela-tipologia-obra',
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
                                    TabelaTipologiaObra: {
                                        path: 'tabela-tipologia-obra',
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
                                    TabelaTipologiaObra: {
                                        path: 'tabela-tipologia-obra',
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
                                    TabelaTipologiaObra: {
                                        path: 'tabela-tipologia-obra',
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
                            Categorias: {
                                path: 'categorias',
                                screens: {
                                    Home: {
                                        path: '',
                                    },
                                    TabelaTipologiaObra: {
                                        path: 'tabela-tipologia-obra',
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
                        },
                    },
                    Recorte: {
                        path: 'recorte',
                        screens: {
                            Home: {
                                path: '',
                            },
                            Tipologias: {
                                path: 'tipologias',
                                screens: {
                                    Home: {
                                        path: '',
                                    },
                                    TabelaTipologiaObra: {
                                        path: 'tabela-tipologia-obra',
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
                                    TabelaTipologiaObra: {
                                        path: 'tabela-tipologia-obra',
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
                            Naturezas: {
                                path: 'naturezas',
                                screens: {
                                    Home: {
                                        path: '',
                                    },
                                    TabelaTipologiaObra: {
                                        path: 'tabela-tipologia-obra',
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
                                    TabelaTipologiaObra: {
                                        path: 'tabela-tipologia-obra',
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
                                    TabelaTipologiaObra: {
                                        path: 'tabela-tipologia-obra',
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
                                    TabelaTipologiaObra: {
                                        path: 'tabela-tipologia-obra',
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
                            Categorias: {
                                path: 'categorias',
                                screens: {
                                    Home: {
                                        path: '',
                                    },
                                    TabelaTipologiaObra: {
                                        path: 'tabela-tipologia-obra',
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
                            Category: {
                                path: 'categoria',
                            },
                            Exposicoes: {
                                path: 'exposicoes',
                            },
                        },
                    },
                    Charts: {
                        path: 'charts',
                        screens: {
                            Home: {
                                path: '',
                            },
                            PublicArtC19892000: {
                                path: 'public-art-19989-2000',
                            },
                            PublicArtCesarMaia: {
                                path: 'public-art-cesar-maia',
                            },
                        },
                    },
                },
            },
            NotFound: '404',
            NoMatch: '*',
        },
    },
};

export default linking;
