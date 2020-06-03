import { Injectable } from '@angular/core';
import { Message } from '../Models/Message';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messagesAPIUrl: string = 'http://localhost:63606/api/messages'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(private http: HttpClient) {
  }

  getMessages(): Observable<Message[]>
  {
    return this.http.get<Message[]>(this.messagesAPIUrl, {headers: this.httpOptions.headers});
  }

  sendMessage(message: Message)
  {
    var response = this.http.post<Message>(this.messagesAPIUrl, message, {headers: this.httpOptions.headers});
    return response;
  }
}
