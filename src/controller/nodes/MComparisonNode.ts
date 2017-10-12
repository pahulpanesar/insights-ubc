import _Node from "./Node";
import Tokenizer from "../Tokenizer";
import NumNode from "./NumNode";
import MKeyNode from "./MKeyNode";

export default class MComparisonNode extends _Node{
    number: NumNode = new NumNode(this.tokenizer);
    m_key: MKeyNode = new MKeyNode(this.tokenizer);
    comparator: string;

    constructor(t: Tokenizer){
        super(t);
    }

    parse(){
        var s = this.getAndCheckToken("GT|LT|EQ");
        s == null ? console.log("parser got null") : this.comparator = s;
        console.log(s);
        this.m_key.parse();
        this.number.parse();
    }

    evalaute(){
        var key = this.m_key.evaluate();
        var num = this.number.evaluate();
        if(this.comparator == "GT"){
            return key > num;
        }
        else if(this.comparator == "LT"){
            return key < num;
        }
        else if(this.comparator == "EQ"){
            return key === num;
        }
        else{
            console.log("evaluate got an unexpected comparator");
            return false;
        }

    }





}