export interface geoLoc {
  lat: string
  lng: string
}
export interface userAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: geoLoc
}

export interface userCompany {
  name: string
  catchPhrase: string
  bs: string
}

export interface JsonPlaceUserTypes {
  id: number
  name: string
  username: string
  email: string
  address: userAddress
  phone: string
  website: string
  company: userCompany
}
