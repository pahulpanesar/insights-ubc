import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import InputStringNode from "./InputStringNode";
import SKeyNode from "./SKeyNode";
import Course from "../../dataStructs/Course";

export default class SComparisonNode extends _Node{
    inputString: InputStringNode = new InputStringNode(this.tokenizer,this.dataStruct,this.count);
    s_key: SKeyNode = new SKeyNode(this.tokenizer,this.dataStruct,this.count);



    constructor(t: Tokenizer,c: any,count:number){
        super(t,c,count);
    }

    parse(){
        this.getAndCheckToken("IS", true); //IS:{' s_key ':' [*]? inputstring [*]? '}'
        this.s_key.parse(); //parse s_key first
        this.inputString.parse(); //parse input_string second

    }

    evaluate(): boolean{
        let regex: RegExp = this.inputString.evaluate();
        let key: string = this.s_key.evaluate();
        return regex.test(key);
    }





}