import 'reflect-metadata';
import { userService } from '~/mod/userService';

export default async () => {
    const { userStore } = await import('@/store/UserStore');
    if (!userStore.isLoggedIn) {
        const user = await userService.getUserFromSession();
        if (user) {
            userStore.setUser(user);
        }

    }
};
