export const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

export function formatMoney(value: number) {
    return value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2
    });
}
