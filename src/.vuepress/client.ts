import { defineClientConfig } from 'vuepress/client';
import Bottom from '../../component/bottom.vue';

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component('Bottom', Bottom);
  },
});
