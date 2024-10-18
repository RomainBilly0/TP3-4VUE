import { createRouter, createWebHistory } from 'vue-router';
import BaseLayout from "@/components/BaseLayout.vue";
import ConversationIndexPage from "@/pages/ConversationIndexPage.vue";
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
            const isLoggedIn = store.state.user !== null; // Replace with your actual authentication check

            if (!isLoggedIn) {
                // Redirect to home if not logged in
                next('/');
            } else {
                // Allow access to the route
                next();
            }
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
