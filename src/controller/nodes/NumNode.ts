import _Node from "./Node";
import Course from "../../dataStructs/Course";

export default class NumNode extends _Node{
    number: number;

    constructor(t: any,c:Course){
        super(t,c);
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