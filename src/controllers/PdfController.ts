import { Request, Response } from 'express'

import PfPrinter from 'pdfmake'
import docDefinition from '../utils/docDefinition'

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Bold.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-BoldItalic.ttf',
  },
}

const printer = new PfPrinter(fonts)

export default {
  index(req: Request, res: Response) {
    res.render('index')
  },

  generate(req: Request, res: Response) {
    const pdf = printer.createPdfKitDocument(docDefinition(req.body))

    res.header(
      'Content-disposition',
      'inline; filename=' + req.body.name + ' ' + req.body.surname + '.pdf',
    )
    res.header('Content-type', 'application/pdf')
    pdf.pipe(res)
    pdf.end()
  },
}
