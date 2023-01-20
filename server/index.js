import app from '../index.js'

import mongoose from 'mongoose'

import initSwaggerDocumentation from '../swagger/index.js'


(async function () {
  try {

  const PORT = process.env.PORT;
  const DATA_BASE_URL  = process.env.DATA_BASE_URL;


  if (!DATA_BASE_URL) {
    throw new Error('process.env.DATA_BASE_URL  required ');
  }
    console.log(`database connect : loading...`)

    mongoose.set('strictQuery', false);
    await mongoose.connect(DATA_BASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

    console.log(`database connect : success `)

    if (!PORT) {
      throw new Error('process.env.PORT  required ');
    }

    await initSwaggerDocumentation(app,`http:/localhost:${PORT}`)

    console.log(`create server : loading...`)
    app.listen(PORT);

    console.log(`create server : success`)
  }

  catch (err) {
    console.log(err)
  }

}())



