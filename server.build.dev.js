const dotenv = require('dotenv')
const cli = require('next/dist/cli/next-build')

dotenv.config()

process.env.HOSTNAME = process.env.HOSTNAME || 'localhost'
process.env.PORT = process.env.PORT || '3000'
process.env.NEXT_PUBLIC_BASICS_API = 'https://api.ofdb.io/v0'
process.env.NEXT_PUBLIC_SELF_API = `http://${process.env.HOSTNAME}:${process.env.PORT}/api/v0`
process.env.DB_NAME = 'kartevonmorgen.development.sqlite'


cli.nextBuild()
