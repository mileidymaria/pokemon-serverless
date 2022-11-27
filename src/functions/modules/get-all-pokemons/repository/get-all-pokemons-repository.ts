import { DynamoDB } from "aws-sdk";
const POKEMON_TABLE = process.env.POKEMON_TABLE
const docClient = new DynamoDB.DocumentClient();

export class GetAllPokemonsRepository{
    constructor(){
    }

    
    async getAll(pageSize: number, lastItem?){
        try{
            const params = {
                TableName: POKEMON_TABLE,
                Limit: pageSize,
                ExclusiveStartKey: undefined
            };

            if(lastItem){
                params.ExclusiveStartKey = {pokeId: lastItem};
            }

            const response = await docClient.scan(params).promise();

            return {
                items: response.Items,
                lastItem: response.LastEvaluatedKey
            }

        } catch (err){
            console.log(`Error when retrieving items. ${err.message}`); 
        }
        return 'Error when retrieving items!'
    }
}