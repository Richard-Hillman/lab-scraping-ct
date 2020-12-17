const parse = document => {
  const bookProps = [...document.querySelector('.product_pod')];

  return bookProps.map(book => {
    const img = book.querySelector('.image_container img').getAttribute('src');
    const stars = book.querySelector('.product_pod p').classList.item(1);
    const title = book.querySelector('.product_pod h3 > a').getAttribute('title');
    const price = book.querySelector('.product_pod div > p').textcontent;
    const stock = book.querySelector('.instock .availability').textContent(Boolean);

    return {
      img,
      stars,
      title,
      price,
      stock
    };
  });
};

module.exports =  parse;
