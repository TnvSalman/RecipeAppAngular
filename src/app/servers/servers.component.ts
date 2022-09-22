import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus:string = 'No server was created';
  serverName:string = 'testServer';

  constructor() {
    setTimeout(():void => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus = 'Server was creted' + this.serverName;
  }
  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
