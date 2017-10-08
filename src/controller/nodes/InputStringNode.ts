class InputStringNode extends _Node{
    inputString: string;
    constructor(t: Tokenizer){
        super(t);
    }

    parse(){
        var s = this.getAndCheckToken("[^*]");
        console.log(s);
        s == null ? console.log("parser got null") : this.inputString = s;
    }

    evaluate(){
        return this.inputString;
    }
}