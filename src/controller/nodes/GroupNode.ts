

import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import Course from "../../dataStructs/Course";
import KeyNode from "./KeyNode";

export default class GroupNode extends _Node{
    keys: string[] = [];

    constructor(t: Tokenizer,c:any,count:number){
        super(t,c,count);
    }
    parse(){
        this.getAndCheckToken("GROUP",true);
        while(this.tokenizer.getNext(false) != "APPLY" && this.tokenizer.getNext(false) !== "NO_MORE_TOKENS"){
            var key: KeyNode = new KeyNode(this.tokenizer,this.dataStruct,this.count);
            key.parse(this.dataStruct.errorCatch);
            this.keys.push(key.evaluate());
        }
    }

    evaluate(){
        return this.keys;
    }
}