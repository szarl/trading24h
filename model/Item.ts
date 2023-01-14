
export default class Item {
    id: number;

    ownerId: string;

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