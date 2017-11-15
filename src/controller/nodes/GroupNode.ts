

import _Node from "./Node";
import KeyNode from "./KeyNode";
import Tokenizer from "../../dataStructs/Tokenizer";
import Course from "../../dataStructs/Course";

export default class GroupNode extends _Node{
    key: KeyNode;

    constructor(t: Tokenizer, c: Course){
        super(t,c);
    }

    parse(){

    }


}