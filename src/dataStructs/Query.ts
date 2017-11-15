
import _Node from "../controller/nodes/Node";
import Tokenizer from "./Tokenizer";
import FilterNode from "../controller/nodes/FilterNode";
import Course from "./Course";

export default class Query extends _Node {
    filter: FilterNode;
    constructor(t: Tokenizer,c: Course, count:number){
        super(t,c,count);
    }

    parseFilter(){
        this.getAndCheckToken("WHERE",true);
        this.filter = new FilterNode(this.tokenizer,this.dataStruct, -1);
        this.filter.parse();
    }

    evaluate(){
        if(!this.tokenizer.tokens.includes("WHERE") || !this.tokenizer.tokens.includes("OPTIONS")) throw new Error("No options");
        return this.filter.evaluate();
        //TOD0 filter courses
    }


}