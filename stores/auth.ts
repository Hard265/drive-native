import { makeObservable, observable, action, runInAction, computed } from "mobx";
import * as SecureStore from "expo-secure-store";

interface Token {
    access: string;
    refresh: string;
}

class AuthStore {
    isLoading: boolean = false;
    token: Token | null = null;

    constructor() {
        makeObservable(this, {
            token: observable,
            isLoading: observable,
            isAuthenticated: computed,
            setToken: action,
            removeToken: action,
        });
    }

    async setup() {
        runInAction(()=>{
            this.isLoading = true
        })
        const tokenRaw = await SecureStore.getItemAsync("token")
        runInAction(() => {
            this.token = JSON.parse(tokenRaw || "") || null
            this.isLoading = false
        })
    }

    async setToken(token: Token) {
        runInAction(() => {
            this.token = token;
        })
        await SecureStore.setItemAsync("token", JSON.stringify(token))
    }

    async removeToken() {
        runInAction(() => {
            this.token = null;
        })
        await SecureStore.deleteItemAsync("token")

    }

    get isAuthenticated(): boolean {
        return this.token !== null;
    }
}

const authStore = new AuthStore();
export default authStore;
