import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useCookies } from "react-cookie";

import { LayoutProfile } from "../components/Layout";
import { ButtonPrimary, ButtonSecondary } from "../components/Button";
import { CardPost } from "../components/Card";

import { UserType } from "../utils/types/users";

function Profile() {
  const [user, setUser] = useState<UserType>();
  const [cookie, removeCookie] = useCookies(["token", "id_user", "username"]);
  const checkToken = cookie.token;

  useEffect(() => {
    fetchDataUser();
  }, [setUser]);

  function fetchDataUser() {
    axios
      .get("https://shirayuki.site/users/", {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  return (
    <LayoutProfile>
      <h1 className="text-5xl text-center bg-accent py-16">Profile</h1>
      <div className="relative top-[-56px]">
        <div className="w-full flex flex-col items-center">
          <img
            src={user?.profilepicture}
            alt="photo-profile"
            className="w-28 h-28 rounded-full border-2 border-secondary"
          />
          <h1 className="text-4xl mt-2">{user?.username}</h1>
          <div className="text-center mt-2">
            <p>{user?.name}</p>
            <p>{user?.bio}</p>
          </div>
        </div>
        <div className="flex justify-around py-4">
          <Link className="w-1/3" to={"/settings/:id_user"}>
            <ButtonSecondary label="Edit Profile" />
          </Link>
          <div className="w-1/3">
            <ButtonPrimary label="Log Out" />
          </div>
        </div>
        <div className="mt-2">
          <h1 className="text-lg text-center pb-2 mx-24 underline underline-offset-[12px]">
            My Post
          </h1>
        </div>
        <div className="m-5">
          {user?.content.map((content) => (
            <CardPost
              key={content.id}
              id={content.id}
              ava={user.profilepicture}
              uname={user.username}
              date={content.create_at}
              imgPost={content.content_image}
              caption={content.content}
              comment={content.comments}
            />
          ))}
        </div>
      </div>
    </LayoutProfile>
  );
}

export default Profile;
