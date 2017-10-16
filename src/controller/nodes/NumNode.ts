import _Node from "./Node";
import Course from "../../dataStructs/Course";

export default class NumNode extends _Node{
    number: number;

    constructor(t: any,c:Course){
        super(t,c);
    }

    parse(){
        var s = this.getAndCheckToken("[0-9]+", true);
        this.number = parseFloat(s);
    }

    evaluate(){
        //console.log("returning... " + this.number);
        return this.number
    }
}