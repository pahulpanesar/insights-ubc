class _Node{ //underscore is to distinguish from native TS class
    tokenizer : Tokenizer;

    constructor (t: Tokenizer){
        this.tokenizer = t;
    }

    getAndCheckToken(regex: string): string{
        var s: string = this.tokenizer.getNext();
        if(!s.match(regex)){return null;}
        return s;
        //check formatting for node
        //pass regex for specific node
        //TODO
    }

}