// File: start/routes.js
'use strict'

const Route = use('Route')

Route.group(() => {
  require('./routes/art')
  require('./routes/customer')
  require('./routes/exhibition')
  require('./routes/professional')
  Route.post('/signup', 'SignupController.create')
  Route.get('/signup', ({view}) => view.render('signup'))
  Route.get('/', ({view}) => view.render('home'))
})

