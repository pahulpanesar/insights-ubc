
import Course from "../../dataStructs/Course";
import _Node from "./Node";
import KeyNode from "./KeyNode";
import Tokenizer from "../../dataStructs/Tokenizer";

export default class OrderNode extends _Node {
    key:KeyNode = new KeyNode(this.tokenizer,this.course);
    options:string[];
    constructor(t:Tokenizer, c: Course){
        super(t,c);
    }

    parse(options: string[]){
        var s = this.getAndCheckToken("ORDER", true);
        this.key.parse();
        this.options = options;
    }
    evaluate(){
        var temp = this.key.evaluate();
        if(!this.options.includes(temp)){
            throw new Error ("Invalid Order");
        }
        else {
            return this.key.evaluate();
        }
    }
}