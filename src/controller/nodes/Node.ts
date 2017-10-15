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
    setCourse(course: Course){
        this.course = course;
    }

    getCourse(): Course{
        return this.course;
    }

    getAndCheckToken(regex: string, index: boolean): string{
        var s: any = this.tokenizer.getNext(index);
        if(typeof s === "number") {
            s = s.toString();
        }
        if(!s.match(regex)){return null;} // example terminates here

        //else{console.log("matched:" + s + "  to  " + regex)}
        return s;
    }

}