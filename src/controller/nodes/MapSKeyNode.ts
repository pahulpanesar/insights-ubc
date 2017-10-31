
import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import Course from "../../dataStructs/Course";

export default class MapKeyNode extends _Node{
    s_key: string;

    constructor(t: Tokenizer,c:Course){
        super(t,c);
    }
    parse(){
        var s = this.getAndCheckToken("rooms_(lat|lon|seats)", true); //check if it's a valid m_key
        this.s_key = s;
    }

    evaluate(){
        var temp:number = this.dataStruct[this.s_key];
        return temp;

    }
    
}