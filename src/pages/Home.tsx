import React from "react";

import { Layout } from "../components/Layout";
import { Input, FileInput } from "react-daisyui";
import { FaCommentDots, FaImages } from "react-icons/fa";

function Home() {
  return (
    <Layout>
      <div className="flex gap-2 my-5 items-center">
        <img
          src="https://pbs.twimg.com/profile_images/1610613801526890500/aBOa83uV_400x400.jpg"
          alt="photo-profile"
          className="w-16 rounded-full"
        />
        <Input
          placeholder="What's on your mind?"
          className="w-full rounded-xl border-2 border-secondary h-12"
        />
      </div>
      <div className="bg-content border-2 border-secondary my-5 rounded-xl">
        <div className="flex items-center gap-3 p-2">
          <img
            src="https://pbs.twimg.com/profile_images/1610613801526890500/aBOa83uV_400x400.jpg"
            alt="photo-profile"
            className="w-12 rounded-full"
          />
          <div>
            <h3>Dybala</h3>
            <p className="text-xs">30 Feb at 11.11 PM</p>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            animi hic sequi quam! Repudiandae mollitia pariatur minus? Corrupti
            excepturi earum, nihil officia magni ut ipsum error sit non
            provident incidunt!
          </p>
        </div>
        <div className="flex justify-end items-center gap-3 border-t-2 border-secondary pt-2 px-2">
          <FaCommentDots />
          <p>5</p>
        </div>
      </div>
      <div className="bg-content border-2 border-secondary my-5 rounded-xl">
        <div className="flex items-center gap-3 p-2">
          <img
            src="https://pbs.twimg.com/profile_images/1610613801526890500/aBOa83uV_400x400.jpg"
            alt="photo-profile"
            className="w-12 rounded-full"
          />
          <div>
            <h3>Dybala</h3>
            <p className="text-xs">30 Feb at 11.11 PM</p>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <img
            src="https://pbs.twimg.com/media/Fmd1Oy-aUAIqJyP?format=jpg&name=medium"
            alt="image-content"
            className="rounded-xl"
          />
          <p className="pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            animi hic sequi quam! Repudiandae mollitia pariatur minus? Corrupti
            excepturi earum, nihil officia magni ut ipsum error sit non
            provident incidunt!
          </p>
        </div>
        <div className="flex justify-end items-center gap-3 border-t-2 border-secondary pt-2 px-2">
          <FaCommentDots />
          <p>5</p>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
