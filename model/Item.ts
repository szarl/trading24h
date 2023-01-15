
export default class Item {
    id: number;

    ownerId: number;

    title: string;

    amount: string;

    price: string;

    picture: string;

    description: string;

    constructor (item?: Partial<Item>) {
        if (item) {
            Object.assign(this, item);
        }
    }
}