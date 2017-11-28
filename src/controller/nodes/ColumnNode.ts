
import _Node from "./Node";
import Tokenizer from "../../dataStructs/Tokenizer";
import Course from "../../dataStructs/Course";
import KeyNode from "./KeyNode";

export default class ColumnNode extends _Node{
    options: string[] = [];
    errorCatch: string[] = [];
    constructor(t:Tokenizer,c:any,count:number){
        super(t,c,count);

    }

    parse(t:any){
        var s = this.getAndCheckToken("COLUMNS", true);
        while(this.tokenizer.getNext(false) !== "ORDER" && this.tokenizer.getNext(false) !== "NO_MORE_TOKENS"){
            var key: KeyNode = new KeyNode(this.tokenizer,this.dataStruct,this.count);
            var temp = this.tokenizer.getNext(false);
            try{
                key.parse([], t); //error catch is generated in Columns, therefore an empty array is passed
            }
            catch(e){
                this.errorCatch.push(temp);
                //this.options.push(temp); added later in OrderNode
                throw new Error();
            }

            this.options.push(key.evaluate());
        }
    }
    evaluate(){
        //console.log("returning... " + this.options);
        return {'options': this.options, 'errorCatch': this.errorCatch};

    }
}