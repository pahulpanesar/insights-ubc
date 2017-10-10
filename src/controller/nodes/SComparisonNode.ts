class SComparisonNode extends _Node{
    inputString: InputStringNode = new InputStringNode(this.tokenizer);
    s_key: SKeyNode = new SKeyNode(this.tokenizer);


    constructor(t: Tokenizer){
        super(t);
    }

    parse(){
        console.log(this.getAndCheckToken("IS:{")); //IS:{' s_key ':' [*]? inputstring [*]? '}'
        this.s_key.parse();
        console.log(this.getAndCheckToken(":"));
        this.inputString.parse();
        console.log(this.getAndCheckToken("}"))

    }

    evalaute(){
        this.filterObj.comparator = this.equals;
        return (this.inputString.evaluate() === this.s_key.evaluate());
    }

    equals(obj1: any,  obj2: any){
        return obj1 === obj2
    }





}