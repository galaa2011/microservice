module.exports = function math(options) {

  this.add('role:math,cmd:sum', function sum(msg, respond) {
    let json
    this.make$('FormDoc').load$({_id: 2}, (err, data) => {
      json = data.json
      respond(null, { answer: msg.left + msg.right, json })
    });
  })

  this.add('role:math,cmd:product', function product(msg, respond) {
    respond(null, { answer: msg.left * msg.right })
  })

  this.wrap('role:math', function (msg, respond) {
    msg.left = Number(msg.left).valueOf()
    msg.right = Number(msg.right).valueOf()
    this.prior(msg, respond)
  })
}
