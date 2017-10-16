
import _Node from "../controller/nodes/Node";
import Tokenizer from "./Tokenizer";
import FilterNode from "../controller/nodes/FilterNode";
import Course from "./Course";

export default class Query extends _Node {
    filter: FilterNode;
    constructor(t: Tokenizer,c: Course){
        super(t,c);
    }

    parseFilter(){
        this.getAndCheckToken("WHERE",true);
        this.filter = new FilterNode(this.tokenizer,this.course);
        this.filter.parse();
    }

    evaluate(){
        return this.filter.evaluate();
        //TOD0 filter courses
    }


}