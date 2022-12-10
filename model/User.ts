import Address from "./Address";

export default class User {
    id: number;

    name: string;

    surname: string;

    email: string;

    phoneNumber: string;

    password: string;

    created: Date;

    address: Address;

    constructor (user?: Partial<User>) {
        if (user) {
            Object.assign(this, user);
        }
    }
}