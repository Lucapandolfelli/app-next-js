import { books } from "../../../data";

export default function handle(req, res) {
  switch (req.method) {
    case "GET":
      getBookById(req, res);
      break;
    case "DELETE":
      deleteBookById(req, res);
      break;
  }
}

const getBookById = (req, res) => {
  const {
    query: { id },
  } = req;
  const book = books.find((book) => book.id === parseInt(id));
  if (!book) {
    res.status(404).send({ message: `Book with id:${id} not found.` });
  }
  res.status(200).send(book);
};

const deleteBookById = (req, res) => {
  const {
    query: { id },
  } = req;
  const book = books.find((book) => book.id === parseInt(id));
  if (!book) {
    res.status(404).send({ message: `Book with id:${id} not found.` });
  }
  books = books.filter((book) => book.id !== parseInt(id));
  res.status(200).send({ message: `Book with id:${id} deleted.` });
};
