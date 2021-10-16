import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';

export interface CardInfo{
  type: String
  number: String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  form: CardInfo[] = []

  onJSON() {
    for(let i = 0; i < 8; i++){
      this.parseJSON(this.form)
    }
  }

  parseJSON(form: CardInfo[]) {
    var requestURL = 'https://fakerapi.it/api/v1/credit_cards?_quantity=1';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
      var json = request.response;
      console.log(json)
      var dataJson = json["data"]
      form.push({type: dataJson[0].type, number: dataJson[0].number})
      console.log(json["status"])
    }
  }
  ngOnInit(): void {
    this.onJSON();
  }
}


