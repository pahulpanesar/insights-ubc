
export default class Tokenizer{

    queryJSON: any;
    currentToken: number;
    tokens: any[] = [];

    testJSON = '{ "WHERE":{ "GT":{ "courses_avg":97 } }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_avg" ], "ORDER":"courses_avg" } }';



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
       /*index++;
        return queryJson[index];

        return token;
        */
       return "";
    }
    checkNext(): string{

        var token:string ="";
        if (this.currentToken<this.tokens.length){
            token = this.tokens[this.currentToken];
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