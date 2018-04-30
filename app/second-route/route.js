import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      msg: 'Saludos desde la Segunda ruta'
    }
  }
});
