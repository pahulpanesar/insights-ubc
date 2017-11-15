
import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import Course from "../../dataStructs/Course";
import GroupNode from "./GroupNode";

export default class TransformationNode extends _Node{
    groupNode: GroupNode;
    //applyNode: ApplyNode = new ApplyNode();

    constructor(t:Tokenizer, c:Course){
        super(t,c);
    }

    parse(){

    }

    evaluate(){

    }

}