import path from 'path'
import {
    WebPacker,
    PackingEvent,
    PackingOptions
} from 'papanache'

export default async (productName: string = "carmel") => {
  const contextDir = path.resolve(__dirname, '../../../..')
  const stackDir = path.resolve(contextDir, 'node_modules', 'jayesse')
  const productsDir = path.resolve(contextDir, 'stacks', 'jayesse', 'products')  
  const productDir = path.resolve(productsDir, productName)
 
  const options = {
    watch: true,
    port: 9999,
    templateFile: path.resolve(stackDir, 'assets', 'web', 'page.ejs'),
    destDir: path.resolve(productDir, '.web'),
    entryFile: path.resolve(productDir, 'web', 'main.tsx'),
    stackDir,
    contextDir
  } as PackingOptions

  const packer = new WebPacker(options)

  const handler = (event: PackingEvent) => {
      console.log(event)
  }

  return packer.pack(handler)
}