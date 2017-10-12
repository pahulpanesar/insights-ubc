
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
        var temp:string = this.course[this.s_key];
        console.log("returning... " + temp); //TODO return string from data (i.e. dept)
        return temp;
    }
    
}