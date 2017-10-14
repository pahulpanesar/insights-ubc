import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import {LogicNode} from "./LogicNode";
import MComparisonNode from "./MComparisonNode";
import SComparisonNode from "./SComparisonNode";
import NegationNode from "./NegationNode";
import Course from "../../dataStructs/Course";

export default class FilterNode extends _Node{
    filter: any;

    constructor(t: Tokenizer, c:Course){
        super(t,c);
    }

    parse(){
        var s = this.getAndCheckToken("AND|OR|LT|GT|EQ|IS|NOT");

        //switch statement creates the proper node depending on the kind of filter
        switch(s){
            case "AND":
            case "OR":
                //create logic node
                this.filter = new LogicNode(this.tokenizer,this.course);
                break;
            case "LT":
            case "GT":
            case "EQ":
                //create MComparison node
                this.filter = new MComparisonNode(this.tokenizer, this.course);
                break;
            case "IS":
                this.filter = new SComparisonNode(this.tokenizer, this.course);
                break;
                //create SComparison node
            case "NOT":
                this.filter = new NegationNode(this.tokenizer, this.course);
                break;
                //create negation node
            default:
                console.log("parser got unexpected value");
                break;
                //exit?
        }
        this.filter.parse();
        console.log(s);
    }

    evaluate(){
        return this.filter.evalaute();
    }
}