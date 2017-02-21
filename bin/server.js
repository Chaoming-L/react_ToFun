const config = require('../config/lib/env.config')
const server = require('../server/app')
const debug = require('debug')('app:bin:server')
const port = config.server_port

server.listen(port)
debug(`服务正在运行 http://localhost:${port}.`)
