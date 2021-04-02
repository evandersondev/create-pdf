import { IDocDefinition } from '../types/main'
import { TDocumentDefinitions } from 'pdfmake/interfaces'

export default function docDefinition({
  name,
  surname,
  email,
  phone,
  message,
}: IDocDefinition): TDocumentDefinitions {
  return {
    content: [
      { text: 'PDF CREATED', style: 'title' },
      {
        table: {
          widths: [100, '*'],
          body: [
            [
              { text: 'Name', style: 'header' },
              { text: name, style: 'result' },
            ],
          ],
        },
      },
      {
        table: {
          widths: [100, '*'],
          body: [
            [
              { text: 'Surname', style: 'header' },
              { text: surname, style: 'result' },
            ],
          ],
        },
      },
      {
        table: {
          widths: [100, '*'],
          body: [
            [
              { text: 'E-mail', style: 'header' },
              { text: email, style: 'result' },
            ],
          ],
        },
      },
      {
        table: {
          widths: [100, '*'],
          body: [
            [
              { text: 'Phone', style: 'header' },
              { text: phone, style: 'result' },
            ],
          ],
        },
      },
      {
        table: {
          widths: [100, '*'],
          body: [
            [
              { text: 'Message', style: 'header' },
              { text: message, style: 'result' },
            ],
          ],
        },
      },
    ],
    styles: {
      title: {
        fontSize: 38,
        bold: true,
        alignment: 'center',
        lineHeight: 2,
      },
      header: {
        fontSize: 16,
        bold: true,
      },
      result: {
        fontSize: 16,
      },
    },
  }
}
