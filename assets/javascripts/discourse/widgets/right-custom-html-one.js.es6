import { createWidget } from 'discourse/widgets/widget';

export default createWidget('right-custom-html-one', {
  tagName: 'div.right-custom-html-one.widget-container',
  buildKey: () => 'right-custom-html-one',

  defaultState() {
    return {
      renderScheduled: false
    };
  },

  html(attrs, state) {
    console.log('right-custom-html-one');
    if (!state.renderScheduled) {
      let html = this.siteSettings.layouts_right_custom_html_one;

      const category = attrs.category;
      if (category && category.layouts_right_custom_html_one) {
        html = category.layouts_right_custom_html_one;
      }

      Ember.run.scheduleOnce('afterRender', this, function() {
        $("div.right-custom-html-one").html('');
        $("div.right-custom-html-one").append(`<div class='contents'>${html}</div>`);
      });
    //  state.renderScheduled = true;
    }
    return '';
  }
});
