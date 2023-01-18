import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

import { Layout } from "../components/Layout";
import { CardPostDetail } from "../components/Card";
import { InputStd } from "../components/Input";

import { PostType } from "../utils/types/posts";

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
        console.log(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }
  return (
    <Layout>
      <CardPostDetail
        ava={post?.profilepicture}
        uname={post?.username}
        date={post?.create_at}
        imgPost={post?.image}
        caption={post?.content}
        comment={post?.comment}
      />
      <div className="bg-com border-2 border-secondary my-3 rounded-xl">
        {post?.comment.map((data) => (
          <div
            key={data.id_comment}
            className="p-2 border-b-2 border-secondary"
          >
            <div className="flex items-center gap-3 pb-2">
              <img
                src={data.profilepicture}
                alt="photo-profile"
                className="w-12 h-12 rounded-full"
              />
              <h3>{data.username}</h3>
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
