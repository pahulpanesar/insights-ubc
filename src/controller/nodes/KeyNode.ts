
import _Node from "./Node";
import Tokenizer from "../Tokenizer";
import Course from "../../dataStructs/Course";

export default class KeyNode extends _Node{

    key:string = "";

    constructor(t:Tokenizer,c:Course){
        super(t,c);
    }

    parse(){
        var s = this.getAndCheckToken("courses_(debt|id|instructor|title|uuid|avg|pass|fail|audit|)");
        this.key = s;
    }
    evaluate(){
        return this.key;
    }


}