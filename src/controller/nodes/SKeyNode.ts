
class SKeyNode extends _Node{
    s_key: string;

    constructor(t: Tokenizer){
        super(t);
    }
    parse(){
        var s = this.getAndCheckToken("courses_\((dept|id|instructor|title|uuid)\)"); //check if it's a valid m_key
        this.s_key = s;
    }

    evaluate(){
        console.log("returning... " + this.s_key);
        return this.s_key;
    }
}