class FilterNode extends _Node{
    filter = new _Node(this.tokenizer);

    constructor(t: Tokenizer){
        super(t);
    }

    parse(){
        var s = this.getAndCheckToken("WHERE:{");
        console.log(s);
    }

    evaluate(){

    }
}