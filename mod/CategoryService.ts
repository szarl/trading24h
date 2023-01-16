import axios from "axios";
import { Category } from "~/model/Category";


export const categoryService = new class CategoryService {

    async getAll(): Promise<Category[]> {
        return axios.get('http://localhost:8080/category').then(response => response.data.map(category => new Category(category)));
    }

}()