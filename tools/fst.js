#!/usr/bin/env node

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
strFormat.users = d => {
  const dd = d.data()
  return `${d.id} user's roles => ${dd.roles}`
}

// just checks for empty first; use .docs to get array to map
const colRefNormalize = cr => (cr.empty) ? ['<empty>'] : cr.docs
const colRefMap = (cr, f) => colRefNormalize(cr).map(f)

makeDataObj = cr => {
  const dataObj = {}
  colRefNormalize(cr).forEach( d => {
    dataObj[d.id] = d.data()
  })
  return dataObj
}


const colToString = async (db, colName) => {
  const colRef = await db.collection(colName).get() // has .forEach .docs  .empty
  const strList = colRefMap(colRef,strFormat[colName])
  console.log(strList.join('\n'))
}

const colToJSON = async (db, colName) => {
  const colRef = await db.collection(colName).get() // has .forEach .docs  .empty
  const dumpObj = makeDataObj(colRef)
  console.log(JSON.stringify(dumpObj))
}

const availColls = [ 'churches', 'users' ]
let doFunc = colToString
if (process.argv[2][0] == '-') { 
  doFunc = (process.argv[2] == '-dump') ?  colToJSON : doFunc
  process.argv.splice(2,1)
console.dir(process.argv)
}
arg2 = (process.argv.length == 3) ? process.argv[2] : 'xxx'  // show
// check for -delete -y churches
// check for -import churches
if (! availColls.includes(arg2)) {
  console.error(`must be one of ${availColls.join(', ')}`)
  process.exit()
}

doFunc(db, arg2) 
