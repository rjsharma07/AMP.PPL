export interface Location {
    locationId: number;
    locationName: string;

}

export interface Products {
    productName: string,
    productId: number,
}

export interface Specialization {
    specializationName: string,
    specializationId: number,
}

export interface Result {
    logo: string,
    name: string,
    title: string,
    description: string,
    location: string,
    url: string,
    tags: Array<any>,
    isFavourite: boolean,
    isBookmarked: boolean,
    isActive: boolean
}