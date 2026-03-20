export interface User {
  id: number;
  name: string;
  email: string;
  displayName: string;
  address: {
    city: string;
  };
}

export interface Post {
  id: number;
  title: string;
  body: string;
}
