import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import KeyNode from "./KeyNode";
import ApplyTokenNode from "./ApplyTokenNode";

export default class ApplyKeyNode extends _Node{
    s:string;
    applyToken: ApplyTokenNode = new ApplyTokenNode(this.tokenizer,this.dataStruct,this.count);
    key: KeyNode = new KeyNode(this.tokenizer,this.dataStruct,this.count);

    constructor(t:Tokenizer,c:any,count:number){
        super(t,c,count);
    }
    parse(){
        this.s = this.getAndCheckToken("^[^_]+$",true); //any string of length > 1 not containing underscore
        this.applyToken.parse();
        this.key.parse([], null); //applykeytoken has to be original key
    }

    evaluate(){
        return {"name":this.s,"action":this.applyToken.evaluate(),"key":this.key.evaluate()}
    }

}