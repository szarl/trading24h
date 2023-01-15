import User from "~/model/User";


export const userService = new class UserService {

    async getUserFromSession(): Promise<User> {
        // TODO: return user from session - controller
        return null;
    }

}()