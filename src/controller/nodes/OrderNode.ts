
import Course from "../../dataStructs/Course";
import _Node from "./Node";
import KeyNode from "./KeyNode";
import Tokenizer from "../../dataStructs/Tokenizer";

export default class OrderNode extends _Node {
    key: any;
    options:string[];
    keys: KeyNode[];
    dir: string;
    constructor(t: Tokenizer,c: any,count:number){
        super(t,c,count);
    }

    parse(options: string[]){
        var s = this.getAndCheckToken("ORDER", true);
        if(this.tokenizer.query["OPTIONS"]["ORDER"] != null && this.tokenizer.query["OPTIONS"]["ORDER"]["dir"] != null){
            this.getAndCheckToken("dir", true);
            this.dir = this.getAndCheckToken("UP|DOWN", true);
        }
        if(this.tokenizer.query["OPTIONS"]["ORDER"] != null && this.tokenizer.query["OPTIONS"]["ORDER"]["keys"] != null){
            this.keys = new Array<KeyNode>();
            this.getAndCheckToken("keys", true);
            while(this.tokenizer.getNext(false) !== "TRANSFORMATIONS" && this.tokenizer.getNext(false) !== "NO_MORE_TOKENS"){
                var key: KeyNode = new KeyNode(this.tokenizer,this.dataStruct,this.count);
                key.parse(this.tokenizer.query["TRANSFORMATIONS"]);
                this.keys.push(key);
            }
        }
        else if(s && s !== "NO_MORE_TOKENS"){
            this.key = new KeyNode(this.tokenizer,this.dataStruct,this.count);
            this.key.parse(null);
        }
        this.options = options;
    }
    evaluate(){
        if(this.keys != null){
            let keyArr: Array<string> = new Array();
            this.keys.forEach((key: KeyNode) => {
                var temp = key.evaluate();
                if(!this.options.includes(temp) && temp.length > 0){
                    throw new Error ("Invalid Order");
                }
                else {
                    keyArr.push(key.evaluate());
                }
            });
            keyArr.push(this.dir);
            return keyArr;
        }
        else if(this.key != null){
            var temp = this.key.evaluate();
            if(!this.options.includes(temp) && temp.length > 0){
                throw new Error ("Invalid Order");
            }
            else {
                return this.key.evaluate();
            }
        }
        else {
            return null;
        }
    }
}