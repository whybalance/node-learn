(async () => {
  const {MongoClient} = require('mongodb')
  // 创建客户端
  const client = new MongoClient(
    'mongodb://localhost:27017',
    {
      useNewUrlParser: true
    }
  )

  let ret
  // 创建连接
  ret = await client.connect()
  console.log('ret', JSON.parse(ret))

  const db = client.db('test')
  const fruits = db.collection('fruit')

  ret = await fruits.insertOne({
    name: '芒果',
    price: 20.1
  })
})()