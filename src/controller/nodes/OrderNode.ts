
import Course from "../../dataStructs/Course";
import _Node from "./Node";
import KeyNode from "./KeyNode";
import Tokenizer from "../../dataStructs/Tokenizer";
import DirectionNode from "./DirectionNode";
import {dateParser} from "restify";

export default class OrderNode extends _Node {

    keys:string[] = [];
    direction:DirectionNode = new DirectionNode(this.tokenizer,this.dataStruct,this.count);
    directionFlag = false;
    options:string[];

    constructor(t: Tokenizer,c: any,count:number){
        super(t,c,count);
    }

    parse(options: string[],err: string[], t:any){
        var s = this.getAndCheckToken("ORDER", true);
        if(this.tokenizer.getNext(false) == "dir"){
            this.direction.parse();
            this.directionFlag = true;
            this.getAndCheckToken("keys",true);
        }

        while(this.tokenizer.getNext(false) != "TRANSFORMATIONS" && this.tokenizer.getNext(false) != "NO_MORE_TOKENS"){
            var temp = new KeyNode(this.tokenizer,this.dataStruct,this.count);
            temp.parse(err, t);
            this.keys.push(temp.evaluate());
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