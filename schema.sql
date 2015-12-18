-- drop table if exists books;
-- drop table if exists borrowings;

create table IF NOT EXISTS books (
  id integer primary key autoincrement,
  title string not null,
  description string,
  authors string,
  publisher string,
  publisherDate string,
  ISBN integer,
  thumbnail string,
  webReaderLink string,
  borrower string,
  borrowerGr string
);

create table IF NOT EXISTS borrowings (
  id integer primary key autoincrement,
  borrower string not null,
  borrowerGr string not null,
  date string not null,
  title string not null,
  action string not null
);