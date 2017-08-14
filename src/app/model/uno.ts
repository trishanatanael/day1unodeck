
export interface Card {
    value: string;
    color: string;
    imageUrl: string;
}
export class UnoDeck{
    private static COLORS: string[] = ["red","green","blue","yellow"]
    private cards: Card[] = [];
    constructor(){
     //create deck
     //create main deck
     let prefix: string = "0";
     for( let i = 0; i < 2; i++ ){
         for( var c = 0; c < UnoDeck.COLORS.length; c++ ){
           for( var j = 0; j<12; j++ ){
            prefix = "0";
            if (j<10){
                prefix = prefix + j;
            }
            else{
                prefix = j + "";
            }
            //color
            this.cards.push({
                
                value: (j + 1).toString(), 
                color: UnoDeck.COLORS[c],
                imageUrl: "/assets/images/c"+ c +"_"+prefix+".png"
            })
          }
        }
    }
    //create deck for the zeros
    for( var c = 0; c < UnoDeck.COLORS.length; c++ ){
           for( var j = 0; j<3; j++ ){
            //color
            //c2_00
            this.cards.push({ 
                value: j.toString(), 
                color: UnoDeck.COLORS[c],
                imageUrl: "/assets/images/c"+ j +"_00.png"
            })
        }
    }
    
    //create deck for the wildcard and take 4
    for( var c = 0; c < UnoDeck.COLORS.length; c++ ){
           for( var j = 0; j<1; j++ ){
            //color
            //c4_00 c4_01
            this.cards.push({ 
                value: j.toString(), 
                color: UnoDeck.COLORS[c],
                imageUrl: "/assets/images/c4_0"+ j +".png"
            })
        }
    }
    }
    //shuffle
    private shuffle(times: number= 5): void{
        //use loop
    }
    public take(): Card{
        return(this.cards.pop());
    }
}
