import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [`
  .font-color{
    color:white;
  }
  `]
})
export class TestComponent implements OnInit {
  displayStatus:boolean = false;
  incrementNumber: number[] = [0];
  
  constructor() { }

  ngOnInit(): void {
  }
  onDisplayStatus(){
    this.displayStatus = !this.displayStatus;
    this.incrementNumber.push(this.incrementNumber.length + 1)
  }
}
