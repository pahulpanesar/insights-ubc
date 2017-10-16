
import _Node from "./Node";
import Course from "../../dataStructs/Course";
import Tokenizer from "../../dataStructs/Tokenizer";

export default class KeyNode extends _Node{

    key:string = "";

    constructor(t:Tokenizer,c:Course){
        super(t,c);
    }

    parse(){
        var s = this.getAndCheckToken("courses_(dept|id|instructor|title|uuid|avg|pass|fail|audit|)",true);
        this.key = s;
    }
    evaluate(){
        return this.key;
    }


}