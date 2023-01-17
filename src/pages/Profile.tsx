import React from "react";

import { LayoutProfile } from "../components/Layout";
import { Button } from "react-daisyui";
import { FaCommentDots } from "react-icons/fa";

function Profile() {
  return (
    <LayoutProfile>
      <h1 className="text-3xl text-center bg-accent py-16">Profile</h1>
      <div className="relative top-[-56px]">
        <div className="w-full flex flex-col items-center">
          <img
            src="https://pbs.twimg.com/profile_images/1610613801526890500/aBOa83uV_400x400.jpg"
            alt="photo-profile"
            className="w-28 rounded-full border-2 border-secondary"
          />
          <h1 className="text-3xl">Dybala</h1>
        </div>
        <div className="flex gap-3 mx-10">
          <Button className="w-full bg-primary text-white m-4 py-1 rounded-xl hover:bg-accent text-sm">
            Edit Profile
          </Button>
          <Button className="w-full bg-primary text-white m-4 py-1 rounded-xl hover:bg-accent text-sm">
            Log Out
          </Button>
        </div>
        <div className="mt-2">
          <h1 className="text-lg text-center border-b-2 pb-2 mx-24">My Post</h1>
        </div>
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
              animi hic sequi quam! Repudiandae mollitia pariatur minus?
              Corrupti excepturi earum, nihil officia magni ut ipsum error sit
              non provident incidunt!
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
            <h3>Dybala</h3>
          </div>
          <div className="flex flex-col p-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              animi hic sequi quam! Repudiandae mollitia pariatur minus?
              Corrupti excepturi earum, nihil officia magni ut ipsum error sit
              non provident incidunt!
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
            <h3>Dybala</h3>
          </div>
          <div className="flex flex-col p-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              animi hic sequi quam! Repudiandae mollitia pariatur minus?
              Corrupti excepturi earum, nihil officia magni ut ipsum error sit
              non provident incidunt!
            </p>
          </div>
          <div className="flex justify-end items-center gap-3 border-t-2 border-secondary pt-2 px-2">
            <FaCommentDots />
            <p>5</p>
          </div>
        </div>
      </div>
    </LayoutProfile>
  );
}

export default Profile;
