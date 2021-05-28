import {getSymbol}  from './currencies/getSymbol';
export class __TSFunction{
    connection: any;

    constructor(SQLConnection: any) {
        this.connection = SQLConnection;
    }

    getSymbol(currency: string) {
        return new getSymbol(currency);
    }
}