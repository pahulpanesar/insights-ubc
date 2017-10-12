import Course from "../../dataStructs/Course";
import Tokenizer from "../Tokenizer";

export default class _Node{ //underscore is to distinguish from native TS class
    tokenizer : Tokenizer;
    //courseObj : Course = new Course();

    constructor (t: Tokenizer){
        this.tokenizer = t;
    }


    getAndCheckToken(regex: string): string{
        var s: string = this.tokenizer.getNext();
        if(!s.match(regex)){return null;} // example terminates here

        else{console.log("matched:" + s + "  to  " + regex)}
        return s;
    }

}