/* eslint-disable no-unused-expressions */

const savor = require('savor')
const npm = require('libnpm')
const { Archive, File } = require('rara')
const Template = require('../../templates/default')

savor.

add('should load the main file', (context, done) => {
    const template = new Template({ test: "test1234" })

    context.expect(template.props.test).to.equal("test1234")
    context.expect(template.files.length).to.equal(4)

    done()
}).

add('should load the default template', (context, done) => {
    savor.addAsset('../templates', 'bananas/1/templates', context)
    const stub = context.stub(npm, 'extract').callsFake(() => Promise.resolve({ version: '1' }))
    const stub2 = context.stub(npm, 'manifest').callsFake(() => Promise.resolve({ version: '1' }))

    const archive = new Archive({ dir: context.dir, id: 'bananas' })

    savor.promiseShouldSucceed(archive.load(), done, (data) => {
        console.log(archive.files)
        context.expect(data).to.exist
        stub.restore()
        stub2.restore()
    })
}).

run('[Bananas] Templates')
