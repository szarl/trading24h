import { Category } from "./Category";
import User from "./User";

export default class Item {
    id: number;

    owner: User;

    name: string;

    amount: string;

    price: string;

    description: string;

    addedDate: Date = new Date();

    imageUrl: string;

    category: Category;

    constructor (item?: Partial<Item>) {
        if (item) {
            Object.assign(this, item);
        }
    }
}