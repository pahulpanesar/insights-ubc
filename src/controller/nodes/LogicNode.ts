import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import FilterNode from "./FilterNode";
import Course from "../../dataStructs/Course";

export class LogicNode extends _Node{
    filter1: FilterNode = new FilterNode(this.tokenizer, this.course);
    filter2: FilterNode = new FilterNode(this.tokenizer, this.course);
    logic: string = "";
    constructor(t: Tokenizer,c: Course){
        super(t,c);
    }

    parse(){
        var s = this.getAndCheckToken("AND|OR", true); //may be double checking the regex
        this.filter1.parse();
        this.filter2.parse();

        s == null ? console.log("parser got null") : this.logic = s; //storing logic for evaulate()
    }

    evaluate(){
        if(this.logic === 'AND'){
            return this.filter1.evaluate() && this.filter2.evaluate();
        }
        else if(this.logic === 'OR'){
            return this.filter1.evaluate() || this.filter2.evaluate();
        }

    }
}
