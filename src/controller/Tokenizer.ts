
export default class Tokenizer{

    tokens: any[] = [];
    index:number = 0;

    addKeys(json: any){
        Object.keys(json).forEach((elem) => {
            console.log(elem);
            //console.log(Object.keys(elem));
            this.tokens.push(elem);
            var temp = elem;
            //console.log(typeof json[elem]);
            if(Array.isArray(json[elem])){
                json[elem].forEach((e:any) =>{
                    this.tokens.push(e);
                    console.log(e);
                });
            }
            else if(typeof json[elem] === "object"){
                this.addKeys(json[temp]);
            }
        });
        return this.tokens;
    }

    getNext(): string{

       let temp:string = this.tokens[this.index];
       this.index++;
       return temp;

    }
    checkNext(): string{

        var token:string ="";
        if (this.index<this.tokens.length){
            token = this.tokens[this.index];
        }
        else
            token="NO_MORE_TOKENS";
        return token;

    }
}

var testJSON = '{ "WHERE":{ "GT":{ "courses_avg":97 } }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_avg" ], "ORDER":"courses_avg" } }';
var t = new Tokenizer();
t.addKeys(testJSON);
console.log(t.tokens);