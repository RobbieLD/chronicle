interface PrimeEvent {
    originalEvent: Event
}

export interface AutoCompleteEventSelectedEvent<T> extends PrimeEvent {
    value: T
}
export default interface AutoCompleteEvent extends PrimeEvent {
    query: string
}

