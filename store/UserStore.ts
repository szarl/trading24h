import axios from 'axios';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
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
        // TODO: register user
        await axios.post('').then((response) => {
                this.user.id = response.data.id;
            })
            .catch((e) => {
                throw new Error(e)
            });
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