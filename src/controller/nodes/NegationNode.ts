
import Tokenizer from "../../dataStructs/Tokenizer";
import FilterNode from "./FilterNode";
import _Node from "./Node";
import Course from "../../dataStructs/Course";

export default class NegationNode extends _Node{


    filter = new FilterNode(this.tokenizer,this.dataStruct, this.count);
    constructor(t: Tokenizer,c: any,count:number){
        super(t,c,count);
    }

    parse(){
        var s = this.getAndCheckToken("NOT", true);
        this.filter.parse();
    }
    evaluate(){
        return !this.filter.evaluate();
    }
}