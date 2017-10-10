
class Tokenizer{
    currentToken: number;
    tokens: string[] = [];

    getNext(): string{
        let token:string="";
        if (this.currentToken<this.tokens.length){
            token = this.tokens[this.currentToken];
            this.currentToken++;
        }
        else
            token="NULLTOKEN";
        return token;

    }
    checkNext(): string{

        var token:string ="";
        if (this.currentToken<this.tokens.length){
            token = this.tokens[this.currentToken];
        }
        else
            token="NO_MORE_TOKENS";
        return token;

    }
}