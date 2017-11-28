

import _Node from "./Node";
import Course from "../../dataStructs/Course";
import ColumnNode from "./ColumnNode";
import Tokenizer from "../../dataStructs/Tokenizer";
import OrderNode from "./OrderNode";

export default class OptionNode extends _Node{
    columns:ColumnNode = new ColumnNode(this.tokenizer,this.dataStruct,this.count);
    order:OrderNode = new OrderNode(this.tokenizer,this.dataStruct,this.count);
    transform: any;
    constructor(t: Tokenizer,c: any,count:number,transform:any){
        super(t,c,count);
        this.transform = transform;
    }
    parse(){
        var s = this.getAndCheckToken("OPTIONS",true);
        this.columns.parse(this.transform);
        this.order.parse(this.columns.evaluate());
    }

    evaluate(){
        return {"columns" : this.columns.evaluate(),"order" : this.order.evaluate()};
    }
}