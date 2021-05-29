import { Connection } from "tedious";
import * as tu from "travelsoft-util";

export class getCurrencyList{
  /**
   * 
   * @param sqlConn AN SQL Connection object
   * @param currCode optional - A currency code
   * @returns An array with all currencies
   */
    constructor(sqlConn: any, currCode: string) {
        let qb = new tu.queryBuilder("currency_hnd");
        qb.addParameter("action", "VARCHAR", "L");
        if(currCode) qb.addParameter("action", "VARCHAR", currCode);

        let q = { sql: qb.getQuery() };

        return sqlConn.request(q)
        .then(async (resultSet) => {
          if (resultSet[0]) return { reqStatus: true, data: resultSet[0] };
          return { reqStatus: false, data: null };
        })
        .catch((error) => {
          console.log(`${"[getCurrencyList]"} Caught Error: ${error}`);
          return { reqStatus: "error", data: null, message: error };
        });
    }
}