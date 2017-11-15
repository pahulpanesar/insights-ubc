import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import {LogicNode} from "./LogicNode";
import MComparisonNode from "./MComparisonNode";
import SComparisonNode from "./SComparisonNode";
import NegationNode from "./NegationNode";
import Course from "../../dataStructs/Course";
import {error} from "util";

export default class FilterNode extends _Node{
    filter: any;
    count: number = -1;
    constructor(t: Tokenizer, c:any){
        super(t,c);
    }

    parse(){
        var s = this.getAndCheckToken("AND|OR|LT|GT|EQ|IS|NOT", false);

        //switch statement creates the proper node depending on the kind of filter
        switch(s){
            case "AND":
            case "OR":
                this.count++;
                //create logic node
                this.filter = new LogicNode(this.tokenizer,this.dataStruct, this.count);
                break;
            case "LT":
            case "GT":
            case "EQ":
                //create MComparison node
                this.filter = new MComparisonNode(this.tokenizer, this.dataStruct);
                break;
            case "IS":
                this.filter = new SComparisonNode(this.tokenizer, this.dataStruct);
                break;
                //create SComparison node
            case "NOT":
                this.filter = new NegationNode(this.tokenizer, this.dataStruct);
                break;
                //create negation node
            default:
                //console.log("parser got unexpected value");
                throw error("Failed regex");
                //exit?
        }
        this.filter.parse();
        //console.log(s);
    }

    evaluate(){
        this.count = 0;
        return this.filter.evaluate();
    }
}