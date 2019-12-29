import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  readonly messages: string[];

  constructor() {
    this.messages = [];
  }

  add(message: string) {
    this.messages.push(message);
  }

  clear(): void {
    this.messages.splice(0);
  }
}
