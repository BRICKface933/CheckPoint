import { Component, Input, OnInit } from '@angular/core';
import { CardInfo } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  nObj! :  CardInfo

  title = 'CheckPoint';
  block = ""
  
   setActive(){
     if(this.block===""){
       this.block="active"
     }else{
       this.block=""
     }
   }
  constructor() { }

  ngOnInit(): void {
    
  }

}
