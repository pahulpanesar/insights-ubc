
import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import Course from "../../dataStructs/Course";

export default class MKeyNode extends _Node{
    m_key: string;

    constructor(t: Tokenizer,c: any){
        super(t,c);
    }
    parse(){
        var s = this.getAndCheckToken("(courses|rooms)_(avg|pass|fail|audit|fullname|shortname|number|name|address|type|furniture|href)", true); //check if it's a valid m_key
        this.m_key = s;
    }

    evaluate(){
        var temp:number = this.dataStruct[this.m_key];
        //console.log("returning... " + temp);
        return temp;
    }
}