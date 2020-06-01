import path from 'path'
import {
    WebPacker,
    PackingEvent,
    PackingOptions
} from 'papanache'

export default async (props: any) => {
  const dir = path.resolve(__dirname, '../../../..')
  const name = "carmel"
  const port = 9999
  const stack = "jayesse"
  const watch = true

  const options = Object.assign({}, {
    port,
    watch,
    stack,
    dir,
    name
  }, props) as PackingOptions

  const packer = new WebPacker(options)

  const handler = (event: PackingEvent) => {
      console.log(event)
  }

  return packer.pack(handler)
}