import _Node from "./Node";
import Tokenizer from "../Tokenizer";
import InputStringNode from "./InputStringNode";
import SKeyNode from "./SKeyNode";

export default class SComparisonNode extends _Node{
    inputString: InputStringNode = new InputStringNode(this.tokenizer);
    s_key: SKeyNode = new SKeyNode(this.tokenizer);


    constructor(t: Tokenizer){
        super(t);
    }

    parse(){
        console.log(this.getAndCheckToken("IS:{")); //IS:{' s_key ':' [*]? inputstring [*]? '}'
        this.s_key.parse();
        console.log(this.getAndCheckToken(":"));
        this.inputString.parse();
        console.log(this.getAndCheckToken("}"))

    }

    evalaute(){
        return (this.inputString.evaluate() === this.s_key.evaluate());
    }





}