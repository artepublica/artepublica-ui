function coverterData(data: string): Date {
  if (data.split('/').length === 3) {
    return new Date(
      `${data.split('/')[2]}-${data.split('/')[1]}-${data.split('/')[0]}`,
    );
  } else if (data.split('/').length === 2) {
    return new Date(`${data.split('/')[1]}-${data.split('/')[0]}-01`);
  } else {
    return new Date(`${data.split('/')[0]}-01-01`);
  }
}

export function antes(data1: string, data2: string): boolean {
  const data1Convertida = coverterData(data1);
  const data2Convertida = coverterData(data2);

  return data1Convertida <= data2Convertida;
}

export function depois(data1: string, data2: string): boolean {
  const data1Convertida = coverterData(data1);
  const data2Convertida = coverterData(data2);

  return data1Convertida >= data2Convertida;
}

export function entre(data?: string, data1?: string, data2?: string): boolean {
  if (data && data1 && data2) {
    const dataConvertida = coverterData(data);
    const data1Convertida = coverterData(data1);
    const data2Convertida = coverterData(data2);

    return (
      dataConvertida >= data1Convertida && dataConvertida <= data2Convertida
    );
  }
  return false;
}
