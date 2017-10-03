class LTNode extends _Node{
    number: NumNode = new NumNode(this.tokenizer);
    m_key: MKeyNode = new MKeyNode(this.tokenizer);


    constructor(t: Tokenizer){
        super(t);
    }

    parse(){
        console.log(this.getAndCheckToken("GT")); //not sure why this function isn't inherited
        this.m_key.parse();
        this.number.parse();
    }

    evalaute(){
        //TODO
        //evaluate m_key
        //evaluate number
        //compare
    }





}