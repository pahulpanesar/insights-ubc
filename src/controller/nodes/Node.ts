import Course from "../../dataStructs/Course";
import Tokenizer from "../../dataStructs/Tokenizer";
import {type} from "os";
import Room from "../../dataStructs/Room";

export default class _Node{ //underscore is to distinguish from native TS class
    tokenizer : Tokenizer;
    dataStruct: any;
    count: number;

    //courseObj : Course = new Course();

    constructor (t: Tokenizer,c:any){
       /* if(c instanceof Course){
            this.dataStruct = <Course> c;
        }
        else if(c instanceof Room){
            this.dataStruct = <Room> c;
        }
        else{
            throw new Error("Class error");
        }*/
        this.dataStruct = c;
        this.tokenizer = t;

    }

    getAndCheckToken(regex: string, index: boolean): string{
        var s: any = this.tokenizer.getNext(index);
        if(!s.match(regex) && s !== "NO_MORE_TOKENS"){

            console.log("no match: " + regex + "   " + s);
            throw new Error("no matching regex");
        } // example terminates here
        //console.log("match: " + s);
        //else{console.log("matched:" + s + "  to  " + regex)}
        return s;
    }

}