#!/usr/bin/env node

// firestore get/set/dump/insert utility

const fadmin = require('../node_modules/firebase-admin')   // no transpiler yet

// service key file created from Settings/ServiceAccount page
// store it somewhere, like lsrc/serviceKeys
// note - firebaseConfig apiKey/authDomain, dbURL are for firebase (web) APIs
// interesting(?) diff between f-admin API and f (web) API
//  f-admin: await db.collection(x).get()
//  f web: await firebase.firestore.collection(x)

const serviceAccount = require(process.env.SERVICE_KEY_FILE)
const db = fadmin.initializeApp({
  credential: fadmin.credential.cert(serviceAccount),
  databaseURL: "https://vlcbt1-bd686.firebaseio.com"
}).firestore()

// simple one-line formatters
const strFormat = {
  churches: d => {
    const dd = d.data()
    return `${d.id} => ${dd.name} year: ${dd.year}`
  },
  brasses: d => {
    const dd = d.data()
    return `${d.id} => ${dd.name}`
  },
  rubbings: d => {
    const dd = d.data()
    return `${d.id} => ${dd.vlcn} ${dd.name}: ${dd.desc}`
  },
  notes: d => {
    const dd = d.data()
    return `${d.id} => ${dd.mdtext.substring(0,80)}`
  },
  users: d => {
    const dd = d.data()
    return `${d.id} user's roles => ${dd.roles}`
  }
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

const availColls = [ 'churches', 'brasses', 'rubbings', 'notes', 'users' ]
let doFunc = colToString
if ( (process.argv.length>1) && (process.argv[2][0] == '-') ) { 
  doFunc = (process.argv[2] == '-dump') ?  colToJSON : doFunc
  process.argv.splice(2,1)
}
arg2 = (process.argv.length == 3) ? process.argv[2] : 'xxx'  // show
// check for -delete -y churches
// check for -import churches
if (! availColls.includes(arg2)) {
  console.error(`must be one of ${availColls.join(', ')}`)
  process.exit()
}

doFunc(db, arg2) 
