// ******* next.js ******
const { join } = require('path')
const { https } = require('firebase-functions')
const { default: next } = require('next')

const nextjsDistDir = join('src', require('./src/next.config.js').distDir)

const nextjsServer = next({
  dev: false,
  conf: {
    distDir: nextjsDistDir,
  },
})
const nextjsHandle = nextjsServer.getRequestHandler()

exports.nextjsFunc = https.onRequest((req, res) => {
  return nextjsServer.prepare().then(() => nextjsHandle(req, res))
})

// ****** algolia ******
const functions = require("firebase-functions");
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)
const algoliasearch = require("algoliasearch")
const ALGOLIA_ID = functions.config().algolia.app_id
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key
const ALGOLIA_SEARCH_KEY = functions.config().algolia.search_key
const ALGOLIA_INDEX_NAME = "freeMaterials"
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY)
const index = client.initIndex(ALGOLIA_INDEX_NAME)

// 新規投稿
exports.onPostCreated = functions.firestore.document('posts/{id}').onCreate((snap, context) => {
  const data = snap.data()
  data.objectID = context.params.id;
  return index.saveObject(data)
})

// 削除
exports.onPostDeleted = functions.firestore.document('posts/{id}').onDelete((snap, context) => {
  index.deleteObject(snap.id);
});

// 編集
exports.onPostUpdated = functions.firestore.document('posts/{id}').onUpdate((snap, context) => {
  const objectID = snap.after.id;
  const newData = snap.after.data();

  return index.saveObject({
    objectID,
    ...newData,
  })
})