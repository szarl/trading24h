import axios from "axios";
import Item from "~/model/Item";
import { instanceToPlain } from 'class-transformer';


export const itemService = new class ItemService {

    async addItem(item: Item): Promise<Item> {
        const data = instanceToPlain(item);
        return axios.post('http://localhost:8080/item/add', data).then(response => new Item(response.data));
    }

    async getAllItems(id: number): Promise<Item[]> {
        const url = `http://localhost:8080/item/getAll/${id}`;
        return axios.get(url).then(response => response.data.map(item => new Item(item)));
    }

}()