export class Response{
    private statusCode: number;
    private body: string;

    constructor(statusCode: number, body: string){
        this.statusCode = statusCode;
        this.body= body;
    }
}