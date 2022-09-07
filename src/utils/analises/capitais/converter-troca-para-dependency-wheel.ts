import { TipoCapital, TrocaCapital, DependencyWheel } from '@domain';

function calcularPesoCapital(capital: TipoCapital): number {
    switch (capital) {
        case TipoCapital.Cultural:
            return 2;
        case TipoCapital.Social:
            return 1;
        case TipoCapital.Economico:
            return 1;
        default:
            return 0;
    }
}

function converterTrocaParaDependencyWheel(troca: TrocaCapital): DependencyWheel {
    const pesos = troca.capitais.map(calcularPesoCapital);
    const weight = pesos.reduce((total, peso) => total + peso, 0);

    const dep = {
        from: troca.pessoa1,
        to: troca.pessoa2,
        weight,
    };

    return dep;
}

export default converterTrocaParaDependencyWheel;
