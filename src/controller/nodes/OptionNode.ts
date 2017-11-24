

import _Node from "./Node";
import Course from "../../dataStructs/Course";
import ColumnNode from "./ColumnNode";
import Tokenizer from "../../dataStructs/Tokenizer";
import OrderNode from "./OrderNode";

export default class OptionNode extends _Node{


    columns:ColumnNode = new ColumnNode(this.tokenizer,this.dataStruct,this.count);
    order:OrderNode = new OrderNode(this.tokenizer,this.dataStruct,this.count);
    errorCatch:string[] = [];
    t:any;
    constructor(t: Tokenizer,c: any,count:number, transform:any){
        super(t,c,count);
        this.t=transform;
    }
    parse(){
        var s = this.getAndCheckToken("OPTIONS",true);
        this.columns.parse(this.t);
        var tempColumns: any = this.columns.evaluate();
        this.errorCatch = tempColumns.errorCatch;
        this.order.parse(tempColumns.options,this.errorCatch, this.t);
    }

    evaluate(){
        var tempOrder = this.order.evaluate();
        return {"columns" : this.columns.evaluate(),"dir" : tempOrder.dir, "keys" : tempOrder.keys,"errorCatch":this.errorCatch};
    }
}