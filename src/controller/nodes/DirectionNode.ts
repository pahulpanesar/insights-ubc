
import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";

export default class DirectionNode extends _Node{

    direction: string;
    constructor(t:Tokenizer,c:any){
        super(t,c);
    }

    parse(){
        this.getAndCheckToken("dir",true);
        this.direction = this.getAndCheckToken("UP|DOWN",true);
    }
    evaluate(){
        return this.direction;
    }

}