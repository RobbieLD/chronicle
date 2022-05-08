interface Links {
    download: string
}

interface Location {
    city?: string,
    country?: string,
    name?: string,
    title?: string
}

export default interface RandomImage {
    links: Links,
    description: string,
    location: Location
}
