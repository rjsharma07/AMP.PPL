export class Organization {
  error: string;
  response: Response[];
}

export class Response {
  id: string;
  name: string;
  aboutUs: string;
  currency: string;
  thumbnail: string;
  websiteUrl: string;
  createdBy: string;
  createdOn: Date;
  updatedOn: Date;
  address: Address;
  contact: Contact;
  socialMedia: SocialMedia;
  userRatingAndFavouriteCount: number;
  userRatingAndFavourite: UserRatingAndFavourite[];
  supplier: Supplier;
  partnershipCount: number;
  partnership: Partnership[];
  category: Category[];
  avgrating: number;
}

export class Address {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

export class Contact {
  fax: string;
  email: string;
  telephone: string;
}

export class SocialMedia {
  linkedin: string;
  facebook: string;
  twitter: string;
}

export class UserRatingAndFavourite {
  userId: string;
  rating: number;
  favourite: boolean;
}

export class Supplier {
  isSupplier: boolean;
  supplierType: string;
}

export class Partnership {
  companyId: string;
  partnerType: string;
  partnerLevel: string;
}

export class Category {
  specializations: string[];
  products: string[];
  services: string[];
}
