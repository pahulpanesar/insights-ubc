class SComparisonNode extends _Node{
    inputString: InputStringNode = new InputStringNode(this.tokenizer);
    s_key: SKeyNode = new SKeyNode(this.tokenizer);


    constructor(t: Tokenizer){
        super(t);
    }

    parse(){
        console.log(this.getAndCheckToken("IS")); //IS:{' s_key ':' [*]? inputstring [*]? '}'
        this.inputString.parse();
        this.s_key.parse();
    }

    evalaute(){
        return (this.inputString.evaluate() === this.s_key.evaluate());
    }





}