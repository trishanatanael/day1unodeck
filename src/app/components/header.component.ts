import { Card } from '../model/uno';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    constructor() { }
    ngOnInit(){
        (<HTMLInputElement> document.getElementById("number")).value = "2";
    }
}

function incrementValue()
{
    var value = parseInt((<HTMLInputElement> document.getElementById('number')).value, 10);
    if (value == 7) {
        (<HTMLInputElement> document.getElementById("btnAdd")).disabled = true;
    }
    else{
        value = value +1;
       (<HTMLInputElement> document.getElementById('number')).value = value.toString();
    }
}

function dealCards()
{
    var noPlayer  = parseInt((<HTMLInputElement> document.getElementById('number')).value, 10);
}
