export interface Thumbnail {
    source: string;
    width: number;
    height: number;
}

export interface Page {
    pageid: number;
    ns: number;
    title: string;
    thumbnail: Thumbnail;
    pageimage: string;
}

export interface Query {
    pages: Record<string, Page>;
}

export default interface MusicalPoster {
    query: Query;
}
