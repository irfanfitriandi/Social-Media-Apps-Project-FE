import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { FaCommentDots } from "react-icons/fa";

interface CardProps {
  id: string;
  ava: string;
  uname: string;
  date: string;
  imgPost?: string;
  caption: string;
  comment?: string;
}

export const CardPost: FC<CardProps> = ({
  id,
  ava,
  uname,
  date,
  imgPost,
  caption,
  comment,
}) => {
  const navigate = useNavigate();

  const onClickDetail = (index: string) => {
    navigate(`/detail-post/${index[0]}`);
  };

  return (
    <div
      key={id}
      className="bg-content border-2 border-secondary my-5 rounded-xl"
    >
      <div className="flex items-center gap-3 p-2">
        <img src={ava} alt="photo-profile" className="w-12 h-12 rounded-full" />
        <div>
          <h3>{uname}</h3>
          <p className="text-xs">{date}</p>
        </div>
      </div>
      <div className="flex flex-col p-4">
        <img src={imgPost} alt="image-content" className="rounded-xl" />
        <p
          className="pt-4 cursor-pointer"
          onClick={() => {
            onClickDetail(id);
          }}
        >
          {caption}
        </p>
      </div>
      <div
        className="flex justify-end items-center gap-3 border-t-2 border-secondary p-2 px-2 cursor-pointer"
        onClick={() => {
          onClickDetail(id);
        }}
      >
        <FaCommentDots />
        <p>{comment}</p>
      </div>
    </div>
  );
};
