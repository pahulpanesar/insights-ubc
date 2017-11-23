
import Course from "../../dataStructs/Course";
import _Node from "./Node";
import KeyNode from "./KeyNode";
import Tokenizer from "../../dataStructs/Tokenizer";
import DirectionNode from "./DirectionNode";
import {dateParser} from "restify";

export default class OrderNode extends _Node {
    keys:string[] = [];
    direction:DirectionNode = new DirectionNode(this.tokenizer,this.dataStruct);
    directionFlag = false;
    options:string[];
    constructor(t:Tokenizer, c: any){
        super(t,c);
    }

    parse(options: string[],err: string[]){
        var s = this.getAndCheckToken("ORDER", true);
        if(this.tokenizer.getNext(false) == "dir"){
            this.direction.parse();
            this.directionFlag = true;
        }
        this.getAndCheckToken("keys",true);
        while(this.tokenizer.getNext(false) != "TRANSFORMATIONS" && this.tokenizer.getNext(false) != "NO_MORE_TOKENS"){
            var temp = new KeyNode(this.tokenizer,this.dataStruct);
            temp.parse(err);
            this.keys.push(temp.evaluate()) //evaluate here to avoid computation later, not sure if itll fuck with anything
        }
        this.options = options.concat(err);
    }
    evaluate(){
        var tempDir:string = "";
        if(this.directionFlag){
            tempDir = this.direction.evaluate();
        }
        for(var i = 0;i<this.keys.length;i++) {
            if (!this.options.includes(this.keys[i]) && this.keys[i].length > 0) {
                throw new Error("Invalid Order");
            }
        }
        return {"dir":tempDir,"keys":this.keys};
    }
}