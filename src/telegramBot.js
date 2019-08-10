const request = require('request')

const chat_id = process.env.CHAT_ID
const bot_id = process.env.BOT_ID

let msg = 'Hello from Mars'

let req = `https://api.telegram.org/bot${bot_id}/sendMessage?chat_id=${chat_id}&text=${msg}`

console.log(req)

let blocks

blocks = 1

if (blocks) {
  request(req, { json: true }, (err, res, body) => {
    if (err) { return console.log(err) }
  })
}