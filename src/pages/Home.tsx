import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Layout } from "../components/Layout";
import { ButtonPrimary, ButtonSecondary } from "../components/Button";
import { Input, FileInput } from "react-daisyui";
import { FaCommentDots, FaImages } from "react-icons/fa";
import { PostsType } from "../utils/types/posts";

function Home() {
  const [isShownPost, setisShownPost] = useState(false);
  const [posts, setPosts] = useState<PostsType[]>([]);
  const navigate = useNavigate();

  const handleClickPost = () => {
    setisShownPost((current) => !current);
  };

  const onClickDetail = (index: string) => {
    navigate(`/detail-post/${index[0]}`);
  };

  useEffect(() => {
    fetchDataPosts();
  }, []);

  function fetchDataPosts() {
    axios
      .get("https://virtserver.swaggerhub.com/icxz1/SosmedAPI/1.0.0/contents")
      .then((res) => {
        setPosts(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }
  return (
    <Layout>
      <div className="flex gap-2 my-5 items-center">
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
            placeholder="What's on your mind?"
            rows={9}
            className="w-full border-2 border-secondary rounded-xl p-3"
          ></textarea>
          <div className="flex justify-end gap-2">
            <ButtonSecondary
              className="w-1/4"
              label={<FaImages className="text-xl" />}
            />
            <ButtonPrimary className="w-1/4" label="Post" />
          </div>
        </div>
      )}

      {posts.map((post) => (
        <div
          key={post.id_content}
          className="bg-content border-2 border-secondary my-5 rounded-xl"
        >
          <div className="flex items-center gap-3 p-2">
            <img
              src={post.profilepicture}
              alt="photo-profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3>{post.users[0].username}</h3>
              <p className="text-xs">{post.create_at}</p>
            </div>
          </div>
          <div className="flex flex-col p-4">
            <img src={post.image} alt="image-content" className="rounded-xl" />
            <p
              className="pt-4 cursor-pointer"
              onClick={() => {
                onClickDetail(post.id_content);
              }}
            >
              {post.content}
            </p>
          </div>
          <div
            className="flex justify-end items-center gap-3 border-t-2 border-secondary p-2 px-2 cursor-pointer"
            onClick={() => {
              onClickDetail(post.id_content);
            }}
          >
            <FaCommentDots />
            <p>{post.comments}</p>
          </div>
        </div>
      ))}
    </Layout>
  );
}

export default Home;
