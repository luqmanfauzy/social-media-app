import { useEffect, useState } from "react";
import type { Story } from "../types/story";
import { dummyStoriesData } from "../assets/assets";
import { Plus } from "lucide-react";
import moment from "moment";
import StoryModal from "./StoryModal";
import StoryViewer from "./StoryViewer";

function StoriesBar() {
  const [stories, setStories] = useState<Story[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [viewStory, setviewStory] = useState<Story | null>(null);

  useEffect(() => {
    setStories(dummyStoriesData as Story[]);
  }, []);

  return (
    <div className="w-screen sm:w-[calc(100vw-240px)] lg:max-w-2xl overflow-x-auto no-scrollbar px-4">
      <div className="flex gap-4 pb-5 flex-nowrap">
        {/* Add Story Card */}
        <div
          onClick={() => setShowModal(true)}
          className="rounded-lg shadow-sm min-w-[120px] max-w-[120px] aspect-[3/4] cursor-pointer hover:shadow-lg transition-all duration-200 border-2 border-dashed border-indigo-300 bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center flex-col p-4"
        >
          <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mb-3">
            <Plus className="text-white w-5 h-5" />
          </div>
          <p className=" text-sm font-medium text-slate-700 text-center">
            Create Story
          </p>
        </div>

        {/* Story Cards */}
        {stories.map((story, index) => (
          <div
            onClick={() => setviewStory(story)}
            key={index}
            className="relative rounded-lg shadow min-w-[120px] max-w-[120px] aspect-[3/4] cursor-pointer hover:shadow-lg transition-all duration-200 bg-gradient-to-b from-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-800 active:scale-95 overflow-hidden"
          >
            <img
              src={story.user.profile_picture}
              alt={story.user.full_name}
              className="absolute w-8 h-8 top-3 left-3 z-10 rounded-full ring-2 ring-white shadow"
            />
            <p className="absolute top-16 left-3 text-white/80 text-sm truncate max-w-[100px]">
              {story.content || "No caption"}
            </p>
            <p className="text-white absolute bottom-1 right-2 z-10 text-[10px] opacity-80">
              {moment(story.createdAt).fromNow()}
            </p>
            {story.media_type !== "text" && (
              <div className="absolute inset-0 z-1 rounded-lg bg-black overflow-hidden">
                {story.media_type == "image" ? (
                  <img
                    src={story.media_url}
                    alt=""
                    className="h-full w-full object-cover hover:scale-110 transition duration-500 opacity-70 hover:opacity-80"
                  />
                ) : (
                  <video
                    src={story.media_url}
                    className="h-full w-full object-cover hover:scale-110 transition duration-500 opacity-70 hover:opacity-80"
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* add story modal */}
      {showModal && (
        <StoryModal setShowModal={setShowModal} fetchStories={setStories} />
      )}
      {/* view story modal */}
      {viewStory && (
        <StoryViewer viewStory={viewStory} setViewStory={setviewStory} />
      )}
    </div>
  );
}

export default StoriesBar;
