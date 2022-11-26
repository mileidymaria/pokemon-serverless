export class Response{
     // @ts-ignore
    private statusCode: number;
     // @ts-ignore
    private body: string;

    constructor(statusCode: number, body: string){
        this.statusCode = statusCode;
        this.body= body;
    }
}