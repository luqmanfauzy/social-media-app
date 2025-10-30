import { useEffect, useState } from 'react'
import type { Story } from '../types/story';
import { dummyStoriesData } from '../assets/assets';

function StoriesBar() {
    const [stories, setStories] = useState<Story[]>([]);

    const fetchStories = () => {
        setStories(dummyStoriesData)
    }

    useEffect(() => {
        fetchStories();
    }, []);

    return (
        <div className='w-screen sm:w-[calc(100vw-240px)] lg:max-w-2xl no-scrollbar overflow-x-auto px-4'>
            {/* add story card */}
        </div>
    )
}

export default StoriesBar