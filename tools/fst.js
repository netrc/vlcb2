
// firestore get/set/dump/insert utility

const fadmin = require('../node_modules/firebase-admin')   // no transpiler yet

const keyFile = "./keys/vlcbt1-bd686-firebase-adminsdk-io18n-33541c7399.json"
// created from Settings/ServiceAccount page
// note - firebaseConfig apiKey/authDomain, dbURL are for firebase (web) APIs
// interesting(?) diff between f-admin API and f (web) API
//  f-admin: await db.collection(x).get()
//  f web: await firebase.firestore.collection(x)

const serviceAccount = require(keyFile)
const db = fadmin.initializeApp({
  credential: fadmin.credential.cert(serviceAccount),
  databaseURL: "https://vlcbt1-bd686.firebaseio.com"
}).firestore()

// simple one-line formatters
const strFormat = {}
strFormat.churches = d => {
  const dd = d.data()
  return `${d.id} => ${dd.name} year: ${dd.year}`
}

// just checks for empty first; use .docs to get array to map
const colRefMap = (cr, f) => (cr.empty) ? ['<empty>'] : cr.docs.map(f)

const getAll = async (db, colName) => {
  const colRef = await db.collection(colName).get() // has .forEach .docs  .empty
  const strList = colRefMap(colRef,strFormat[colName])
  console.log(strList.join('\n'))
}

getAll(db, 'churches')

