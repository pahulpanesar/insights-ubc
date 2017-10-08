
class NegationNode extends _Node{
    filter = new FilterNode(this.tokenizer);
    constructor(t: Tokenizer){
        super(t);
    }

    parse(){
        var s = this.getAndCheckToken("NOT :{");

    }
    evaluate(){
        return !this.filter.evaluate();
    }
}