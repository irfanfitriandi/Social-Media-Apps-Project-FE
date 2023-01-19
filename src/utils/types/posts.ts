export interface PostsType {
  id: number;
  content: string;
  image: string;
  create_at: string;
  users: [
    {
      id_user: string;
      username: string;
      profilepicture: string;
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
