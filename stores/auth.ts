import { makeObservable, observable, action, runInAction } from "mobx";
import * as SecureStore from "expo-secure-store";

interface Token {
    access: string;
    refresh: string;
}

class AuthStore {
    token: Token | null = null;

    constructor() {
        makeObservable(this, {
            token: observable,
            setToken: action,
            removeToken: action,
            isAuthenticated: observable
        });
    }

    async setup() {
        const tokenRaw = await SecureStore.getItemAsync("token")
        runInAction(() => {
            this.token = JSON.parse(tokenRaw || "") || null
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

export default new AuthStore();