

import _Node from "./Node";
import Course from "../../dataStructs/Course";
import ColumnNode from "./ColumnNode";
import Tokenizer from "../../dataStructs/Tokenizer";
import OrderNode from "./OrderNode";

export default class OptionNode extends _Node{
    columns:ColumnNode = new ColumnNode(this.tokenizer,this.dataStruct);
    order:OrderNode = new OrderNode(this.tokenizer,this.dataStruct);
    errorCatch:string[] = [];
    constructor(t:Tokenizer,c:any){
        super(t,c);
    }
    parse(){
        var s = this.getAndCheckToken("OPTIONS",true);
        this.columns.parse();
        var tempColumns: any = this.columns.evaluate();
        this.errorCatch = tempColumns.errorCatch;
        this.order.parse(tempColumns.options,this.errorCatch);

    }

    evaluate(){
        var tempOrder = this.order.evaluate();
        return {"columns" : this.columns.evaluate(),"dir" : tempOrder.dir, "keys" : tempOrder.keys,"errorCatch":this.errorCatch};
    }
}