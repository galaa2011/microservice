require('seneca')()
  .use('form-data')
  .use('basic')
  .use('entity')
  .use('mongo-store', {
    name: 'd2',
    host: '10.79.96.22',
    port: 27077,
    username: 'd2',
    password: 'userford2',
    options: {}
  })
  .listen({ type: 'tcp', pin: 'role:form', port: 1234 })
