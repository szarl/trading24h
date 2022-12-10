
export default class Address {
    id: number;

    city: string;

    country: string;

    street: string;

    houseNumber: number;

    flatNumber: number;

    zipCode: string;

    constructor (address: Partial<Address>) {
        if (address) {
            Object.assign(this, address);
        }
    }
}