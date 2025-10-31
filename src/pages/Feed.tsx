import { useEffect, useState } from "react";
import { dummyPostsData } from "../assets/assets";
import Loading from "../components/Loading";
import type { Post } from "../types/post";
import StoriesBar from "../components/StoriesBar";

function Feed() {
  const [feeds, setFeeds] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchfeeds = async () => {
    setFeeds(dummyPostsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchfeeds();
  }, []);

  return !loading ? (
    <div className="h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8">
      {/* Stories and Post List */}
      <div>
        <StoriesBar />
        <div className="p-4 space-y-6">List of Post</div>
      </div>

      {/* Right Sidebar */}
      <div>
        <div>
          <h1>Sponsored</h1>
        </div>
        <h1>Recent Messages</h1>
      </div>
    </div>
  ) : (
    <div>
      <Loading />
    </div>
  );
}

export default Feed;
