import * as persons from './persons';
import Exposicao from '../../domain/exposicao';

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
    persons.JoseResende,
    //persons.JuraciDoria,
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
    persons.JoseResende,
    //persons.CildoMeireles,
    //persons.JacLeirner,
    //persons.SaintClairCemin,
    persons.WaltercioCaldas,
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
    persons.AluisioCarvao,
    persons.AmilcarDeCastro,
    persons.DecioVieira,
    persons.FerreiraGullar,
    persons.FranzWeissmann,
    persons.HelioOiticica,
    persons.HerculesBarsotti,
    persons.IvanSerpa,
    persons.LygiaClark,
    persons.LygiaPape,
    persons.OsmarDillon,
    persons.TheonSpanudis,
    persons.WillysDeCastro,
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
    persons.AluisioCarvao,
    persons.AmilcarDeCastro,
    persons.ClaudioMelloESouza,
    persons.DecioVieira,
    persons.FerreiraGullar,
    persons.FranzWeissmann,
    persons.HelioOiticica,
    persons.HerculesBarsotti,
    persons.LygiaClark,
    persons.LygiaPape,
    persons.OsmarDillon,
    persons.ReynaldoJardim,
    persons.RobertoPontual,
    persons.TheonSpanudis,
    persons.WillysDeCastro,
    persons.VasniSantana, //TODO itau cultural n cita ele
  ],
  Patrocinios: ['Rioarte', 'BAnerj', 'Transportes Fink'],
  Curadores: [persons.FernandoCocchiarale],
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
    persons.AluisioCarvao,
    persons.FranzWeissmann,
    persons.LygiaClark,
    persons.LygiaPape,
  ],
  Patrocinios: undefined,
  Curadores: [persons.FernandoCocchiarale],
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
    persons.AmilcarDeCastro,
    persons.AngeloVenosa,
    persons.CristinaSalgado,
    persons.FransKrajcberg,
    persons.FranzWeissmann,
    persons.LygiaPape,
    persons.Tunga,
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
    persons.AldirMendesDeSouza,
    persons.AlfredoVolpi,
    persons.AncangeloIanelli,
    persons.FranzWeissmann,
  ],
  Patrocinios: undefined,
  Curadores: undefined, //persons.SabinadeLibman
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
  Expositores: [persons.FranzWeissmann],
  Patrocinios: undefined,
  Curadores: undefined, //TODO
};

export const PrimeiraExposiçãoInternacionaldeEsculturasEfemerasForteleza1986: Exposicao =
  {
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
      //persons.AmeliaToledo,
      persons.AmilcarDeCastro,
      persons.AscanioMMM,
      //persons.CarlosFarjado,
      //persons.DudiMajaRosa,
      persons.FransKrajcberg,
      persons.JoseResende,
      //persons.JulioPlaza
      //persons.Leonilson,
      persons.MauricioBentes,
      //persons.NelzonLeirner,
      persons.GianPietroZanni,
      //persons.ReginaSilveira,
      persons.SergioCamargo,
      persons.ServuloEsmeraldo,
      persons.SironFranco, //TODO este n estava no itaul cultural como nos fatos
    ],
    Patrocinios: undefined,
    Curadores: [persons.ServuloEsmeraldo],
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
    persons.AmilcarDeCastro,
    persons.AnaNorogrando,
    persons.CarlosDeBrittoVelho,
    persons.ClaudioTozzi,
    persons.FernandoLindote,
    persons.FranciscoStockinger,
    persons.FranzWeissmann,
    persons.GaudencioFidelis,
    persons.JoseResende,
    persons.MarliAmadoAraujo,
    persons.PatricioFarias,
    persons.PauloRobertoDeChristo,
    persons.ServuloEsmeraldo,
    persons.SironFranco,
    persons.VascoPrado,

    //TODO o citados abaixo n constam no itau cultural
    persons.ClaudioMaciel,
    persons.GustavoNakle,
    persons.XicoStockinger,
    persons.JorgeFranciscoSoto,
    persons.MieyaBaglietto,
    persons.PepAdmetlla,
    persons.JulianAgosta,
    persons.JoseDeGuimaraes,
  ],
  Patrocinios: undefined,
  Curadores: undefined, //persons.JoseFraciscoAlves
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
  Expositores: [persons.AmilcarDeCastro],
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
    persons.HildegardoLeaoVelloso,
    persons.ManoelConstantino,
    persons.HaydeaSantiago,
    persons.GasparMagalhaes,
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
    //persons.AldemirMartins,
    //persons.AlexandreWollner, //(Prêmio pelo Cartaz do evento)
    persons.AlfredoVolpi,
    //persons.AlmirMavignier,
    persons.AluisioCarvao,
    //persons.AnatolWladyslaw,
    //persons.AnnaLetycia,
    //persons.AntonioBandeira
    //persons.ArnaldoPedrosoDHorta
    //persons.BenNicholson, // (Prêmio Pintura Estrangeira)
    persons.BrunoGiorgi,
    //persosns.BurleMarx
    //persons.ClaraHeteny
    //persons.DaniloDiPrete
    //persons.DorothyBastos
    //persons.EdithBehring
    //persons.Elide onzeglio
    //persons.ElisaMartinsDaSilveira
    //persons.EmericLanyi
    //persons.ErnaniVasconcellos
    //persons.FaygaOstrower // (Prêmio Gravura Nacional)
    //persons.FernandoLemos,// (Prêmio Desenho Nacional)
    //persons.FlavioShiro
    //persons.Flexor
    //persons.FranciscoAmêndola
    persons.FransKrajcberg, // (Prêmio Pintura Nacional)
    persons.FranzWeissmann, // (Prêmio Escultura Nacional)
    //persons.GiorgioMorandi,// (Grande Prêmio São Paulo)
    //persons.Hamaguchi, //(Prêmio Gravura Estrangeira)
    //persons.HansenBahia,
    //persons.HelioOiticica,
    //persons.HerculesBarsotti,
    //persons.HermelindoFiaminghi,
    //persons.HildeWeber,
    //persons.IlsaKawallLealFerreira,
    //persons.IoneSaldanha,
    persons.IvanSerpa,
    //persons.JacquesDouchez,
    //persons.JoaoLuisOliveiraChaves,
    //persons.JorgedeOteiza, //(Prêmio Escultura Estrangeira)
    //persons.JoseClaudio,
    //persons.JoseFabioBarbosaDaSilva,
    //persons.JosePedrosa,
    //persons.KarlPlattner,
    //persons.LasarSegall,
    //persons.LeopoldoRaimo,
    //persons.LeylaPerroneMoisés,
    //persons.LotharCharoux,
    //persons.LuizSacilotto,
    //persons.LulaCardosoAyres,
    persons.LygiaClark,
    persons.LygiaPape,
    //persons.MarceloGrassmann,
    //persons.MariaLeontina, //(Prêmio Aquisição)
    //persons.MarioCravoJúnior,
    //persons.MauricioNogueiraLima,
    //persons.MiltonDacosta, //(Prêmio Aquisição)
    //persons.Moussia,
    //persons.PaoloRissone,
    //persons.Piza,
    //persons.RaymundoNogueira,
    //persons.RossiniPerez,
    persons.SergioCamargo,
    //persons.TeresaDAmico,
    //persons.TeresaNicolao,
    //persons.TizianaBonazzola,
    persons.VictorBrecheret,
    //persons.WaldemarCordeiro,
    //persons.WaldemarDaCosta,
    //persons.WegaNery, //(Prêmio Desenho Nacional)
    persons.WillysDeCastro,
    //persons.YolandaMohalyi,
    //persons.ZeliaSalgado,
  ],
  Patrocinios: undefined,
  Curadores: undefined,
  Juri: [
    //persons.AlfredHBarr
    //persons.ArmandoBFerrari
    //persons.ArthurProfili
    //persons.CarlosFlexaRibeiro
    //persons.FlavioDeAquino
    //persons.JVanLerberghe
    //persons.JCHeyligers
    //persons.JacquesLassaigne
    //persons.JiriKotalik
    //persons.LivioAbramo
    //persons.LourivalGomesMachado
    //persons.LudwigGrote
    //persons.LuizGonzalesRobles
    //persons.MarcelIanco
    //persons.MarcoValsecchi
    persons.MariaMartins, // TODO é ela mesma??
    //persons.PhilipHendy
    //persons.ShinkenKurihara
    //persons.WolfgangPfeiffer
  ],
  JuriDeSelecao: undefined, //persons.JoseGeraldoVieira
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
    //persons.AloysioZaluar
    persons.AluisioCarvao,
    //persons.AlvaroApocalypse
    //persons.AnnaLetycia //(Prêmio Viagem ao País)
    //persons.ArnaldoPedrosoDHorta
    //persons.Babinski
    //persons.BustamanteSa
    //persons.CarlosScliar
    //persons.Djanira
    //persons.EdsonMotta
    //persons.FaygaOstrower
    //persons.FranciscoRebolo
    persons.FranzWeissmann, //(Prêmio Viagem ao Exterior)
    //persons.GilvanSamico
    //persons.GlenioBianchetti
    //persons.Guignard
    //persons.HeloisadeFaria
    //persons.JoséOiticicaFilho
    persons.LygiaPape, //(Prêmio Isenção de Júri (medalha de prata))
    //persons.MariaHelenaAndres
    persons.MaryVieira,
    //persons.NoemiaGuerra
    //persons.OrlandoDaSilva
    //persons.ReninaKatz
    //persons.RossiniPerez
    //persons.RubemValentim //(Prêmio Aquisição)
    persons.SergioCamargo,
    //persons.Sheila
    //persons.TakeshiSuzuki
    //persons.UbirajaraRibeiro
    //persons.Zaluar //(Premio de viagem ao exterior)
  ],
  Patrocinios: undefined,
  Curadores: undefined, //TODO
  Juri: undefined, //persons.IbereCamargo
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
    persons.CristinaSalgado,
    //persons.DavidCury
    //persons.ElianeDuarte
    //persons.EnricaBernardelli
    //persons.FabioNoronha //(Prêmio Viagem ao País)
    //persons.FeresLourençoKhoury
    //persons.FernandoAugusto
    persons.FranzWeissmann, // TODO nao aparece no itaul cultural como expositor, apesar de receber o premio
    //persons.FredericoDalton
    //persons.oseBento
    //persons.JoseDamasceno
    //persons.KlingerCarvalho
    //persons.LorisMachado
    //persons.MarcoPauloRolla
    //persons.MonicaSartori //(Prêmio Viagem ao Exterior)
    //persons.NelsonScrenci
    //persons.NiuraBellavinha
    //persons.NydiaNegromonte
    //persons.PedroWrede
    //persons.RinaldoSilva //(Prêmio Unesco)
    //persons.RosanaPalazyan //(Prêmio Aquisição)
    //persons.RosangelaRenno
    //persons.VaniaBarbosa
    //persons.VeraMartins
  ],
  Patrocinios: undefined,
  Curadores: undefined,
  Juri: [
    //persons.AracyAmaral
    persons.FerreiraGullar,
    persons.FredericoMoraes,
    //persons.JoaoCarlosGoldberg
    //persons.MarcusDeLontraCosta
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
  Expositores: [persons.FranzWeissmann],
  Patrocinios: undefined,
  Curadores: undefined, //TODO
  CatalogoEscritoPor: [persons.ReynaldoRoels],
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
  Expositores: [persons.FranzWeissmann],
  Patrocinios: undefined,
  Curadores: undefined, //TODO
  CatalogoEscritoPor: [persons.ReynaldoRoels],
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
    //persons.AntonioDias,
    //persons.ArturBarrio
    //persons.CildoMeireles
    persons.JoseResende,
    //persons.MarcelloNitsche
    persons.Tunga,
    //persons.UmbertoCostiBarros //TODO n consta no itau cultural
    persons.WaltercioCaldas,
  ],
  Patrocinios: undefined,
  Curadores: [persons.EverardoMiranda],
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
    //persons.AlexandreWollner
    //persons.AlmirMavignier
    persons.AluisioCarvao,
    persons.AmilcarDeCastro,
    persons.DecioVieira,
    //persons.Fejer
    persons.FranzWeissmann,
    //persons.GeraldoDeBarros
    persons.HelioOiticica,
    persons.HerculesBarsotti,
    //persons.HermelindoFiaminghi
    //persons.JudithLauand
    //persons.LuizSacilotto
    persons.LygiaClark,
    persons.LygiaPape,
    persons.MaryVieira,
    //persons.MauricioNogueiraLima
    //persons.WaldemarCordeiro
    persons.WillysDeCastro,
  ],
  Patrocinios: undefined,
  Curadores: undefined, //persons.MaxBill,
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
    //persons.AlexandreFilho
    //persons.AloysioZaluar// (Isenção do júri)
    persons.AmilcarDeCastro,
    //persons.AntonioManuel
    persons.AscanioMMM,
    //persons.BettyKing
    //persons.CarlosVergara
    //essoas.CeliaShalders
    //persons.Chanina //(Isenção do Júri.)
    //persons.EraldoMotta
    //persons.Kaiuca
    //persons.MariaLuizaLeao
    //persons.MarinaNazareth
    //persons.PauloMenten
    //persons.PedroEscosteguy
    //persons.QuirinoCampofiorito
    //persons.RubemLudolf
    //persons.RubensGerchman
    //persons.Sigaud
    //persons.SolangeEscosteguy
    persons.SoniaEbling, //(Prêmio de Viagem ao Brasil)
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
    //persons.AbrahamPalatnik
    //persons.AfonsoDuarteAngelico
    //persons.AgostinhoDaMotta
    //persons.Ahmes
    //persons.AlbertoTeixeira
    //persons.AldemirMartins //(Nadir Figueiredo S.A.)
    //persons.AlexanderCalder
    //persons.AlexandreWollner
    //persons.AlfredManessier //(Prêmio Internacional de Pintura)
    persons.AlfredoCeschiatti,
    persons.AlfredoVolpi, //(Prêmio Nacional de Pintura)
    //persons.AlmeidaJunior
    //persons.loisioMagalhaes
    persons.AluisioCarvao,
    persons.AmilcarDeCastro,
    //persons.AnatolWladyslaw
    //persons.AnesiaPachecoeChaves
    //persons.AntonioAlvesAlmeida
    //persons.AntonioBandeira //(Prêmio pelo Cartaz)
    //persons.AntonioParreiras
    //persons.AntonioPrado Netto
    //persons.AntonioVargas
    //persons.ArmandoBalloni
    //persons.ArnaldoPedrosoDHorta //(Prêmio Nacional de Desenho)
    //persons.ArnaudJulienPallière
    //persons.AugustMuller
    //persons.AugustoRodrigues
    //persons.AugustoRodriguesDuarte
    //persons.Aurélio eFigueiredo
    //persons.BaptistaDaCosta
    //persons.BassanoVaccarini
    //persons.BellaPrado
    //persons.BenShahn //(Prêmio Internacional de Desenho)
    //persons.Bonadei
    persons.BrunoGiorgi, // (Prêmio Nacional de Escultura)
    //persons.CaciporeTorres
    //persons.CaetanoFraccaroli
    //persons.CarlosBastos
    //persons.CarlosPrado
    //persons.Caron
    //persons.Carybe
    //persons.Castagneto
    //persons.CHMartin
    //persons.CiceroDias
    //persons.ClaraHeteny
    //persons.DaniloDiPrete
    //persons.DarcyPenteado
    persons.DecioVieira,
    //persons.DeiaDeCamposLemos
    //persons.DiCavalcanti //(Prêmio Nacional de Pintura)
    //persons.Djanira
    //persons.ElisaMartinsDaSilveira
    //persons.ElisabethNobiling
    //persons.EliseuVisconti
    //persons.EmanuelManasse
    //persons.EmericLanyi
    //persons.EmericMarcier
    //persons.EmygdioDeBarros
    //persons.EstellaTuschnieder
    //persons.Fampon
    //persons.FaygaOstrower
    //persons.FeliciaLeirner
    //persons.FelixEmileTaunay
    //persons.FernandoLemos //(Prêmio Aquisição)
    //persons.FernandoRomani
    //persons.FirminoMonteiro
    //persons.FirminoSaldanha
    //persons.FlavioDeCarvalho
    //persons.Flexor
    //persons.FrankSchaeffer
    //persons.FransKrajcberg
    //persons.FransPost
    //persons.ranzWeissmann
    //persons.GaetanoMiani
    //persons.GarciayVasquez
    //persons.GastoneNovelli
    //persons.GeorgGrimm
    //persons.GeraldoDeBarros
    //persons.GermanadeAngelis
    //persons.GezaHeller
    //persons.GiorgioMorandi// (Prêmio Internacional de Gravura)
    //persons.iseldaLeirner
    //persons.GracielaFuensalida
    //persons.HansenBahia
    //persons.HeinzKühn
    //persons.HeitordosPrazeres
    //persons.HenriLaurens //(Grande Prêmio - IV centenário de Sâo Paulo)
    //persons.HenriqueBoese
    //persons.HenryMoore //(Prêmio Internacional de Escultura)
    //persons.HildaGoltz
    //persons.ildeWeber
    //persons.CHornbrook
    //persons.InahDAvilaCosta
    //persons.oneSaldanha
    persons.IvanSerpa,
    //persons.IzarDoAmaralBerlinck
    //persons.JacquesDouchez
    //persons.eanBaptisteDebret
    //persons.JoaoBatistaPagani
    //persons.JoaoFranciscoMuzzi
    //persons.JoseAntônioDaSilva
    //persons.JoseFábioBarbosaDaSilva
    //persons.JoseSilveiraDAvila
    //persons.JulioGuerra
    //persons.KarlPlattner
    //persons.LeopoldoRaimo
    //persons.LisaFickerHofmann
    //persons.LivioAbramo //(Prêmio Nacional de Gravura)
    //persons.LotharCharoux
    //persons.LouisBuvelot
    //persons.Lucette aribe
    //persons.LuigiStalloni
    //persons.LuizSacilotto
    //persons.LulaCardoso Ayres
    persons.LygiaClark,
    //persons.ManabuMabe
    //persons.MarceloGrassmann
    //persons.MariaHelenaAndres
    persons.MariaMartins,
    //persons.MarianneOverbeck
    //persons.MariliaGiannettiTorres
    //persons.MarinaCaram
    //persons.MarioCravoJúnior
    //persons.MarioZanini
    persons.MaryVieira,
    //persons.MauroFrancini
    //persons.MilanDuzek
    //persons.MiltonGoldring
    //persons.MisabelPedrosa
    //persons.Moussia
    //persons.NicolasAntoineTaunay
    //persons.NicolauFacchinetti
    //persons.OdettoGuersoni
    //persons.OrlandoTeruz
    //persons.OswaldDeAndradeFilho
    //persons.OswaldoGoeldi
    //persons.PaoloRissone
    //persons.PauloBecker
    //persons.PauloSzentkuti
    //persons.PhillippeMaeck
    //persons.PieterGodfriedBertichen
    //persons.PintoBandeira
    //persons.Piza //(persons.Prêmio Aquisição)
    //persons.PolaRezende
    //persons.PollyMcDonell
    //persons.PotyLazzarotto
    //persons.QuinsacMonvoisin
    //persons.RamiroMartins
    //persons.RaymundoNogueira
    //persons.ReneeLefèvre
    //persons.RobertTatin
    //persons.RufinoTamayo //(Prêmio Internacional de Pintura)
    //persons.SadaYazima
    //persons.SeppBaendereck
    //persons.Sespe
    //persons.ShigetoTanaka
    //persons.SinItiroYazima
    persons.SoniaEbling,
    //persons.TadashiKaminagai
    //persons.TarsilaDoAmaral
    //persons.TellesJúnior
    //persons.TeresaDAmico
    //persons.TizianaBonazzola
    //persons.UbiBava
    //persons.VandenPeereboon
    //persons.VictorMeirelles
    //persons.VieiraDaSilva //(Prêmio Aquisição)
    //persons.Vinet
    //persons.VittorioGobbis
    //persons.WaldemarDaCosta
    //persons.WalterLewy
    //persons.WegaNery
    //persons.YolandaMohalyi
    //persons.YvoneThomescu
    //persons.ZachariasAutuori
    //persons.ZeliaSalgado
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
    //persons.AbrahamPalatnik
    persons.AluisioCarvao,
    //persons.CarlosVal
    //persons.CesarOiticica
    persons.DecioVieira,
    //persons.ElisaMartinsDaSilveira.
    persons.FranzWeissmann,
    persons.HelioOiticica,
    persons.IvanSerpa,
    //persons.JoaoJoseDaSilvaCosta,
    persons.LygiaClark,
    persons.LygiaPape,
    //persons.RubemLudolf
    //persons.VicentIbberson,
  ],
  Patrocinios: undefined,
  Curadores: [persons.FerreiraGullar],
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
    //persons.AbrahamPalatnik
    persons.AluisioCarvao,
    //persons.CarlosVal
    //persons.CesarOiticica
    persons.DecioVieira,
    //persons.ElisaMartinsDaSilveira.
    persons.FranzWeissmann,
    persons.HelioOiticica,
    persons.IvanSerpa,
    //persons.JoaoJoseDaSilvaCosta,
    persons.LygiaClark,
    persons.LygiaPape,
    //persons.RubemLudolf
    //persons.VicentIbberson,
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
    //persons.AbrahamPalatnik
    persons.AluisioCarvao,
    //persons.CarlosVal
    //persons.CesarOiticica
    persons.DecioVieira,
    //persons.ElisaMartinsDaSilveira.
    persons.FranzWeissmann,
    persons.HelioOiticica,
    persons.IvanSerpa,
    //persons.JoaoJoseDaSilvaCosta,
    persons.LygiaClark,
    persons.LygiaPape,
    //persons.RubemLudolf
    //persons.VicentIbberson,
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
    //persons.AbrahamPalatnik
    persons.AluisioCarvao,
    //persons.CesarOiticica
    persons.DecioVieira,
    persons.FranzWeissmann,
    persons.HelioOiticica,
    persons.IvanSerpa,
    persons.LygiaClark,
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
    persons.AlexGama,
    persons.AntonioSergioDeSouza,
    persons.BeraldaAltenfelder,
    persons.CaetanoDeAlmeida,
    persons.CarlaGuagliardi,
    persons.CarlosWolney,
    persons.CenimarSMarques,
    persons.ClaudiaRenault,
    persons.ClaudioCretti,
    persons.ClebioMaduro,
    persons.CleidoVasconcelos,
    persons.EdgardDeSouza,
    persons.EmilioBarolo,
    persons.EymardBrandao, //(GrandePrêmioCidadedeRibeirãoPreto),
    persons.FernandoAugusto,
    persons.FernandoBento,
    persons.FernandoFonseca,
    persons.GermanaMonteMor,
    persons.GiovannaMartins,
    persons.JoseFernandoGDeleu,
    persons.JulioDaCostaFeliz,
    persons.LeticiaFaria,
    persons.LuizLopreto,
    persons.MariaAnitaOPCuzzah,
    persons.MariaElisaBMCampos,
    persons.MarinaBraghetto,
    persons.Maurilima, //(PrêmioCidadedeRibeirãoPret),
    persons.MendesFaria,
    persons.MirleneFreire,
    persons.NazarethPacheco,
    persons.NydiaNegromonte,
    persons.OlavoDeOliveiraSenne,
    persons.OrlandoMFeitosa,
    persons.OsmarDalio,
    persons.Palo,
    persons.PaulinoLazur,
    persons.PauloMiranda,
    persons.RachelDeAlmeidaMagalhaes, //(ReferênciaEspecialdoJúri),
    persons.RicardoLuizHomem,
    persons.RodrigoDeCastro, //(PrêmioCitibank-Aquisição),
    persons.RosangelaRenno, //(PrêmioCidadedeRibeirãoPreto),
    persons.RuiAlonso, //(PrêmioCitibank-Aquisição),
    persons.SaleteMulin,
    persons.SergioCappae,
    persons.SheylaCabral,
    persons.SilviaCunha,
    persons.VaniaBarbosa,
    persons.YvoniGarrigos,
  ],
  Patrocinios: undefined,
  Curadores: [persons.JoaoCarlosDeFigueiredoFerraz],
  Juri: [
    persons.AlbertoTassinari,
    persons.CelmaAlvim,
    persons.PieterThomasTjabbes,
    persons.RonaldoBrito,
    persons.TadeuChiarelli,
  ],
  Montadores: [persons.RubenBreitman],
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
    persons.AndreCosta,
    persons.AngeloMarzano, //(PrêmioAquisitivo-GDF),
    persons.AnnarreSmith,
    persons.AntonioSergio, //(PrêmioParticipação-GDF),
    persons.ArlindoDaibert,
    persons.AvatarMoraes,
    persons.BeraldaAltenfelder, //(PrêmioAquisitivo-GDF),
    persons.CarlaGuagliardi,
    persons.CarlosBorges, //(PrêmioAquisitivo-GDF),
    persons.CarlosMuniz,
    persons.ChaiChang,
    persons.CosmeMartins,
    persons.CourtneySmith, //(PrêmioAquisitivo-GDF),
    persons.DanFialdini,
    persons.DanielFeingold, //(PrêmioViagemaoExterior-IBAC),
    persons.DomingosTotora,
    persons.EdgarRacy,
    persons.EduardoHaesbaert,
    persons.ElderRochaFilho,
    persons.ElianeProlik, //(PrêmioAquisição-IBAC),
    persons.ElisaBracher, //(PrêmioJovemArtista-Unesco(MedalhadebronzePicasso)),
    persons.EsterGrinspum,
    persons.FatimaNeves, //(PrêmioAquisitvo-GDF),
    persons.GeorgiaKyriakakis, //(PrêmioAquisitivo-GDF),
    persons.GiselaWaetge, //(PrêmioAquisitivo-GDF),
    persons.GladstoneDeMenezes,
    persons.HelioSiqueira, //(PrêmioAquisitivo-GDF),
    persons.IvanildeBrunow, //(PrêmioAquisitivo-GDF),
    persons.JairCorreia,
    persons.JoseBento, //(PrêmioViagemaoPaís-IBAC),
    persons.JosePatricio, //(PrêmioAquisitivo-GDF),
    persons.LauraVinci, //(PrêmioAquisitivo-GDF),
    persons.MarciaPastore,
    persons.MarcioPerigo, //(PrêmioAquisição-GDF),
    persons.MarcusAndre, //(PrêmioAquisitivo-GDF),
    persons.MarcusVinícius,
    persons.MariaDoCarmo,
    persons.MariaTerezaLouro, //(PrêmioAquisitivo-GDF),
    persons.MariannitaLuzzati, //(PrêmioBrasíliadeArtesPlásticas),
    persons.MariluBeer,
    persons.MarioAzevedo, //(PrêmioAquisitivo-GDF),
    persons.MoisesLucas,
    persons.NiciaBormann,
    persons.NiuraBellavinha,
    persons.OrlandoCastano, //(PrêmioAquisição-GDF),
    persons.PatriciaNorman,
    persons.RicardoCristofaro, //(PrêmioAquisitivo-GDF),
    persons.RinaldoSilva, //(PrêmioAquisitivo-GDF),
    persons.RogerioGomes,
    persons.RoseFraymund, //(PrêmioAquisitivo-GDF),
    persons.SandraTucci,
    persons.SergioRizo,
    persons.ShirleyPaesLeme,
    persons.StellaMaris,
    persons.WalterGuerra,
  ],
  Patrocinios: undefined,
  Curadores: [],
  Juri: [],
  Montadores: [],
  Organizadores: [persons.JoãoDeSylos, persons.LedaWatson],
  ComissaoDePremiacao: [
    persons.CasemiroXavierDeMendonça,
    persons.IvoZanini,
    persons.JoaoCamara,
    persons.JoaoEvangelistaAndradeFilho,
    persons.RonaldoBrito,
  ],
  ComissaoDeSelecao: [
    persons.CasemiroXavierDeMendonça,
    persons.IvoZanini,
    persons.JoaoCamara,
    persons.JoaoEvangelistaAndradeFilho,
    persons.RonaldoBrito,
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
  Expositores: [persons.EduardoSued],
  Patrocinios: undefined,
  Curadores: [persons.RonaldoBrito],
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
  Expositores: [persons.WaltercioCaldas],
  Patrocinios: undefined,
  Curadores: [persons.PauloVenancioFilho],
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
  Expositores: [persons.IvensMachado],
  Patrocinios: undefined,
  Curadores: [persons.PauloVenancioFilho],
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
  Expositores: [persons.AngeloVenosa],
  Patrocinios: undefined,
  Curadores: [persons.PauloVenancioFilho],
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
    persons.AnesiaPachecoEChaves,
    persons.AnnaBellaGeiger,
    persons.ArturBarrio,
    persons.BeneFonteles,
    persons.ClaudioFerlauto,
    persons.DarioChiaverini,
    persons.EssilaParaiso,
    persons.FernandoCocchiarale,
    persons.GabrielBorba,
    persons.GastaoDeMagalhaes,
    persons.GenilsonSoares,
    persons.GersonZanini,
    persons.Gretta,
    persons.JoaquimBranco,
    persons.JosePauloPaes,
    persons.JulioPlaza,
    persons.LauroCavalcanti,
    persons.LeticiaParente,
    persons.LourdesCedran,
    persons.LuisGuardiaNeto,
    persons.LuizBarth,
    persons.MarcodoValle,
    persons.MarioIshikawa,
    persons.MauricioFridman,
    persons.MiriamDanowski,
    persons.MontezMagno,
    persons.PauloBruscky,
    persons.PauloHerkenhoff,
    persons.ReginaSilveira,
    persons.ReginaVater,
    persons.RobertoKeppler,
    persons.SoniaAndrade,
    persons.VeraChavesBarcellos,
  ],
  Patrocinios: undefined,
  Curadores: [persons.JulioPlaza],
  Juri: undefined,
  Montadores: undefined,
  Organizadores: [persons.WalterZanini],
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
    persons.AlexandreDaCosta,
    persons.AntonioBerni,
    persons.AntonioDias,
    persons.Barrao,
    persons.CaetanoDeAlmeida,
    persons.JoaoCamara,
    persons.JuanGenoves,
    persons.LuizZerbini,
    persons.MarcoAndre,
    persons.MiguelRioBranco,
    persons.PedroEscosteguy,
    persons.RubensGerchman,
  ],
  Patrocinios: undefined,
  Curadores: [persons.LauroCavalcanti, persons.LuizAquila],
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
    persons.ElianeDuarte, //(PrêmioViagemaoExterior)
    persons.ErnestoBonato, //((PrêmioUnesco)
    persons.FelixBressan,
    persons.FernandoAugusto, //((PrêmioAquisição)
    persons.FranzWeissmann,
    persons.LeilaDanziger,
    persons.LuciaFetal,
    persons.LuciaVilaseca,
    persons.MarcoPauloRolla, //((PrêmioAquisição)
    persons.NydiaNegromonte,
    persons.PauloHumbertoDeAlmeida,
    persons.VeraMartins, //((PrêmioAquisição)
  ],
  Patrocinios: undefined,
  Curadores: undefined,
  Juri: [
    persons.AnnaLetycia,
    persons.BeatrizMilhazes,
    persons.FerreiraGullar,
    persons.LauroCavalcanti,
    persons.MariaAliceMilliet,
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
  Expositores: [persons.LuizAlphonsus],
  Patrocinios: undefined,
  Curadores: [persons.LauroCavalcanti],
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
    persons.AdirBotelho,
    persons.AdirSodre,
    persons.Ahmes,
    persons.AlcidesDaRochaMiranda,
    persons.AldemirMartins,
    persons.AlfredoVolpi,
    persons.AliceSoares,
    persons.AliceVinagre,
    persons.AlmirGadelha,
    persons.AluisioCarvao,
    persons.AmeliaToledo,
    persons.AmilcarDeCastro,
    persons.AnaAlegria,
    persons.AnaluCunha,
    persons.AngeloVenosa,
    persons.AnisioMedeiros,
    persons.AnnaLetycia,
    persons.AntonioBandeira,
    persons.AntonioDias,
    persons.AntonioPradoNetto,
    persons.ArmandoBalloni,
    persons.ArnaldoPedrosoDHorta,
    persons.ArturBarrio,
    persons.Barrao,
    persons.BeatrizMilhazes,
    persons.BeatrizPages,
    persons.BeneFonteles,
    persons.BenjaminSilva,
    persons.BerthaBonart,
    persons.Bianco,
    persons.Bonadei,
    persons.BrunoGiorgi,
    persons.BustamanteSa,
    persons.CandidoPortinari,
    persons.CarlitoCarvalhosa,
    persons.CarlosBastos,
    persons.CarlosFajardo,
    persons.CarlosScliar,
    persons.CássioMBoy,
    persons.ChicoCunha,
    persons.CristinaCanale,
    persons.CynthiaVasconcelos,
    persons.DanubioGoncalves,
    persons.DarcyPenteado,
    persons.Darel,
    persons.DavidLargman,
    persons.DecioVieira,
    persons.DelsonUchoa,
    persons.DeniseWeller,
    persons.Djanira,
    persons.DoraLongoBahia,
    persons.EduardoAquino,
    persons.EduardoAraujo,
    persons.EduardoBarreto,
    persons.EduardoEloy,
    persons.EduardoFerraz,
    persons.EduardoKac,
    persons.ErnaniVasconcellos,
    persons.ErnestoLacerdaDeAlmeida,
    persons.EssilaParaiso,
    persons.EsterGrinspum,
    persons.FabioCardoso,
    persons.FabioMiguez, //(PrêmioAquisição),
    persons.FaygaOstrower,
    persons.FeliciaLeirner,
    persons.FernandoFam,
    persons.FernandoPamplona,
    persons.FernandoRomani,
    persons.FernandoStickel,
    persons.FlaviaRibeiro,
    persons.Fortunato,
    persons.FranceDupaty,
    persons.FranciscoRebolo,
    persons.FranciscoStockinger,
    persons.FrankSchaeffer,
    persons.FransKrajcberg,
    persons.FrantaReyl,
    persons.Frantz,
    persons.FulvioPennacchi,
    persons.GeOrthof,
    persons.GeorginaDeAlbuquerque,
    persons.GerardoVilaseca,
    persons.GezaHeller,
    persons.GildaMattar,
    persons.Glauco,
    persons.GlaucoRodrigues,
    persons.GlauraPereira,
    persons.GlenioBianchetti,
    persons.Goulart,
    persons.HamiltonGalvao,
    persons.HansenBahia,
    persons.HaydeaSantiago,
    persons.HelioMelo,
    persons.HelioOiticica,
    persons.HildaCampofiorito,
    persons.HildaGoltz,
    persons.HonorioPecanha,
    persons.HugoAdami,
    persons.HugoDenizart,
    persons.HumbertoCozzo,
    persons.IbereCamargo,
    persons.IoneSaldanha,
    persons.IsabelPons,
    persons.IvanLima,
    persons.IzraelSzajnbrum,
    persons.JacinthoMoraes,
    persons.Jacqmont,
    persons.JadirAntonioDaSilva,
    persons.JairGlass,
    persons.JeaneteMusatti,
    persons.JoaoMode, //(ReferênciaEspecialdoJúri),
    persons.JoaquimPaiva,
    persons.JorgeEiro,
    persons.JorgeGuinle, //(PrêmioViagemaoExterior),
    persons.JosePatricio,
    persons.JosePedrosa,
    persons.JoseResende,
    persons.JoseSilveiraDAvila,
    persons.KarinLambrecht,
    persons.KonstantinChristoff,
    persons.LiaMennaBarreto,
    persons.LivioAbramo,
    persons.LucetteLaribe,
    persons.Luciano,
    persons.LucianoPinheiro,
    persons.LuisaMeyer,
    persons.LuizBraga,
    persons.LuizSolha,
    persons.LuizZerbini,
    persons.LygiaClark,
    persons.MCavalcante,
    persons.ManfredoDeSouzanetto,
    persons.ManoelSantiago,
    persons.MarceloCipis,
    persons.MarcoTulioResende,
    persons.MargaretSpence,
    persons.MariaHeloisaFenelonCosta,
    persons.MariaLeontina,
    persons.MariaLuciaCattani,
    persons.MariaLuciaLuz,
    persons.MariaTomaselli,
    persons.MarioAgostinelli,
    persons.MarioCravoNeto,
    persons.MárioRohnelt,
    persons.MartinStreibel,
    persons.MauricioBentes,
    persons.MauricioSilva,
    persons.MauroBellagamba,
    persons.MaxGrossmann,
    persons.MiltonGoldring,
    persons.MiltonMachado,
    persons.MiltonRibeiro,
    persons.MiraSchendel,
    persons.MisabelPedrosa,
    persons.MonicaNador,
    persons.MonicaSartori,
    persons.NelsonFelix,
    persons.NewtonRezende,
    persons.Niculitcheff,
    persons.NilsonPimenta,
    persons.NoemiaGuerra,
    persons.OctavioAraujo,
    persons.OllyReinheimer,
    persons.OrlandoCastano,
    persons.OswaldoGoeldi,
    persons.OtoniMesquita,
    persons.PaivaBrasil,
    persons.PauloBruscky,
    persons.PauloCampinho,
    persons.PauloHouayek,
    persons.PauloMonteiro,
    persons.PauloPaes,
    persons.PhillippeMaeck,
    persons.Piza,
    persons.PotyLazzarotto,
    persons.QuirinoCampofiorito,
    persons.RalphGehre,
    persons.Rapoport,
    persons.RaymundoNogueira,
    persons.ReninaKatz,
    persons.RicardoLaterza,
    persons.RichardSeewald,
    persons.RochelleCosti,
    persons.RodrigoAndrade,
    persons.RogerioCamacho,
    persons.RogerioNazari,
  ],
  Patrocinios: undefined,
  Curadores: [persons.PauloRobertoLeal],
  Juri: [
    persons.AnnaBellaGeiger,
    persons.CarlosPasquetti,
    persons.HumbertoEspindola,
    persons.JoseClaudio,
    persons.LuizPauloBaravelli,
    persons.MarcusDeLontraCosta,
  ],
  Montadores: undefined,
  Organizadores: [
    persons.AlbertoBeuttenmuller,
    persons.AlineFigueiredo,
    persons.CalasansNeto,
    persons.IcleiaCattani,
    persons.JoseClaudio,
    persons.OsmarPinheiro,
    persons.PauloSergioDuarte,
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
    persons.Adelina,
    persons.AdersonMedeiros,
    persons.AlbenNisioFonseca,
    persons.AlbertoHarrigan,
    persons.AlexFlemming,
    persons.AlexVallauri,
    persons.AliceXavier,
    persons.Almandrade,
    persons.AnitaSimkevicius,
    persons.AnnaBellaGeiger,
    persons.AnnaCarretta,
    persons.AntonioClaudioCarvalho,
    persons.AntonioDias,
    persons.AntonioPeticov,
    persons.AntonioPoteiro,
    persons.AntonioSergio,
    persons.ArturBarrio,
    persons.ArturMatuck,
    persons.AuroraCursino,
    persons.AvelinoDeAraujo,
    persons.BeneFonteles,
    persons.BernardoKrasniansky,
    persons.BernardoVilhena,
    persons.Carlos,
    persons.CarlosFajardo,
    persons.CarmelaGross,
    persons.Chacal,
    persons.ChicoDantas,
    persons.ChicoPereira,
    persons.CildoMeireles,
    persons.Claudia,
    persons.ClaudioFerlauto,
    persons.ClaudioGomes,
    persons.ClaudioGoulart,
    persons.CristinaCoelhoRochaMonteiroDias,
    persons.CybeleVarela,
    persons.DaisyBoabaid,
    persons.DanteVelloni,
    persons.DianaDomingues,
    persons.EdsonDeOliveira,
    persons.EdsonMachado,
    persons.EduardoSued,
    persons.EduardoZanatta,
    persons.EliHeil,
    persons.ElianeVelozo,
    persons.EmygdioDeBarros,
    persons.FalvesSilva,
    persons.FaridGeber,
    persons.Fernando,
    persons.FernandoMeireles,
    persons.FredSvendsen,
    persons.GabrielBorba,
    persons.GabrielDosSantos,
    persons.GastaoDeMagalhaes,
    persons.GenilsonSoares,
    persons.GeraldoDeBarros,
    persons.GersonFilho,
    persons.GersonZanini,
    persons.GilmarECardoso,
    persons.Goulart,
    persons.GTO,
    persons.GuilhermeMandaro,
    persons.HelioLete,
    persons.HikaroIckx,
    persons.HudinilsonJunior,
    persons.IoleDeFreitas,
    persons.Isaac,
    persons.IvaldGranato,
    persons.IvanMauricio,
    persons.IvensMachado,
    persons.JMedeiros,
    persons.JanethSoares,
    persons.JoaoBatistaDosSantos,
    persons.JoaoProteti,
    persons.JoaquimBranco,
    persons.JoseWagnerGarcia,
    persons.JoziasBenedicto,
    persons.JulioPlaza,
    persons.KatiaBento,
    persons.LauroMonteiro,
    persons.LeilaSalles,
    persons.LeonhardFrankDuck,
    persons.LeticiaParente,
    persons.LuigiZanotto,
    persons.LuisGlesier,
    persons.LuisGuardiaNeto,
    persons.LuizAntonioLopesDeSouza,
    persons.LuizCarlosCardoso,
    persons.LuizFacanhaFaria,
    persons.MarceloRMachado,
    persons.MarcusDoRio,
    persons.MarcusZacariades,
    persons.MariaIreneRibeiro,
    persons.MariaLuizaLeal,
    persons.MarioDaPiedadeMArruda,
    persons.MarioRamiro,
    persons.MaryDritschel,
    persons.MaynandSobral,
    persons.MiraSchendel,
    persons.MiriamDanowski,
    persons.MiriamPeixoto,
    persons.NeyMarcondes,
    persons.NicolasBehr,
    persons.NinaMoraes,
    persons.OdairMagalhaes,
    persons.OlimpioPinheiro,
    persons.OrlandoPDSilva,
    persons.OtavioDonasci,
    persons.PauloBruscky,
    persons.PauloDeAndrade,
    persons.PauloKlein,
    persons.PauloMiranda,
    persons.PauloMourelli,
    persons.PauloPriori,
    persons.PauloRo,
    persons.PedroJBrancoRiberio,
    persons.PedroOsmar,
    persons.RafaelFranca,
    persons.Raphael,
    persons.RaulCordula,
    persons.ReginaSilveira,
    persons.ReginaVater,
    persons.RenataBarros,
    persons.RitaMoreira,
    persons.RobertoKeppler,
    persons.RobertoSandoval,
    persons.RochaAdonai,
    persons.RonaldoSantos,
    persons.RosaMariaSantos,
    persons.SebastiaoFarias,
    persons.SoniaFontanezi,
    persons.TedJungle,
    persons.Tunga,
    persons.UnhandeijaraLisboa,
    persons.VaniaLucilaValerioBPessoa,
    persons.VeraBonnemasou,
    persons.VivianOrni,
    persons.WaltBlackberry,
  ],
  Patrocinios: undefined,
  Curadores: [
    persons.AgnaldoFarias,
    persons.AnnateresaFabris,
    persons.CacildaTeixeiraDaCosta,
    persons.GabrielaSuzanaWilder,
    persons.JulioPlaza,
    persons.MariliaSaboyaDeAlbuquerque,
    persons.PetronioFranca,
    persons.RenataBarros,
    persons.RobertoSandoval,
    persons.SamuelLeon,
    persons.VictorMusgrave,
    persons.WalterZanini,
  ],
  Juri: undefined,
  Organizadores: [
    persons.BrunoMantura,
    persons.CasemiroXavierDeMendonça,
    persons.DonaldGoodall,
    persons.DonatoFerrari,
    persons.EstherEmilioCarlos,
    persons.HelenEscobedo,
    persons.IvelicMilan,
    persons.LuizDiederichsenVillares,
    persons.PauloSergioDuarte,
    persons.ToshiakiNinemura,
    persons.UlpianoBezerraDeMeneses,
  ],
  Montadores: [persons.CidaGalvao, persons.JorgeAristidesDeSousaCarvajal],
  ArtistasConvidados: [persons.KatievanScherpenberg],
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
    persons.EnricaBernardelli,
    persons.JoseDamasceno,
    persons.LuizCarlosDelCastillo,
    persons.MarciaThompson,
    persons.MauricioRuiz,
  ],
  Patrocinios: undefined,
  Curadores: [persons.FernandoCocchiarale],
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
  Expositores: [persons.SolangeMagalhaes],
  Patrocinios: undefined,
  Curadores: [persons.FernandoCocchiarale],
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
    persons.AndreCosta,
    persons.Barrao,
    persons.CarlaGuagliardi,
    persons.CarlosBevilacqua,
    persons.EduardoCoimbra,
    persons.EnricaBernardelli,
    persons.ErnestoNeto,
    persons.FernandaGomes,
    persons.JoseDamasceno,
    persons.LiviaFlores,
    persons.MarciaThompson,
    persons.MarcosChaves,
    persons.MauricioRuiz,
    persons.RaulMourao,
    persons.RicardoBasbaum,
    persons.RicardoBecker,
    persons.RodrigoCardoso,
    persons.ValeskaSoares,
  ],
  Patrocinios: undefined,
  Curadores: [persons.FernandoCocchiarale, persons.LigiaCanongia],
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
    persons.AntonioCarlosMachado,
    persons.ArturoDuclos,
    persons.CarlosAltamirano,
    persons.CarlosSeveso,
    persons.ClorindoTesta,
    persons.EdilsonViriato,
    persons.ElisaBracher,
    persons.ErnestoVila,
    persons.EstherMariaBragaCortes,
    persons.FabioNoronha,
    persons.FelixToranzos,
    persons.GerardoGoldwasser,
    persons.GonzaloDiaz,
    persons.HelianaGrudzien,
    persons.JoseDamasceno,
    persons.LauroBorges,
    persons.LeilaPugnaloni,
    persons.LeticiaFaria,
    persons.LuciaFetal,
    persons.LuizCarlosBrugnera,
    persons.MarcosBenitez,
    persons.MariannitaLuzzati,
    persons.MazeMendes,
    persons.MiguelaVera,
    persons.MitaiChurí,
    persons.NewtonGoto,
    persons.NuryGonzalez,
    persons.RogerioDias,
    persons.RonyBellinho,
    persons.RosanaFuertes,
    persons.SalvioDare,
    persons.UiaraBartira,
  ],
  Patrocinios: undefined,
  Curadores: [
    persons.AdaliceAraujo,
    persons.AliciaHaber,
    persons.FernandoCocchiarale,
    persons.LauraBuccellato,
    persons.NellyRichard,
    persons.OsvaldoSalerno,
    persons.TicioEscobar,
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
    persons.AbrahamPalatnik,
    persons.AdoMalagoli,
    persons.AdrianoDeAquino,
    persons.AlbertoTeixeira,
    persons.AldemirMartins,
    persons.AlexCerveny,
    persons.AlexFlemming,
    persons.AlexVallauri,
    persons.AlexandreWollner,
    persons.AlfredoAndersen,
    persons.AlfredoVolpi,
    persons.AlmirMavignier,
    persons.AluisioCarvao,
    persons.AlvimCorrea,
    persons.AmeliaToledo,
    persons.AmilcarDeCastro,
    persons.AnaMariaTavares,
    persons.AnaliviaCordeiro,
    persons.AnatolWladyslaw,
    persons.AndreParente,
    persons.AnesiaPachecoEChaves,
    persons.AngeloDeAquino,
    persons.AngeloVenosa,
    persons.AnitaMalfatti,
    persons.AnnaBellaGeiger,
    persons.AnnaBellaGeiger,
    persons.AnnaLetycia,
    persons.AnnaMariaMaiolino,
    persons.AnnaMariani,
    persons.AntonioBandeira,
    persons.AntonioCelsoSparapan,
    persons.AntonioDias,
    persons.AntonioGomide,
    persons.AntonioHenriqueAmaral,
    persons.AntonioLizarraga,
    persons.AntonioMaluf,
    persons.AntonioManuel,
    persons.AntonioPaimVieira,
    persons.AntonioParreiras,
    persons.ArcangeloIanelli,
    persons.ArnaldoAntunes,
    persons.ArnaldoFerrari,
    persons.ArnaldoPedrosoDHorta,
    persons.ArthurOmar,
    persons.ArthurTimotheoDaCosta,
    persons.ArturBarrio,
    persons.ArturLescher,
    persons.ArturMatuck,
    persons.AthosBulcao,
    persons.AugustoDeCampos,
    persons.AvatarMoraes,
    persons.Babinski,
    persons.Barrao,
    persons.BelisarioFranca,
    persons.BelmiroDeAlmeida,
    persons.BeneFonteles,
    persons.BeneditoCalixto,
    persons.BernardoCid,
    persons.BernardoKrasniansky,
    persons.BettyLeirner,
    persons.BillMartinez,
    persons.BinKondo,
    persons.Bonadei,
    persons.BrunoGiorgi,
    persons.RobertoBurleMarx,
    persons.CaciporeTorres,
    persons.Caito,
    persons.CandidoPortinari,
    persons.CarlitoCarvalhosa,
    persons.CarlosAthanazio,
    persons.CarlosChambelland,
    persons.CarlosFajardo,
    persons.CarlosMartins,
    persons.CarlosNaef,
    persons.CarlosOswald,
    persons.CarlosPrado,
    persons.CarlosScliar,
    persons.CarlosVergara,
    persons.CarlosZilio,
    persons.CarmelaGross,
    persons.CarmelaGross,
    persons.CassioMichalany,
    persons.CeliaBorattoCarvalho,
    persons.CeliaCatunda,
    persons.CelsoRenato,
    persons.CesarMarranoPiovane,
    persons.CiceroDias,
    persons.CiceroDias,
    persons.CildoMeireles,
    persons.ClaudioFerlauto,
    persons.ClaudioGoulart,
    persons.ClaudioTozzi,
    persons.ClovisGraciano,
    persons.CristinaFonseca,
    persons.DanielSantiago,
    persons.DanielSenise,
    persons.DaniloDiPrete,
    persons.Darel,
    persons.DecioVieira,
    persons.DenisMoses,
    persons.DiCavalcanti,
    persons.DianaDomingues,
    persons.DionisioDelSanto,
    persons.DonatoFerrari,
    persons.DudiMaiaRosa,
    persons.EderSantos,
    persons.EdithBehring,
    persons.EdsonMotta,
    persons.EduardoCastanho,
    persons.EduardoSued,
    persons.ElianeProlik,
    persons.EliseuVisconti,
    persons.EmmanuelNassar,
    persons.ErnestoDeFiori,
    persons.ErnestoNeto,
    persons.EssilaParaiso,
    persons.EsterGrinspum,
    persons.EugenioLatour,
    persons.EulaliaGrau,
    persons.EvandroCarlosJardim,
    persons.FabioMiguez,
    persons.Fahrion,
    persons.FaygaOstrower,
    persons.FeliciaLeirner,
    persons.FernandoBarata,
    persons.FernandoCocchiarale,
    persons.FernandoLemos,
    persons.FernandoOdriozola,
    persons.FerreiraGullar,
    persons.FlaviaRibeiro,
    persons.FlavioDeCarvalho,
    persons.FlavioPons,
    persons.FlavioShiro,
    persons.Flexor,
    persons.FranciscoRebolo,
    persons.FranciscoStockinger,
    persons.FrancoTerranova,
    persons.FranzWeissmann,
    persons.FridaBaranek,
    persons.FulvioPennacchi,
    persons.GabrielBorba,
    persons.GalileoEmendabili,
    persons.GarciaBento,
    persons.GastaoDeMagalhaes,
    persons.GenilsonSoares,
    persons.GeorgeRibeiroNeto,
    persons.GeorginaDeAlbuquerque,
    persons.GeraldoAnhaiaMello,
    persons.GeraldoDeBarros,
    persons.GeraldoDeBarros,
    persons.GersonZanini,
    persons.GilberttoPrado,
    persons.GilvanSamico,
    persons.GlaucoRodrigues,
    persons.GregorioGruber,
    persons.GuidoViaro,
    persons.Guignard,
    persons.GustavoDallAra,
    persons.GuttmannBicho,
    persons.HaroldoDeCampos,
    persons.HeitorMalaguti,
    persons.HelioLeite,
    persons.HelioOiticica,
    persons.HelioRola,
    persons.HeliosSeelinger,
    persons.HenriqueBoese,
    persons.HenriqueCavalleiro,
    persons.HenriqueOswald,
    persons.HerculesBarsotti,
    persons.HermelindoFiaminghi,
    persons.HildeWeber,
    persons.HudinilsonJunior,
    persons.HugoAdami,
    persons.HumbertoEspindola,
    persons.IbereCamargo,
    persons.InimaDePaula,
    persons.IoleDeFreitas,
    persons.IoneSaldanha,
    persons.IreneBuarque,
    persons.IsmaelNery,
    persons.IvaldGranato,
    persons.IvanSerpa,
    persons.IvanSerpa,
    persons.IvensMachado,
    persons.JacLeirner,
    persons.JacksonRibeiro,
    persons.JacquesDouchez,
    persons.JefGolyscheff,
    persons.JoaoCamara,
    persons.JoaoMoreiraSalles,
    persons.JoaquimFigueira,
  ],
  Patrocinios: undefined,
  Curadores: [
    persons.AgnaldoFarias,
    persons.AnnateresaFabris,
    persons.CacildaTeixeiraDaCosta,
    persons.JoseRobertoTeixeiraLeite,
    persons.MariaAliceMilliet,
    persons.MariliaSaboyaDeAlbuquerque,
    persons.NelsonAguilar,
    persons.TadeuChiarelli,
    persons.WalterZanini,
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
    persons.AdrianoDeAquino,
    persons.AnnaBellaGeiger,
    persons.AntonioManuel,
    persons.CarlosVergara,
    persons.CarlosZilio,
    persons.EduardoSued,
    persons.KatievanScherpenberg,
  ],
  Patrocinios: undefined,
  Curadores: [persons.FernandoCocchiarale],
  Juri: undefined,
  Montadores: undefined,
};

export const CristinaCanaleCláudioFonsecaBeatrizMilhazesLuizPizarroLuizZerbini: Exposicao =
  {
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
      persons.BeatrizMilhazes,
      persons.CláudioFonseca,
      persons.CristinaCanale,
      persons.LuizPizarro,
      persons.LuizZerbini,
    ],
    Patrocinios: undefined,
    Curadores: [persons.FernandoCocchiarale],
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
    persons.AngeloVenosa,
    persons.ArmandoMattos,
    persons.BeatrizMilhazes,
    persons.CarlosAsp,
    persons.ChicoCunha,
    persons.ElianeProlik,
    persons.ErnestoNeto,
    persons.EvandroSalles,
    persons.FabioMiguez, //(PrêmioAquisição),
    persons.FernandoLindote,
    persons.FlaviaRibeiro,
    persons.FridaBaranek,
    persons.GiovannaMartins,
    persons.HamiltonGalvao,
    persons.IsauraPena,
    persons.JacLeirner,
    persons.JailtonMoreira,
    persons.JimmyLeroy,
    persons.JoaoMode, //(Prêmioaquisição),
    persons.LiaMennaBarreto,
    persons.MarcoGiannotti,
    persons.MarcoTulioResende,
    persons.MariaLuciaCattani,
    persons.MarioAzevedo,
    persons.MauricioBentes,
    persons.MonicaSartori,
    persons.Niculitcheff,
    persons.OrlandoCastano,
    persons.Paolo,
    persons.PauloAmaral,
    persons.PauloCampinho,
    persons.PauloPortella,
    persons.PauloRobertoLeal, //(PrêmioAquisição),
    persons.PauloSchmidt,
    persons.RenatoHeuser,
    persons.RicardoHomen,
    persons.RodolfoAthayde,
    persons.RubensOestroem,
    persons.SaraMalenchini,
    persons.Schwanke,
    persons.SolangeOliveira,
    persons.SuzanaQueiroga,
    persons.ValerioRodrigues,
  ],
  Patrocinios: undefined,
  ComissaoDeSelecao: [
    persons.FernandoCocchiarale,
    persons.IvoMesquita,
    persons.JoseAlbertoNemer,
    persons.MarcelloNitsche,
    persons.MarcusDeLontraCosta,
  ],
  Juri: undefined,
  Montadores: undefined,
};

export const DoModernoaoContemporâneoColeçãoGilbertoChateaubriandMAM: Exposicao =
  {
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
      persons.AlfredoVolpi,
      persons.AluisioCarvao,
      persons.AngeloDeAquino,
      persons.AntonioHenriqueAmaral,
      persons.AscanioMMM,
      persons.CarlosVergara,
      persons.CarlosZilio,
      persons.CildoMeireles,
      persons.EmericMarcier,
      persons.FranciscoBrennand,
      persons.GlaucoRodrigues,
      persons.Guignard,
      persons.HugoDenizart,
      persons.IoneSaldanha,
      persons.IvaldGranato,
      persons.JoaoCarlosGalvao,
      persons.LuizAlphonsus,
      persons.MarciaBarrosoDoAmaral,
      persons.MariaDoCarmoSecco,
      persons.MauroKleiman,
      persons.MiltonMachado,
      persons.MiraSchendel,
      persons.NelsonFelix,
      persons.OsmarDillon,
      persons.PaivaBrasil,
      persons.RaymundoColares,
      persons.RobertoFeitosa,
      persons.SergioCamargo,
      persons.TarsilaDoAmaral,
      persons.Tunga,
      persons.VicenteDoRegoMonteiro,
      persons.WaltercioCaldas,
      persons.WesleyDukeLee,
    ],
    Patrocinios: undefined,
    ComissaoDeSelecao: [persons.FernandoCocchiarale, persons.WilsonCoutinho],
    Juri: undefined,
    Montadores: undefined,
  };

export const DoModernoaoContemporâneoColeçãoGilbertoChateaubriandLisboa: Exposicao =
  {
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
      persons.AlfredoVolpi,
      persons.AluisioCarvao,
      persons.AngeloDeAquino,
      persons.AntonioHenriqueAmaral,
      persons.AscanioMMM,
      persons.CarlosVergara,
      persons.CarlosZilio,
      persons.CildoMeireles,
      persons.EmericMarcier,
      persons.GlaucoRodrigues,
      persons.Guignard,
      persons.IoneSaldanha,
      persons.IvaldGranato,
      persons.JoaoCarlosGalvao,
      persons.KatievanScherpenberg,
      persons.LuizAlphonsus,
      persons.MarciaBarrosoDoAmaral,
      persons.MariaDoCarmoSecco,
      persons.MauroKleiman,
      persons.MiltonMachado,
      persons.MiraSchendel,
      persons.NelsonFelix,
      persons.OsmarDillon,
      persons.PaivaBrasil,
      persons.RaymundoColares,
      persons.RobertoFeitosa,
      persons.SergioCamargo,
      persons.TarsilaDoAmaral,
      persons.Tunga,
      persons.VicenteDoRegoMonteiro,
      persons.WaltercioCaldas,
      persons.WesleyDukeLee,
    ],
    Patrocinios: undefined,
    ComissaoDeSelecao: [persons.FernandoCocchiarale, persons.WilsonCoutinho],
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
    persons.ALoiola,
    persons.AguinaldoCoelho,
    persons.Alfio,
    persons.AlmiraReuter,
    persons.AnselmoArlota,
    persons.AntonioElias,
    persons.ArlindoCastro,
    persons.BereniceGonçalves,
    persons.CarlosSena,
    persons.CarmemFreitas,
    persons.ChicoFernandes,
    persons.DeniseRocha,
    persons.Dijodio, //(PrêmioD.J.Oliveira),
    persons.EdneyAntunes,
    persons.EduardoVararelli,
    persons.Enauro,
    persons.FabioNoronha, //(PrêmioXapuri-Revelação/93),
    persons.IvacyDeSousa,
    persons.JoaoBraz,
    persons.JorgeWilson,
    persons.LidiaSemerene,
    persons.LiviaRizzo,
    persons.LucioBarreto,
    persons.LuizMauro, //(PrêmioGaleriaAberta),
    persons.MANasserLeone,
    persons.MarceloSola, //(PrêmioAliançaFrancesa),
    persons.MarcosRodrigues,
    persons.MarildaPassos,
    persons.MarildaSousa,
    persons.MartaPenner,
    persons.MiguelSimao,
    persons.NelmaGuimarães, //(ReferênciaEspecialdoJúri),
    persons.PatriciaFaria,
    persons.RobertaFalcone,
    persons.SelmaParreira,
    persons.Sobral,
    persons.SuelitaCosta, //(ReferênciaEspecialdoJúri),
    persons.Tai,
    persons.ThomasRitter,
    persons.VitoriaBasaia,
    persons.WalterMenon,
    persons.Yaphy,
  ],
  Patrocinios: undefined,
  Curadores: undefined,
  Juri: [
    persons.CarlosFernandoMagalhaes,
    persons.FernandoCocchiarale,
    persons.GraceMariaMachadoDeFreitas,
    persons.MiguelJorge,
  ],
  Montadores: undefined,
  Organizadores: [
    persons.AmauryMenezes,
    persons.FernandoCostaFilho,
    persons.ReinaldoBarbalho,
    persons.VirgíniaRGuimarães,
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
  Expositores: [persons.SinhaDAmora],
  Patrocinios: undefined,
  Curadores: undefined,
  Juri: [persons.CarlosFajardo, persons.Estrigas, persons.PauloHerkenhoff],
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
    persons.AnnaMariaMaiolino,
    persons.CildoMeireles,
    persons.ErnestoNeto,
    persons.EsterGrinspum,
    persons.IoleDeFreitas,
    persons.KatievanScherpenberg,
    persons.SergioCamargo,
    persons.SoniaLabouriau,
    persons.WaltercioCaldas,
  ],
  Patrocinios: undefined,
  Juri: undefined,
  Curadores: [persons.PauloHerkenhoff],
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
    persons.AlanoFreitas, // (Prêmio Desenho)
    persons.CelsoOliveira, // (Prêmio Fotografia)
    persons.HelioRola, // (Prêmio Pintura)
    persons.Joelson, // (Prêmio Pintura)
    persons.MarcusFrancisco, //
    persons.ServuloEsmeraldo, // (Prêmio Escultura)
  ],
  Patrocinios: undefined,
  Curadores: undefined,
  Juri: [persons.PauloHerkenhoff, persons.PedroEymar, persons.SoniaSalzstein],
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
    persons.AdrianaVarejao,
    persons.AdrianoDeAquino,
    persons.AluisioCarvao,
    persons.AmilcarDeCastro,
    persons.AngeloVenosa,
    persons.AnnaMariaMaiolino,
    persons.AntonioManuel,
    persons.ArturBarrio,
    persons.Barrao,
    persons.BeatrizMilhazes,
    persons.CarlosBevilacqua,
    persons.CarlosZilio,
    persons.CildoMeireles,
    persons.DanielSenise,
    persons.DionisioDelSanto,
    persons.EduardoFrota,
    persons.EduardoSued,
    persons.ElizabethJobim,
    persons.ErnestoNeto,
    persons.EvanyFanzeres,
    persons.FernandaGomes,
    persons.FlavioShiro,
    persons.FranzWeissmann,
    persons.HiltonBerredo,
    persons.IbereCamargo,
    persons.IoleDeFreitas,
    persons.IoneSaldanha,
    persons.IvensMachado,
    persons.JoaoGrijo,
    persons.JorgeDuarte,
    persons.KatievanScherpenberg,
    persons.LucianoFigueiredo,
    persons.LygiaPape,
    persons.ManfredoDeSouzanetto,
    persons.MauricioBentes,
    persons.MauricioRuiz,
    persons.MiguelRioBranco,
    persons.MiltonMachado,
    persons.NelsonFelix,
    persons.PauloRobertoLeal,
    persons.RonaldoMacedo,
    persons.RubensGerchman,
    persons.SergioCamargo,
    persons.Tunga,
    persons.VictorArruda,
    persons.WaltercioCaldas,
  ],
  Patrocinios: undefined,
  Curadores: [
    persons.LigiaCanongia,
    persons.PauloHerkenhoff,
    persons.ReynaldoRoels,
    persons.VivianeMatesco,
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
    persons.Adalberto,
    persons.AlexFlemming,
    persons.AmilcarDeCastro,
    persons.AnaAndre,
    persons.AnaMichaelis,
    persons.AnatolWladyslaw,
    persons.AnesiaPachecoEChaves,
    persons.AngelaSantos,
    persons.AngeloMilani,
    persons.AnnaBellaGeiger,
    persons.AntonioBandeira,
    persons.AntonioPeticov,
    persons.ArcangeloIanelli,
    persons.ArnaldoBattaglini,
    persons.ArrietChahin,
    persons.ArturMatuck,
    persons.BeraldaAltenfelder,
    persons.BernardoKrasniansky,
    persons.Caito,
    persons.CarlosBarmak,
    persons.CarlosDelfino,
    persons.CarlosVergara,
    persons.CarmelaGross,
    persons.CeliaCymbalista,
    persons.CelsoRenato,
    persons.CicaAbsAndre,
    persons.CildoMeireles,
    persons.ClaraCastello,
    persons.ClaudioTozzi,
    persons.CleberMachado,
    persons.DanielSenise,
    persons.DanielaThomas,
    persons.DaniloDiPrete,
    persons.DeniseMilan,
    persons.DomingosSeno,
    persons.DudiMaiaRosa,
    persons.EduardoSued,
    persons.EduardoVerenguel,
    persons.EideFeldon,
    persons.EmmanuelNassar,
    persons.ErnestinaKarman,
    persons.EsterGrinspum,
    persons.EveliPrvupiorka,
    persons.FabianaDeBarros,
    persons.FabioLopes,
    persons.FabioMiguez,
    persons.FernandoStickel,
    persons.FlaviaFernandes,
    persons.FlaviaRibeiro,
    persons.FlavioDeCarvalho,
    persons.FlavioImperio,
    persons.FlavioShiro,
    persons.Flexor,
    persons.FranciscoBrennand,
    persons.FransKrajcberg,
    persons.FridaBaranek,
    persons.GenilsonSoares,
    persons.GeraldoDeSouza,
    persons.GeraldoParanhos,
    persons.GlauciaAmaralDeSouza,
    persons.GlaucoRodrigues,
    persons.HelioVinci,
    persons.HenriqueBoese,
    persons.HerculesBarsotti,
    persons.HildeWeber,
    persons.HiltonBerredo,
    persons.IbereCamargo,
    persons.IoleDiNatale,
    persons.IvaldGranato,
    persons.IvanSerpa,
    persons.JCSerroni,
    persons.JacLeirner,
    persons.JacquesJesion,
    persons.JaimePrades,
    persons.JorgeGuinle,
    persons.JoseAntonioDaSilva,
    persons.JoseCarratu,
    persons.JoseResende,
    persons.JuCorteReal,
    persons.JulioMinervino,
    persons.KarenSilveira,
    persons.KatievanScherpenberg,
    persons.LasarSegall,
    persons.LaszloMeitner,
    persons.LauritaSalles,
    persons.LevinHans,
    persons.LoioPersio,
    persons.LuizAquila,
    persons.LuizMonforte,
    persons.LuizPauloBaravelli,
    persons.LuizSolha,
    persons.LygiaPape,
    persons.MadalenaHashimoto,
    persons.ManabuMabe,
    persons.MarceloCipis,
    persons.MarcioAntonon,
    persons.MarcodoValle,
    persons.MarcosCoelhoBenjamim,
    persons.MariaBonomi,
    persons.MariaHelenaAndres,
    persons.MariaLeontina,
    persons.MariaTerezaLouro,
    persons.MariannitaLuzzati,
    persons.MarinaSaleme,
    persons.MarioFiore,
    persons.MarioIshikawa,
    persons.MarioRamiro,
    persons.MartaOliveira,
    persons.MaureenBisilliat,
    persons.MaySuplicy,
    persons.MiraSchendel,
    persons.MonicaBarth,
    persons.MonicaSartori,
    persons.NaumAlvesDeSouza,
    persons.NazarethPacheco,
    persons.NelsonLeirner,
    persons.Niculitcheff,
    persons.NinaMoraes,
    persons.NunoRamos,
    persons.OctavioPereira,
    persons.PatriciaFurlong,
    persons.PaulaAhzugaray,
    persons.PauloBruscky,
    persons.PauloMendesDaRocha,
    persons.PauloWhitaker,
    persons.PedroLopes,
    persons.Piza,
    persons.RenataBarros,
    persons.ReninaKatz,
    persons.RobertoKeppler,
    persons.RobertoMicoli,
    persons.RomerodeAndraDeLima,
    persons.SandraTucci,
    persons.SantaRosa,
    persons.SelmaDaffre,
    persons.SergioCamargo,
    persons.SergioGuerini,
    persons.SheilaBrannigan,
    persons.SironFranco,
    persons.TeresaBerlinck,
    persons.TomieOhtake,
    persons.VeraBarros,
    persons.VeraChavesBarcellos,
    persons.VeraRodrigues,
    persons.VicenteKutka,
    persons.VictorBrecheret,
    persons.VieiraDaSilva,
    persons.VilanovaArtigas,
    persons.VivianOstrowsky,
    persons.WaltercioCaldas,
    persons.WegaNery,
    persons.WesleyDukeLee,
    persons.YolandaMohalyi,
    persons.YutakaToyota,
    persons.ZeCassio,
  ],
  Patrocinios: undefined,
  Curadores: [
    persons.CarlosVonSchmidt,
    persons.CasemiroXavierDeMendonça,
    persons.CesarLuisPiresDeMelloo,
    persons.GabrielBorba,
    persons.JoaoCandidoGalvao,
    persons.LuizPauloBaravelli,
    persons.StellaTeixeiraDeBarros,
  ],
  ComissaoDeSelecao: [
    persons.GilbertoChateaubriand,
    persons.JoseAlbertoNemer,
    persons.MarceloGrassmann,
    persons.MarcusDeLontraCosta,
    persons.PauloHerkenhoff,
  ],
  Juri: undefined,
  Montadores: [persons.GuimarMorelo],
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
    persons.AnaMariaTavares,
    persons.AngeloMarzano,
    persons.BelmiroDeAlmeida,
    persons.BeraldaAltenfelder,
    persons.BernardoKrasniansky,
    persons.CarlosPasquetti,
    persons.CarlosWladimirsky,
    persons.ChicoCunha,
    persons.ChristinaParisi,
    persons.DanielSenise, //(SegundoPrêmiodoDesenhoBrasileiro),
    persons.Darel,
    persons.DiCavalcanti,
    persons.EdithDerdyk,
    persons.EsterGrinspum,
    persons.EvandroSalles,
    persons.FlavioFerraz,
    persons.Guignard,
    persons.GustavoRezende,
    persons.IgorMarques, //(PrimeiroPrêmiodoDesenhoBrasileiro),
    persons.IsauraPena,
    persons.JadirFreire,
    persons.JairGlass,
    persons.JulioPlaza,
    persons.LasarSegall,
    persons.Leonilson,
    persons.MarcosRuck,
    persons.MariaTomaselli,
    persons.MárioRohnelt,
    persons.MarujaCachay,
    persons.MauroClaro,
    persons.MillorFernandes,
    persons.MiltonKurtz, //(TerceiroPrêmiodoDesenhoBrasileiro),
    persons.MiraSchendel,
    persons.MonicaSartori,
    persons.NelsonFelix,
    persons.OrlandoCastano,
    persons.OswaldoGoeldi,
    persons.PauloGarcez,
    persons.PauloHouayek,
    persons.PauloPortella,
    persons.PauloRobertoLeal,
    persons.PedroNava,
    persons.RaulCordula,
    persons.RuthSchneider,
    persons.Schwanke,
    persons.TarsilaDoAmaral,
    persons.Tunga, //(PrêmioGovernodoEstadoORioGrandedoSul/DestaquedoDesenhoBrasileiro),
    persons.VicenteDoRegoMonteiro,
    persons.VictorBrecheret,
    persons.ZicaBergami,
  ],
  Patrocinios: undefined,
  Curadores: [persons.EvelynBergIochpe, persons.PauloHerkenhoff],
  ComissaoDeSelecao: [
    persons.AmilcarDeCastro,
    persons.AngelicaDeMoraes,
    persons.CasemiroXavierDeMendonça,
    persons.EvelynBergIochpe,
    persons.FredericoMoraes,
    persons.MarcioSampaio,
    persons.PauloHerkenhoff,
    persons.ReginaSilveira,
  ],
  Montadores: undefined,
};
