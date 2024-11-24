import { NextResponse } from "next/server";

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  available: boolean;
}

let books: Book[] = [
  {
    id: 1,
    title: "The Count of Monte Cristo",
    author: "Alexander Dumas",
    image: "/count-of-monte-cristo.jpg",
    available: true,
  },
  {
    id: 2,
    title: "Zindagi Gulzar Hai",
    author: "Umera Ahmed",
    image: "/zindagi-gulzar-hai.jpg",
    available: true,
  },
  {
    id: 3,
    title: "Harry Potter and the Philosophers Stone",
    author: "J.K. Rowling",
    image: "/harry-potter.jpg",
    available: true,
  },
  {
    id: 4,
    title: "bang e dara",
    author: "Allama Iqbal",
    image: "/dar.jpg",
    available: true,
  },
  {
    id: 5,
    title: "Hamlet",
    author: "William Shakespeare",
    image: "/hamlet.jpeg",
    available: true,
  },
  {
    id: 6,
    title: "Kuliyaat-e-Faiz",
    author: "Faiz Ahmed Faiz",
    image: "/faiz.jpg",
    available: true,
  },
  {
    id: 7,
    title: " A Game of Thrones",
    author: "George R.R. Martin",
    image: "/game-of-thrones.jpg",
    available: true,
  },
  {
    id: 8,
    title: "Gumaan",
    author: "Jaun Elia",
    image: "/gumaan.jpg",
    available: true,
  },
  {
    id: 9,
    title: "The Jungle Book",
    author: "Rudyard Kipling",
    image: "/the-jungle-book.jpg",
    available: true,
  },
  {
    id: 10,
    title: "Shikwa Jawab -e- Shikwa",
    author: "Allama Muhammad Iqbal",
    image: "/jawab-e-shikwa.jpg",
    available: true,
  },
  {
    id: 11,
    title: "Train to Pakistan",
    author: "Khushwant Singh",
    image: "/train-to-pakistan.jpg",
    available: true,
  },
  {
    id: 12,
    title: "Peer-e-Kamil",
    author: "Umera Ahmed",
    image: "/peer-e-kamil.jpg",
    available: true,
  },
  {
    id: 13,
    title: "The Great Indian Novel",
    author: "Shashi Tharoor",
    image: "/great-indian-novel.jpg",
    available: true,
  },
  {
    id: 14,
    title: "Diwan e Ghalib",
    author: "Mirza Asadullah Khan Ghalib",
    image: "/diwan-e-ghalib.jpg",
    available: true,
  },
  {
    id: 15,
    title: "Midnights Children",
    author: "Salman Rushdie",
    image: "/midnight-children.jpg",
    available: true,
  },
];

// GET Method
export async function GET() {
  return NextResponse.json(books, { status: 200 });
}

// POST Method
export async function POST(req: Request) {
  try {
    const newBook: Book = await req.json();
    books.push({ ...newBook, id: books.length + 1 });
    return NextResponse.json({ message: "Book added successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error adding book!",error }, { status: 500 });
  }
}

// PUT Method
export async function PUT(req: Request) {
  try {
    const updatedBook: Book = await req.json();
    books = books.map((book) =>
      book.id === updatedBook.id ? { ...book, ...updatedBook } : book
    );
    return NextResponse.json({ message: "Book updated successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error updating book!",error }, { status: 500 });
  }
}

// DELETE Method
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    books = books.filter((book) => book.id !== id);
    return NextResponse.json({ message: "Book deleted successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting book!",error }, { status: 500 });
  }
}