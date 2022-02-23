require('dotenv').config()
const express = require('express') // с помощью require импортируем модуль express
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandleMiddleware')

const PORT = process.env.PORT || 5000

const app = express() // создаем объект вызвав функцию express, с него и будет начинаться выполнение приложения
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorHandler)



const start = async () => {
  try {
      await sequelize.authenticate()
      await sequelize.sync()
      app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
      console.log(e)
  }
}


start()