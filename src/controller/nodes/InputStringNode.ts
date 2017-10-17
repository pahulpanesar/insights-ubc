import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import Course from "../../dataStructs/Course";
import {error} from "util";

export default class InputStringNode extends _Node{
    inputString: string;
    constructor(t: Tokenizer,c:Course){
        super(t,c);
    }

    parse(){
        var s = this.getAndCheckToken("[^*]", true);
        if(typeof s !== "string"){
            throw error("Not string");
        }
        this.inputString = s;
        let temp: string = this.inputString;
        if(this.inputString === "**") {
            this.inputString = "\*";
        }
        else if(this.inputString === "*" || this.inputString === "***"){
            this.inputString = "^\*";
        }
        else if(this.inputString.charAt(0) === '*' && this.inputString.charAt(this.inputString.length - 1) === '*'){
            this.inputString = this.inputString.substring(1, this.inputString.length - 1);
        }
        else if(this.inputString.charAt(0) === '*' && this.inputString.length > 1) {
            this.inputString = this.inputString.substring(1) + '$';
        }
        else if(this.inputString.charAt(this.inputString.length - 1 ) === '*') {
            this.inputString = '^' + this.inputString.substring(0, this.inputString.length - 1) ;
        }
        else {
            this.inputString = '^' + this.inputString + '$';
        }
    }

    evaluate(){
        //console.log("returning... " + this.inputString);
        return new RegExp(this.inputString);
    }
}