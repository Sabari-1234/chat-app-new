export interface ChatData {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  avatar: {
    src: string;
    alt: string;
  };
}
