import { Card, Player, UnoDeck } from '../model/uno';
import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    
    public static totalPlayer: number = parseInt((<HTMLInputElement> document.getElementById("number")).toString());
    public static totalPlayerText: String = HeaderComponent.totalPlayer.toString();
    public deck:UnoDeck = new UnoDeck;
    public players:Player[] = [];
   
    constructor() {}

    ngOnInit(){
         (<HTMLDivElement> document.getElementById("displayCards")).style.visibility = "hidden";
    }
    
    public incrementValue() : void {
        if (HeaderComponent.totalPlayer == 7) {
            (<HTMLInputElement> document.getElementById("btnAdd")).disabled = true;
        }
        else{
        
            (<HTMLInputElement> document.getElementById("btnRemove")).disabled = false;
            HeaderComponent.totalPlayer = HeaderComponent.totalPlayer + 1;
        }
        
        }
        
    public decreaseValue() : void {
        ;
        if (HeaderComponent.totalPlayer == 2) {
            (<HTMLInputElement> document.getElementById("btnRemove")).disabled = true;
        }
        else{
            (<HTMLInputElement> document.getElementById("btnAdd")).disabled = false;
             HeaderComponent.totalPlayer = HeaderComponent.totalPlayer - 1;
        }
        }
        
    public getPlayersCount() : number {
        return HeaderComponent.totalPlayer;
        }


    public dealCards(){
        (<HTMLInputElement> document.getElementById("displayCards")).disabled = false;
        this.deck.Shuffle();
        this.players = [];
        
        for(let i = 0; i<HeaderComponent.totalPlayer; i++) {
        let playerCards:Card[] = [];
        let nxtCard = 0;
            for(let num = 0; num<7; num++) {
            nxtCard = i + (num * 7 );
            playerCards.push(this.deck.Take(nxtCard)); 
            }
        }
    }
}
