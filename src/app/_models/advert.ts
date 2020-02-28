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
        Details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit, tellus eget congue lobortis, ipsum felis vehicula tellus, ut dictum nulla tortor vel augue. Nunc nibh lacus, tincidunt ut gravida eget, efficitur id libero. Praesent consectetur orci arcu, ut rhoncus nibh iaculis a. Fusce pharetra pulvinar dolor, et vulputate ligula convallis in. Fusce consectetur euismod tortor, et viverra turpis ultrices non. Aliquam id malesuada metus, in hendrerit enim. Fusce ac iaculis sapien. Morbi at nulla magna. Etiam aliquet sem nulla, at dapibus leo mollis a. Nam tempor arcu at sapien rhoncus porttitor. Mauris placerat odio nec purus tempus, a iaculis enim bibendum. Curabitur sit amet mattis orci, sit amet malesuada nunc. Proin enim odio, convallis sit amet tincidunt quis, porttitor at metus.',
        Price: 1000000,
        State: 'HIDE'
    },
   {
        Id: 2,
        UserId: 1,
        Headline: "Another amazing headline right here",
        Province: 'Free State',
        City: 'Bloemfontein',
        Details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit, tellus eget congue lobortis, ipsum felis vehicula tellus, ut dictum nulla tortor vel augue. Nunc nibh lacus, tincidunt ut gravida eget, efficitur id libero. Praesent consectetur orci arcu, ut rhoncus nibh iaculis a. Fusce pharetra pulvinar dolor, et vulputate ligula convallis in. Fusce consectetur euismod tortor, et viverra turpis ultrices non. Aliquam id malesuada metus, in hendrerit enim. Fusce ac iaculis sapien. Morbi at nulla magna. Etiam aliquet sem nulla, at dapibus leo mollis a. Nam tempor arcu at sapien rhoncus porttitor. Mauris placerat odio nec purus tempus, a iaculis enim bibendum. Curabitur sit amet mattis orci, sit amet malesuada nunc. Proin enim odio, convallis sit amet tincidunt quis, porttitor at metus.',
        Price: 100000,
        State: 'LIVE'
    }
]