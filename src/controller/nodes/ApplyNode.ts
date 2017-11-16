
import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import Course from "../../dataStructs/Course";
import KeyNode from "./KeyNode";
import ApplyKeyNode from "./ApplyKeyNode";

export default class ApplyNode extends _Node{
    applyKeys: Array<ApplyKeyNode> = [];
    constructor(t: Tokenizer,c:any){
        super(t,c);
    }
    parse(){
        this.getAndCheckToken("APPLY",true);
        while(this.tokenizer.getNext(false) != "NO_MORE_TOKENS"){
            var temp:ApplyKeyNode = new ApplyKeyNode(this.tokenizer,this.dataStruct);
            temp.parse();
            this.applyKeys.push(temp);
        }
    }

    evaluate(){
        var tempArray = [];
        for(var i = 0;i<this.applyKeys.length;i++){
            var temp = this.applyKeys[i].evaluate();
            tempArray.push({"name": temp.name, "action":temp.action,"key":temp.key});
        }
        return tempArray;
    }
    
}