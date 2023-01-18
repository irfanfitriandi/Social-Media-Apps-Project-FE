import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { FaCommentDots } from "react-icons/fa";
import { Input } from "react-daisyui";
import axios from "axios";
import { PostType } from "../utils/types/posts";
import { useParams } from "react-router";

function DetailPost() {
  const [post, setPost] = useState<PostType>();

  const { id_content } = useParams();

  useEffect(() => {
    fetchDataPosts();
  }, []);

  function fetchDataPosts() {
    axios
      .get(
        `https://virtserver.swaggerhub.com/icxz1/SosmedAPI/1.0.0/contents/${id_content}`
      )
      .then((res) => {
        setPost(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }
  return (
    <Layout>
      <div className="bg-content border-2 border-secondary my-5 rounded-xl">
        <div className="flex items-center gap-3 p-2">
          <img
            src={post?.profilepicture}
            alt="photo-profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3>{post?.username}</h3>
            <p className="text-xs">{post?.create_at}</p>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <img src={post?.image} alt="image-content" className="rounded-xl" />
          <p className="pt-4 cursor-pointer">{post?.content}</p>
        </div>
        <div className="flex justify-end items-center gap-3 border-t-2 border-secondary p-2 px-2 cursor-pointer">
          <FaCommentDots />
          {/* <p>{post?.comment[0]}</p> */}
        </div>
      </div>

      {/* <div className="bg-content border-2 border-secondary my-5 rounded-xl">
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
      </div> */}
      <div className="bg-com border-2 border-secondary my-3 rounded-xl">
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
        className="w-full rounded-xl border-2 border-secondary h-12 mb-5"
      />
    </Layout>
  );
}

export default DetailPost;
