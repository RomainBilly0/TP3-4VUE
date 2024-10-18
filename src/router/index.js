import { createRouter, createWebHistory } from 'vue-router';
import BaseLayout from "@/components/BaseLayout.vue";
import ConversationIndexPage from "@/pages/ConversationIndexPage.vue";

const routes = [
    {
        path: '/',
        component: BaseLayout,
    },
    {
        path: '/conversations/',
        component: ConversationIndexPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
