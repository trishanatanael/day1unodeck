import { Card, Player, UnoDeck } from '../model/uno';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    
    public static totalPlayer: number = 2;
    public deck:UnoDeck = new UnoDeck;
    
    constructor() { }

    ngOnInit(){
    }
    
    public incrementValue() : void {
        var value = parseInt((<HTMLInputElement> document.getElementById('number')).value, 10);
        if (value == 7) {
            (<HTMLInputElement> document.getElementById("btnAdd")).disabled = true;
        }
        else{
        value = value +1;
            (<HTMLInputElement> document.getElementById('number')).value = value.toString();
            (<HTMLInputElement> document.getElementById("btnRemove")).disabled = false;
        }
        
        }
        
    public decreaseValue() : void {
        var value = parseInt((<HTMLInputElement> document.getElementById('number')).value, 10);
        if (value == 2) {
            (<HTMLInputElement> document.getElementById("btnRemove")).disabled = true;
        }
        else{
        value = value - 1;
            (<HTMLInputElement> document.getElementById('number')).value = value.toString();
            (<HTMLInputElement> document.getElementById("btnAdd")).disabled = false;
        }
        }
        
    public getPlayersCount : number {
        var noPlayer  = parseInt((<HTMLInputElement> document.getElementById('number')).value, 10);
        return noPlayer;
        }
    public dealCards(){

    }
}
