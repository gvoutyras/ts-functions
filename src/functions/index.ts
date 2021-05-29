import { getCurrencyList } from './currencies/getCurrencyList';
import { getSymbol } from './currencies/getSymbol';
export class Currencies {
    connection: any;

    constructor(SQLConnection: any) {
        this.connection = SQLConnection;
    }

    getSymbol(currency: string) {
        return new getSymbol(currency);
    }

    getCurrencyList(currCode: string) {
        return new getCurrencyList(this.connection, currCode);
    }
}

export class ItourAPI {
    connection: any;

    constructor(SQLConnection: any) {
        this.connection = SQLConnection;
    }

}

export class Passenger {
    connection: any;

    constructor(SQLConnection: any) {
        this.connection = SQLConnection;
    }


}