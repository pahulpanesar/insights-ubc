
import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import Course from "../../dataStructs/Course";

export default class SKeyNode extends _Node{
    s_key: string;

    constructor(t: Tokenizer,c:Course){
        super(t,c);
    }
    parse(){
        var s = this.getAndCheckToken("(courses|rooms)_(dept|id|instructor|title|uuid|year|lat|lon|seats)", true); //check if it's a valid m_key
        this.s_key = s;
    }

    evaluate(){
        var temp:string = this.dataStruct[this.s_key];
        //console.log("returning... " + temp); //TODO return string from data (i.e. dept)
        return temp;
    }
    
}