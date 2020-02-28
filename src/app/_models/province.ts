import { City, Cities } from './city';
export class Province{
    id: number;
    name: string;
    cities: City[];
}

export const Provinces: Province[] = [
    {
        id: 1,
        name: "Free State",
        cities: Cities
    },
    {
        id: 2,
        name: "Western Province",
        cities: Cities
    }
]