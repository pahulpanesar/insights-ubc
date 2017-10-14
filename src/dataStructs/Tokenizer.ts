
export default class Tokenizer{

    tokens: any[] = [];
    index:number = 0;

    constructor() {
    }

    addKeys(parsed: any){
        Object.keys(parsed).forEach((elem) => {
            //console.log(Object.keys(elem));
            if(elem !== "OPTIONS" && elem !== "WHERE"){
                this.tokens.push(elem);
            }
            var temp = elem;
            //console.log(typeof json[elem]);
            if(Array.isArray(parsed[elem])){
                parsed[elem].forEach((e:any) =>{
                    if(typeof e === "object"){
                        this.addKeys(e);
                    }
                    else {
                        this.tokens.push(e);
                        console.log(e);
                    }
                });
            }
            else if(typeof parsed[elem] === "object"){
                if(elem !== "OPTIONS"){
                    this.addKeys(parsed[temp]);
                }
            }
            else{
                this.tokens.push(parsed[elem]);
                console.log(parsed[elem]);
            }
        });
        return this.tokens;
    }

    getNext(): string{

       let temp:string = this.tokens[this.index];
       this.index++;
       return temp;

    }
    checkNext(): boolean{

        return this.index < this.tokens.length;

    }
}

var testJSON = '{ "WHERE":{ "GT":{ "courses_avg":97 } }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_avg" ], "ORDER":"courses_avg" } }';
var t = new Tokenizer();
t.addKeys(testJSON);
