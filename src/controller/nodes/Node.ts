import Course from "../../dataStructs/Course";
import Tokenizer from "../../dataStructs/Tokenizer";

export default class _Node{ //underscore is to distinguish from native TS class
    tokenizer : Tokenizer;
    course: Course;
    //courseObj : Course = new Course();

    constructor (t: Tokenizer,c:Course){
        this.tokenizer = t;
        this.course = c;
    }

    getAndCheckToken(regex: string, index: boolean): string{
        var s: any = this.tokenizer.getNext(index);
        if(typeof s === "number") {
            s = s.toString();
        }
        if(!s.match(regex) && s !== "NO_MORE_TOKENS"){
            //console.log("no match: " + regex + "   " + s);
            throw new Error("no matching regex");
        } // example terminates here
        //console.log("match: " + s);
        //else{console.log("matched:" + s + "  to  " + regex)}
        return s;
    }

}