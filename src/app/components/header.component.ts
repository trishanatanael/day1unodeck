import { Card, Player } from '../model/uno';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    totalPlayer: number;
    playerArr: Player[]=[];
    deck: Card;
    
    constructor() { }
    
    ngOnInit(){
        (<HTMLInputElement> document.getElementById("number")).value = "2";
        (<HTMLInputElement> document.getElementById("btnRemove")).disabled = true;
    }
    
    incrementValue() : void {
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
        
    decreaseValue() : void {
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
        
    dealCards() : void {
        var noPlayer  = parseInt((<HTMLInputElement> document.getElementById('number')).value, 10);
        
        }
}
