
export class Category {
    id: number;

    name: string;

    constructor (transaction?: Partial<Category>) {
        if (transaction) {
            Object.assign(this, transaction);
        }
    }
}