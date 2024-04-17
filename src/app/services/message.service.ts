import { Injectable, inject } from '@angular/core';
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

  private messagesHistory: UserResponse[] = [];

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

    this.messagesHistory.push(newUserMessage);

    this.httpClient.post<UserResponse>(`${this.baseUrl}/chat`, body)
      .subscribe(resp => {
        this.messagesHistory.push(resp);
      })

  }
}
