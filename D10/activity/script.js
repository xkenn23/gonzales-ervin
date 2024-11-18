class Book {
  constructor(title, author, genre) {
    this.title = title; // Title of the book
    this.author = author; // Author of the book
    this.genre = genre; // Genre of the book
    this.availability = true; // Default availability
  }

  borrowBook() {
    if (this.availability) {
      this.availability = false;
      return `You have borrowed "${this.title}".`;
    } else {
      return `Sorry, "${this.title}" is not available right now.`;
    }
  }

  returnBook() {
    if (!this.availability) {
      this.availability = true;
      return `"${this.title}" has been returned. Thank you!`;
    } else {
      return `"${this.title}" is already available in the library.`;
    }
  }

  displayInfo() {
    return `Title: ${this.title}, Author: ${this.author}, Genre: ${
      this.genre
    }, Available: ${this.availability ? "Yes" : "No"}`;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, genre) {
    const newBook = new Book(title, author, genre);
    this.books.push(newBook);
    console.log(` ${title} has been added to the library`);
  }

  searchBook(title) {
    const book = this.books.find(
      (bk) => bk.title.toLowerCase() === title.toLowerCase()
    );

    if (book) {
      console.log(book.displayInfo());
    } else {
      console.log(`"${title}" is not available in the library.`);
    }
  }

  displayBooks() {
    console.log("Available books in the library:");
    this.books.forEach((book) => {
      console.log(book.displayInfo());
    });
  }
}

const library = new Library();

library.addBook("Harry Potter", "JK Rowling", "Magic");
library.addBook("1984", "George Orwell", "Dystopian");
library.addBook("To Kill a Mockingbird", "Harper Lee", "Fiction");

library.searchBook("1984");

console.log(library.books);

library.addBook("Arcane", "Mr Goose", "Fiction");
library.addBook("DandaDan", "Episode 7", "Drama");

library.displayBooks();
