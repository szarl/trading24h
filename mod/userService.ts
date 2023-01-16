import axios from "axios";
import User from "~/model/User";


export const userService = new class UserService {

    async getUserFromSession(): Promise<User> {
        // TODO: return user from session - controller
        return null;
    }

    async register(user: User): Promise<User> {
        return axios.post('http://localhost:8080/user/add', user).then(response => response.data).catch(e => new Error(e));
    }

}()