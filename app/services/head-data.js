import Service, { inject as service } from '@ember/service';
import { computed, set, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import { getOwner } from '@ember/application';

export default Service.extend({

  routing: service('-routing'),

  routeName: alias('routing.currentRouteName'),

  msg: computed('routeName', function() {
    let route = getOwner(this).lookup(`route:${this.routeName}`);
    return get(route, 'currentModel.msg');
  })

});
