
import Course from "../../dataStructs/Course";
import _Node from "./Node";
import KeyNode from "./KeyNode";
import Tokenizer from "../../dataStructs/Tokenizer";

export default class OrderNode extends _Node {
    key:KeyNode = new KeyNode(this.tokenizer,this.course);

    constructor(t:Tokenizer, c: Course){
        super(t,c);
    }

    parse(){
        var s = this.getAndCheckToken("ORDER", true);
        this.key.parse();
    }
    evaluate(){
        return this.key.evaluate();
    }
}