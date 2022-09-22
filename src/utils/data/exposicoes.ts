import Exposicao from '../../domain/exposicao';
import * as pessoas from './pessoa';

export const BienalDeVeneza1988: Exposicao = {
    Nome: 'Bienal de Veneza',
    Instituicao: 'Bienal de Veneza',
    AbreviacaoInstituicao: undefined,
    Cidade: 'Veneza',
    Estado: undefined,
    Pais: 'Itália',
    Local: undefined,
    DataInicio: '26/06/1988',
    DataFim: '25/09/1988',
    Expositores: [
        pessoas.JoseResende,
        //pessoas.JuraciDoria,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const DocumentaKassel1992: Exposicao = {
    Nome: 'Documenta de Kassel',
    Instituicao: 'Documenta de Kassel',
    AbreviacaoInstituicao: undefined,
    Cidade: 'Kassel',
    Estado: undefined,
    Pais: 'Alemanha',
    Local: undefined,
    DataInicio: '13/06/1992',
    DataFim: '20/09/1992',
    Expositores: [
        pessoas.JoseResende,
        //pessoas.CildoMeireles,
        //pessoas.JacLeirner,
        //pessoas.SaintClairCemin,
        pessoas.WaltercioCaldas,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const ExposicaoNeoconcreta1959: Exposicao = {
    Nome: 'Exposição Neoconcreta', //TODO: Neoconcretismo???
    Instituicao: 'Museu de Arte Moderna do Rio de Janeiro',
    AbreviacaoInstituicao: 'MAM Rio',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'MAM/RJ',
    DataInicio: '22/03/1959',
    DataFim: undefined,
    Expositores: [
        pessoas.AluisioCarvao,
        pessoas.AmilcarDeCastro,
        pessoas.DecioVieira,
        pessoas.FerreiraGullar,
        pessoas.FranzWeissmann,
        pessoas.HelioOiticica,
        pessoas.HerculesBarsotti,
        pessoas.IvanSerpa,
        pessoas.LygiaClark,
        pessoas.LygiaPape,
        pessoas.OsmarDillon,
        pessoas.TheonSpanudis,
        pessoas.WillysDeCastro,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const ExperienciaNeoconcreta1991_MAMRJ: Exposicao = {
    Nome: 'Experiência Neoconcreta',
    Instituicao: 'Museu de Arte Moderna do Rio de Janeiro',
    AbreviacaoInstituicao: 'MAM Rio',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'MAM/RJ',
    DataInicio: '09/05/1991',
    DataFim: '23/06/1991',
    Expositores: [
        pessoas.AluisioCarvao,
        pessoas.AmilcarDeCastro,
        pessoas.ClaudioMelloESouza,
        pessoas.DecioVieira,
        pessoas.FerreiraGullar,
        pessoas.FranzWeissmann,
        pessoas.HelioOiticica,
        pessoas.HerculesBarsotti,
        pessoas.LygiaClark,
        pessoas.LygiaPape,
        pessoas.OsmarDillon,
        pessoas.ReynaldoJardim,
        pessoas.RobertoPontual,
        pessoas.TheonSpanudis,
        pessoas.WillysDeCastro,
        pessoas.VasniSantana, //TODO itau cultural n cita ele
    ],
    Patrocinios: [
        'Rioarte',
        'BAnerj',
        'Transportes Fink',
    ],
    Curadores: [
        pessoas.FernandoCocchiarale,
    ],
};
export const ExperienciaNeoconcreta1991_Curitiba: Exposicao = {
    Nome: 'Experiência Neoconcreta',
    Instituicao: 'Museu Municipal de Arte de Curitiba',
    AbreviacaoInstituicao: undefined,
    Cidade: 'Curitiba',
    Estado: 'Paraná',
    Pais: 'Brasil',
    Local: 'MAM/RJ',
    DataInicio: '1991',
    DataFim: undefined,
    Expositores: [
        pessoas.AluisioCarvao,
        pessoas.FranzWeissmann,
        pessoas.LygiaClark,
        pessoas.LygiaPape,
    ],
    Patrocinios: undefined,
    Curadores: [
        pessoas.FernandoCocchiarale,
    ],
};

export const ExposicaoEscultura1992: Exposicao = {
    Nome: 'Exposição Escultura 92 / Sete Expressões', //TODO
    Instituicao: undefined,
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Galeria RB1',
    DataInicio: '29/01/1992',
    DataFim: undefined,
    Expositores: [
        pessoas.AmilcarDeCastro,
        pessoas.AngeloVenosa,
        pessoas.CristinaSalgado,
        pessoas.FransKrajcberg,
        pessoas.FranzWeissmann,
        pessoas.LygiaPape,
        pessoas.Tunga,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const PoetasDoEspacoEDaCor1997: Exposicao = {
    Nome: 'Poetas do Espaço e da Cor',
    Instituicao: undefined,
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'MAM/RJ',
    DataInicio: '1997',
    DataFim: undefined,
    Expositores: [
        pessoas.AldirMendesDeSouza,
        pessoas.AlfredoVolpi,
        pessoas.AncangeloIanelli,
        pessoas.FranzWeissmann,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //pessoas.SabinadeLibman
};

export const ExposicaoIndividualFranzWeissmann1946: Exposicao = {
    Nome: 'Primeira Exposição Individual',
    Instituicao: undefined,
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Diretório de Estudantes da ENBA',
    DataInicio: '1946',
    DataFim: undefined,
    Expositores: [pessoas.FranzWeissmann],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const PrimeiraExposiçãoInternacionaldeEsculturasEfemerasForteleza1986: Exposicao = {
    //TODO ano n é 1991 como estava nos fatos
    Nome: '1ª Exposição Internacional de Esculturas Efemeras',
    Instituicao: undefined,
    Cidade: 'Fortaleza',
    Estado: 'Ceará',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '09/1986',
    DataFim: '11/1986',
    Expositores: [
        //pessoas.AmeliaToledo,
        pessoas.AmilcarDeCastro,
        pessoas.AscanioMMM,
        //pessoas.CarlosFarjado,
        //pessoas.DudiMajaRosa,
        pessoas.FransKrajcberg,
        pessoas.JoseResende,
        //pessoas.JulioPlaza
        //pessoas.Leonilson,
        pessoas.MauricioBentes,
        //pessoas.NelzonLeirner,
        pessoas.GianPietroZanni,
        //pessoas.ReginaSilveira,
        pessoas.SergioCamargo,
        pessoas.ServuloEsmeraldo,
        pessoas.SironFranco, //TODO este n estava no itaul cultural como nos fatos
    ],
    Patrocinios: undefined,
    Curadores: [
        pessoas.ServuloEsmeraldo,
    ],
};

export const PrimeiraExposiçãoInternacionaldeEsculturasAoArLivre: Exposicao = {
    Nome: '1º Sesc Escultura: exposição internacional de esculturas ao ar livre',
    Instituicao: undefined, //TODO SESC????
    Cidade: 'Porto Alegre',
    Estado: 'Rio Grande do Sul',
    Pais: 'Brasil',
    Local: undefined, //TODO SESC????
    DataInicio: '09/1996',
    DataFim: '03/1997',
    Expositores: [
        pessoas.AmilcarDeCastro,
        pessoas.AnaNorogrando,
        pessoas.CarlosDeBrittoVelho,
        pessoas.ClaudioTozzi,
        pessoas.FernandoLindote,
        pessoas.FranciscoStockinger,
        pessoas.FranzWeissmann,
        pessoas.GaudencioFidelis,
        pessoas.JoseResende,
        pessoas.MarliAmadoAraujo,
        pessoas.PatricioFarias,
        pessoas.PauloRobertoDeChristo,
        pessoas.ServuloEsmeraldo,
        pessoas.SironFranco,
        pessoas.VascoPrado,

        //TODO o citados abaixo n constam no itau cultural
        pessoas.ClaudioMaciel,
        pessoas.GustavoNakle,
        pessoas.XicoStockinger,
        pessoas.JorgeFranciscoSoto,
        pessoas.MieyaBaglietto,
        pessoas.PepAdmetlla,
        pessoas.JulianAgosta,
        pessoas.JoseDeGuimaraes,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //pessoas.JoseFraciscoAlves
};

export const ExposicaoIndividualAmilcarDeCastro: Exposicao = {
    Nome: 'Primeira Exposição Individual',
    Instituicao: undefined, //TODO ???
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Galeria Silvia Cintra',
    DataInicio: '11/06/1996',
    DataFim: undefined,
    Expositores: [pessoas.AmilcarDeCastro],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const SalaoOficial1934: Exposicao = {
    // nao achei essa exposicao no itau cultural -> estava nos fatos
    Nome: 'Salão Oficial',
    Instituicao: 'Salão Oficial',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '1934',
    DataFim: undefined,
    Expositores: [
        pessoas.HildegardoLeaoVelloso,
        pessoas.ManoelConstantino,
        pessoas.HaydeaSantiago,
        pessoas.GasparMagalhaes,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const BienalDeSaoPaulo1957: Exposicao = {
    Nome: '4ª Bienal Internacional de São Paulo',
    Instituicao: 'Bienal de São Paulo',
    Cidade: 'São Paulo',
    Estado: 'São Paulo',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '22/09/1957',
    DataFim: '30/12/1957',
    Expositores: [
        //pessoas.AldemirMartins,
        //pessoas.AlexandreWollner, //(Prêmio pelo Cartaz do evento)
        pessoas.AlfredoVolpi,
        //pessoas.AlmirMavignier,
        pessoas.AluisioCarvao,
        //pessoas.AnatolWladyslaw,
        //pessoas.AnnaLetycia,
        //pessoas.AntonioBandeira
        //pessoas.ArnaldoPedrosoDHorta
        //pessoas.BenNicholson, // (Prêmio Pintura Estrangeira)
        pessoas.BrunoGiorgi,
        //Bpessoas.urle Marx
        //pessoas.ClaraHeteny
        //pessoas.DaniloDiPrete
        //pessoas.DorothyBastos
        //pessoas.EdithBehring
        //pessoas.Elide onzeglio
        //pessoas.ElisaMartinsDaSilveira
        //pessoas.EmericLanyi
        //pessoas.ErnaniVasconcellos
        //pessoas.FaygaOstrower // (Prêmio Gravura Nacional)
        //pessoas.FernandoLemos,// (Prêmio Desenho Nacional)
        //pessoas.FlavioShiro
        //pessoas.Flexor
        //pessoas.FranciscoAmêndola
        pessoas.FransKrajcberg, // (Prêmio Pintura Nacional)
        pessoas.FranzWeissmann, // (Prêmio Escultura Nacional)
        //pessoas.GiorgioMorandi,// (Grande Prêmio São Paulo)
        //pessoas.Hamaguchi, //(Prêmio Gravura Estrangeira)
        //pessoas.HansenBahia,
        //pessoas.HelioOiticica,
        //pessoas.HerculesBarsotti,
        //pessoas.HermelindoFiaminghi,
        //pessoas.HildeWeber,
        //pessoas.IlsaKawallLealFerreira,
        //pessoas.IoneSaldanha,
        pessoas.IvanSerpa,
        //pessoas.JacquesDouchez,
        //pessoas.JoaoLuisOliveiraChaves,
        //pessoas.JorgedeOteiza, //(Prêmio Escultura Estrangeira)
        //pessoas.JoseClaudio,
        //pessoas.JoseFabioBarbosaDaSilva,
        //pessoas.JosePedrosa,
        //pessoas.KarlPlattner,
        //pessoas.LasarSegall,
        //pessoas.LeopoldoRaimo,
        //pessoas.LeylaPerroneMoisés,
        //pessoas.LotharCharoux,
        //pessoas.LuizSacilotto,
        //pessoas.LulaCardosoAyres,
        pessoas.LygiaClark,
        pessoas.LygiaPape,
        //pessoas.MarceloGrassmann,
        //pessoas.MariaLeontina, //(Prêmio Aquisição)
        //pessoas.MarioCravoJúnior,
        //pessoas.MauricioNogueiraLima,
        //pessoas.MiltonDacosta, //(Prêmio Aquisição)
        //pessoas.Moussia,
        //pessoas.PaoloRissone,
        //pessoas.Piza,
        //pessoas.RaymundoNogueira,
        //pessoas.RossiniPerez,
        pessoas.SergioCamargo,
        //pessoas.TeresaDAmico,
        //pessoas.TeresaNicolao,
        //pessoas.TizianaBonazzola,
        pessoas.VictorBrecheret,
        //pessoas.WaldemarCordeiro,
        //pessoas.WaldemarDaCosta,
        //pessoas.WegaNery, //(Prêmio Desenho Nacional)
        pessoas.WillysDeCastro,
        //pessoas.YolandaMohalyi,
        //pessoas.ZeliaSalgado,
    ],
    Patrocinios: undefined,
    Curadores: undefined,
    Juri: [
        //pessoas.AlfredHBarr
        //pessoas.ArmandoBFerrari
        //pessoas.ArthurProfili
        //pessoas.CarlosFlexaRibeiro
        //pessoas.FlavioDeAquino
        //pessoas.JVanLerberghe
        //pessoas.JCHeyligers
        //pessoas.JacquesLassaigne
        //pessoas.JiriKotalik
        //pessoas.LivioAbramo
        //pessoas.LourivalGomesMachado
        //pessoas.LudwigGrote
        //pessoas.LuizGonzalesRobles
        //pessoas.MarcelIanco
        //pessoas.MarcoValsecchi
        pessoas.MariaMartins, // TODO é ela mesma??
        //pessoas.PhilipHendy
        //pessoas.ShinkenKurihara
        //pessoas.WolfgangPfeiffer
    ],
    JuriDeSelecao: undefined, //pessoas.JoseGeraldoVieira
};

export const SalaoDeArteModerna1958: Exposicao = {
    Nome: '7º Salão Nacional de Arte Moderna', //TODO
    Instituicao: 'Salão de Arte Moderna', // TODO MAM???
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'MAM Rio',
    DataInicio: '1958',
    DataFim: undefined,
    Expositores: [
        //pessoas.AloysioZaluar
        pessoas.AluisioCarvao,
        //pessoas.AlvaroApocalypse
        //pessoas.AnnaLetycia //(Prêmio Viagem ao País)
        //pessoas.ArnaldoPedrosoDHorta
        //pessoas.Babinski
        //pessoas.BustamanteSa
        //pessoas.CarlosScliar
        //pessoas.Djanira
        //pessoas.EdsonMotta
        //pessoas.FaygaOstrower
        //pessoas.FranciscoRebolo
        pessoas.FranzWeissmann, //(Prêmio Viagem ao Exterior)
        //pessoas.GilvanSamico
        //pessoas.GlenioBianchetti
        //pessoas.Guignard
        //pessoas.HeloisadeFaria
        //pessoas.JoséOiticicaFilho
        pessoas.LygiaPape, //(Prêmio Isenção de Júri (medalha de prata))
        //pessoas.MariaHelenaAndres
        pessoas.MaryVieira,
        //pessoas.NoemiaGuerra
        //pessoas.OrlandoDaSilva
        //pessoas.ReninaKatz
        //pessoas.RossiniPerez
        //pessoas.RubemValentim //(Prêmio Aquisição)
        pessoas.SergioCamargo,
        //pessoas.Sheila
        //pessoas.TakeshiSuzuki
        //pessoas.UbirajaraRibeiro
        //pessoas.Zaluar //(Premio de viagem ao exterior)
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
    Juri: undefined, //pessoas.IbereCamargo
};

export const SalaoNacionalDeArtesPlasticas1993: Exposicao = {
    Nome: '13º Salão Nacional de Artes Plásticas',
    Instituicao: 'Ministério da Cultura',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Palácio Gustavo Capanema',
    DataInicio: '02/12/1993',
    DataFim: undefined,
    Expositores: [
        pessoas.CristinaSalgado,
        //pessoas.DavidCury
        //pessoas.ElianeDuarte
        //pessoas.EnricaBernardelli
        //pessoas.FabioNoronha //(Prêmio Viagem ao País)
        //pessoas.FeresLourençoKhoury
        //pessoas.FernandoAugusto
        pessoas.FranzWeissmann, // TODO nao aparece no itaul cultural como expositor, apesar de receber o premio
        //pessoas.FredericoDalton
        //pessoas.oseBento
        //pessoas.JoseDamasceno
        //pessoas.KlingerCarvalho
        //pessoas.LorisMachado
        //pessoas.MarcoPauloRolla
        //pessoas.MonicaSartori //(Prêmio Viagem ao Exterior)
        //pessoas.NelsonScrenci
        //pessoas.NiuraBellavinha
        //pessoas.NydiaNegromonte
        //pessoas.PedroWrede
        //pessoas.RinaldoSilva //(Prêmio Unesco)
        //pessoas.RosanaPalazyan //(Prêmio Aquisição)
        //pessoas.RosangelaRenno
        //pessoas.VaniaBarbosa
        //pessoas.VeraMartins
    ],
    Patrocinios: undefined,
    Curadores: undefined,
    Juri: [
        //pessoas.AracyAmaral
        pessoas.FerreiraGullar,
        pessoas.FredericoMoraes,
        //pessoas.JoaoCarlosGoldberg
        //pessoas.MarcusDeLontraCosta
    ],
};

export const FranzWeissmann_UmaRetrospective_1998: Exposicao = {
    Nome: 'Franz Weissmann: uma retrospectiva',
    Instituicao: 'Centro Cultural Banco do Brasil',
    AbreviacaoInstituicao: 'CCBB',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'CCBB/RJ',
    DataInicio: '09/10/1998',
    DataFim: '06/12/1998',
    Expositores: [
        pessoas.FranzWeissmann,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
    CatalogoEscritoPor: [pessoas.ReynaldoRoels],
};
export const FranzWeissmann_UmaRetrospective_1999: Exposicao = {
    Nome: 'Franz Weissmann: uma retrospectiva',
    Instituicao: 'Museu de Arte Contemporânea da Universidade de São Paulo',
    AbreviacaoInstituicao: 'MAC/USP',
    Cidade: 'São Paulo',
    Estado: 'São Paulo',
    Pais: 'Brasil',
    Local: 'MAC/USP',
    DataInicio: '15/01/1999',
    DataFim: undefined,
    Expositores: [
        pessoas.FranzWeissmann,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
    CatalogoEscritoPor: [pessoas.ReynaldoRoels],
};

export const TresMilMetrosCubicos: Exposicao = {
    Nome: '3000 metros cúbicos',
    Instituicao: 'Espaço Cultural Sérgio Porto',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '17/12/1983',
    DataFim: undefined,
    Expositores: [
        //pessoas.AntonioDias,
        //pessoas.ArturBarrio
        //pessoas.CildoMeireles
        pessoas.JoseResende,
        //pessoas.MarcelloNitsche
        pessoas.Tunga,
        //pessoas.UmbertoCostiBarros //TODO n consta no itau cultural
        pessoas.WaltercioCaldas,
    ],
    Patrocinios: undefined,
    Curadores: [pessoas.EverardoMiranda],
    CatalogoEscritoPor: undefined,
};

export const MostraInternacionalDeArteConcretaZurique: Exposicao = {
    Nome: 'Konkrete Kunst',
    Instituicao: undefined,
    Cidade: 'Zurique',
    Estado: undefined,
    Pais: 'Suíça',
    Local: 'Helmhaus Zürich',
    DataInicio: '1960',
    DataFim: undefined,
    Expositores: [
        //pessoas.AlexandreWollner
        //pessoas.AlmirMavignier
        pessoas.AluisioCarvao,
        pessoas.AmilcarDeCastro,
        pessoas.DecioVieira,
        //pessoas.Fejer
        pessoas.FranzWeissmann,
        //pessoas.GeraldoDeBarros
        pessoas.HelioOiticica,
        pessoas.HerculesBarsotti,
        //pessoas.HermelindoFiaminghi
        //pessoas.JudithLauand
        //pessoas.LuizSacilotto
        pessoas.LygiaClark,
        pessoas.LygiaPape,
        pessoas.MaryVieira,
        //pessoas.MauricioNogueiraLima
        //pessoas.WaldemarCordeiro
        pessoas.WillysDeCastro,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //pessoas.MaxBill,
    CatalogoEscritoPor: undefined,
};

export const SalaoDeArteModerna1967: Exposicao = {
    Nome: '16º Salão Nacional de Arte Moderna', //TODO
    Instituicao: 'Salão de Arte Moderna',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '1967',
    DataFim: undefined,
    Expositores: [
        //pessoas.AlexandreFilho
        //pessoas.AloysioZaluar// (Isenção do júri)
        pessoas.AmilcarDeCastro,
        //pessoas.AntonioManuel
        pessoas.AscanioMMM,
        //pessoas.BettyKing
        //pessoas.CarlosVergara
        //essoas.CeliaShalders
        //pessoas.Chanina //(Isenção do Júri.)
        //pessoas.EraldoMotta
        //pessoas.Kaiuca
        //pessoas.MariaLuizaLeao
        //pessoas.MarinaNazareth
        //pessoas.PauloMenten
        //pessoas.PedroEscosteguy
        //pessoas.QuirinoCampofiorito
        //pessoas.RubemLudolf
        //pessoas.RubensGerchman
        //pessoas.Sigaud
        //pessoas.SolangeEscosteguy
        pessoas.SoniaEbling, //(Prêmio de Viagem ao Brasil)
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const BienalDeSaoPaulo1953: Exposicao = {
    Nome: '2ª Bienal Internacional de São Paulo',
    Instituicao: 'Bienal de São Paulo',
    Cidade: 'São Paulo',
    Estado: 'São Paulo',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '13/12/1953',
    DataFim: '26/02/1954',
    Expositores: [
        //pessoas.AbrahamPalatnik
        //pessoas.AfonsoDuarteAngelico
        //pessoas.AgostinhoDaMotta
        //pessoas.Ahmes
        //pessoas.AlbertoTeixeira
        //pessoas.AldemirMartins //(Nadir Figueiredo S.A.)
        //pessoas.AlexanderCalder
        //pessoas.AlexandreWollner
        //pessoas.AlfredManessier //(Prêmio Internacional de Pintura)
        pessoas.AlfredoCeschiatti,
        pessoas.AlfredoVolpi, //(Prêmio Nacional de Pintura)
        //pessoas.AlmeidaJunior
        //pessoas.loisioMagalhaes
        pessoas.AluisioCarvao,
        pessoas.AmilcarDeCastro,
        //pessoas.AnatolWladyslaw
        //pessoas.AnesiaPachecoeChaves
        //pessoas.AntonioAlvesAlmeida
        //pessoas.AntonioBandeira //(Prêmio pelo Cartaz)
        //pessoas.AntonioParreiras
        //pessoas.AntonioPrado Netto
        //pessoas.AntonioVargas
        //pessoas.ArmandoBalloni
        //pessoas.ArnaldoPedrosoDHorta //(Prêmio Nacional de Desenho)
        //pessoas.ArnaudJulienPallière
        //pessoas.AugustMuller
        //pessoas.AugustoRodrigues
        //pessoas.AugustoRodriguesDuarte
        //pessoas.Aurélio eFigueiredo
        //pessoas.BaptistaDaCosta
        //pessoas.BassanoVaccarini
        //pessoas.BellaPrado
        //pessoas.BenShahn //(Prêmio Internacional de Desenho)
        //pessoas.Bonadei
        pessoas.BrunoGiorgi, // (Prêmio Nacional de Escultura)
        //pessoas.CaciporeTorres
        //pessoas.CaetanoFraccaroli
        //pessoas.CarlosBastos
        //pessoas.CarlosPrado
        //pessoas.Caron
        //pessoas.Carybe
        //pessoas.Castagneto
        //pessoas.CHMartin
        //pessoas.CiceroDias
        //pessoas.ClaraHeteny
        //pessoas.DaniloDiPrete
        //pessoas.DarcyPenteado
        pessoas.DecioVieira,
        //pessoas.DeiaDeCamposLemos
        //pessoas.DiCavalcanti //(Prêmio Nacional de Pintura)
        //pessoas.Djanira
        //pessoas.ElisaMartinsDaSilveira
        //pessoas.ElisabethNobiling
        //pessoas.EliseuVisconti
        //pessoas.EmanuelManasse
        //pessoas.EmericLanyi
        //pessoas.EmericMarcier
        //pessoas.EmygdioDeBarros
        //pessoas.EstellaTuschnieder
        //pessoas.Fampon
        //pessoas.FaygaOstrower
        //pessoas.FeliciaLeirner
        //pessoas.FelixEmileTaunay
        //pessoas.FernandoLemos //(Prêmio Aquisição)
        //pessoas.FernandoRomani
        //pessoas.FirminoMonteiro
        //pessoas.FirminoSaldanha
        //pessoas.FlavioDeCarvalho
        //pessoas.Flexor
        //pessoas.FrankSchaeffer
        //pessoas.FransKrajcberg
        //pessoas.FransPost
        //pessoas.ranzWeissmann
        //pessoas.GaetanoMiani
        //pessoas.GarciayVasquez
        //pessoas.GastoneNovelli
        //pessoas.GeorgGrimm
        //pessoas.GeraldoDeBarros
        //pessoas.GermanadeAngelis
        //pessoas.GezaHeller
        //pessoas.GiorgioMorandi// (Prêmio Internacional de Gravura)
        //pessoas.iseldaLeirner
        //pessoas.GracielaFuensalida
        //pessoas.HansenBahia
        //pessoas.HeinzKühn
        //pessoas.HeitordosPrazeres
        //pessoas.HenriLaurens //(Grande Prêmio - IV centenário de Sâo Paulo)
        //pessoas.HenriqueBoese
        //pessoas.HenryMoore //(Prêmio Internacional de Escultura)
        //pessoas.HildaGoltz
        //pessoas.ildeWeber
        //pessoas.CHornbrook
        //pessoas.InahDAvilaCosta
        //pessoas.oneSaldanha
        pessoas.IvanSerpa,
        //pessoas.IzarDoAmaralBerlinck
        //pessoas.JacquesDouchez
        //pessoas.eanBaptisteDebret
        //pessoas.JoaoBatistaPagani
        //pessoas.JoaoFranciscoMuzzi
        //pessoas.JoseAntônioDaSilva
        //pessoas.JoseFábioBarbosaDaSilva
        //pessoas.JoseSilveiraDAvila
        //pessoas.JulioGuerra
        //pessoas.KarlPlattner
        //pessoas.LeopoldoRaimo
        //pessoas.LisaFickerHofmann
        //pessoas.LivioAbramo //(Prêmio Nacional de Gravura)
        //pessoas.LotharCharoux
        //pessoas.LouisBuvelot
        //pessoas.Lucette aribe
        //pessoas.LuigiStalloni
        //pessoas.LuizSacilotto
        //pessoas.LulaCardoso Ayres
        pessoas.LygiaClark,
        //pessoas.ManabuMabe
        //pessoas.MarceloGrassmann
        //pessoas.MariaHelenaAndres
        pessoas.MariaMartins,
        //pessoas.MarianneOverbeck
        //pessoas.MariliaGiannettiTorres
        //pessoas.MarinaCaram
        //pessoas.MarioCravoJúnior
        //pessoas.MarioZanini
        pessoas.MaryVieira,
        //pessoas.MauroFrancini
        //pessoas.MilanDuzek
        //pessoas.MiltonGoldring
        //pessoas.MisabelPedrosa
        //pessoas.Moussia
        //pessoas.NicolasAntoineTaunay
        //pessoas.NicolauFacchinetti
        //pessoas.OdettoGuersoni
        //pessoas.OrlandoTeruz
        //pessoas.OswaldDeAndradeFilho
        //pessoas.OswaldoGoeldi
        //pessoas.PaoloRissone
        //pessoas.PauloBecker
        //pessoas.PauloSzentkuti
        //pessoas.PhillippeMaeck
        //pessoas.PieterGodfriedBertichen
        //pessoas.PintoBandeira
        //pessoas.Piza //(pessoas.Prêmio Aquisição)
        //pessoas.PolaRezende
        //pessoas.PollyMcDonell
        //pessoas.PotyLazzarotto
        //pessoas.QuinsacMonvoisin
        //pessoas.RamiroMartins
        //pessoas.RaymundoNogueira
        //pessoas.ReneeLefèvre
        //pessoas.RobertTatin
        //pessoas.RufinoTamayo //(Prêmio Internacional de Pintura)
        //pessoas.SadaYazima
        //pessoas.SeppBaendereck
        //pessoas.Sespe
        //pessoas.ShigetoTanaka
        //pessoas.SinItiroYazima
        pessoas.SoniaEbling,
        //pessoas.TadashiKaminagai
        //pessoas.TarsilaDoAmaral
        //pessoas.TellesJúnior
        //pessoas.TeresaDAmico
        //pessoas.TizianaBonazzola
        //pessoas.UbiBava
        //pessoas.VandenPeereboon
        //pessoas.VictorMeirelles
        //pessoas.VieiraDaSilva //(Prêmio Aquisição)
        //pessoas.Vinet
        //pessoas.VittorioGobbis
        //pessoas.WaldemarDaCosta
        //pessoas.WalterLewy
        //pessoas.WegaNery
        //pessoas.YolandaMohalyi
        //pessoas.YvoneThomescu
        //pessoas.ZachariasAutuori
        //pessoas.ZeliaSalgado
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const GrupoFrente_1954: Exposicao = {
    Nome: '1ª Grupo Frente',
    Instituicao: undefined,
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Galeria do Ibeu',
    DataInicio: '30/06/1954',
    DataFim: undefined,
    Expositores: [
        //pessoas.AbrahamPalatnik
        pessoas.AluisioCarvao,
        //pessoas.CarlosVal
        //pessoas.CesarOiticica
        pessoas.DecioVieira,
        //pessoas.ElisaMartinsDaSilveira.
        pessoas.FranzWeissmann,
        pessoas.HelioOiticica,
        pessoas.IvanSerpa,
        //pessoas.JoaoJoseDaSilvaCosta,
        pessoas.LygiaClark,
        pessoas.LygiaPape,
        //pessoas.RubemLudolf
        //pessoas.VicentIbberson,
    ],
    Patrocinios: undefined,
    Curadores: [pessoas.FerreiraGullar],
};

export const GrupoFrente_1955: Exposicao = {
    Nome: '2ª Grupo Frente',
    Instituicao: 'Museu de Arte Moderna do Rio de Janeiro', // TODO  ??
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'MAM Rio',
    DataInicio: '14/07/1955',
    DataFim: undefined,
    Expositores: [
        //pessoas.AbrahamPalatnik
        pessoas.AluisioCarvao,
        //pessoas.CarlosVal
        //pessoas.CesarOiticica
        pessoas.DecioVieira,
        //pessoas.ElisaMartinsDaSilveira.
        pessoas.FranzWeissmann,
        pessoas.HelioOiticica,
        pessoas.IvanSerpa,
        //pessoas.JoaoJoseDaSilvaCosta,
        pessoas.LygiaClark,
        pessoas.LygiaPape,
        //pessoas.RubemLudolf
        //pessoas.VicentIbberson,
    ],
    Patrocinios: undefined,
    Curadores: undefined,
};

export const GrupoFrente_1956: Exposicao = {
    Nome: '3ª Grupo Frente',
    Instituicao: undefined, // TODO  ??
    Cidade: 'Resende',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Itatiaia Country Club',
    DataInicio: '17/03/1956',
    DataFim: undefined,
    Expositores: [
        //pessoas.AbrahamPalatnik
        pessoas.AluisioCarvao,
        //pessoas.CarlosVal
        //pessoas.CesarOiticica
        pessoas.DecioVieira,
        //pessoas.ElisaMartinsDaSilveira.
        pessoas.FranzWeissmann,
        pessoas.HelioOiticica,
        pessoas.IvanSerpa,
        //pessoas.JoaoJoseDaSilvaCosta,
        pessoas.LygiaClark,
        pessoas.LygiaPape,
        //pessoas.RubemLudolf
        //pessoas.VicentIbberson,
    ],
    Patrocinios: undefined,
    Curadores: undefined,
};

export const GrupoFrente_1956_2: Exposicao = {
    Nome: '4ª Grupo Frente',
    Instituicao: undefined,
    Cidade: 'Resende',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Companhia Siderúrgica Nacional',
    DataInicio: '23/06/1956',
    DataFim: undefined,
    Expositores: [
        //pessoas.AbrahamPalatnik
        pessoas.AluisioCarvao,
        //pessoas.CesarOiticica
        pessoas.DecioVieira,
        pessoas.FranzWeissmann,
        pessoas.HelioOiticica,
        pessoas.IvanSerpa,
        pessoas.LygiaClark,
    ],
    Patrocinios: undefined,
    Curadores: undefined,
};

export const SalaodeArtedeRibeiraoPreto: Exposicao = {
    Nome: '13º Salão de Arte de Ribeirão Preto',
    Instituicao: 'Casa da Cultura de Ribeirão Preto', // TODO  ??
    Cidade: 'Ribeirão Preto',
    Estado: 'São Paulo',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '03/09/1988',
    DataFim: '09/10/1988',
    Expositores: [
        pessoas.AlexGama,
        pessoas.AntonioSergioDeSouza,
        pessoas.BeraldaAltenfelder,
        pessoas.CaetanoDeAlmeida,
        pessoas.CarlaGuagliardi,
        pessoas.CarlosWolney,
        pessoas.CenimarSMarques,
        pessoas.ClaudiaRenault,
        pessoas.ClaudioCretti,
        pessoas.ClebioMaduro,
        pessoas.CleidoVasconcelos,
        pessoas.EdgardDeSouza,
        pessoas.EmilioBarolo,
        pessoas.EymardBrandao, //(GrandePrêmioCidadedeRibeirãoPreto),
        pessoas.FernandoAugusto,
        pessoas.FernandoBento,
        pessoas.FernandoFonseca,
        pessoas.GermanaMonteMor,
        pessoas.GiovannaMartins,
        pessoas.JoseFernandoGDeleu,
        pessoas.JulioDaCostaFeliz,
        pessoas.LeticiaFaria,
        pessoas.LuizLopreto,
        pessoas.MariaAnitaOPCuzzah,
        pessoas.MariaElisaBMCampos,
        pessoas.MarinaBraghetto,
        pessoas.Maurilima, //(PrêmioCidadedeRibeirãoPret),
        pessoas.MendesFaria,
        pessoas.MirleneFreire,
        pessoas.NazarethPacheco,
        pessoas.NydiaNegromonte,
        pessoas.OlavoDeOliveiraSenne,
        pessoas.OrlandoMFeitosa,
        pessoas.OsmarDalio,
        pessoas.Palo,
        pessoas.PaulinoLazur,
        pessoas.PauloMiranda,
        pessoas.RachelDeAlmeidaMagalhaes, //(ReferênciaEspecialdoJúri),
        pessoas.RicardoLuizHomem,
        pessoas.RodrigoDeCastro, //(PrêmioCitibank-Aquisição),
        pessoas.RosangelaRenno, //(PrêmioCidadedeRibeirãoPreto),
        pessoas.RuiAlonso, //(PrêmioCitibank-Aquisição),
        pessoas.SaleteMulin,
        pessoas.SergioCappae,
        pessoas.SheylaCabral,
        pessoas.SilviaCunha,
        pessoas.VaniaBarbosa,
        pessoas.YvoniGarrigos,
    ],
    Patrocinios: undefined,
    Curadores: [pessoas.JoaoCarlosDeFigueiredoFerraz],
    Juri: [
        pessoas.AlbertoTassinari,
        pessoas.CelmaAlvim,
        pessoas.PieterThomasTjabbes,
        pessoas.RonaldoBrito,
        pessoas.TadeuChiarelli,
    ],
    Montadores: [
        pessoas.RubenBreitman,
    ],
};

export const SalaoNacionaldeArtesPlásticas_1991_Brasilia: Exposicao = {
    Nome: 'XII Salão Nacional de Artes Plásticas',
    Instituicao: 'Museu de Arte de Brasília',
    Cidade: 'Brasília',
    Estado: 'Distrito Federal',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '12/12/1991',
    DataFim: '19/01/1992',
    Expositores: [
        pessoas.AndreCosta,
        pessoas.AngeloMarzano, //(PrêmioAquisitivo-GDF),
        pessoas.AnnarreSmith,
        pessoas.AntonioSergio, //(PrêmioParticipação-GDF),
        pessoas.ArlindoDaibert,
        pessoas.AvatarMoraes,
        pessoas.BeraldaAltenfelder, //(PrêmioAquisitivo-GDF),
        pessoas.CarlaGuagliardi,
        pessoas.CarlosBorges, //(PrêmioAquisitivo-GDF),
        pessoas.CarlosMuniz,
        pessoas.ChaiChang,
        pessoas.CosmeMartins,
        pessoas.CourtneySmith, //(PrêmioAquisitivo-GDF),
        pessoas.DanFialdini,
        pessoas.DanielFeingold, //(PrêmioViagemaoExterior-IBAC),
        pessoas.DomingosTotora,
        pessoas.EdgarRacy,
        pessoas.EduardoHaesbaert,
        pessoas.ElderRochaFilho,
        pessoas.ElianeProlik, //(PrêmioAquisição-IBAC),
        pessoas.ElisaBracher, //(PrêmioJovemArtista-Unesco(MedalhadebronzePicasso)),
        pessoas.EsterGrinspum,
        pessoas.FatimaNeves, //(PrêmioAquisitvo-GDF),
        pessoas.GeorgiaKyriakakis, //(PrêmioAquisitivo-GDF),
        pessoas.GiselaWaetge, //(PrêmioAquisitivo-GDF),
        pessoas.GladstoneDeMenezes,
        pessoas.HelioSiqueira, //(PrêmioAquisitivo-GDF),
        pessoas.IvanildeBrunow, //(PrêmioAquisitivo-GDF),
        pessoas.JairCorreia,
        pessoas.JoseBento, //(PrêmioViagemaoPaís-IBAC),
        pessoas.JosePatricio, //(PrêmioAquisitivo-GDF),
        pessoas.LauraVinci, //(PrêmioAquisitivo-GDF),
        pessoas.MarciaPastore,
        pessoas.MarcioPerigo, //(PrêmioAquisição-GDF),
        pessoas.MarcusAndre, //(PrêmioAquisitivo-GDF),
        pessoas.MarcusVinícius,
        pessoas.MariaDoCarmo,
        pessoas.MariaTerezaLouro, //(PrêmioAquisitivo-GDF),
        pessoas.MariannitaLuzzati, //(PrêmioBrasíliadeArtesPlásticas),
        pessoas.MariluBeer,
        pessoas.MarioAzevedo, //(PrêmioAquisitivo-GDF),
        pessoas.MoisesLucas,
        pessoas.NiciaBormann,
        pessoas.NiuraBellavinha,
        pessoas.OrlandoCastano, //(PrêmioAquisição-GDF),
        pessoas.PatriciaNorman,
        pessoas.RicardoCristofaro, //(PrêmioAquisitivo-GDF),
        pessoas.RinaldoSilva, //(PrêmioAquisitivo-GDF),
        pessoas.RogerioGomes,
        pessoas.RoseFraymund, //(PrêmioAquisitivo-GDF),
        pessoas.SandraTucci,
        pessoas.SergioRizo,
        pessoas.ShirleyPaesLeme,
        pessoas.StellaMaris,
        pessoas.WalterGuerra,
    ],
    Patrocinios: undefined,
    Curadores: [],
    Juri: [],
    Montadores: [],
    Organizadores: [
        pessoas.JoãoDeSylos,
        pessoas.LedaWatson,
    ],
    ComissaoDePremiacao: [
        pessoas.CasemiroXavierDeMendonça,
        pessoas.IvoZanini,
        pessoas.JoaoCamara,
        pessoas.JoaoEvangelistaAndradeFilho,
        pessoas.RonaldoBrito,
    ],
    ComissaoDeSelecao: [
        pessoas.CasemiroXavierDeMendonça,
        pessoas.IvoZanini,
        pessoas.JoaoCamara,
        pessoas.JoaoEvangelistaAndradeFilho,
        pessoas.RonaldoBrito,
    ],
};

export const IndividualdeEduardoSued: Exposicao = {
    Nome: 'Individual de Eduardo Sued',
    Instituicao: 'Paço Imperial',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Paço Imperial',
    DataInicio: '24/09/1992',
    DataFim: '01/11/1992',
    Expositores: [
        pessoas.EduardoSued,
    ],
    Patrocinios: undefined,
    Curadores: [pessoas.RonaldoBrito],
    Juri: undefined,
    Montadores: undefined,
};

export const WaltercioCaldasEsculturas: Exposicao = {
    Nome: 'Waltercio Caldas: esculturas',
    Instituicao: 'Paço Imperial',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Paço Imperial',
    DataInicio: '06/07/1988',
    DataFim: '27/07/1988',
    Expositores: [
        pessoas.WaltercioCaldas,
    ],
    Patrocinios: undefined,
    Curadores: [pessoas.PauloVenancioFilho],
    Juri: undefined,
    Montadores: undefined,
};

export const IndividualdeIvensMachado: Exposicao = {
    Nome: 'Individual de Ivens Machado',
    Instituicao: undefined,
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '31/08/1988',
    DataFim: '29/09/1988',
    Expositores: [
        pessoas.IvensMachado,
    ],
    Patrocinios: undefined,
    Curadores: [pessoas.PauloVenancioFilho],
    Juri: undefined,
    Montadores: undefined,
};

export const IndividualdeAngeloVenosa: Exposicao = {
    Nome: 'Individual de Angelo Venosa',
    Instituicao: 'Galeria Sérgio Milliet',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Galeria Sérgio Milliet',
    DataInicio: '13/09/1989',
    DataFim: '04/10/1989',
    Expositores: [
        pessoas.AngeloVenosa,
    ],
    Patrocinios: undefined,
    Curadores: [pessoas.PauloVenancioFilho],
    Juri: undefined,
    Montadores: undefined,
};

export const PoéticasVisuais: Exposicao = {
    Nome: 'Poéticas Visuais',
    Instituicao: 'Museu de Arte Contemporânea da Universidade de São Paulo',
    AbreviacaoInstituicao: 'MAC/USP',
    Cidade: 'Sao Paulo',
    Estado: 'Sao Paulo',
    Pais: 'Brasil',
    Local: 'MAC/USP',
    DataInicio: '29/09/1977',
    DataFim: '30/10/1977',
    Expositores: [
        pessoas.AnesiaPachecoEChaves,
        pessoas.AnnaBellaGeiger,
        pessoas.ArturBarrio,
        pessoas.BeneFonteles,
        pessoas.ClaudioFerlauto,
        pessoas.DarioChiaverini,
        pessoas.EssilaParaiso,
        pessoas.FernandoCocchiarale,
        pessoas.GabrielBorba,
        pessoas.GastaoDeMagalhaes,
        pessoas.GenilsonSoares,
        pessoas.GersonZanini,
        pessoas.Gretta,
        pessoas.JoaquimBranco,
        pessoas.JosePauloPaes,
        pessoas.JulioPlaza,
        pessoas.LauroCavalcanti,
        pessoas.LeticiaParente,
        pessoas.LourdesCedran,
        pessoas.LuisGuardiaNeto,
        pessoas.LuizBarth,
        pessoas.MarcodoValle,
        pessoas.MarioIshikawa,
        pessoas.MauricioFridman,
        pessoas.MiriamDanowski,
        pessoas.MontezMagno,
        pessoas.PauloBruscky,
        pessoas.PauloHerkenhoff,
        pessoas.ReginaSilveira,
        pessoas.ReginaVater,
        pessoas.RobertoKeppler,
        pessoas.SoniaAndrade,
        pessoas.VeraChavesBarcellos,
    ],
    Patrocinios: undefined,
    Curadores: [
        pessoas.JulioPlaza,
    ],
    Juri: undefined,
    Montadores: undefined,
    Organizadores: [
        pessoas.WalterZanini,
    ],
};

export const AsArtesdoPoder: Exposicao = {
    Nome: 'As Artes do Poder',
    Instituicao: 'Paço Imperial',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Paço Imperial',
    DataInicio: '15/09/1992',
    DataFim: undefined,
    Expositores: [
        pessoas.AlexandreDaCosta,
        pessoas.AntonioBerni,
        pessoas.AntonioDias,
        pessoas.Barrao,
        pessoas.CaetanoDeAlmeida,
        pessoas.JoaoCamara,
        pessoas.JuanGenoves,
        pessoas.LuizZerbini,
        pessoas.MarcoAndre,
        pessoas.MiguelRioBranco,
        pessoas.PedroEscosteguy,
        pessoas.RubensGerchman,
    ],
    Patrocinios: undefined,
    Curadores: [
        pessoas.LauroCavalcanti,
        pessoas.LuizAquila,
    ],
    Juri: undefined,
    Montadores: undefined,
};

export const SalãoNacionaldeArtesPlásticas1994: Exposicao = {
    Nome: '14º Salão Nacional de Artes Plásticas',
    Instituicao: 'Ministério da Cultura',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Palácio Gustavo Capanema',
    DataInicio: '27/10/1994',
    DataFim: undefined,
    Expositores: [
        pessoas.ElianeDuarte, //(PrêmioViagemaoExterior)
        pessoas.ErnestoBonato, //((PrêmioUnesco)
        pessoas.FelixBressan,
        pessoas.FernandoAugusto, //((PrêmioAquisição)
        pessoas.FranzWeissmann,
        pessoas.LeilaDanziger,
        pessoas.LuciaFetal,
        pessoas.LuciaVilaseca,
        pessoas.MarcoPauloRolla, //((PrêmioAquisição)
        pessoas.NydiaNegromonte,
        pessoas.PauloHumbertoDeAlmeida,
        pessoas.VeraMartins, //((PrêmioAquisição)
    ],
    Patrocinios: undefined,
    Curadores: undefined,
    Juri: [
        pessoas.AnnaLetycia,
        pessoas.BeatrizMilhazes,
        pessoas.FerreiraGullar,
        pessoas.LauroCavalcanti,
        pessoas.MariaAliceMilliet,
    ],
    Montadores: undefined,
};

export const InfinitasImagensnoTempo: Exposicao = {
    Nome: 'Infinitas Imagens no Tempo',
    Instituicao: 'Paço Imperial',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Paço Imperial',
    DataInicio: '1995',
    DataFim: undefined,
    Expositores: [
        pessoas.LuizAlphonsus,
    ],
    Patrocinios: undefined,
    Curadores: [pessoas.LauroCavalcanti],
    Juri: undefined,
    Montadores: undefined,
};

export const SalãoNacionaldeArtesPlásticas: Exposicao = {
    Nome: '8º Salão Nacional de Artes Plásticas',
    Instituicao: 'Museu de Arte Moderna do Rio de Janeiro',
    AbreviacaoInstituicao: 'MAM Rio',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'MAM Rio',
    DataInicio: '13/12/1985',
    DataFim: '02/02/1986',
    Expositores: [
        pessoas.AdirBotelho,
        pessoas.AdirSodre,
        pessoas.Ahmes,
        pessoas.AlcidesDaRochaMiranda,
        pessoas.AldemirMartins,
        pessoas.AlfredoVolpi,
        pessoas.AliceSoares,
        pessoas.AliceVinagre,
        pessoas.AlmirGadelha,
        pessoas.AluisioCarvao,
        pessoas.AmeliaToledo,
        pessoas.AmilcarDeCastro,
        pessoas.AnaAlegria,
        pessoas.AnaluCunha,
        pessoas.AngeloVenosa,
        pessoas.AnisioMedeiros,
        pessoas.AnnaLetycia,
        pessoas.AntonioBandeira,
        pessoas.AntonioDias,
        pessoas.AntonioPradoNetto,
        pessoas.ArmandoBalloni,
        pessoas.ArnaldoPedrosoDHorta,
        pessoas.ArturBarrio,
        pessoas.Barrao,
        pessoas.BeatrizMilhazes,
        pessoas.BeatrizPages,
        pessoas.BeneFonteles,
        pessoas.BenjaminSilva,
        pessoas.BerthaBonart,
        pessoas.Bianco,
        pessoas.Bonadei,
        pessoas.BrunoGiorgi,
        pessoas.BustamanteSa,
        pessoas.CandidoPortinari,
        pessoas.CarlitoCarvalhosa,
        pessoas.CarlosBastos,
        pessoas.CarlosFajardo,
        pessoas.CarlosScliar,
        pessoas.CássioMBoy,
        pessoas.ChicoCunha,
        pessoas.CristinaCanale,
        pessoas.CynthiaVasconcelos,
        pessoas.DanubioGoncalves,
        pessoas.DarcyPenteado,
        pessoas.Darel,
        pessoas.DavidLargman,
        pessoas.DecioVieira,
        pessoas.DelsonUchoa,
        pessoas.DeniseWeller,
        pessoas.Djanira,
        pessoas.DoraLongoBahia,
        pessoas.EduardoAquino,
        pessoas.EduardoAraujo,
        pessoas.EduardoBarreto,
        pessoas.EduardoEloy,
        pessoas.EduardoFerraz,
        pessoas.EduardoKac,
        pessoas.ErnaniVasconcellos,
        pessoas.ErnestoLacerdaDeAlmeida,
        pessoas.EssilaParaiso,
        pessoas.EsterGrinspum,
        pessoas.FabioCardoso,
        pessoas.FabioMiguez, //(PrêmioAquisição),
        pessoas.FaygaOstrower,
        pessoas.FeliciaLeirner,
        pessoas.FernandoFam,
        pessoas.FernandoPamplona,
        pessoas.FernandoRomani,
        pessoas.FernandoStickel,
        pessoas.FlaviaRibeiro,
        pessoas.Fortunato,
        pessoas.FranceDupaty,
        pessoas.FranciscoRebolo,
        pessoas.FranciscoStockinger,
        pessoas.FrankSchaeffer,
        pessoas.FransKrajcberg,
        pessoas.FrantaReyl,
        pessoas.Frantz,
        pessoas.FulvioPennacchi,
        pessoas.GeOrthof,
        pessoas.GeorginaDeAlbuquerque,
        pessoas.GerardoVilaseca,
        pessoas.GezaHeller,
        pessoas.GildaMattar,
        pessoas.Glauco,
        pessoas.GlaucoRodrigues,
        pessoas.GlauraPereira,
        pessoas.GlenioBianchetti,
        pessoas.Goulart,
        pessoas.HamiltonGalvao,
        pessoas.HansenBahia,
        pessoas.HaydeaSantiago,
        pessoas.HelioMelo,
        pessoas.HelioOiticica,
        pessoas.HildaCampofiorito,
        pessoas.HildaGoltz,
        pessoas.HonorioPecanha,
        pessoas.HugoAdami,
        pessoas.HugoDenizart,
        pessoas.HumbertoCozzo,
        pessoas.IbereCamargo,
        pessoas.IoneSaldanha,
        pessoas.IsabelPons,
        pessoas.IvanLima,
        pessoas.IzraelSzajnbrum,
        pessoas.JacinthoMoraes,
        pessoas.Jacqmont,
        pessoas.JadirAntonioDaSilva,
        pessoas.JairGlass,
        pessoas.JeaneteMusatti,
        pessoas.JoaoMode, //(ReferênciaEspecialdoJúri),
        pessoas.JoaquimPaiva,
        pessoas.JorgeEiro,
        pessoas.JorgeGuinle, //(PrêmioViagemaoExterior),
        pessoas.JosePatricio,
        pessoas.JosePedrosa,
        pessoas.JoseResende,
        pessoas.JoseSilveiraDAvila,
        pessoas.KarinLambrecht,
        pessoas.KonstantinChristoff,
        pessoas.LiaMennaBarreto,
        pessoas.LivioAbramo,
        pessoas.LucetteLaribe,
        pessoas.Luciano,
        pessoas.LucianoPinheiro,
        pessoas.LuisaMeyer,
        pessoas.LuizBraga,
        pessoas.LuizSolha,
        pessoas.LuizZerbini,
        pessoas.LygiaClark,
        pessoas.MCavalcante,
        pessoas.ManfredoDeSouzanetto,
        pessoas.ManoelSantiago,
        pessoas.MarceloCipis,
        pessoas.MarcoTulioResende,
        pessoas.MargaretSpence,
        pessoas.MariaHeloisaFenelonCosta,
        pessoas.MariaLeontina,
        pessoas.MariaLuciaCattani,
        pessoas.MariaLuciaLuz,
        pessoas.MariaTomaselli,
        pessoas.MarioAgostinelli,
        pessoas.MarioCravoNeto,
        pessoas.MárioRohnelt,
        pessoas.MartinStreibel,
        pessoas.MauricioBentes,
        pessoas.MauricioSilva,
        pessoas.MauroBellagamba,
        pessoas.MaxGrossmann,
        pessoas.MiltonGoldring,
        pessoas.MiltonMachado,
        pessoas.MiltonRibeiro,
        pessoas.MiraSchendel,
        pessoas.MisabelPedrosa,
        pessoas.MonicaNador,
        pessoas.MonicaSartori,
        pessoas.NelsonFelix,
        pessoas.NewtonRezende,
        pessoas.Niculitcheff,
        pessoas.NilsonPimenta,
        pessoas.NoemiaGuerra,
        pessoas.OctavioAraujo,
        pessoas.OllyReinheimer,
        pessoas.OrlandoCastano,
        pessoas.OswaldoGoeldi,
        pessoas.OtoniMesquita,
        pessoas.PaivaBrasil,
        pessoas.PauloBruscky,
        pessoas.PauloCampinho,
        pessoas.PauloHouayek,
        pessoas.PauloMonteiro,
        pessoas.PauloPaes,
        pessoas.PhillippeMaeck,
        pessoas.Piza,
        pessoas.PotyLazzarotto,
        pessoas.QuirinoCampofiorito,
        pessoas.RalphGehre,
        pessoas.Rapoport,
        pessoas.RaymundoNogueira,
        pessoas.ReninaKatz,
        pessoas.RicardoLaterza,
        pessoas.RichardSeewald,
        pessoas.RochelleCosti,
        pessoas.RodrigoAndrade,
        pessoas.RogerioCamacho,
        pessoas.RogerioNazari,
    ],
    Patrocinios: undefined,
    Curadores: [pessoas.PauloRobertoLeal],
    Juri: [
        pessoas.AnnaBellaGeiger,
        pessoas.CarlosPasquetti,
        pessoas.HumbertoEspindola,
        pessoas.JoseClaudio,
        pessoas.LuizPauloBaravelli,
        pessoas.MarcusDeLontraCosta,
    ],
    Montadores: undefined,
    Organizadores: [
        pessoas.AlbertoBeuttenmuller,
        pessoas.AlineFigueiredo,
        pessoas.CalasansNeto,
        pessoas.IcleiaCattani,
        pessoas.JoseClaudio,
        pessoas.OsmarPinheiro,
        pessoas.PauloSergioDuarte,
    ],
};

export const BienalInternacionaldeSãoPaulo_1981: Exposicao = {
    Nome: '16ª Bienal Internacional de São Paulo',
    Instituicao: 'Fundação Bienal de São Paulo',
    Cidade: 'São Paulo',
    Estado: 'São Paulo',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '16/10/1981',
    DataFim: '20/12/1981',
    Expositores: [
        pessoas.Adelina,
        pessoas.AdersonMedeiros,
        pessoas.AlbenNisioFonseca,
        pessoas.AlbertoHarrigan,
        pessoas.AlexFlemming,
        pessoas.AlexVallauri,
        pessoas.AliceXavier,
        pessoas.Almandrade,
        pessoas.AnitaSimkevicius,
        pessoas.AnnaBellaGeiger,
        pessoas.AnnaCarretta,
        pessoas.AntonioClaudioCarvalho,
        pessoas.AntonioDias,
        pessoas.AntonioPeticov,
        pessoas.AntonioPoteiro,
        pessoas.AntonioSergio,
        pessoas.ArturBarrio,
        pessoas.ArturMatuck,
        pessoas.AuroraCursino,
        pessoas.AvelinoDeAraujo,
        pessoas.BeneFonteles,
        pessoas.BernardoKrasniansky,
        pessoas.BernardoVilhena,
        pessoas.Carlos,
        pessoas.CarlosFajardo,
        pessoas.CarmelaGross,
        pessoas.Chacal,
        pessoas.ChicoDantas,
        pessoas.ChicoPereira,
        pessoas.CildoMeireles,
        pessoas.Claudia,
        pessoas.ClaudioFerlauto,
        pessoas.ClaudioGomes,
        pessoas.ClaudioGoulart,
        pessoas.CristinaCoelhoRochaMonteiroDias,
        pessoas.CybeleVarela,
        pessoas.DaisyBoabaid,
        pessoas.DanteVelloni,
        pessoas.DianaDomingues,
        pessoas.EdsonDeOliveira,
        pessoas.EdsonMachado,
        pessoas.EduardoSued,
        pessoas.EduardoZanatta,
        pessoas.EliHeil,
        pessoas.ElianeVelozo,
        pessoas.EmygdioDeBarros,
        pessoas.FalvesSilva,
        pessoas.FaridGeber,
        pessoas.Fernando,
        pessoas.FernandoMeireles,
        pessoas.FredSvendsen,
        pessoas.GabrielBorba,
        pessoas.GabrielDosSantos,
        pessoas.GastaoDeMagalhaes,
        pessoas.GenilsonSoares,
        pessoas.GeraldoDeBarros,
        pessoas.GersonFilho,
        pessoas.GersonZanini,
        pessoas.GilmarECardoso,
        pessoas.Goulart,
        pessoas.GTO,
        pessoas.GuilhermeMandaro,
        pessoas.HelioLete,
        pessoas.HikaroIckx,
        pessoas.HudinilsonJunior,
        pessoas.IoleDeFreitas,
        pessoas.Isaac,
        pessoas.IvaldGranato,
        pessoas.IvanMauricio,
        pessoas.IvensMachado,
        pessoas.JMedeiros,
        pessoas.JanethSoares,
        pessoas.JoaoBatistaDosSantos,
        pessoas.JoaoProteti,
        pessoas.JoaquimBranco,
        pessoas.JoseWagnerGarcia,
        pessoas.JoziasBenedicto,
        pessoas.JulioPlaza,
        pessoas.KatiaBento,
        pessoas.LauroMonteiro,
        pessoas.LeilaSalles,
        pessoas.LeonhardFrankDuck,
        pessoas.LeticiaParente,
        pessoas.LuigiZanotto,
        pessoas.LuisGlesier,
        pessoas.LuisGuardiaNeto,
        pessoas.LuizAntonioLopesDeSouza,
        pessoas.LuizCarlosCardoso,
        pessoas.LuizFacanhaFaria,
        pessoas.MarceloRMachado,
        pessoas.MarcusDoRio,
        pessoas.MarcusZacariades,
        pessoas.MariaIreneRibeiro,
        pessoas.MariaLuizaLeal,
        pessoas.MarioDaPiedadeMArruda,
        pessoas.MarioRamiro,
        pessoas.MaryDritschel,
        pessoas.MaynandSobral,
        pessoas.MiraSchendel,
        pessoas.MiriamDanowski,
        pessoas.MiriamPeixoto,
        pessoas.NeyMarcondes,
        pessoas.NicolasBehr,
        pessoas.NinaMoraes,
        pessoas.OdairMagalhaes,
        pessoas.OlimpioPinheiro,
        pessoas.OrlandoPDSilva,
        pessoas.OtavioDonasci,
        pessoas.PauloBruscky,
        pessoas.PauloDeAndrade,
        pessoas.PauloKlein,
        pessoas.PauloMiranda,
        pessoas.PauloMourelli,
        pessoas.PauloPriori,
        pessoas.PauloRo,
        pessoas.PedroJBrancoRiberio,
        pessoas.PedroOsmar,
        pessoas.RafaelFranca,
        pessoas.Raphael,
        pessoas.RaulCordula,
        pessoas.ReginaSilveira,
        pessoas.ReginaVater,
        pessoas.RenataBarros,
        pessoas.RitaMoreira,
        pessoas.RobertoKeppler,
        pessoas.RobertoSandoval,
        pessoas.RochaAdonai,
        pessoas.RonaldoSantos,
        pessoas.RosaMariaSantos,
        pessoas.SebastiaoFarias,
        pessoas.SoniaFontanezi,
        pessoas.TedJungle,
        pessoas.Tunga,
        pessoas.UnhandeijaraLisboa,
        pessoas.VaniaLucilaValerioBPessoa,
        pessoas.VeraBonnemasou,
        pessoas.VivianOrni,
        pessoas.WaltBlackberry,
    ],
    Patrocinios: undefined,
    Curadores: [
        pessoas.AgnaldoFarias,
        pessoas.AnnateresaFabris,
        pessoas.CacildaTeixeiraDaCosta,
        pessoas.GabrielaSuzanaWilder,
        pessoas.JulioPlaza,
        pessoas.MariliaSaboyaDeAlbuquerque,
        pessoas.PetronioFranca,
        pessoas.RenataBarros,
        pessoas.RobertoSandoval,
        pessoas.SamuelLeon,
        pessoas.VictorMusgrave,
        pessoas.WalterZanini,
    ],
    Juri: undefined,
    Organizadores: [
        pessoas.BrunoMantura,
        pessoas.CasemiroXavierDeMendonça,
        pessoas.DonaldGoodall,
        pessoas.DonatoFerrari,
        pessoas.EstherEmilioCarlos,
        pessoas.HelenEscobedo,
        pessoas.IvelicMilan,
        pessoas.LuizDiederichsenVillares,
        pessoas.PauloSergioDuarte,
        pessoas.ToshiakiNinemura,
        pessoas.UlpianoBezerraDeMeneses,
    ],
    Montadores: [
        pessoas.CidaGalvao,
        pessoas.JorgeAristidesDeSousaCarvajal,
    ],
    ArtistasConvidados: [pessoas.KatievanScherpenberg],
};

export const SituaçõesTransitivas: Exposicao = {
    Nome: 'Situações Transitivas',
    Instituicao: undefined,
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Joel Edelstein Arte Contemporânea',
    DataInicio: '14/12/1995',
    DataFim: '13/01/1996',
    Expositores: [
        pessoas.EnricaBernardelli,
        pessoas.JoseDamasceno,
        pessoas.LuizCarlosDelCastillo,
        pessoas.MarciaThompson,
        pessoas.MauricioRuiz,
    ],
    Patrocinios: undefined,
    Curadores: [pessoas.FernandoCocchiarale],
    Juri: undefined,
    Montadores: undefined,
};

export const UmaVisãoCirculardoMundo30AnosdePintura: Exposicao = {
    Nome: 'Uma Visão Circular do Mundo: 30 Anos de Pintura',
    Instituicao: 'Museu Nacional de Belas Artes',
    AbreviacaoInstituicao: 'MNBA',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'MNBA',
    DataInicio: '23/08/1995',
    DataFim: '01/10/19956',
    Expositores: [pessoas.SolangeMagalhaes],
    Patrocinios: undefined,
    Curadores: [pessoas.FernandoCocchiarale],
    Juri: undefined,
    Montadores: undefined,
};

export const EsculturaCarioca: Exposicao = {
    Nome: 'Escultura Carioca',
    Instituicao: 'Paço Imperial',
    AbreviacaoInstituicao: undefined,
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Paço Imperial',
    DataInicio: '1994',
    DataFim: undefined,
    Expositores: [
        pessoas.AndreCosta,
        pessoas.Barrao,
        pessoas.CarlaGuagliardi,
        pessoas.CarlosBevilacqua,
        pessoas.EduardoCoimbra,
        pessoas.EnricaBernardelli,
        pessoas.ErnestoNeto,
        pessoas.FernandaGomes,
        pessoas.JoseDamasceno,
        pessoas.LiviaFlores,
        pessoas.MarciaThompson,
        pessoas.MarcosChaves,
        pessoas.MauricioRuiz,
        pessoas.RaulMourao,
        pessoas.RicardoBasbaum,
        pessoas.RicardoBecker,
        pessoas.RodrigoCardoso,
        pessoas.ValeskaSoares,
    ],
    Patrocinios: undefined,
    Curadores: [
        pessoas.FernandoCocchiarale,
        pessoas.LigiaCanongia,
    ],
    Juri: undefined,
    Montadores: undefined,
};

export const VentoSulMostraDeArtesVisuaisIntegraçãoDoConeSul: Exposicao = {
    Nome: 'VentoSul: mostra de artes visuais integração do Cone Sul',
    Instituicao: undefined,
    AbreviacaoInstituicao: undefined,
    Cidade: 'Cascavel',
    Estado: 'Paraná',
    Pais: 'Brasil',
    Local: 'Centro Cultural Gilberto Mayer',
    DataInicio: '05/08/1994',
    DataFim: '10/09/1994',
    Expositores: [
        pessoas.AntonioCarlosMachado,
        pessoas.ArturoDuclos,
        pessoas.CarlosAltamirano,
        pessoas.CarlosSeveso,
        pessoas.ClorindoTesta,
        pessoas.EdilsonViriato,
        pessoas.ElisaBracher,
        pessoas.ErnestoVila,
        pessoas.EstherMariaBragaCortes,
        pessoas.FabioNoronha,
        pessoas.FelixToranzos,
        pessoas.GerardoGoldwasser,
        pessoas.GonzaloDiaz,
        pessoas.HelianaGrudzien,
        pessoas.JoseDamasceno,
        pessoas.LauroBorges,
        pessoas.LeilaPugnaloni,
        pessoas.LeticiaFaria,
        pessoas.LuciaFetal,
        pessoas.LuizCarlosBrugnera,
        pessoas.MarcosBenitez,
        pessoas.MariannitaLuzzati,
        pessoas.MazeMendes,
        pessoas.MiguelaVera,
        pessoas.MitaiChurí,
        pessoas.NewtonGoto,
        pessoas.NuryGonzalez,
        pessoas.RogerioDias,
        pessoas.RonyBellinho,
        pessoas.RosanaFuertes,
        pessoas.SalvioDare,
        pessoas.UiaraBartira,
    ],
    Patrocinios: undefined,
    Curadores: [
        pessoas.AdaliceAraujo,
        pessoas.AliciaHaber,
        pessoas.FernandoCocchiarale,
        pessoas.LauraBuccellato,
        pessoas.NellyRichard,
        pessoas.OsvaldoSalerno,
        pessoas.TicioEscobar,
    ],
    Juri: undefined,
    Montadores: undefined,
};

export const BienalBrasilSéculoXX: Exposicao = {
    Nome: 'Bienal Brasil Século XX',
    Instituicao: 'Fundação Bienal de São Paulo',
    AbreviacaoInstituicao: undefined,
    Cidade: 'São Paulo',
    Estado: 'São Paulo',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '24/04/1994',
    DataFim: '29/05/1994',
    Expositores: [
        pessoas.AbrahamPalatnik,
        pessoas.AdoMalagoli,
        pessoas.AdrianoDeAquino,
        pessoas.AlbertoTeixeira,
        pessoas.AldemirMartins,
        pessoas.AlexCerveny,
        pessoas.AlexFlemming,
        pessoas.AlexVallauri,
        pessoas.AlexandreWollner,
        pessoas.AlfredoAndersen,
        pessoas.AlfredoVolpi,
        pessoas.AlmirMavignier,
        pessoas.AluisioCarvao,
        pessoas.AlvimCorrea,
        pessoas.AmeliaToledo,
        pessoas.AmilcarDeCastro,
        pessoas.AnaMariaTavares,
        pessoas.AnaliviaCordeiro,
        pessoas.AnatolWladyslaw,
        pessoas.AndreParente,
        pessoas.AnesiaPachecoEChaves,
        pessoas.AngeloDeAquino,
        pessoas.AngeloVenosa,
        pessoas.AnitaMalfatti,
        pessoas.AnnaBellaGeiger,
        pessoas.AnnaBellaGeiger,
        pessoas.AnnaLetycia,
        pessoas.AnnaMariaMaiolino,
        pessoas.AnnaMariani,
        pessoas.AntonioBandeira,
        pessoas.AntonioCelsoSparapan,
        pessoas.AntonioDias,
        pessoas.AntonioGomide,
        pessoas.AntonioHenriqueAmaral,
        pessoas.AntonioLizarraga,
        pessoas.AntonioMaluf,
        pessoas.AntonioManuel,
        pessoas.AntonioPaimVieira,
        pessoas.AntonioParreiras,
        pessoas.ArcangeloIanelli,
        pessoas.ArnaldoAntunes,
        pessoas.ArnaldoFerrari,
        pessoas.ArnaldoPedrosoDHorta,
        pessoas.ArthurOmar,
        pessoas.ArthurTimotheoDaCosta,
        pessoas.ArturBarrio,
        pessoas.ArturLescher,
        pessoas.ArturMatuck,
        pessoas.AthosBulcao,
        pessoas.AugustoDeCampos,
        pessoas.AvatarMoraes,
        pessoas.Babinski,
        pessoas.Barrao,
        pessoas.BelisarioFranca,
        pessoas.BelmiroDeAlmeida,
        pessoas.BeneFonteles,
        pessoas.BeneditoCalixto,
        pessoas.BernardoCid,
        pessoas.BernardoKrasniansky,
        pessoas.BettyLeirner,
        pessoas.BillMartinez,
        pessoas.BinKondo,
        pessoas.Bonadei,
        pessoas.BrunoGiorgi,
        pessoas.RobertoBurleMarx,
        pessoas.CaciporeTorres,
        pessoas.Caito,
        pessoas.CandidoPortinari,
        pessoas.CarlitoCarvalhosa,
        pessoas.CarlosAthanazio,
        pessoas.CarlosChambelland,
        pessoas.CarlosFajardo,
        pessoas.CarlosMartins,
        pessoas.CarlosNaef,
        pessoas.CarlosOswald,
        pessoas.CarlosPrado,
        pessoas.CarlosScliar,
        pessoas.CarlosVergara,
        pessoas.CarlosZilio,
        pessoas.CarmelaGross,
        pessoas.CarmelaGross,
        pessoas.CassioMichalany,
        pessoas.CeliaBorattoCarvalho,
        pessoas.CeliaCatunda,
        pessoas.CelsoRenato,
        pessoas.CesarMarranoPiovane,
        pessoas.CiceroDias,
        pessoas.CiceroDias,
        pessoas.CildoMeireles,
        pessoas.ClaudioFerlauto,
        pessoas.ClaudioGoulart,
        pessoas.ClaudioTozzi,
        pessoas.ClovisGraciano,
        pessoas.CristinaFonseca,
        pessoas.DanielSantiago,
        pessoas.DanielSenise,
        pessoas.DaniloDiPrete,
        pessoas.Darel,
        pessoas.DecioVieira,
        pessoas.DenisMoses,
        pessoas.DiCavalcanti,
        pessoas.DianaDomingues,
        pessoas.DionisioDelSanto,
        pessoas.DonatoFerrari,
        pessoas.DudiMaiaRosa,
        pessoas.EderSantos,
        pessoas.EdithBehring,
        pessoas.EdsonMotta,
        pessoas.EduardoCastanho,
        pessoas.EduardoSued,
        pessoas.ElianeProlik,
        pessoas.EliseuVisconti,
        pessoas.EmmanuelNassar,
        pessoas.ErnestoDeFiori,
        pessoas.ErnestoNeto,
        pessoas.EssilaParaiso,
        pessoas.EsterGrinspum,
        pessoas.EugenioLatour,
        pessoas.EulaliaGrau,
        pessoas.EvandroCarlosJardim,
        pessoas.FabioMiguez,
        pessoas.Fahrion,
        pessoas.FaygaOstrower,
        pessoas.FeliciaLeirner,
        pessoas.FernandoBarata,
        pessoas.FernandoCocchiarale,
        pessoas.FernandoLemos,
        pessoas.FernandoOdriozola,
        pessoas.FerreiraGullar,
        pessoas.FlaviaRibeiro,
        pessoas.FlavioDeCarvalho,
        pessoas.FlavioPons,
        pessoas.FlavioShiro,
        pessoas.Flexor,
        pessoas.FranciscoRebolo,
        pessoas.FranciscoStockinger,
        pessoas.FrancoTerranova,
        pessoas.FranzWeissmann,
        pessoas.FridaBaranek,
        pessoas.FulvioPennacchi,
        pessoas.GabrielBorba,
        pessoas.GalileoEmendabili,
        pessoas.GarciaBento,
        pessoas.GastaoDeMagalhaes,
        pessoas.GenilsonSoares,
        pessoas.GeorgeRibeiroNeto,
        pessoas.GeorginaDeAlbuquerque,
        pessoas.GeraldoAnhaiaMello,
        pessoas.GeraldoDeBarros,
        pessoas.GeraldoDeBarros,
        pessoas.GersonZanini,
        pessoas.GilberttoPrado,
        pessoas.GilvanSamico,
        pessoas.GlaucoRodrigues,
        pessoas.GregorioGruber,
        pessoas.GuidoViaro,
        pessoas.Guignard,
        pessoas.GustavoDallAra,
        pessoas.GuttmannBicho,
        pessoas.HaroldoDeCampos,
        pessoas.HeitorMalaguti,
        pessoas.HelioLeite,
        pessoas.HelioOiticica,
        pessoas.HelioRola,
        pessoas.HeliosSeelinger,
        pessoas.HenriqueBoese,
        pessoas.HenriqueCavalleiro,
        pessoas.HenriqueOswald,
        pessoas.HerculesBarsotti,
        pessoas.HermelindoFiaminghi,
        pessoas.HildeWeber,
        pessoas.HudinilsonJunior,
        pessoas.HugoAdami,
        pessoas.HumbertoEspindola,
        pessoas.IbereCamargo,
        pessoas.InimaDePaula,
        pessoas.IoleDeFreitas,
        pessoas.IoneSaldanha,
        pessoas.IreneBuarque,
        pessoas.IsmaelNery,
        pessoas.IvaldGranato,
        pessoas.IvanSerpa,
        pessoas.IvanSerpa,
        pessoas.IvensMachado,
        pessoas.JacLeirner,
        pessoas.JacksonRibeiro,
        pessoas.JacquesDouchez,
        pessoas.JefGolyscheff,
        pessoas.JoaoCamara,
        pessoas.JoaoMoreiraSalles,
        pessoas.JoaquimFigueira,
    ],
    Patrocinios: undefined,
    Curadores: [
        pessoas.AgnaldoFarias,
        pessoas.AnnateresaFabris,
        pessoas.CacildaTeixeiraDaCosta,
        pessoas.JoseRobertoTeixeiraLeite,
        pessoas.MariaAliceMilliet,
        pessoas.MariliaSaboyaDeAlbuquerque,
        pessoas.NelsonAguilar,
        pessoas.TadeuChiarelli,
        pessoas.WalterZanini,
    ],
    Juri: undefined,
    Montadores: undefined,
};

export const Pinturas: Exposicao = {
    Nome: 'Pinturas',
    Instituicao: undefined,
    AbreviacaoInstituicao: undefined,
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Instituto Brasileiro de Arte e Cultura',
    DataInicio: '09/1991',
    DataFim: '11/10/1991',
    Expositores: [
        pessoas.AdrianoDeAquino,
        pessoas.AnnaBellaGeiger,
        pessoas.AntonioManuel,
        pessoas.CarlosVergara,
        pessoas.CarlosZilio,
        pessoas.EduardoSued,
        pessoas.KatievanScherpenberg,
    ],
    Patrocinios: undefined,
    Curadores: [
        pessoas.FernandoCocchiarale,
    ],
    Juri: undefined,
    Montadores: undefined,
};

export const CristinaCanaleCláudioFonsecaBeatrizMilhazesLuizPizarroLuizZerbini: Exposicao = {
    Nome: 'Cristina Canale, Cláudio Fonseca, Beatriz Milhazes, Luiz Pizarro, Luiz Zerbini',
    Instituicao: 'Fundaca Nacional de Arte',
    AbreviacaoInstituicao: 'FUNARTE',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Galeria Rodrigo Mello Franco de Andrade',
    DataInicio: '18/01/1989',
    DataFim: '09/02/1989',
    Expositores: [
        pessoas.BeatrizMilhazes,
        pessoas.CláudioFonseca,
        pessoas.CristinaCanale,
        pessoas.LuizPizarro,
        pessoas.LuizZerbini,
    ],
    Patrocinios: undefined,
    Curadores: [
        pessoas.FernandoCocchiarale,
    ],
    Juri: undefined,
    Montadores: undefined,
};

export const DecimoSalãoNacionaldeArtesPlásticas: Exposicao = {
    Nome: '10º Salão Nacional de Artes Plásticas',
    Instituicao: 'Fundação Nacional de Artes', // TODO ministerio da cultura???
    AbreviacaoInstituicao: 'FUNARTE',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '25/03/1988',
    DataFim: '28/04/1988',
    Expositores: [
        pessoas.AngeloVenosa,
        pessoas.ArmandoMattos,
        pessoas.BeatrizMilhazes,
        pessoas.CarlosAsp,
        pessoas.ChicoCunha,
        pessoas.ElianeProlik,
        pessoas.ErnestoNeto,
        pessoas.EvandroSalles,
        pessoas.FabioMiguez, //(PrêmioAquisição),
        pessoas.FernandoLindote,
        pessoas.FlaviaRibeiro,
        pessoas.FridaBaranek,
        pessoas.GiovannaMartins,
        pessoas.HamiltonGalvao,
        pessoas.IsauraPena,
        pessoas.JacLeirner,
        pessoas.JailtonMoreira,
        pessoas.JimmyLeroy,
        pessoas.JoaoMode, //(Prêmioaquisição),
        pessoas.LiaMennaBarreto,
        pessoas.MarcoGiannotti,
        pessoas.MarcoTulioResende,
        pessoas.MariaLuciaCattani,
        pessoas.MarioAzevedo,
        pessoas.MauricioBentes,
        pessoas.MonicaSartori,
        pessoas.Niculitcheff,
        pessoas.OrlandoCastano,
        pessoas.Paolo,
        pessoas.PauloAmaral,
        pessoas.PauloCampinho,
        pessoas.PauloPortella,
        pessoas.PauloRobertoLeal, //(PrêmioAquisição),
        pessoas.PauloSchmidt,
        pessoas.RenatoHeuser,
        pessoas.RicardoHomen,
        pessoas.RodolfoAthayde,
        pessoas.RubensOestroem,
        pessoas.SaraMalenchini,
        pessoas.Schwanke,
        pessoas.SolangeOliveira,
        pessoas.SuzanaQueiroga,
        pessoas.ValerioRodrigues,
    ],
    Patrocinios: undefined,
    ComissaoDeSelecao: [
        pessoas.FernandoCocchiarale,
        pessoas.IvoMesquita,
        pessoas.JoseAlbertoNemer,
        pessoas.MarcelloNitsche,
        pessoas.MarcusDeLontraCosta,
    ],
    Juri: undefined,
    Montadores: undefined,
};

export const DoModernoaoContemporâneoColeçãoGilbertoChateaubriandMAM: Exposicao = {
    Nome: 'Do Moderno ao Contemporâneo: Coleção Gilberto Chateaubriand',
    Instituicao: 'Coleção Gilberto Chateaubriand', // TODO ???
    AbreviacaoInstituicao: undefined,
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Museu de Arte Moderna do Rio de Janeiro (MAM RIO)',
    DataInicio: '21/05/1981',
    DataFim: ' 19/07/1981',
    Expositores: [
        pessoas.AlfredoVolpi,
        pessoas.AluisioCarvao,
        pessoas.AngeloDeAquino,
        pessoas.AntonioHenriqueAmaral,
        pessoas.AscanioMMM,
        pessoas.CarlosVergara,
        pessoas.CarlosZilio,
        pessoas.CildoMeireles,
        pessoas.EmericMarcier,
        pessoas.FranciscoBrennand,
        pessoas.GlaucoRodrigues,
        pessoas.Guignard,
        pessoas.HugoDenizart,
        pessoas.IoneSaldanha,
        pessoas.IvaldGranato,
        pessoas.JoaoCarlosGalvao,
        pessoas.LuizAlphonsus,
        pessoas.MarciaBarrosoDoAmaral,
        pessoas.MariaDoCarmoSecco,
        pessoas.MauroKleiman,
        pessoas.MiltonMachado,
        pessoas.MiraSchendel,
        pessoas.NelsonFelix,
        pessoas.OsmarDillon,
        pessoas.PaivaBrasil,
        pessoas.RaymundoColares,
        pessoas.RobertoFeitosa,
        pessoas.SergioCamargo,
        pessoas.TarsilaDoAmaral,
        pessoas.Tunga,
        pessoas.VicenteDoRegoMonteiro,
        pessoas.WaltercioCaldas,
        pessoas.WesleyDukeLee,
    ],
    Patrocinios: undefined,
    ComissaoDeSelecao: [
        pessoas.FernandoCocchiarale,
        pessoas.WilsonCoutinho,
    ],
    Juri: undefined,
    Montadores: undefined,
};

export const DoModernoaoContemporâneoColeçãoGilbertoChateaubriandLisboa: Exposicao = {
    Nome: 'Do Moderno ao Contemporâneo: Coleção Gilberto Chateaubriand',
    Instituicao: 'Coleção Gilberto Chateaubriand', // TODO ???
    AbreviacaoInstituicao: undefined,
    Cidade: 'Lisboa',
    Estado: undefined,
    Pais: 'Portugal',
    Local: 'Centro de Arte Moderna José de Azeredo Perdigão',
    DataInicio: '1982',
    DataFim: undefined,
    Expositores: [
        pessoas.AlfredoVolpi,
        pessoas.AluisioCarvao,
        pessoas.AngeloDeAquino,
        pessoas.AntonioHenriqueAmaral,
        pessoas.AscanioMMM,
        pessoas.CarlosVergara,
        pessoas.CarlosZilio,
        pessoas.CildoMeireles,
        pessoas.EmericMarcier,
        pessoas.GlaucoRodrigues,
        pessoas.Guignard,
        pessoas.IoneSaldanha,
        pessoas.IvaldGranato,
        pessoas.JoaoCarlosGalvao,
        pessoas.KatievanScherpenberg,
        pessoas.LuizAlphonsus,
        pessoas.MarciaBarrosoDoAmaral,
        pessoas.MariaDoCarmoSecco,
        pessoas.MauroKleiman,
        pessoas.MiltonMachado,
        pessoas.MiraSchendel,
        pessoas.NelsonFelix,
        pessoas.OsmarDillon,
        pessoas.PaivaBrasil,
        pessoas.RaymundoColares,
        pessoas.RobertoFeitosa,
        pessoas.SergioCamargo,
        pessoas.TarsilaDoAmaral,
        pessoas.Tunga,
        pessoas.VicenteDoRegoMonteiro,
        pessoas.WaltercioCaldas,
        pessoas.WesleyDukeLee,
    ],
    Patrocinios: undefined,
    ComissaoDeSelecao: [
        pessoas.FernandoCocchiarale,
        pessoas.WilsonCoutinho,
    ],
    Juri: undefined,
    Montadores: undefined,
};

export const BienaldeArtesdeGoiás: Exposicao = {
    Nome: '3ª Bienal de Artes de Goiás',
    Instituicao: undefined,
    AbreviacaoInstituicao: undefined,
    Cidade: 'Goiânia',
    Estado: 'Goiás',
    Pais: 'Brasil',
    Local: 'Museu de Arte Contemporânea de Goiás',
    DataInicio: '11/05/1993',
    DataFim: '04/07/1993',
    Expositores: [
        pessoas.ALoiola,
        pessoas.AguinaldoCoelho,
        pessoas.Alfio,
        pessoas.AlmiraReuter,
        pessoas.AnselmoArlota,
        pessoas.AntonioElias,
        pessoas.ArlindoCastro,
        pessoas.BereniceGonçalves,
        pessoas.CarlosSena,
        pessoas.CarmemFreitas,
        pessoas.ChicoFernandes,
        pessoas.DeniseRocha,
        pessoas.Dijodio, //(PrêmioD.J.Oliveira),
        pessoas.EdneyAntunes,
        pessoas.EduardoVararelli,
        pessoas.Enauro,
        pessoas.FabioNoronha, //(PrêmioXapuri-Revelação/93),
        pessoas.IvacyDeSousa,
        pessoas.JoaoBraz,
        pessoas.JorgeWilson,
        pessoas.LidiaSemerene,
        pessoas.LiviaRizzo,
        pessoas.LucioBarreto,
        pessoas.LuizMauro, //(PrêmioGaleriaAberta),
        pessoas.MANasserLeone,
        pessoas.MarceloSola, //(PrêmioAliançaFrancesa),
        pessoas.MarcosRodrigues,
        pessoas.MarildaPassos,
        pessoas.MarildaSousa,
        pessoas.MartaPenner,
        pessoas.MiguelSimao,
        pessoas.NelmaGuimarães, //(ReferênciaEspecialdoJúri),
        pessoas.PatriciaFaria,
        pessoas.RobertaFalcone,
        pessoas.SelmaParreira,
        pessoas.Sobral,
        pessoas.SuelitaCosta, //(ReferênciaEspecialdoJúri),
        pessoas.Tai,
        pessoas.ThomasRitter,
        pessoas.VitoriaBasaia,
        pessoas.WalterMenon,
        pessoas.Yaphy,
    ],
    Patrocinios: undefined,
    Curadores: undefined,
    Juri: [
        pessoas.CarlosFernandoMagalhaes,
        pessoas.FernandoCocchiarale,
        pessoas.GraceMariaMachadoDeFreitas,
        pessoas.MiguelJorge,
    ],
    Montadores: undefined,
    Organizadores: [
        pessoas.AmauryMenezes,
        pessoas.FernandoCostaFilho,
        pessoas.ReinaldoBarbalho,
        pessoas.VirgíniaRGuimarães,
    ],
};

export const SalãodeAbril1994: Exposicao = {
    Nome: '45º Salão de Abril',
    Instituicao: undefined,
    AbreviacaoInstituicao: undefined,
    Cidade: 'Fortaleza',
    Estado: 'Ceará',
    Pais: 'Brasil',
    Local: 'Museu de Arte da UFC',
    DataInicio: '13/04/1994',
    DataFim: '31/05/1994',
    Expositores: [pessoas.SinhaDAmora],
    Patrocinios: undefined,
    Curadores: undefined,
    Juri: [
        pessoas.CarlosFajardo,
        pessoas.Estrigas,
        pessoas.PauloHerkenhoff,
    ],
    Montadores: undefined,
};

export const OClássiconoContemporâneo: Exposicao = {
    Nome: 'O Clássico no Contemporâneo',
    Instituicao: undefined,
    AbreviacaoInstituicao: undefined,
    Cidade: 'São Paulo',
    Estado: 'São Paulo',
    Pais: 'Brasil',
    Local: 'Paço das Artes',
    DataInicio: '27/10/1991',
    DataFim: '17/11/1991',
    Expositores: [
        pessoas.AnnaMariaMaiolino,
        pessoas.CildoMeireles,
        pessoas.ErnestoNeto,
        pessoas.EsterGrinspum,
        pessoas.IoleDeFreitas,
        pessoas.KatievanScherpenberg,
        pessoas.SergioCamargo,
        pessoas.SoniaLabouriau,
        pessoas.WaltercioCaldas,
    ],
    Patrocinios: undefined,
    Juri: undefined,
    Curadores: [
        pessoas.PauloHerkenhoff,
    ],
    Montadores: undefined,
};

export const SalãodeAbril1991: Exposicao = {
    Nome: '42º Salão de Abril',
    Instituicao: undefined,
    AbreviacaoInstituicao: undefined,
    Cidade: 'Fortaleza',
    Estado: 'Ceará',
    Pais: 'Brasil',
    Local: 'Galeria Antônio Bandeira',
    DataInicio: '09/04/1991',
    DataFim: '15/05/1991',
    Expositores: [
        pessoas.AlanoFreitas, // (Prêmio Desenho)
        pessoas.CelsoOliveira, // (Prêmio Fotografia)
        pessoas.HelioRola, // (Prêmio Pintura)
        pessoas.Joelson, // (Prêmio Pintura)
        pessoas.MarcusFrancisco, //
        pessoas.ServuloEsmeraldo, // (Prêmio Escultura)
    ],
    Patrocinios: undefined,
    Curadores: undefined,
    Juri: [
        pessoas.PauloHerkenhoff,
        pessoas.PedroEymar,
        pessoas.SoniaSalzstein,
    ],
    Montadores: undefined,
};

export const RioHoje: Exposicao = {
    Nome: 'Rio Hoje',
    Instituicao: 'Museu de Arte Moderna do Rio de Janeiro',
    AbreviacaoInstituicao: 'MAM RIO',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Museu de Arte Moderna do Rio de Janeiro (MAM RIO)',
    DataInicio: '25/10/1989',
    DataFim: '26/11/1989',
    Expositores: [
        pessoas.AdrianaVarejao,
        pessoas.AdrianoDeAquino,
        pessoas.AluisioCarvao,
        pessoas.AmilcarDeCastro,
        pessoas.AngeloVenosa,
        pessoas.AnnaMariaMaiolino,
        pessoas.AntonioManuel,
        pessoas.ArturBarrio,
        pessoas.Barrao,
        pessoas.BeatrizMilhazes,
        pessoas.CarlosBevilacqua,
        pessoas.CarlosZilio,
        pessoas.CildoMeireles,
        pessoas.DanielSenise,
        pessoas.DionisioDelSanto,
        pessoas.EduardoFrota,
        pessoas.EduardoSued,
        pessoas.ElizabethJobim,
        pessoas.ErnestoNeto,
        pessoas.EvanyFanzeres,
        pessoas.FernandaGomes,
        pessoas.FlavioShiro,
        pessoas.FranzWeissmann,
        pessoas.HiltonBerredo,
        pessoas.IbereCamargo,
        pessoas.IoleDeFreitas,
        pessoas.IoneSaldanha,
        pessoas.IvensMachado,
        pessoas.JoaoGrijo,
        pessoas.JorgeDuarte,
        pessoas.KatievanScherpenberg,
        pessoas.LucianoFigueiredo,
        pessoas.LygiaPape,
        pessoas.ManfredoDeSouzanetto,
        pessoas.MauricioBentes,
        pessoas.MauricioRuiz,
        pessoas.MiguelRioBranco,
        pessoas.MiltonMachado,
        pessoas.NelsonFelix,
        pessoas.PauloRobertoLeal,
        pessoas.RonaldoMacedo,
        pessoas.RubensGerchman,
        pessoas.SergioCamargo,
        pessoas.Tunga,
        pessoas.VictorArruda,
        pessoas.WaltercioCaldas,
    ],
    Patrocinios: undefined,
    Curadores: [
        pessoas.LigiaCanongia,
        pessoas.PauloHerkenhoff,
        pessoas.ReynaldoRoels,
        pessoas.VivianeMatesco,
    ],
    Juri: undefined,
    Montadores: undefined,
};

export const BienalInternacionaldeSãoPaulo_1989: Exposicao = {
    Nome: '20ª Bienal Internacional de São Paulo',
    Instituicao: 'Fundação Bienal de São Paulo',
    Cidade: 'São Paulo',
    Estado: 'São Paulo',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '14/10/1989',
    DataFim: '10/12/1989',
    Expositores: [
        pessoas.Adalberto,
        pessoas.AlexFlemming,
        pessoas.AmilcarDeCastro,
        pessoas.AnaAndre,
        pessoas.AnaMichaelis,
        pessoas.AnatolWladyslaw,
        pessoas.AnesiaPachecoEChaves,
        pessoas.AngelaSantos,
        pessoas.AngeloMilani,
        pessoas.AnnaBellaGeiger,
        pessoas.AntonioBandeira,
        pessoas.AntonioPeticov,
        pessoas.ArcangeloIanelli,
        pessoas.ArnaldoBattaglini,
        pessoas.ArrietChahin,
        pessoas.ArturMatuck,
        pessoas.BeraldaAltenfelder,
        pessoas.BernardoKrasniansky,
        pessoas.Caito,
        pessoas.CarlosBarmak,
        pessoas.CarlosDelfino,
        pessoas.CarlosVergara,
        pessoas.CarmelaGross,
        pessoas.CeliaCymbalista,
        pessoas.CelsoRenato,
        pessoas.CicaAbsAndre,
        pessoas.CildoMeireles,
        pessoas.ClaraCastello,
        pessoas.ClaudioTozzi,
        pessoas.CleberMachado,
        pessoas.DanielSenise,
        pessoas.DanielaThomas,
        pessoas.DaniloDiPrete,
        pessoas.DeniseMilan,
        pessoas.DomingosSeno,
        pessoas.DudiMaiaRosa,
        pessoas.EduardoSued,
        pessoas.EduardoVerenguel,
        pessoas.EideFeldon,
        pessoas.EmmanuelNassar,
        pessoas.ErnestinaKarman,
        pessoas.EsterGrinspum,
        pessoas.EveliPrvupiorka,
        pessoas.FabianaDeBarros,
        pessoas.FabioLopes,
        pessoas.FabioMiguez,
        pessoas.FernandoStickel,
        pessoas.FlaviaFernandes,
        pessoas.FlaviaRibeiro,
        pessoas.FlavioDeCarvalho,
        pessoas.FlavioImperio,
        pessoas.FlavioShiro,
        pessoas.Flexor,
        pessoas.FranciscoBrennand,
        pessoas.FransKrajcberg,
        pessoas.FridaBaranek,
        pessoas.GenilsonSoares,
        pessoas.GeraldoDeSouza,
        pessoas.GeraldoParanhos,
        pessoas.GlauciaAmaralDeSouza,
        pessoas.GlaucoRodrigues,
        pessoas.HelioVinci,
        pessoas.HenriqueBoese,
        pessoas.HerculesBarsotti,
        pessoas.HildeWeber,
        pessoas.HiltonBerredo,
        pessoas.IbereCamargo,
        pessoas.IoleDiNatale,
        pessoas.IvaldGranato,
        pessoas.IvanSerpa,
        pessoas.JCSerroni,
        pessoas.JacLeirner,
        pessoas.JacquesJesion,
        pessoas.JaimePrades,
        pessoas.JorgeGuinle,
        pessoas.JoseAntonioDaSilva,
        pessoas.JoseCarratu,
        pessoas.JoseResende,
        pessoas.JuCorteReal,
        pessoas.JulioMinervino,
        pessoas.KarenSilveira,
        pessoas.KatievanScherpenberg,
        pessoas.LasarSegall,
        pessoas.LaszloMeitner,
        pessoas.LauritaSalles,
        pessoas.LevinHans,
        pessoas.LoioPersio,
        pessoas.LuizAquila,
        pessoas.LuizMonforte,
        pessoas.LuizPauloBaravelli,
        pessoas.LuizSolha,
        pessoas.LygiaPape,
        pessoas.MadalenaHashimoto,
        pessoas.ManabuMabe,
        pessoas.MarceloCipis,
        pessoas.MarcioAntonon,
        pessoas.MarcodoValle,
        pessoas.MarcosCoelhoBenjamim,
        pessoas.MariaBonomi,
        pessoas.MariaHelenaAndres,
        pessoas.MariaLeontina,
        pessoas.MariaTerezaLouro,
        pessoas.MariannitaLuzzati,
        pessoas.MarinaSaleme,
        pessoas.MarioFiore,
        pessoas.MarioIshikawa,
        pessoas.MarioRamiro,
        pessoas.MartaOliveira,
        pessoas.MaureenBisilliat,
        pessoas.MaySuplicy,
        pessoas.MiraSchendel,
        pessoas.MonicaBarth,
        pessoas.MonicaSartori,
        pessoas.NaumAlvesDeSouza,
        pessoas.NazarethPacheco,
        pessoas.NelsonLeirner,
        pessoas.Niculitcheff,
        pessoas.NinaMoraes,
        pessoas.NunoRamos,
        pessoas.OctavioPereira,
        pessoas.PatriciaFurlong,
        pessoas.PaulaAhzugaray,
        pessoas.PauloBruscky,
        pessoas.PauloMendesDaRocha,
        pessoas.PauloWhitaker,
        pessoas.PedroLopes,
        pessoas.Piza,
        pessoas.RenataBarros,
        pessoas.ReninaKatz,
        pessoas.RobertoKeppler,
        pessoas.RobertoMicoli,
        pessoas.RomerodeAndraDeLima,
        pessoas.SandraTucci,
        pessoas.SantaRosa,
        pessoas.SelmaDaffre,
        pessoas.SergioCamargo,
        pessoas.SergioGuerini,
        pessoas.SheilaBrannigan,
        pessoas.SironFranco,
        pessoas.TeresaBerlinck,
        pessoas.TomieOhtake,
        pessoas.VeraBarros,
        pessoas.VeraChavesBarcellos,
        pessoas.VeraRodrigues,
        pessoas.VicenteKutka,
        pessoas.VictorBrecheret,
        pessoas.VieiraDaSilva,
        pessoas.VilanovaArtigas,
        pessoas.VivianOstrowsky,
        pessoas.WaltercioCaldas,
        pessoas.WegaNery,
        pessoas.WesleyDukeLee,
        pessoas.YolandaMohalyi,
        pessoas.YutakaToyota,
        pessoas.ZeCassio,
    ],
    Patrocinios: undefined,
    Curadores: [
        pessoas.CarlosVonSchmidt,
        pessoas.CasemiroXavierDeMendonça,
        pessoas.CesarLuisPiresDeMelloo,
        pessoas.GabrielBorba,
        pessoas.JoaoCandidoGalvao,
        pessoas.LuizPauloBaravelli,
        pessoas.StellaTeixeiraDeBarros,
    ],
    ComissaoDeSelecao: [
        pessoas.GilbertoChateaubriand,
        pessoas.JoseAlbertoNemer,
        pessoas.MarceloGrassmann,
        pessoas.MarcusDeLontraCosta,
        pessoas.PauloHerkenhoff,
    ],
    Juri: undefined,
    Montadores: [pessoas.GuimarMorelo],
};

export const CaminhosdoDesenhoBrasileiro: Exposicao = {
    Nome: 'Caminhos do Desenho Brasileiro',
    Instituicao: undefined,
    AbreviacaoInstituicao: undefined,
    Cidade: 'Porto Alegre',
    Estado: 'Rio Grande do Sul',
    Pais: 'Brasil',
    Local: 'Museu de Arte do Rio Grande do Sul Ado Malagoli',
    DataInicio: '12/11/1986',
    DataFim: '06/12/1986',
    Expositores: [
        pessoas.AnaMariaTavares,
        pessoas.AngeloMarzano,
        pessoas.BelmiroDeAlmeida,
        pessoas.BeraldaAltenfelder,
        pessoas.BernardoKrasniansky,
        pessoas.CarlosPasquetti,
        pessoas.CarlosWladimirsky,
        pessoas.ChicoCunha,
        pessoas.ChristinaParisi,
        pessoas.DanielSenise, //(SegundoPrêmiodoDesenhoBrasileiro),
        pessoas.Darel,
        pessoas.DiCavalcanti,
        pessoas.EdithDerdyk,
        pessoas.EsterGrinspum,
        pessoas.EvandroSalles,
        pessoas.FlavioFerraz,
        pessoas.Guignard,
        pessoas.GustavoRezende,
        pessoas.IgorMarques, //(PrimeiroPrêmiodoDesenhoBrasileiro),
        pessoas.IsauraPena,
        pessoas.JadirFreire,
        pessoas.JairGlass,
        pessoas.JulioPlaza,
        pessoas.LasarSegall,
        pessoas.Leonilson,
        pessoas.MarcosRuck,
        pessoas.MariaTomaselli,
        pessoas.MárioRohnelt,
        pessoas.MarujaCachay,
        pessoas.MauroClaro,
        pessoas.MillorFernandes,
        pessoas.MiltonKurtz, //(TerceiroPrêmiodoDesenhoBrasileiro),
        pessoas.MiraSchendel,
        pessoas.MonicaSartori,
        pessoas.NelsonFelix,
        pessoas.OrlandoCastano,
        pessoas.OswaldoGoeldi,
        pessoas.PauloGarcez,
        pessoas.PauloHouayek,
        pessoas.PauloPortella,
        pessoas.PauloRobertoLeal,
        pessoas.PedroNava,
        pessoas.RaulCordula,
        pessoas.RuthSchneider,
        pessoas.Schwanke,
        pessoas.TarsilaDoAmaral,
        pessoas.Tunga, //(PrêmioGovernodoEstadoORioGrandedoSul/DestaquedoDesenhoBrasileiro),
        pessoas.VicenteDoRegoMonteiro,
        pessoas.VictorBrecheret,
        pessoas.ZicaBergami,
    ],
    Patrocinios: undefined,
    Curadores: [
        pessoas.EvelynBergIochpe,
        pessoas.PauloHerkenhoff,
    ],
    ComissaoDeSelecao: [
        pessoas.AmilcarDeCastro,
        pessoas.AngelicaDeMoraes,
        pessoas.CasemiroXavierDeMendonça,
        pessoas.EvelynBergIochpe,
        pessoas.FredericoMoraes,
        pessoas.MarcioSampaio,
        pessoas.PauloHerkenhoff,
        pessoas.ReginaSilveira,
    ],
    Montadores: undefined,
};
