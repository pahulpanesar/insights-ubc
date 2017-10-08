class NumNode extends _Node{
    number: number;

    constructor(t: any){
        super(t);
    }

    parse(){
        var s = this.getAndCheckToken("[0-9]+");
        this.number = parseInt(s);
    }

    evaluate(){
        console.log("returning... " + this.number);
        return this.number
    }
}