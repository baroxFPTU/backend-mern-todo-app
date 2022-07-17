import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

const app = express()

app.use(cors())
app.use(helmet())

app.get('/', (req, res) => {
  res.json({
    message: 'Hello'
  })
})

const PORT = process.env.PORT || 4000
const HOSTNAME = 'localhost'
app.listen(PORT, HOSTNAME, () => console.log(`Server is running at ${HOSTNAME + ':' + PORT}`))

