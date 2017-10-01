class _Node{
    tokenizer : _Tokenizer;

    constructor (t: any){
        this.tokenizer = t;
    }

    getAndCheckToken(regex: string){
        var s: string = this.tokenizer.getNext();

        //check formatting for node
        //pass regex for specific node
        //TODO
    }



}