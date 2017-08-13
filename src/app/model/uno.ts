
export interface Card {
    value: string;
    color: string;
    imageUrl: string;
}
/*export class UnoDeck{
    private static COLORS: string[] = ["red","green","blue","yellow"]
    private cards: Card[] = [];
    constructor(){
     //create deck
     //create main deck
     let prefix: string = "0";
     for( let i = 0; i < 2; i++ ){
         for( var j = 0; j < UnoDeck.COLORS.length; j++ ){
            prefix = "0";
            if (j<10){
                prefix = prefix + j;
            }
            else{
                prefix = j + "";
            }
            //color
            this.cards.push({
                value: j + 1, 
                color: UnoDeck.COLORS[c],
                imageUrl: "/assets/images/c"+ c +"_"+prefix+".png";
            })
         }
     }
    }
    //create zero 4 colours, take 4
    private shuffle(times?: number= 5): void{
        //use loop
    }
    public take(): Card{
        return{this.cards.pop()};
    }
}*/
