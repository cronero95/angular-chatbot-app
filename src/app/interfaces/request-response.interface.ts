export interface UserResponse {
  message: Message;
  time: ResponseTime;
}

export interface Message {
  role:    Role;
  content: string;
}

export interface ResponseTime {
  hour: number;
  minute: number;
}

export enum Role {
  Assistant = "assistant",
  System = "system",
  User = "user",
}
