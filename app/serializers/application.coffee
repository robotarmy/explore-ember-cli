`import DS from 'ember-data'`

ApplicationSerializer = DS.RESTSerializer.extend
  normalize: (type, hash, prop) ->
    console.log('normalize')
    console.log(type)
    console.log(hash)
    console.log(prop)
    hash

`export default ApplicationSerializer`
