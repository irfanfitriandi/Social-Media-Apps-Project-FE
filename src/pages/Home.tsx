import React, { useState } from "react";

import { Layout } from "../components/Layout";
import { Input, FileInput, Button } from "react-daisyui";
import { FaCommentDots, FaImages } from "react-icons/fa";

function Home() {
  const [isShownPost, setisShownPost] = useState(false);

  const handleClickPost = () => {
    setisShownPost((current) => !current);
  };
  return (
    <Layout>
      <div className="flex gap-2 m-5 items-center">
        <img
          src="https://pbs.twimg.com/profile_images/1610613801526890500/aBOa83uV_400x400.jpg"
          alt="photo-profile"
          className="w-16 rounded-full"
        />
        {!isShownPost ? (
          <Input
            placeholder="What's on your mind?"
            className="w-full rounded-xl border-2 border-secondary h-12"
            onClick={handleClickPost}
          />
        ) : (
          <h3
            onClick={handleClickPost}
            className="text-2xl ml-2 cursor-pointer"
          >
            Dybala
          </h3>
        )}
      </div>
      {isShownPost && (
        <div
          className="px-2 "
          style={{ transition: "visibility 0s, opacity 0.5s linear" }}
        >
          <textarea
            rows={9}
            className="w-full bg-content border-2 border-secondary rounded-xl p-3"
          ></textarea>
          <div className="flex justify-end gap-2">
            <Button className="mt-2 border-[#606770] w-24 capitalize ">
              <FaImages className="w-6 h-6" />
            </Button>
            <Button className="mt-2 border-[#606770] w-24 capitalize ">
              Post
            </Button>
          </div>
        </div>
      )}
      <div className="bg-content border-2 border-secondary m-5 rounded-xl">
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
      <div className="bg-content border-2 border-secondary m-5 rounded-xl">
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
