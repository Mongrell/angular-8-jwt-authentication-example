export class User {
    id: number;
    email: string;
    forenames: string;
    lastName: string;
    jwtViewModel?: JwtViewModel;
}

export class JwtViewModel {
  token: string;
  expiration: Date;
}

export interface IUserRegistraion{
  Forenames: string;
  Surname: string;
  Username: string;
  Password: string;
  ConfirmPassword: string;
}

export interface IUserUpdate{
  Forename: string;
  Lastname: string;
  Username: string;
  Password: string;
  newPassword: string;
}
