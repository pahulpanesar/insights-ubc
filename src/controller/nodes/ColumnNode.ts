
import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import Course from "../../dataStructs/Course";
import KeyNode from "./KeyNode";

export default class ColumnNode extends _Node{
    options: string[] = [];
    constructor(t: Tokenizer,c: any,count:number){
        super(t,c,count);
    }

    parse(transform: any){
        var s = this.getAndCheckToken("COLUMNS", true);
        while(this.tokenizer.getNext(false) !== "ORDER" && this.tokenizer.getNext(false) !== "NO_MORE_TOKENS"){
            var key: KeyNode = new KeyNode(this.tokenizer,this.dataStruct,this.count);
            key.parse(transform);
            this.options.push(key.evaluate());
        }
    }
    evaluate(){
        //console.log("returning... " + this.options);
        return this.options;
    }
}