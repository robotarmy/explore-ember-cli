`import Ember from "ember"`
#
#  let({item:[{name:'bike tire'},{name:'bike rim'}]
#
factory = (->
  Ember.Test.registerAsyncHelper('factory_let', (app, factory_json) ->
    console.log(factory_json)
    # Talk to u2u-api-factory-loader /let
    Ember.$.ajax("http://u2u.local:6200/factories/let",
        data: JSON.stringify({factories: factory_json})
        processData:false
        contentType:'application/json'
        type: 'POST'
        complete: ->
          Ember.run(app, app.advanceReadiness)
    )
  )

# hodod

  Ember.Test.registerAsyncHelper('factory_clear',(app) ->
    # talk to u2u-api-factory-loader /let_clear
    Ember.$.ajax("http://u2u.local:6200/factories/clear",
      contentType:'application/json'
      type: 'POST'
      complete: ->
        Ember.run(app, app.advanceReadiness)
    )
  )
)()
`export default factory`
