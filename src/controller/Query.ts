
import _Node from "./nodes/Node";
import Tokenizer from "./Tokenizer";
import {FilterNode} from "./nodes/FilterNode";

export default class Query extends _Node {
    filters: FilterNode[] = [];
    //options: OptionNode[] = []; TODO
    constructor(t: Tokenizer){
        super(t);
    }

    parse(){
        while(this.tokenizer.checkNext() != "NO_MORE_TOKENS"){
            let filter: FilterNode = new FilterNode(this.tokenizer);
            this.filters.push(filter);
            filter.parse();
        }
    }

    evaluate(){
        //TOD0 filter courses
    }


}