
import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import Course from "../../dataStructs/Course";
import GroupNode from "./GroupNode";

import ApplyNode from "./ApplyNode";

export default class TransformationNode extends _Node{
    groupNode: GroupNode = new GroupNode(this.tokenizer,this.dataStruct,this.count);
    applyNode: ApplyNode = new ApplyNode(this.tokenizer,this.dataStruct,this.count);

    constructor(t: Tokenizer,c:any,count:number){
        super(t,c,count);
    }
    parse() {
        this.getAndCheckToken("TRANSFORMATIONS", true);
        this.groupNode.parse();
        this.applyNode.parse();
    }

    evaluate(){
        return {"group":this.groupNode.evaluate(),"apply":this.applyNode.evaluate()};
    }
}