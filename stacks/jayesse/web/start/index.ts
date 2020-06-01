import path from 'path'
import {
    WebPacker,
    PackingEvent,
    PackingOptions
} from 'papanache'

export default async (props: any) => {
  const productDir = process.cwd()
  const stackRoot = path.dirname(path.dirname(require.resolve('jayesse'))) 
  const srcDir = path.resolve(stackRoot)
  const targetDir = path.resolve(productDir, '.carmel')
  const port = 9999
  const watch = true

  const options = {
    srcDir,
    port,
    watch,
    targetDir
  } as PackingOptions

    const packer = new WebPacker(options)

    const handler = (event: PackingEvent) => {
        console.log(event)
    }

  return packer.pack(handler)
}