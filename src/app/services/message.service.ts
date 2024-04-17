import { Injectable, effect, inject, signal } from '@angular/core';
import { Message, Role, UserResponse } from '../interfaces/request-response.interface';
import { HttpClient } from '@angular/common/http';
import { MessageSent } from '../interfaces/request.interface';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private httpClient = inject(HttpClient);

  private readonly baseUrl = environment.base_url;

  public messageHistorySignal = signal<UserResponse[]>([]);

  public historyChangeEffect = effect(() => {
    localStorage.setItem('history', JSON.stringify(this.messageHistorySignal()));
    console.log(this.messageHistorySignal());
  })

  constructor() {
    if(!localStorage.getItem('history')) return;

    this.messageHistorySignal.set(JSON.parse(localStorage.getItem('history')!));
  }

  onMessageSent(userMessage: MessageSent) {

    const newMessage: Message = {
      role: Role.User,
      content: userMessage.content,
    };

    const currentTime = new Date();

    const newUserMessage: UserResponse = {
      message: newMessage,
      time: {
        hour: currentTime.getHours(),
        minute: currentTime.getMinutes(),
      }
    }

    const body = userMessage;

    this.messageHistorySignal.update(value => {
      value.push(newUserMessage);
      return [...value];
    });

    this.httpClient.post<UserResponse>(`${this.baseUrl}/chat`, body)
      .subscribe(resp => {
        this.messageHistorySignal.update(value => {
          value.push(resp);
          return [...value];
        });
      })
  }
}
