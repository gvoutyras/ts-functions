"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSymbol = void 0;
var getSymbol = /** @class */ (function () {
    function getSymbol() {
    }
    getSymbol.prototype.getSymbol = function (curCode) {
        switch (curCode) {
            case "AUD" || "CAD" || "MXN" || "USD" || "ARS":
                return "$";
            case "BGN":
                return "лв";
            case "BRL":
                return "R$";
            case "CNY":
            case "JPY":
                return "&yen;";
            case "EUR":
                return "&euro;";
            case "INR":
                return "₨";
            case "IDR":
                return "Rp";
            case "GBP":
                return "&pound;";
            case "RUB":
                return "руб";
            case "SEK":
                return "kr";
            case "TRY":
                return "TL";
            case "PLN":
                return "zł";
            default:
                return curCode;
        }
    };
    return getSymbol;
}());
exports.getSymbol = getSymbol;
//# sourceMappingURL=getSymbol.js.map