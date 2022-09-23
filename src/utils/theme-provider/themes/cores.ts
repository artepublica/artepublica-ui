export const magenta = '#CC1964';
export const rosa = '#F2D7E3';
export const lilas = '#B494BA';
export const vinho = '#80417C';
export const azul = '#2B61C6';
export const azul2 = '#28B0E6';
export const verde = '#60D06C';
export const verde2 = '#BEE448';
export const amarelo = '#FFC003';
export const laranja = '#FF9300';
export const vermelho = '#EA4949';
export const vermelho2 = '#CC192C';
export const rosa2 = '#F56CA4';
export const amarelo2 = '#F5D716';
export const azul3 = '#00006c';
export const verde3 = '#BAEF00';
export const laranja2 = '#F07A3E';
export const vinho2 = '#741753';
export const amarelo3 = '#F5E585';
export const verde4 = '#143626';
export const rosa3 = '#F3A6C3';
export const azul4 = '#96CEED';
export const laranja3 = '#EC745C';
export const petroleo = '#2B5D68';
export const verde5 = '#DADF50';
export const vermelho3 = '#DE494C';
export const branco = '#FFFFFF';

export const principalLight = magenta;
export const secundariaLight = rosa;

export const coresGraficoLight = [
    magenta,
    rosa,
    lilas,
    vinho,
    azul,
    azul2,
    verde,
    verde2,
    amarelo,
    laranja,
    vermelho,
    vermelho2,
    rosa2,
    amarelo2,
    azul3,
    verde3,
    laranja2,
    vinho2,
    amarelo3,
    verde4,
    rosa3,
    azul4,
    laranja3,
    petroleo,
    verde5,
    vermelho3,
    branco,
];

export function getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
