import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import Course from "../../dataStructs/Course";

export default class InputStringNode extends _Node{
    inputString: string;
    constructor(t: Tokenizer,c:Course){
        super(t,c);
    }

    parse(){
        var s = this.getAndCheckToken("[^*]", true);
        //console.log(s);
        s == null ? console.log("parser got null") : this.inputString = s;
    }

    evaluate(){
        console.log("returning... " + this.inputString);
        return this.inputString;
    }
}