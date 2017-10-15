
export default class Tokenizer{

    tokens: any[] = [];
    index:number = 0;

    printTokens(){
        console.log("======================");
        for(var i =0; i<this.tokens.length;i++){
            console.log(this.tokens[i]);
        }
    }
    addKeys(json: any){
        Object.keys(json).forEach((elem) => {
           // console.log(elem);
            //console.log(Object.keys(elem));
            this.tokens.push(elem);
            var temp = elem;
            //console.log(typeof json[elem]);
            if(Array.isArray(json[elem])){
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
            else{
                this.tokens.push(json[elem]);
                //console.log(json[elem]);
            }
        });
        return this.tokens;
    }

    getNext(): string{

        if(this.index < this.tokens.length) {
            let temp: string = this.tokens[this.index];
            this.index++;
            return temp;
        }
        else{
            return "NO_MORE_TOKENS";
        }

    }
    checkNext(): string{

        if(this.index<this.tokens.length) {
            let temp: string = this.tokens[this.index];
            return temp;
        }
        else{
            return "NO_MORE_TOKENS"
        }

    }
}

var testJSON = '{ "WHERE":{ "GT":{ "courses_avg":97 } }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_avg" ], "ORDER":"courses_avg" } }';
var t = new Tokenizer();
t.addKeys(testJSON);
console.log(t.tokens);