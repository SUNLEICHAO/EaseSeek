export interface Message {
  id: string;
  content: string;
  sender: "user" | "agent";
  time: string;
}
