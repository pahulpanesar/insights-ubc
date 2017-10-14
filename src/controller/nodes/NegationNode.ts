
import Tokenizer from "../../dataStructs/Tokenizer";
import FilterNode from "./FilterNode";
import _Node from "./Node";
import Course from "../../dataStructs/Course";

export default class NegationNode extends _Node{
    filter = new FilterNode(this.tokenizer,this.course);
    constructor(t: Tokenizer,c:Course){
        super(t,c);
    }

    parse(){
        var s = this.getAndCheckToken("NOT");
        console.log(s);
        this.filter.parse();


    }
    evaluate(){
        return !this.filter.evaluate();
    }
}