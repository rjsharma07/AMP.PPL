export class Organization {
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

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.aboutUs = data.aboutUs;
    this.currency = data.currency;
    this.thumbnail = data.thumbnail;
    this.websiteUrl = data.websiteUrl;
    this.createdBy = data.createdBy;
    this.createdOn = new Date(data.createdOn);
    this.updatedOn = new Date(data.updatedOn);
    this.address = data.address;
    this.contact = data.contact;
    this.socialMedia = data.socialMedia;
    this.userRatingAndFavouriteCount = data.userRatingAndFavouriteCount;
    this.userRatingAndFavourite = data.userRatingAndFavourite;
    this.supplier = data.supplier;
    this.partnershipCount = data.partnershipCount;
    this.partnership = data.partnership;
    this.category = data.category;
  }
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
