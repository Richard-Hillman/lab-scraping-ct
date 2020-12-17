const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

const req = async() => {
  const response = await fetch('http://books.toscrape.com/');
  const html = await response.text();
  const DOM = new JSDOM(html);

  return DOM.window.document;
};

module.exports = req;
