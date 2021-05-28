function getSymbol(curCode: String) {
    switch (curCode) {
        case "AUD": case "CAD": case "MXN": case "USD": case "ARS":
				return "$";
			case "BGN":
				return "лв";
			case "BRL":
				return "R$";
			case "CNY": case "JPY":
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
}

export {getSymbol as getCurrencySymbol};