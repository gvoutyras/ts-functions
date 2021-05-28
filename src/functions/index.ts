import { getCurrencyList } from './currencies/getCurrencyList';
import {getSymbol}  from './currencies/getSymbol';
export class __TSFunction__{
    connection: any;

    constructor(SQLConnection: any) {
        this.connection = SQLConnection;
    }

    getSymbol(currency: string) {
        return new getSymbol(currency);
    }

    getCurrencyList(connection) {
        return new getCurrencyList(connection);
    }
}