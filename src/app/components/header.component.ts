import { Card, Player, UnoDeck } from '../model/uno';
import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    
    public static totalPlayer: number = 2;
    public deck:UnoDeck = new UnoDeck;
    public players:Player[] = [];
   
    constructor() {
        
    }

    ngOnInit(){

         (<HTMLInputElement> document.getElementById("btnRemove")).disabled = true;

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
    
    public getPlayers():Player[] {
        return this.players;
        }

    public dealCards(): void {
        
        this.deck.Shuffle();
        this.players = [];
        
        for(let i = 0; i<HeaderComponent.totalPlayer; i++) {
        let playerCards:Card[] = [];
        let nxtCard = 0;
            for(let num = 0; num<7; num++) {
                nxtCard = i + (num * 7 );
                playerCards.push(this.deck.Take(nxtCard)); 
            }
        let playerNo:number = i + 1;
        let player: Player = {name: "Player "+ playerNo, cards: playerCards}
        this.players.push(player);
        }
    }
}
