module.exports = function(app) {
  var express = require('express');
  var itemsRouter = express.Router();

  itemsRouter.get('/', function(req, res) {
    res.send({
      'items': [{
        id: 1,
        name: 'rear differential'
      },
      {
        id: 2,
        name: 'front strut'
      }]
    });
  });

  itemsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  itemsRouter.get('/:id', function(req, res) {
    res.send({
      'items': {
        id: req.params.id,
        name: 'shorts'
      }
    });
  });

  itemsRouter.put('/:id', function(req, res) {
    res.send({
      'items': {
        id: req.params.id
      }
    });
  });

  itemsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/v1/items', itemsRouter);
};
