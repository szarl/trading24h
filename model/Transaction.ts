import Item from "./Item";

export default class Transaction {
    id: number;

    owner: string;

    requester: string;

    ownerItems: Item[];

    requesterItems: Item[];

    status: string;

    constructor (transaction?: Partial<Transaction>) {
        if (transaction) {
            Object.assign(this, transaction);
        }
    }
}