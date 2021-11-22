import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factory-list',
  templateUrl: './factory-list.component.html',
  styleUrls: ['./factory-list.component.css']
})
export class FactoryListComponent implements OnInit {

  title1 : string = "ایران خودرو";
  title2 : string = "سایپا";
  product1 :Array<string> = ["پژو 206","پژو 405","هایما","پرشیا"];
  product2 :Array<string> = ["پراید","سیتروين","کوییک"];
  constructor() { }

  ngOnInit(): void {
  }
showdetail(message:string):void
{
  alert(`for test${message}`);
}
}
