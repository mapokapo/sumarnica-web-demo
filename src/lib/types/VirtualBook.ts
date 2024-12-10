export interface VirtualBook {
  isbn: string;
  title: string;
  summary: string;
  authorName: string;
  authorId: string;
  digitalizedContent: {
    pdfUrl: string;
    pageCount: number;
    digitalizedByUserName: string;
    digitalizedByUserId: string;
    digitalizedAt: Date;
  } | null;
}
