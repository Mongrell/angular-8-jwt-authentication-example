export class Advert{
    Id: number;
    UserId: number;
    Headline: string;
    Province: string;
    City: string;
    Details: string;
    Price: number;
    State: string;
}

export const TestAdverts: Advert[] = [
    {
        Id: 1,
        UserId: 1,
        Headline: "Some amazing headline right here",
        Province: 'Free State',
        City: 'Bloemfontein',
        Details: 'Nice and big house',
        Price: 1000000,
        State: 'HIDE'
    },
   {
        Id: 2,
        UserId: 1,
        Headline: "Another amazing headline right here",
        Province: 'Free State',
        City: 'Bloemfontein',
        Details: 'Nice and small house',
        Price: 100000,
        State: 'LIVE'
    }
]