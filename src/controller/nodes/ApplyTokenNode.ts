
import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import Course from "../../dataStructs/Course";
import KeyNode from "./KeyNode";

export default class ApplyTokenNode extends _Node{
    s: string;

    constructor(t:Tokenizer,c:any){
        super(t,c);
    }
    parse(){
        this.s = this.getAndCheckToken("MAX|MIN|AVG|COUNT|SUM",true);
    }
    evaluate(){
        return this.s;
    }
}