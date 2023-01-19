export interface UserType {
  id: number;
  bio: string;
  username: string;
  profilepicture: string;
  contents: [
    {
      id: number;
      content: string;
      image: string;
      create_at: string;
      username: string;
      profilepicture: string;
      comments: number;
    }
  ];
}
