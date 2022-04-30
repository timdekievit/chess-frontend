 import { makeAutoObservable, runInAction } from "mobx";
import { User, UserFormValues } from "../models/user";

export default class UserStore {
    user: User | null = null

    constructor() {
        makeAutoObservable(this)
    }

    get isLoggedIn() {
        return !!this.user;
    }

    login = async (creds: UserFormValues) => {
        try {

            console.log(creds);
            // const user = await agent.Account.login(creds);
            // store.commonStore.setToken(user.token);
            // runInAction(() => this.user = user)
            // history.push('/activities');
            // store.modalStore.closeModal();l
        } catch (error) {
            throw error;
        }
    }




}