import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent {
    serverId:number = Math.floor(Math.random() * 10);
    serverStatus:string = Math.floor(Math.random() * 10) > 5 ? 'offline': 'online';
    serverColor:string = this.serverStatus === 'online'? "text-primary":"text-danger";

    getServerStatus(){
      return this.serverStatus;
    }

}