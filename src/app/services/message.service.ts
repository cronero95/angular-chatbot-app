import { Injectable, effect, inject, signal } from '@angular/core';
import { Message, Role, UserResponse } from '../interfaces/request-response.interface';
import { HttpClient } from '@angular/common/http';
import { MessageSent } from '../interfaces/request.interface';
import { environment } from '../../environments/environments';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private httpClient = inject(HttpClient);

  private readonly baseUrl = environment.base_url;

  public messageHistorySignal = signal<UserResponse[]>([]);

  public historyChangeEffect = effect(() => {
    localStorage.setItem('history', JSON.stringify(this.messageHistorySignal()));
  })

  constructor() {
    if(!localStorage.getItem('history')) return;

    this.messageHistorySignal.set(JSON.parse(localStorage.getItem('history')!));
  }

  onMessageSent(userMessage: MessageSent): Observable<boolean> {

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

    return this.httpClient.post<UserResponse>(`${this.baseUrl}/chat`, body)
      .pipe(
        tap(resp => {
          this.messageHistorySignal.update(value => {
            value.push(resp);
            return [...value];
          });
        }),
        map(() => {
          return true
        }),
        catchError( err => {
          throw 'There is a problem with the backend ' + (err.error.message||'');
        }),
      );
  }

  onDeleteChat(): Observable<boolean> {
    this.messageHistorySignal.set([]);

    localStorage.removeItem('history');

    return this.httpClient.delete(`${this.baseUrl}/chat`)
      .pipe(
        map(() =>{
          return true;
        }),
        catchError( err => {
          throw 'There is a problem with the backend ' + (err.error.message||'');
        }),
      );
  }
}
