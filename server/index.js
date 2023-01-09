const app = require('../index');
const databaseConnect = require('../database');
(async function () {
  try {

  const PORT = process.env.PORT;
  const DATA_BASE_URL  = process.env.DATA_BASE_URL;

  if (!PORT) {
    throw new Error('process.env.PORT  required  ');
  }

  if (!DATA_BASE_URL) {
    throw new Error('process.env.DATA_BASE_URL  required  ');
  }
    console.log(`await database connect `)

    await databaseConnect( DATA_BASE_URL )

    console.log(`success database connect `)

    console.log(`await create server `)
    app.listen(PORT);
    console.log(`success server created on port: ${PORT}`)
  }

  catch (err) {
    console.log(err)
  }

}())



