
import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import Course from "../../dataStructs/Course";

export default class MapKeyNode extends _Node{
    s_key: string;

    constructor(t: Tokenizer,c:Course){
        super(t,c);
    }
    parse(){
        var s = this.getAndCheckToken("rooms_(fullname|shortname|number|name|address|type|furniture|href)", true); //check if it's a valid m_key
        this.s_key = s;
    }

    evaluate(){
        //var temp:string = this.dataStruct[this.s_key];
        //console.log("returning... " + temp); //TODO return string from data (i.e. dept)
        return false; //TODO
    }
    
}