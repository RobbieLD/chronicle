interface PrimeEvent {
    originalEvent: Event
}

export default interface AutoCompleteEvent extends PrimeEvent {
    query: string
}
