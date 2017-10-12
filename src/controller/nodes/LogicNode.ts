import _Node from "./Node";
import Tokenizer from "../Tokenizer";
import {FilterNode} from "./FilterNode";

export class LogicNode extends _Node{
    filter1: FilterNode = new FilterNode(this.tokenizer);
    filter2: FilterNode = new FilterNode(this.tokenizer);
    logic: string = "";
    constructor(t: Tokenizer){
        super(t);
    }

    parse(){
        var s = this.getAndCheckToken("AND|OR")
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
