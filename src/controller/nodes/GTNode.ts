class _GTNode extends _Node{
    m_key: _MKeyNode(tokenizer); //unable to access parent tokenizer
    number: _NumNode(tokenizer); //may need to figure out alt solution for typscipt

    constructor(t: any){
        super(t);
    }

    parse(){
        console.log(getAndCheckToken("GT")); //not sure why this function isn't inherited
        this.m_key.parse();
        this.number.parse();
    }





}