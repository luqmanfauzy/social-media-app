export interface Messages {
  _id: string;
  from_user_id: string;
  to_user_id: string;
  text: string;
  message_type: string;
  media_url: string;
  createdAt: string;
  updatedAt: string;
  seen: boolean;
}