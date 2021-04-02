import { Router } from 'express'
import PdfController from './controllers/PdfController'

const routes = Router()

routes.get('/', PdfController.index)

routes.post('/', PdfController.generate)

export { routes }
