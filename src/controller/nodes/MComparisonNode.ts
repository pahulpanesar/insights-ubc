import _Node from "./Node";
import Tokenizer from "../Tokenizer";
import NumNode from "./NumNode";
import MKeyNode from "./MKeyNode";
import Course from "../../dataStructs/Course";

export default class MComparisonNode extends _Node{
    number: NumNode = new NumNode(this.tokenizer,this.course);
    m_key: MKeyNode = new MKeyNode(this.tokenizer,this.course);
    comparator: string;

    constructor(t: Tokenizer,c: Course){
        super(t,c);
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