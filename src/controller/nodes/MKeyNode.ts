
class MKeyNode extends _Node{
    m_key: string;

    constructor(t: Tokenizer){
        super(t);
    }
    parse(){
        var s = this.getAndCheckToken(" courses_\((avg|pass|fail|audit)\)"); //check if it's a valid m_key
        this.m_key = s;
    }

    evaluate(){
        console.log("returning... " + this.m_key);
        courseObj.m_key;
        return 0 //TODO return value found in entry (i.e. the average)
    }
}