import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../Services/message.service'
import { Message } from '../../Models/Message';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-messages-panel',
  templateUrl: './messages-panel.component.html',
  styleUrls: ['./messages-panel.component.css']
})
export class MessagesPanelComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  messages: Message[];

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): void
  {
    this.messageService.getMessages().subscribe(messages => this.messages = messages);
  }

  onSendMessage(value: string): void
  {
    this.messageService.sendMessage(
      { Value: value } as Message).subscribe(hero => true);
  }

}
