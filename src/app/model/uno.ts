
export interface Card {
    value: string;
    color: string;
    imageUrl: string;
}
export interface Player {
    name: string;
    cards: Card[]
}
export class UnoDeck{
    private static COLORS: string[] = ["Red","Green","Blue","Yellow"]
    public cards: Card[] = [];
    private static cardsCount: number = 108;

    constructor(){
     //create deck
     //create deck for the zeros
    for( let c = 0; c < UnoDeck.COLORS.length; c++ ){
           for( let j = 0; j<4; j++ ){
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
    
    //create deck for the wildcard
    for( let j = 0; j<4; j++ ){
        //color
        //c4_00 c4_01
        this.cards.push({ 
        value: j.toString(), 
        color: "Wild Card",
        imageUrl: "/assets/images/c4_00.png"
        })
    }
    
    //create deck for the +4
     for( let j = 0; j<2; j++ ){
        //color
        //c4_00 c4_01
        this.cards.push({ 
        value: j.toString(), 
        color:"Take 4",
        imageUrl: "/assets/images/c4_01.png"
        })
    }
    
    this.Shuffle();
    
    }
    //shuffle
    public Shuffle(times: number = 5): void{
        //use loop
        let theLength = this.cards.length - 1;
        let toSwap;
        let tempCard;
        
        //shuffle 5 times
        for (let s = 0; s < times; s++ ){
            for ( let i = theLength; i > 0; i--) {
                toSwap = Math.floor(Math.random() * i);
                tempCard = this.cards[i];
                this.cards[i] = this.cards[toSwap];
                this.cards[toSwap] = tempCard;
            }
        }
        //then take the 7 cards for each player
        //this.Take();
    }
    public Take(index: number): Card{
        let card: Card = this.cards[index];
        this.Remaining();
        return card;
    }
    public Remaining(): number{
       UnoDeck.cardsCount = UnoDeck.cardsCount - 1;
       return UnoDeck.cardsCount;
    }
}
