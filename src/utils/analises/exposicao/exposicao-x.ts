import { Exposicao, TipoCapital, TrocaCapital } from '@domain';

import { default as artistasConvidadosExposicao } from './artistas-convidados';
import { default as comissaoDePremiacaoExposicao } from './comissao-de-premiacao';
import { default as comissaoDeSelecaoExposicao } from './comissao-de-selecao';
import { default as curadoressExposicao } from './curadores';
import { default as escritoresCatalogoExposicao } from './escritores-catalogo';
import { default as expositoresExposicao } from './expositores';
import { default as juradosExposicao } from './jurados';
import { default as juradosDeSelecaoExposicao } from './jurados-de-selecao';
import { default as montadoresExposicao } from './montadores';
import { default as organizadoresExposicao } from './organizadores';
import trocaCapital from '../capitais/troca-capital';

function exposicaoX(exposicao: Exposicao): TrocaCapital[] {
  const curadores = curadoressExposicao(exposicao);
  const comissaoDePremiacao = comissaoDePremiacaoExposicao(exposicao);
  const comissaoDeSelecao = comissaoDeSelecaoExposicao(exposicao);
  const escritoresCatalogo = escritoresCatalogoExposicao(exposicao);
  const juradosDeSelecao = juradosDeSelecaoExposicao(exposicao);
  const jurados = juradosExposicao(exposicao);
  const montadores = montadoresExposicao(exposicao);
  const organizadores = organizadoresExposicao(exposicao);

  const expositores = expositoresExposicao(exposicao);
  const artistasConvidados = artistasConvidadosExposicao(exposicao);

  const curadorXexpositor = trocaCapital(
    curadores,
    expositores,
    'curador-expositor',
    [TipoCapital.Social, TipoCapital.Cultural],
  );
  const comissaoDePremiacaoXexpositor = trocaCapital(
    comissaoDePremiacao,
    expositores,
    'comissaoDePremiacao-expositor',
    [TipoCapital.Social, TipoCapital.Cultural],
  );
  const comissaoDeSelecaoXexpositor = trocaCapital(
    comissaoDeSelecao,
    expositores,
    'comissaoDeSelecao-expositor',
    [TipoCapital.Social, TipoCapital.Cultural],
  );
  const escritorCatalogoXexpositor = trocaCapital(
    escritoresCatalogo,
    expositores,
    'escritorCatalogo-expositor',
    [TipoCapital.Social, TipoCapital.Cultural],
  );
  const juradoDeSelecaoXexpositor = trocaCapital(
    juradosDeSelecao,
    expositores,
    'juradoDeSelecao-expositor',
    [TipoCapital.Social, TipoCapital.Cultural],
  );
  const juradoXexpositor = trocaCapital(
    jurados,
    expositores,
    'jurado-expositor',
    [TipoCapital.Social, TipoCapital.Cultural],
  );
  const montadorXexpositor = trocaCapital(
    montadores,
    expositores,
    'montador-expositor',
    [TipoCapital.Social, TipoCapital.Cultural],
  );
  const organizadorXexpositor = trocaCapital(
    organizadores,
    expositores,
    'organizador-expositor',
    [TipoCapital.Social, TipoCapital.Cultural],
  );

  const curadorXartistaConvidados = trocaCapital(
    curadores,
    artistasConvidados,
    'curador-artistaConvidados',
    [TipoCapital.Social, TipoCapital.Cultural],
  );
  const comissaoDePremiacaoXartistaConvidados = trocaCapital(
    comissaoDePremiacao,
    artistasConvidados,
    'comissaoDePremiacao-artistaConvidados',
    [TipoCapital.Social, TipoCapital.Cultural],
  );
  const comissaoDeSelecaoXartistaConvidados = trocaCapital(
    comissaoDeSelecao,
    artistasConvidados,
    'comissaoDeSelecao-artistaConvidados',
    [TipoCapital.Social, TipoCapital.Cultural],
  );
  const escritorCatalogoXartistaConvidados = trocaCapital(
    escritoresCatalogo,
    artistasConvidados,
    'escritorCatalogo-artistaConvidados',
    [TipoCapital.Social, TipoCapital.Cultural],
  );
  const juradoDeSelecaoXartistaConvidados = trocaCapital(
    juradosDeSelecao,
    artistasConvidados,
    'juradoDeSelecao-artistaConvidados',
    [TipoCapital.Social, TipoCapital.Cultural],
  );
  const juradoXartistaConvidados = trocaCapital(
    jurados,
    artistasConvidados,
    'jurado-artistaConvidados',
    [TipoCapital.Social, TipoCapital.Cultural],
  );
  const montadorXartistaConvidados = trocaCapital(
    montadores,
    artistasConvidados,
    'montador-artistaConvidados',
    [TipoCapital.Social, TipoCapital.Cultural],
  );
  const organizadorXartistaConvidados = trocaCapital(
    organizadores,
    artistasConvidados,
    'organizador-artistaConvidados',
    [TipoCapital.Social, TipoCapital.Cultural],
  );

  return [
    ...curadorXexpositor,
    ...comissaoDePremiacaoXexpositor,
    ...comissaoDeSelecaoXexpositor,
    ...escritorCatalogoXexpositor,
    ...juradoDeSelecaoXexpositor,
    ...juradoXexpositor,
    ...montadorXexpositor,
    ...organizadorXexpositor,

    ...curadorXartistaConvidados,
    ...comissaoDePremiacaoXartistaConvidados,
    ...comissaoDeSelecaoXartistaConvidados,
    ...escritorCatalogoXartistaConvidados,
    ...juradoDeSelecaoXartistaConvidados,
    ...juradoXartistaConvidados,
    ...montadorXartistaConvidados,
    ...organizadorXartistaConvidados,

    //...expositorXexpositor,
  ];
}

export default exposicaoX;
