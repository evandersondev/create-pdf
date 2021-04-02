import express from 'express'
import { resolve } from 'path'
import { routes } from './routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(resolve(__dirname, '..', 'public')))

app.set('view engine', 'ejs')
app.set('views', resolve(__dirname, 'views'))

app.use(routes)

app.listen(3000, () => console.log('running in http://localhost:3000'))
