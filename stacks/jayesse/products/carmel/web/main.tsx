import { Web } from 'jayesse'
import config from '../.carmel.json'
import * as chunks from './chunks'

Web.renderApp({
    ...config,
    chunks
})