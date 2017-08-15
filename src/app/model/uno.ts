
export interface Card {
    value: string;
    color: string;
    imageUrl: string;
}
export interface Player {
    cards: Card[];
}
export class UnoDeck{
    private static COLORS: string[] = ["red","green","blue","yellow"]
    private cards: Card[] = [];
    constructor(){
     //create deck
     //create deck for the zeros
    for( let c = 0; c < UnoDeck.COLORS.length; c++ ){
           for( let j = 0; j<3; j++ ){
            //color
            //c2_00
            this.cards.push({ 
                value: j.toString(), 
                color: UnoDeck.COLORS[c],
                imageUrl: "/assets/images/c"+ j +"_00.png"
            })
        }
    }
     //create main deck
     let prefix: string = "0";
     for( let i = 0; i < 2; i++ ){
         for( let c = 0; c < UnoDeck.COLORS.length; c++ ){
           for( let j = 0; j<12; j++ ){
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
    
    //create deck for the wildcard and take 4
    for( let c = 0; c < UnoDeck.COLORS.length; c++ ){
           for( let j = 0; j<1; j++ ){
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
        let theLength = this.cards.length - 1;
        let toSwap;
        let tempCard;
        
        //shuffle 5 times
        //for (){
            for ( let i = theLength; i > 0; i--) {
                toSwap = Math.floor(Math.random() * i);
                tempCard = this.cards[i];
                this.cards[i] = this.cards[toSwap];
                this.cards[toSwap] = tempCard;
            }
        //}
        //then take the 7 cards for each player
        this.take();
    }
    public take(): Card{
        return(this.cards.pop());
    }
}
