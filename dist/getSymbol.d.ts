declare function getSymbol(curCode: String): String | "$" | "лв" | "R$" | "&yen;" | "&euro;" | "₨" | "Rp" | "&pound;" | "руб" | "kr" | "TL" | "zł";
export { getSymbol as getCurrencySymbol };
