export interface PostsType {

  id_content: number;
  content: string;
  content_image: string;
  create_at: string;
  Users: {
    id_user: string;
    username: string;
    name: string;
    profilepicture: string;
  };
  comment: number;
}

export interface PostType {
  content: string;
  create_at: string;
  id: number;
  image: string;
  comments: number;
  users: {
    id_user: number;
    profilepicture: string;
    username: string;
  };
  comment: [
    {
      comment: string;
      create_at: string;
      id: number;
      users: {
        id_users: number;
        profilepicture: string;
        username: string;
      };
    }
  ];
}
