import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import FrontPage from './views/FrontPage.vue';
import CategoryPage from './views/CategoryPage.vue';
import SkateboardPage from './views/SkateboardPage.vue';
import DeckPage from './views/DeckPage.vue';

const routes = [
    { path: '/', component: FrontPage },
    { path: '/caps', component: CategoryPage, props: { category: 'Caps' } },
    { path: '/briller', component: CategoryPage, props: { category: 'Briller' } },
    { path: '/genser-jakke', component: CategoryPage, props: { category: 'Genser/Jakke' } },
    { path: '/t-skjorte', component: CategoryPage, props: { category: 'T-skjorte' } },
    { path: '/bukse', component: CategoryPage, props: { category: 'Bukse' } },
    { path: '/sko', component: CategoryPage, props: { category: 'Sko' } },
    { path: '/skateboard', component: SkateboardPage },
    { path: '/decks', component: DeckPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');