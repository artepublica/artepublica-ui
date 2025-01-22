import { Author, Obra } from '@domain';

import heritages from './heritages';

const authorNames: string[] = heritages
  .map((heritage) =>
    heritage.Authors && heritage.Authors.length > 0
      ? heritage.Authors
      : [{ Person: { Name: 'Desconhecida' } } as Author],
  )
  .reduce<string[]>((authors, heritageAuthors) => {
    Array.prototype.push.apply(
      authors,
      heritageAuthors
        .map((author) => author.Person?.Name ?? 'Desconhecida')
        .filter((author) => !authors.includes(author)),
    );
    return authors;
  }, []);

const authors: { name: string; heritages: Obra[] }[] = authorNames.reduce<
  { name: string; heritages: Obra[] }[]
>(function (total, authorName) {
  total.push({
    name: authorName,
    heritages: heritages.filter(
      (heritage) =>
        (heritage.Authors &&
          heritage.Authors.length > 0 &&
          heritage.Authors.map(
            (author) => author.Person?.Name ?? 'Desconecida',
          ).includes(authorName)) ||
        ((heritage.Authors == null || heritage.Authors.length === 0) &&
          authorName === 'Desconhecida'),
    ),
  });
  return total;
}, []);

export default authors;
