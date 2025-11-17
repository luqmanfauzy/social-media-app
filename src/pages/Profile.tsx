import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyPostsData, dummyUserData } from "../assets/assets";
import type { User } from "../types/user";
import type { Post } from "../types/post";
import Loading from "../components/Loading";
import UserProfileInfo from "../components/UserProfileInfo";

function Profile() {
  const { profileId } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeTab, setActiveTab] = useState("posts");
  const [showEdit, setShowEdit] = useState(false);

  const fetchUser = async () => {
    setUser(dummyUserData);
    setPosts(dummyPostsData);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return user ? (
    <div className="relative h-full overflow-y-scroll bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        {/* profile card */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          {/* cover photo */}
          <div className="h-40 md:h-56 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
            {user.cover_photo && (
              <img
                className="w-full h-full object-cover"
                src={user.cover_photo}
                alt=""
              />
            )}
          </div>
          {/* user info */}
          <UserProfileInfo user={user} posts={posts} profileId={profileId} setShowEdit={setShowEdit}/>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Profile;
