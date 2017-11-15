import _Node from "./Node";
import Course from "../../dataStructs/Course";
import Tokenizer from "../../dataStructs/Tokenizer";

export default class NumNode extends _Node{
    number: number;

    constructor(t: Tokenizer,c: any,count:number){
        super(t,c,count);
    }

    parse(){
        var s: any = this.tokenizer.getNext(true);
        if(typeof s !== "number"){
            throw new Error("Typecheck Error");
        }
        this.number = s;
    }

    evaluate(){
        //console.log("returning... " + this.number);
        return this.number
    }
}