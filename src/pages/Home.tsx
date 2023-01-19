import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import { Layout } from "../components/Layout";
import { ButtonPrimary, ButtonSecondary } from "../components/Button";
import { InputStd } from "../components/Input";
import { CardPost } from "../components/Card";
import { FaImages } from "react-icons/fa";
import { PostsType } from "../utils/types/posts";

function Home() {
  const [isShownPost, setisShownPost] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["username"]);
  const [posts, setPosts] = useState<PostsType[]>([]);
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickPost = () => {
    setisShownPost((current) => !current);
  };

  useEffect(() => {
    fetchDataPosts();
    console.log(selectedImage);
  }, [selectedImage]);

  function fetchDataPosts() {
    axios
      .get("https://shirayuki.site/contents")
      .then((res) => {
        // setPosts(res.data.data);
        console.log(res.data.data[0]);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("https://shirayuki.site/contents")
      .then((res) => {
        // setPosts(res.data.data);
        console.log(res.data.data[0]);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  return (
    <Layout>
      <div className="flex gap-2 my-5 items-center">
        <img
          src="https://pbs.twimg.com/profile_images/1610613801526890500/aBOa83uV_400x400.jpg"
          alt="photo-profile"
          className="w-16 rounded-full"
        />
        {!isShownPost ? (
          <div onClick={handleClickPost} className="w-full">
            <InputStd placeholder="What's on your mind?" />
          </div>
        ) : (
          <h3
            onClick={handleClickPost}
            className="text-2xl ml-2 cursor-pointer"
          >
            {cookies.username}
          </h3>
        )}
      </div>
      {isShownPost && (
        <form
          onSubmit={handleSubmit}
          className="px-2 "
          style={{ transition: "visibility 0s, opacity 0.5s linear" }}
        >
          <textarea
            name="content"
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            rows={9}
            className="w-full border-2 border-secondary rounded-xl p-3"
          ></textarea>
          <div className="flex justify-end gap-2">
            {/* <ButtonSecondary
              className="w-1/4"
              label={<FaImages className="text-xl" />}
            /> */}
            <input
              type="file"
              name="file"
              onChange={(event: any) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
            <ButtonPrimary className="w-1/4" label="Post" />
          </div>
        </form>
      )}

      {posts.map((post, index) => (
        <CardPost
          key={index}
          id={post.id}
          ava={post.users[0].profilepicture}
          uname={post.users[0].username}
          date={post.create_at}
          imgPost={post.image}
          caption={post.content}
          comment={post.comments}
        />
      ))}
    </Layout>
  );
}

export default Home;
