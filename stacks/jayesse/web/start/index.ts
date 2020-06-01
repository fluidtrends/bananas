import path from 'path'
import {
    WebPacker,
    PackingEvent,
    PackingOptions
} from 'papanache'

export default async (props: any) => {
  const bundleDir = path.resolve(__dirname, '../../../..')
  const stackDir = path.resolve(bundleDir, 'node_modules', 'jayesse')
  const productsDir = path.resolve(stackDir, 'products')

  const productDir = process.cwd()// path.resolve(productsDir, props.name)
 
  const options = Object.assign({}, {
    watch: true,
    port: 9999,
    templateFile: path.resolve(stackDir, 'assets', 'web', 'page.ejs'),
    destDir: path.resolve(productDir, '.web'),
    entryFile: path.resolve(stackDir, 'web', 'main.tsx'),
    stackDir,
    contextDir: path.resolve(productDir)
  }, props) as PackingOptions

  const packer = new WebPacker(options)

  const handler = (event: PackingEvent) => {
      console.log(event)
  }

  return packer.pack(handler)
}