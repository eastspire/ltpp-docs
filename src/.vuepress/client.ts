import { defineClientConfig } from 'vuepress/client';
import Bottom from '../../component/bottom.vue';
import Appreciate from '../../component/appreciate.vue';

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component('Bottom', Bottom);
    app.component('Appreciate', Appreciate);
  },
});
