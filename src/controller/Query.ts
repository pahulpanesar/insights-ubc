
import _Node from "./nodes/Node";
import Tokenizer from "./Tokenizer";
import FilterNode from "./nodes/FilterNode";

export default class Query extends _Node {
    filter: FilterNode;
    //options: OptionNode[] = []; TODO
    constructor(t: Tokenizer){
        super(t);
    }

    parse(){
        this.filter = new FilterNode(this.tokenizer);
        this.filter.parse();

    }

    evaluate(){
        this.filter.evaluate();
        //TOD0 filter courses
    }


}