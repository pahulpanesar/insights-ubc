
class Tokenizer{

    queryJSON: any;
    currentToken: number;
    tokens: any[] = [];

    testJSON = '{ "WHERE":{ "GT":{ "courses_avg":97 } }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_avg" ], "ORDER":"courses_avg" } }';


    addKeys(json: any){
        Object.keys(json).forEach(function (elem) {
            this.tokens.push(elem);
            this.addKeys(elem)
        })
        /*(key in Object.keys(json)){
            if(Object.keys(key).length > 0){
                this.addKeys(keys[Object.keys[key]])
            }
            this.tokens.push(key);
        }*/
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