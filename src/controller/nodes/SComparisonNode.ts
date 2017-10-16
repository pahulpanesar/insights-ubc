import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import InputStringNode from "./InputStringNode";
import SKeyNode from "./SKeyNode";
import Course from "../../dataStructs/Course";

export default class SComparisonNode extends _Node{
    inputString: InputStringNode = new InputStringNode(this.tokenizer,this.course);
    s_key: SKeyNode = new SKeyNode(this.tokenizer,this.course);


    constructor(t: Tokenizer,c:Course){
        super(t,c);
    }

    parse(){
        this.getAndCheckToken("IS", true); //IS:{' s_key ':' [*]? inputstring [*]? '}'
        this.s_key.parse(); //parse s_key first
        this.inputString.parse(); //parse input_string second

    }

    evaluate(){
        return (this.inputString.evaluate() === this.s_key.evaluate());
    }





}