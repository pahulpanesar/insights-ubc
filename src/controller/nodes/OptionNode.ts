

import _Node from "./Node";
import Course from "../../dataStructs/Course";
import ColumnNode from "./ColumnNode";
import Tokenizer from "../../dataStructs/Tokenizer";
import OrderNode from "./OrderNode";

export default class OptionNode extends _Node{
    columns:ColumnNode = new ColumnNode(this.tokenizer,this.course);
    order:OrderNode = new OrderNode(this.tokenizer,this.course);
    constructor(t:Tokenizer,c:Course){
        super(t,c);
    }
    parse(){
        var s = this.getAndCheckToken("OPTIONS",true);
        this.columns.parse();
        this.order.parse();
    }

    evaluate(){
        return {"columns" : this.columns.evaluate(),"order" : this.order.evaluate()};
    }
}