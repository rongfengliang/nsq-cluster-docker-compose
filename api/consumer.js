const nsq = require('nsqjs')
 
const reader = new nsq.Reader('sample_topic', 'test_channel', {
  lookupdHTTPAddresses: ['127.0.0.1:4161','127.0.0.1:4261']
})
 
reader.connect()
 
reader.on('error',err => {
   console.log(JSON.stringify(err))
})
reader.on('message', msg => {
  console.log('Received message [%s]: %s', msg.id, msg.body.toString())
  msg.finish()
})