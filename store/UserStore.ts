import axios from 'axios';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { userService } from '~/mod/userService';
import Address from '~/model/Address';
import User from '~/model/User';
import { store } from './StoreHelper';


@Module({ dynamic: true, store: store.storeInstance, namespaced: true, name: 'User' })
class UserModule extends VuexModule {
    user: User = new User({address: new Address({})});

    get isLoggedIn(): boolean {
        return this.user.id !== undefined;
    }

    @Mutation
    setUser(user: User) {
        this.user = user;
    }

    @Action
    async register() {
        const currentUser = await userService.register(this.user);
        this.setUser(currentUser);
    }

    @Action
    async login() {
        // TODO: login user
        await axios.post('').then((response) => {
            this.setUser(response.data);
        })
        .catch((e) => {
            throw new Error(e)
        });
    }
}

export const userStore = getModule(UserModule, store.storeInstance);