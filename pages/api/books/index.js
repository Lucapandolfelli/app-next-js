import { books } from "../../../data";

export default function handle(req, res) {
  switch (req.method) {
    case "GET":
      getBooks(req, res);
      break;
    case "POST":
      createBook(req, res);
      break;
  }
}

const getBooks = (req, res) => {
  res.status(200).send(books);
};

const createBook = (req, res) => {
  const { body } = req;
  books.push(body);
  res.status(201).send({ newProduct: body });
};
