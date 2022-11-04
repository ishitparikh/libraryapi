import { GoogleBooksMetadata } from "./google-books-metadata";

export interface GoogleBookInfo {
    id: string;
    volumeInfo: GoogleBooksMetadata;
}