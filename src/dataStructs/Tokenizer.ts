
import {error} from "util";

export default class Tokenizer{

    tokens: any[] = [];
    index:number = 0;
    i:number = 0;
    logicIndexArray: Array<number> = [];
    logicIndex = 0;
    query: any;
    constructor() {
    }

    addKeys(json: any){
        if(this.i == 0) {
            this.query = json;
        }
        this.i++;
        Object.keys(json).forEach((elem) => {
            // console.log(elem);
            //console.log(Object.keys(elem));
            this.tokens.push(elem);
            var temp = elem;
            //console.log(typeof json[elem]);
            if(Array.isArray(json[elem])){
                if(elem === "AND" || elem === "OR"){
                    if(json[elem].length < 1) {
                        throw error("Empty and/or");
                    }
                    this.logicIndexArray.push(json[elem].length);
                }
                json[elem].forEach((e:any) =>{
                    if(typeof e === "object"){
                        this.addKeys(e);
                    }
                    else {
                        this.tokens.push(e);
                        //console.log(e);
                    }

                });
            }
            else if(typeof json[elem] === "object"){
                this.addKeys(json[temp]);
            }
            else {
                this.tokens.push(json[elem]);
                //console.log(json[elem]);
            }
        });
        return this.tokens;
    }

    getNext(index: boolean): string{

        if(this.index < this.tokens.length) {
            let temp: string = this.tokens[this.index];
            if(index)this.index++;
            return temp;
        }
        else{
            return "NO_MORE_TOKENS";
        }

    }


}