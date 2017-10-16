
import _Node from "./Node";
import Tokenizer from "../Tokenizer";
import Course from "../../dataStructs/Course";
import KeyNode from "./KeyNode";

export default class ColumnNode extends _Node{
    options: string[] = [];
    constructor(t:Tokenizer,c:Course){
        super(t,c);
    }

    parse(){
        var s = this.getAndCheckToken("COLUMNS", true);
        while(this.tokenizer.checkNext() !== "ORDER"){
            var key: KeyNode = new KeyNode(this.tokenizer,this.course);
            key.parse();
            this.options.push(key.evaluate());
        }
    }
    evaluate(){
        console.log("returning... " + this.options);
        return this.options;
    }
}