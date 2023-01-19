export interface PostsType {
  Users: {
    id_user: number;
    name: string;
    profilepicture: string;
    username: string;
  };
  comment: number;
  content: string;
  content_image: string;
  create_at: string;
  id_content: number;
  profilepicture: string;
  username: string;
}

export interface PostType {
  content: string;
  create_at: string;
  id_content: number;
  image: string;
  profilepicture: string;
  username: string;
  comment: [
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
