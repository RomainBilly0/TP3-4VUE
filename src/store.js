import { createStore } from 'vuex';

export default createStore({
    state: {
        user: null,
    },
    mutations: {
        setUser(state, newUser) {
            state.user = newUser;
        },
    },
    actions: {

    },
    getters: {
        user: (state) => state.user,
    },
});
