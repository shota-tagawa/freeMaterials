require('dotenv').config()
module.exports = {
  distDir: '../.next',
  env: {
    ALGOLIA_ID: process.env.NEXT_PUBLIC_ALGOLIA_ID,
    ADMIN_API_KEY: process.env.NEXT_PUBLIC_ADMIN_API_KEY
  },
}
