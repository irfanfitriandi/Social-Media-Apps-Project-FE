import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { PostOption } from "./Dropdown";
import { FaCommentDots } from "react-icons/fa";
import { PostsType } from "../utils/types/posts";

interface CardProps {
  id: number;
  ava: string;
  uname: string;
  date: string;
  imgPost: string;
  caption: string;
  comment: number;
}

interface CardDetailProps {
  id?: number;
  ava?: string;
  uname?: string;
  date?: string;
  imgPost?: string;
  caption?: string;
  comments?: number;
  comment?: [
    {
      comment: string;
      created_at: string;
      id_comment: number;
      id_user: number;
      profilepicture: string;
      username: string;
    }
  ];
}

export const CardPost: FC<PostsType> = ({
  id_content,
  profilepicture,
  username,
  create_at,
  content_image,
  content,
  comment,
}) => {
  const navigate = useNavigate();

  const onClickDetail = (index: number) => {
    navigate(`/detail-post/${index}`);
  };

  return (
    <div className="bg-content border-2 border-secondary my-5 rounded-xl">
      <div className="flex items-center gap-3 p-2">
        <div className="w-32">
          <img
            src={profilepicture}
            alt="photo-profile"
            className="w-12 h-12 rounded-full max-w-none"
          />
        </div>
        <div className="w-full">
          <h3>{username}</h3>
          <p className="text-xs">{create_at}</p>
        </div>
        <div className="w-full flex justify-end">
          <PostOption id={id_content} />
        </div>
      </div>
      <div className="flex flex-col p-4">
        <img src={content_image} alt="image-content" className="rounded-xl" />
        <p
          className="pt-4 cursor-pointer"
          onClick={() => {
            onClickDetail(id_content);
          }}
        >
          {content}
        </p>
      </div>
      <div
        className="flex justify-end items-center gap-3 border-t-2 border-secondary p-2 px-2 cursor-pointer"
        onClick={() => {
          onClickDetail(id_content);
        }}
      >
        <FaCommentDots />
        <p>{comment}</p>
      </div>
    </div>
  );
};

export const CardPostDetail: FC<CardDetailProps> = ({
  ava,
  uname,
  date,
  imgPost,
  caption,
  comments,
}) => {
  return (
    <div className="bg-content border-2 border-secondary my-5 rounded-xl">
      <div className="flex items-center gap-3 p-2">
        <img src={ava} alt="photo-profile" className="w-12 h-12 rounded-full" />
        <div>
          <h3>{uname}</h3>
          <p className="text-xs">{date}</p>
        </div>
      </div>
      <div className="flex flex-col p-4">
        <img src={imgPost} alt="image-content" className="rounded-xl" />
        <p className="pt-4 cursor-pointer">{caption}</p>
      </div>
      <div className="flex justify-end items-center gap-3 border-t-2 border-secondary p-2 px-2 cursor-pointer">
        <FaCommentDots />
        <p>{comments}</p>
      </div>
    </div>
  );
};
