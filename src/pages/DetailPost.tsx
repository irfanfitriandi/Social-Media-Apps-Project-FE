import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

import { Layout } from "../components/Layout";
import { CardPostDetail } from "../components/Card";
import { InputStd } from "../components/Input";

import { PostType } from "../utils/types/posts";

function DetailPost() {
  const [post, setPost] = useState<PostType>();

  const { id_post } = useParams();

  useEffect(() => {
    fetchDataPosts();
  }, []);

  function fetchDataPosts() {
    axios
      .get(`https://shirayuki.site/contents/${id_post}`)
      .then((res) => {
        setPost(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }
  return (
    <Layout>
      <CardPostDetail
        ava={post?.users.profilepicture}
        uname={post?.users.username}
        date={post?.create_at}
        imgPost={post?.image}
        caption={post?.content}
        comments={post?.comments}
      />
      <div className="bg-com border-2 border-secondary my-3 rounded-xl">
        {post?.comment.map((data) => (
          <div key={data.id} className="p-2 border-b-2 border-secondary">
            <div className="flex items-center gap-3 pb-2">
              <img
                src={data.users.profilepicture}
                alt="photo-profile"
                className="w-12 h-12 rounded-full"
              />
              <h3>{data.users.username}</h3>
            </div>
            <p>{data.comment}</p>
          </div>
        ))}
      </div>

      <InputStd placeholder="Write a comment . . ." />
    </Layout>
  );
}

export default DetailPost;
