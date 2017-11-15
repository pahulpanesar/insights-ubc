

import _Node from "./Node";
import Course from "../../dataStructs/Course";
import ColumnNode from "./ColumnNode";
import Tokenizer from "../../dataStructs/Tokenizer";
import OrderNode from "./OrderNode";

export default class OptionNode extends _Node{
    columns:ColumnNode = new ColumnNode(this.tokenizer,this.dataStruct,this.count);
    order:OrderNode = new OrderNode(this.tokenizer,this.dataStruct,this.count);
    constructor(t: Tokenizer,c: any,count:number){
        super(t,c,count);
    }
    parse(){
        var s = this.getAndCheckToken("OPTIONS",true);
        this.columns.parse();
        this.order.parse(this.columns.evaluate());
    }

    evaluate(){
        return {"columns" : this.columns.evaluate(),"order" : this.order.evaluate()};
    }
}