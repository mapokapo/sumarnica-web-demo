import VirtualBookCard from "@/components/virtual-book-card";
import { VirtualBook } from "@/lib/types/VirtualBook";
import React from "react";

const virtualBooks: VirtualBook[] = [
  {
    isbn: "978-953-0-12345-6",
    title: "Osnove Računalnih Znanosti",
    summary:
      "Detaljan uvod u temeljne koncepte računalnih znanosti i programiranja.",
    authorName: "Ivan Horvat",
    authorId: "author1",
    digitalizedContent: null,
  },
  {
    isbn: "978-953-0-67890-1",
    title: "Praktična Elektronika",
    summary:
      "Vodič kroz osnove elektronike s praktičnim primjerima i projektima.",
    authorName: "Marko Perić",
    authorId: "author2",
    digitalizedContent: {
      pdfUrl: "https://example.com/book2.pdf",
      pageCount: 300,
      digitalizedByUserId: "user123",
      digitalizedByUserName: "Ivana Ivić",
      digitalizedAt: new Date("2024-03-15"),
    },
  },
  {
    isbn: "978-0-321-14653-0",
    title: "Introduction to Algorithms",
    summary:
      "Comprehensive guide to algorithms, covering both theory and practice.",
    authorName: "Thomas H. Cormen",
    authorId: "author3",
    digitalizedContent: {
      pdfUrl: "https://example.com/book3.pdf",
      pageCount: 1292,
      digitalizedByUserId: "user124",
      digitalizedByUserName: "Pero Perić",
      digitalizedAt: new Date("2024-01-10"),
    },
  },
  {
    isbn: "978-953-0-54321-8",
    title: "Strojarske Osnove",
    summary:
      "Udžbenik koji pokriva osnove strojarstva s naglaskom na praktične primjene.",
    authorName: "Ana Kovač",
    authorId: "author4",
    digitalizedContent: null,
  },
  {
    isbn: "978-953-0-98765-4",
    title: "Elektromehanički Sistemi",
    summary:
      "Povezivanje teorije i prakse u projektiranju elektromehaničkih sustava.",
    authorName: "Petar Novak",
    authorId: "author5",
    digitalizedContent: {
      pdfUrl: "https://example.com/book5.pdf",
      pageCount: 450,
      digitalizedByUserId: "user125",
      digitalizedByUserName: "Maja Mijić",
      digitalizedAt: new Date("2023-12-05"),
    },
  },
  {
    isbn: "978-0-13-359414-0",
    title: "Computer Organization and Design",
    summary: "A deep dive into the inner workings of modern computer systems.",
    authorName: "David A. Patterson",
    authorId: "author6",
    digitalizedContent: null,
  },
  {
    isbn: "978-953-0-11111-7",
    title: "Ekonomski Aspekti Inženjeringa",
    summary: "Analiza ekonomskih aspekata i principa inženjerskih projekata.",
    authorName: "Marta Jurić",
    authorId: "author7",
    digitalizedContent: null,
  },
  {
    isbn: "978-953-0-65432-2",
    title: "Napredne Računalne Mreže",
    summary: "Razrada naprednih koncepata i tehnologija računalnih mreža.",
    authorName: "Luka Radić",
    authorId: "author8",
    digitalizedContent: {
      pdfUrl: "https://example.com/book8.pdf",
      pageCount: 380,
      digitalizedByUserId: "user126",
      digitalizedByUserName: "Ivan Ivić",
      digitalizedAt: new Date("2023-08-20"),
    },
  },
  {
    isbn: "978-1-59327-820-1",
    title: "The Art of Electronics",
    summary:
      "A definitive guide to modern electronics, combining theory and practice.",
    authorName: "Paul Horowitz",
    authorId: "author9",
    digitalizedContent: null,
  },
  {
    isbn: "978-953-0-77777-0",
    title: "Osnove Termodinamike",
    summary:
      "Pregled ključnih pojmova i primjena termodinamike u inženjeringu.",
    authorName: "Vanja Šarić",
    authorId: "author10",
    digitalizedContent: {
      pdfUrl: "https://example.com/book10.pdf",
      pageCount: 500,
      digitalizedByUserId: "user127",
      digitalizedByUserName: "Ivana Ivić",
      digitalizedAt: new Date("2024-05-10"),
    },
  },
];

const VirtualLibraryPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-16 bg-white bg-gradient-to-br from-white to-sum-blue/25">
      <section className="flex w-full flex-1 flex-col gap-4 p-4 py-16 pt-16 lg:w-5/6 2xl:w-4/6">
        <h1 className="text-center text-5xl font-bold text-sum-blue">
          Virtualna knjižnica
        </h1>
        <p className="text-center text-lg font-semibold text-sum-blue">
          Istražite sveučilišnu literaturu ili dajte doprinos virtualnoj
          knjižnici tako što registrirate knjige ili digitalizirate sadržaj.
        </p>
        <ul className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {virtualBooks.map(virtualBook => (
            <li
              key={virtualBook.isbn}
              className="flex w-full">
              <VirtualBookCard virtualBook={virtualBook} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default VirtualLibraryPage;
