import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/Models/Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;

  authorName: string;

  constructor() { }

  ngOnInit(): void {
    this.message = this.message;

  }

}
