import DS from 'ember-data';
import ENV from 'ec-new/config/environment';

var adapter = null;
if (ENV.environment === 'test') {
  adapter =  DS.RESTAdapter.extend({
    host: "http://u2u-api.local:6200",
    namespace: "api/v1"
  });
}
if (ENV.environment === 'development') {
  adapter =  DS.RESTAdapter.extend({
    host: "http://u2u-api.local:5000",
    namespace: "api/v1"
  });
}
export default adapter;
