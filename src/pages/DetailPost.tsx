import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

import { Layout } from "../components/Layout";
import { CardPostDetail } from "../components/Card";
import { InputStd } from "../components/Input";

import { PostType } from "../utils/types/posts";
import { Input } from "react-daisyui";
import { ButtonPrimary } from "../components/Button";

function DetailPost() {
  const [post, setPost] = useState<PostType>();
  const [isComment, setIsComment] = useState({
    comment: "",
  });

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

  const handleSubmitComment = () => {
    axios
      .post(`https://shirayuki.site/comments/${id_post}`, isComment, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NzQxNTU4NTIsInVzZXJJRCI6M30.cj_GufJAD6HqTHSP4jRMEMuNfUqUcK_raSNe4dqxbvw",
        },
      })
      .then((response) => {
        console.log(response);

        alert("Success comment");
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

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

      <form onSubmit={handleSubmitComment}>
        <Input
          type="text"
          name="comment"
          onChange={(e) => setIsComment({ comment: e.target.value })}
          value={isComment.comment}
          placeholder="Username/Email"
          className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
        />
        <ButtonPrimary label="submit comment" />
      </form>
    </Layout>
  );
}

export default DetailPost;
