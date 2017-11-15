
import _Node from "./Node";
import Course from "../../dataStructs/Course";
import Tokenizer from "../../dataStructs/Tokenizer";

export default class KeyNode extends _Node{

    key:string = "";

    constructor(t: Tokenizer,c: any,count:number){
        super(t,c,count);
    }

    parse(){
        var s = this.getAndCheckToken("(courses|rooms)_(dept|id|instructor|title|uuid|avg|pass|fail|audit|lat|lon|seats|year|fullname|shortname|number|name|address|type|furniture|href)",true);
        this.key = s;
    }
    evaluate(){
        return this.key;
    }


}