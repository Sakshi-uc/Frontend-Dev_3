class Book {
  constructor(title, author, ISBN, isIssued = false) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (!this.isIssued) {
      this.isIssued = true;
      console.log(`Book "${this.title}" has been issued.`);
      return true;
    } else {
      console.log(`Book "${this.title}" is already issued.`);
      return false;
    }
  }

  returnBook() {
    if (this.isIssued) {
      this.isIssued = false;
      console.log(`Book "${this.title}" has been returned.`);
      return true;
    } else {
      console.log(`Book "${this.title}" was not issued.`);
      return false;
    }
  }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084");
const book3 = new Book("1984", "George Orwell", "9780451524935");
const book4 = new Book("Pride and Prejudice", "Jane Austen", "9780141439518");
const book5 = new Book("The Catcher in the Rye", "J.D. Salinger", "9780316769174");

const library = [book1, book2, book3, book4, book5];

console.log("=== All Available Books (Not Issued) ===");
library.forEach(book => {
  if (!book.isIssued) {
    console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`);
  }
});

console.log("\n=== Issuing a Book ===");
book1.issueBook();

console.log("\n=== Searching for Book by ISBN ===");
function findBookByISBN(isbn) {
  const book = library.find(b => b.ISBN === isbn);
  if (book) {
    console.log(`Found: ${book.title} by ${book.author}, Status: ${book.isIssued ? "Issued" : "Available"}`);
  } else {
    console.log(`No book found with ISBN: ${isbn}`);
  }
}

findBookByISBN("9780451524935");

console.log("\n=== Returning a Book ===");
book1.returnBook();

console.log("\n=== Updated Available Books ===");
library.forEach(book => {
  if (!book.isIssued) {
    console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`);
  }
});