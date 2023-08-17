export interface IUser {
  role: string,
  photo: string,
  fullName: IFullName,
  phoneNumber: string,
  email: string,
  psw: string,
  // socialLink?: string,
  // newPsw?: string,
  // rptNewPsw?: string,
  id?: string,

}
export  interface IEmployee extends IUser {
  resume?: IResume,
  rating?: string,
}

export  interface IOrganization {
  role: string,
  photo?: string,
  nameMainOrg: string,
  contactMainOrg: IContactOrg
  psw: string,
  // socialLink?: string,
  // newPsw?: string,
  // rptNewPsw?: string,
  id?: string,
  rating?: string

  // contactAddOrg?: IContactOrg, нужно создавать организацию доп филиала хранить ее как новый садик, но связывать ее по id с главным зданием
}

export interface IFullName {
  name: string,
  patronymic?: string,
  surname: string,
}
export interface IContactOrg {
  phoneNumber: string,
  email: string,
  address: IAddressOrg ,
  director: {
    jobTitle: string,
    fullName: IFullName
  },
}

export interface IAddressOrg {
  index: string,
  region: string,
  district: string,
  city: string,
  street: string,
  building: number,
  type?: any
}

export interface IResume {
jobTitle: string,
// experience: string,
// skill: string
// сделать интерфейс резюме, где подробно раздробить все пункты
}
