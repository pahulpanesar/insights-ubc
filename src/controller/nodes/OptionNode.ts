

import _Node from "./Node";
import Course from "../../dataStructs/Course";
import ColumnNode from "./ColumnNode";
import Tokenizer from "../../dataStructs/Tokenizer";
import OrderNode from "./OrderNode";

export default class OptionNode extends _Node{
    columns:ColumnNode = new ColumnNode(this.tokenizer,this.dataStruct);
    order:OrderNode = new OrderNode(this.tokenizer,this.dataStruct);
    constructor(t:Tokenizer,c:any){
        super(t,c);
    }
    parse(){
        var s = this.getAndCheckToken("OPTIONS",true);
        this.columns.parse();
        this.order.parse(this.columns.evaluate());
    }

    evaluate(){
        var tempOrder = this.order.evaluate();
        return {"columns" : this.columns.evaluate(),"dir" : tempOrder.dir, "keys" : tempOrder.keys};
    }
}