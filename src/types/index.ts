export interface Message {
  id: string;
  content: string;
  sender: "user" | "agent";
  time: string;
  [key: string]: string;
}

export interface ChatItem {
  id: string;
  title: string;
  time: string;
  record: Message[];
}
