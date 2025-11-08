import { useState } from "react";
import type { Post } from "../types/post";
import { dummyUserData } from "../assets/assets";
import { BadgeCheck, Heart, MessageCircle, Share2 } from "lucide-react";
import moment from "moment";

function PostCard({ post }: { post: Post }) {
  const postWithHashtags = post.content.replace(
    /(#\w+)/g,
    '<span class="text-indigo-600">$1</span>'
  );

  const [likes, setLikes] = useState(post.likes_count);
  const currentUser = dummyUserData;

  const handleLike = async () => {};

  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full max-w-2xl mx-auto space-y-4">
      {/* user info */}
      <div className="flex items-center gap-3">
        <img
          src={post.user.profile_picture}
          alt={post.user.full_name}
          className="w-12 h-12 rounded-full shadow"
        />
        <div>
          <div className="flex items-center gap-1 font-medium text-gray-900">
            <span>{post.user.full_name}</span>
            <BadgeCheck className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-gray-500 text-sm">
            @{post.user.username} · {moment(post.user.createdAt).fromNow()}
          </div>
        </div>
      </div>

      {/* content */}
      {post.content && (
        <div
          className="text-gray-800 text-sm whitespace-pre-line leading-relaxed"
          dangerouslySetInnerHTML={{ __html: postWithHashtags }}
        />
      )}

      {/* images */}
      {post.image_urls?.length > 0 && (
        <div
          className={`grid gap-2 ${
            post.image_urls.length === 1 ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          {post.image_urls.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className={`rounded-xl object-cover ${
                post.image_urls.length === 1 ? "w-full h-auto" : "h-48 w-full"
              }`}
            />
          ))}
        </div>
      )}
      {/* actions */}
      <div className="flex items-center gap-4 text-gray-600 text-sm pt-2 border-t border-gray-300">
        <div className="flex items-center gap-1">
          <Heart
            className={`w-4 h-4 cursor-pointer ${
              likes.includes(currentUser._id) && "text-red-500 fill-red-500"
            }`}
            onClick={handleLike}
          />
          <span>{likes.length}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageCircle className="w-4 h-4 cursor-pointer" />
          <span>{12}</span>
        </div>
        <div className="flex items-center gap-1">
          <Share2 className="w-4 h-4 cursor-pointer" />
          <span>{8}</span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
