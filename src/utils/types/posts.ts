export interface PostsType {
  id_content: string;
  content: string;
  image: string;
  create_at: string;
  profilepicture: string;
  users: [
    {
      id_user: string;
      username: string;
    }
  ];
  comment: string;
}

export interface PostType {
  content: string;
  create_at: string;
  id_content: number;
  image: string;
  profilepicture: string;
  username: string;
}
