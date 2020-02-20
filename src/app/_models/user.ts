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
