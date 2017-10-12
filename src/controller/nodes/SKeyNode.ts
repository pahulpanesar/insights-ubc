
import _Node from "./Node";
import Tokenizer from "../Tokenizer";
import Course from "../../dataStructs/Course";

export default class SKeyNode extends _Node{
    s_key: string;

    constructor(t: Tokenizer,c:Course){
        super(t,c);
    }
    parse(){
        var s = this.getAndCheckToken("courses_(dept|id|instructor|title|uuid)"); //check if it's a valid m_key
        this.s_key = s;
    }

    evaluate(){
        console.log("returning... " + this.s_key); //TODO return string from data (i.e. dept)
        return this.s_key;
    }
}