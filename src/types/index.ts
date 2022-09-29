export interface Book {
  id: string;
  name: string;
  image_url: string;
  created_at: Date;
}

export interface BookState {
  list: Book[];
}
