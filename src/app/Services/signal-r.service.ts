import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { Message } from "../Models/Message";

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

public messages: Message[];

private hubConnection: signalR.HubConnection;

public startConnection = () => {
  this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('http://localhost:63606/api/messages')
    .build();

  this.hubConnection
    .start()
    .then(() => console.log('Connection started'))
    .catch(err => console.log(`Error while starting connection: ${err}`))
}

public addNewMessageListener = () => {
  this.hubConnection.on('newmessage', (message) => {
    this.messages.push(message);
    console.log(message);
  });
}

  constructor() { }
}
