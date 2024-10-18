import { createRouter, createWebHistory } from 'vue-router';
import BaseLayout from "@/components/BaseLayout.vue";
import ConversationIndexPage from "@/pages/ConversationIndexPage.vue";
import ConversationShowPage from "@/pages/ConversationShowPage.vue";
import store from '../store';

const routes = [
    {
        path: '/',
        component: BaseLayout,
    },
    {
        path: '/conversations/',
        component: ConversationIndexPage,
        beforeEnter: (to, from, next) => {
            const isLoggedIn = store.state.user !== null;

            if (!isLoggedIn) {
                next('/');
            } else {
                next();
            }
        }
    },
    {
        path: '/conversation/:id',
        name: 'ConversationShow',
        component: ConversationShowPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
