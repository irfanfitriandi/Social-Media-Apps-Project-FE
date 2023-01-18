export interface PostsType {
  id_content: number;
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
  comments: number;
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
