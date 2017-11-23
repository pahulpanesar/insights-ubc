import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import FilterNode from "./FilterNode";
import Course from "../../dataStructs/Course";

export class LogicNode extends _Node{
    filterNodes: Array<FilterNode> = [];
    logic: string = "";


    constructor(t: Tokenizer,c: any,count:number){
        super(t,c,count);
    }

    parse(){
        this.count++;
        for(var i = 0; i < this.tokenizer.logicIndexArray[this.count]; i++) {
            let fn: FilterNode = new FilterNode(this.tokenizer, this.dataStruct, this.count+i);
            this.filterNodes.push(fn);
        }
        // this.tokenizer.logicIndex++;
        var s = this.getAndCheckToken("AND|OR", true); //may be double checking the regex
        for(var i = 0; i < this.filterNodes.length; i++){
            this.filterNodes[i].parse();
        }
        this.logic = s; //storing logic for evaulate()
    }

    evaluate(){
        if(this.logic === 'AND'){
            for(var i = 0; i < this.filterNodes.length - 1; i++) {
                if(!(this.filterNodes[i].evaluate() && this.filterNodes[i+1].evaluate())){
                    return false;
                }
            }
            return true;
        }
        else if(this.logic === 'OR'){
            for(var i = 0; i < this.filterNodes.length - 1; i++) {
                if(!(this.filterNodes[i].evaluate() || this.filterNodes[i+1].evaluate())){
                    return false;
                }
            }
            return true;
        }

    }
}
