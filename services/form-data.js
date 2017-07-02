module.exports = function formData (options) {
  this.add({role: 'form', cmd: 'list'}, (msg, respond) => {
    let query = msg.query
    this.make('FormDoc').list$({_id: +(query.id)}, (err, data) => {
      respond(null, {status: 200, data: {list: data}})
    })
  })
}
