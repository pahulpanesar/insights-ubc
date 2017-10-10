
class NegationNode extends _Node{
    filter = new FilterNode(this.tokenizer);
    constructor(t: Tokenizer){
        super(t);
    }

    parse(){
        var s = this.getAndCheckToken("NOT :{");
        console.log(s);
        this.filter.parse();


    }
    evaluate(){
        return !this.filter.evaluate();
    }
}