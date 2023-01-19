export interface UserType {
  id: number;
  name: string;
  profilepicture: string;
  username: string;
  bio: string;
  content: [
    {
      id: number;
      content: string;
      content_image: string;
      create_at: string;
      username: string;
      profilepicture: string;
      comments: number;
    }
  ];
}
