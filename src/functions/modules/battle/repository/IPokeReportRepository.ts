import { DynamoDB } from 'aws-sdk';
import { Report } from '../../../lib/pokemon/model/Report';

const TABLE_NAME = process.env.POKEMON_REPORT_TABLE ? process.env.POKEMON_REPORT_TABLE : "no table";
const DocClient = new DynamoDB.DocumentClient();

export class IPokeReportRepository{

    static async put(report: Report){
        console.log(`Saving the following report ${report}`);
        return DocClient.put({
            TableName: TABLE_NAME,
            Item: report
        }).promise();
    }

}