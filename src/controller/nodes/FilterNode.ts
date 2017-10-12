import _Node from "./Node";
import Tokenizer from "../Tokenizer";
import {LogicNode} from "./LogicNode";
import MComparisonNode from "./MComparisonNode";
import SComparisonNode from "./SComparisonNode";
import NegationNode from "./NegationNode";

export default class FilterNode extends _Node{
    filter: any;

    constructor(t: Tokenizer){
        super(t);
    }

    parse(){
        var s = this.getAndCheckToken("AND|OR|LT|GT|EQ|IS|NOT");
        switch(s){
            case "AND":
            case "OR":
                //create logic node
                this.filter = new LogicNode(this.tokenizer);
            case "LT":
            case "GT":
            case "EQ":
                //create MComparison node
                this.filter = new MComparisonNode(this.tokenizer);
            case "IS":
                this.filter = new SComparisonNode(this.tokenizer);
                //create SComparison node
            case "NOT":
                this.filter = new NegationNode(this.tokenizer);
                //create negation node
            default:
                console.log("parser got unexpected value");
        }
        this.filter.parse();
        console.log(s);
    }

    evaluate(){
        return this.filter.evalaute();
    }
}