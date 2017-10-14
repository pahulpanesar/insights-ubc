import Course from "../../dataStructs/Course";
import Tokenizer from "../Tokenizer";

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

    getAndCheckToken(regex: string): string{
        var s: string = this.tokenizer.getNext();
        if(!s.match(regex)){return null;} // example terminates here

        else{console.log("matched:" + s + "  to  " + regex)}
        return s;
    }

}