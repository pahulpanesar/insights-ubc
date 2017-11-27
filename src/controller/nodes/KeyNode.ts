
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


    parse(err:string[], t:any){
        if(t != null) {
            let trans: Array<any> = t["APPLY"];
            this.regex = "(" + this.regex;
            for (var i = 0; i < trans.length; i++) {
                let applyKeys: string = "|";
                Object.keys(trans[i]).forEach((x) => {
                    applyKeys += x;
                    applyKeys += '|';
                });
                this.regex += applyKeys.substring(0, applyKeys.length - 1);
            }
            this.regex += ")";
        }
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