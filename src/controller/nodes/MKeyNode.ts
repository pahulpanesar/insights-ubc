
import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import Course from "../../dataStructs/Course";

export default class MKeyNode extends _Node{
    m_key: string;

    constructor(t: Tokenizer,c: Course){
        super(t,c);
    }
    parse(){
        var s = this.getAndCheckToken("courses_(avg|pass|fail|audit|year)", true); //check if it's a valid m_key
        this.m_key = s;
    }

    evaluate(){
        var temp:number = this.course[this.m_key];
        //console.log("returning... " + temp);
        return temp;
    }
}