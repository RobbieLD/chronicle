export interface Continue {
    sroffset: number;
    continue: string;
}

export interface Searchinfo {
    totalhits: number;
}

export interface Search {
    ns: number;
    title: string;
    pageid: number;
    size: number;
    wordcount: number;
    snippet: string;
    timestamp: Date;
}

export interface Query {
    searchinfo: Searchinfo;
    search: Search[];
}

export default interface MusicalSearchResult {
    batchcomplete: string;
    continue: Continue;
    query: Query;
}

export default class MusicalSuggestion {
    public title: string
    public description: string
    constructor(result: Search) {
        this.title = result.title
        this.description = result.snippet
    }
}
