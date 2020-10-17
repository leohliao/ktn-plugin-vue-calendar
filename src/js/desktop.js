import Vue from 'vue';
import App from './components/desktop/App.vue';

((PLUGIN_ID) => {

  kintone.events.on('app.record.index.show', (e) => {
    new Vue({
      el: '#custom-calendar',
      render: h => h(App),
    });
  });

})(kintone.$PLUGIN_ID);
