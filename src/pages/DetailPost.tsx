import React from "react";
import { Layout } from "../components/Layout";
import { FaCommentDots } from "react-icons/fa";
import { Input } from "react-daisyui";

function DetailPost() {
  return (
    <Layout>
      <div className="bg-content border-2 border-secondary m-5 rounded-xl">
        <div className="flex items-center gap-3 p-2">
          <img
            src="https://pbs.twimg.com/profile_images/1610613801526890500/aBOa83uV_400x400.jpg"
            alt="photo-profile"
            className="w-12 rounded-full"
          />
          <h3>Dybala</h3>
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
      <div className="bg-com border-2 border-secondary m-3 rounded-xl">
        <div className="p-2 border-b-2 border-secondary">
          <div className="flex items-center gap-3 pb-2">
            <img
              src="https://pbs.twimg.com/profile_images/1610613801526890500/aBOa83uV_400x400.jpg"
              alt="photo-profile"
              className="w-12 rounded-full"
            />
            <h3>Dybala</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="p-2 border-b-2 border-secondary">
          <div className="flex items-center gap-3 pb-2">
            <img
              src="https://pbs.twimg.com/profile_images/1610613801526890500/aBOa83uV_400x400.jpg"
              alt="photo-profile"
              className="w-12 rounded-full"
            />
            <h3>Dybala</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="p-2 border-secondary">
          <div className="flex items-center gap-3 pb-2">
            <img
              src="https://pbs.twimg.com/profile_images/1610613801526890500/aBOa83uV_400x400.jpg"
              alt="photo-profile"
              className="w-12 rounded-full"
            />
            <h3>Dybala</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <Input
        placeholder="Write a comment . . ."
        className="w-full rounded-xl bg-form border-2 border-secondary h-12 mb-6"
      />
    </Layout>
  );
}

export default DetailPost;
