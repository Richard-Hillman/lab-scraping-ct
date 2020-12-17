const pool = require('../utils/pool');

class Book {
    id;
    img;
    rating;
    title;
    price;
    stock;

    constructor(row) {
      this.id = row.id;
      this.img = row.img; 
      this.rating = row.rating;
      this.title = row.title;
      this.price = row.price;
      this.stock = row.stock;
    }

    // --------------------------------------------------

    static async insert(book) {
      const { rows } = await pool.query(
        'INSERT INTO booksTable (img, rating, title, price, stock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [book.img, book.rating, book.title, book.price, book.stock]
      ); 
  
      return new Book(rows[0]);
    
    }
}

module.exports = Book;     
