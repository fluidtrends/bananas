/* eslint-disable no-unused-expressions */

const savor = require('savor')
const npm = require('libnpm')
const { Archive, File } = require('rara')
const fs = require('fs-extra')
const path = require('path')

savor.

add('should load the default template', (context, done) => {
    savor.addAsset('../templates', 'bananas/1/templates', context)
    const stub = context.stub(npm, 'extract').callsFake(() => Promise.resolve({ version: '1' }))
    const stub2 = context.stub(npm, 'manifest').callsFake(() => Promise.resolve({ version: '1' }))

    const archive = new Archive({ dir: context.dir, id: 'bananas' })

    savor.promiseShouldSucceed(archive.load(), done, (data) => {
        context.expect(data).to.exist
        stub.restore()
        stub2.restore()
    })
}).

run('[Bananas] Templates')
