import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { Story } from "../types/story";

interface StoryModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  fetchStories: React.Dispatch<React.SetStateAction<Story[]>>;
}

function StoryModal({ setShowModal, fetchStories }: StoryModalProps) {
  const bgColors = [
    "#4f46e5",
    "#7c3aed",
    "#db2777",
    "#e11d48",
    "#ca8a04",
    "#0d9488",
  ];

  const [mode, setMode] = useState("text");
  const [background, setbackground] = useState(bgColors[0]);
  const [text, setText] = useState("");
  const [media, setMedia] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMedia(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleCreateStory = async () => {};

  return (
    <div className="fixed inset-0 z-110 min-h-screen bg-black/80 backdrop-blur text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        <div className="text-center mb-4 flex items-center justify-between">
          <button
            onClick={() => setShowModal(false)}
            className="text-white p-2 cursor-pointer"
          >
            <ArrowLeft />
          </button>
          <h2 className="text-lg font-semibold">Create Story</h2>
          <span className="w-10"></span>
        </div>

        <div
          className="rounded-lg h-96 flex items-center justify-center relative"
          style={{ backgroundColor: background }}
        >
          {mode === "text" && (
            <textarea
              onChange={(e) => setText(e.target.value)}
              value={text}
              className="bg-transparent text-white w-full h-full p-6 text-lg resize-none focus:outline-none"
              placeholder="what's on your mind?"
            />
          )}
          {mode === "media" &&
            previewUrl &&
            (media?.type.startsWith("image") ? (
              <img
                className="object-contain max-h-full"
                src={previewUrl}
                alt=""  
              />
            ) : (
              <video className="object-contain max-h-full" src={previewUrl} />
            ))}
        </div>

        <div className="flex mt-4 gap-2">
          {bgColors.map((color) => (
            <button
              className="w-6 h-6 rounded-full ring cursor-pointer"
              key={color}
              style={{ backgroundColor: color }}
              onClick={() => setbackground(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StoryModal;
