
import _Node from "./nodes/Node";
import Tokenizer from "./Tokenizer";
import FilterNode from "./nodes/FilterNode";
import Course from "../dataStructs/Course";

export default class Query extends _Node {
    filter: FilterNode;
    //options: OptionNode[] = []; TODO
    constructor(t: Tokenizer,c: Course){
        super(t,c);
    }



    parse(){
        this.filter = new FilterNode(this.tokenizer,this.course);
        this.filter.parse();

    }

    evaluate(){
        this.filter.evaluate();
        //TOD0 filter courses
    }


}