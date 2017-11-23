
import _Node from "./Node";
import Course from "../../dataStructs/Course";
import Tokenizer from "../../dataStructs/Tokenizer";
import {isUndefined} from "util";

export default class KeyNode extends _Node{
    regex:string = "(courses|rooms)_(dept|id|instructor|title|uuid|avg|pass|fail|audit|lat|lon|seats|year|fullname|shortname|number|name|address|type|furniture|href)";
    key:string = "";


    constructor(t: Tokenizer,c: any,count:number){
        super(t,c,count);
    }


    parse(err:string[]){
        if(err.length > 0) {

            for (var i =0;i<err.length;i++) {
                this.regex +=  "|" + err[i];
            }

        }
        var s = this.getAndCheckToken(this.regex,true);
        this.key = s;
    }
    evaluate(){
        return this.key;
    }


}