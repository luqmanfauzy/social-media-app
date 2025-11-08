
import type { User } from "./user";
export interface RecentMessages {
    _id: string;
    from_user_id: User;
    to_user_id: User;
    text: string;
    message_type: string;
    media_url: string;
    seen: boolean;
    createdAt: string;
    updatedAt: string;
}