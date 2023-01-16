import Item from "./Item";
import User from "./User";

export default class Transaction {
    id: number;

    owner: User;

    requester: User;

    ownerItems: Item[];

    requesterItems: Item[];

    status: string;

    constructor (transaction?: Partial<Transaction>) {
        if (transaction) {
            Object.assign(this, transaction);
        }
    }
}