'use strict';

import koa from 'koa'
import db from 'sqlite'
import route from 'koa-route'
import Promise from 'bluebird'

const DATABASE_PATH = "./database/database.sqlite"

const app = koa()
db.open(DATABASE_PATH, )

app.use(route.get('/api/v1/files', function*(){
  this.body = yield db.all("SELECT * FROM Files")
}))

app.use(route.get('/api/v1/names', function*(){
  this.body = yield db.all("SELECT name FROM Files")
}))

app.use(route.get('/api/v1/classifications', function*(){
  this.body = yield db.all("SELECT classification FROM Files WHERE classification IS NOT NULL GROUP BY classification")
}))

app.use(route.get('/api/v1/search/name/:name', function*(name){
  this.body = yield db.all("SELECT * FROM Files WHERE name LIKE ?", `%${name}%`)
}))

app.use(route.get('/api/v1/search/company/:company', function*(company){
  this.body = yield db.all("SELECT * FROM Files WHERE company LIKE ?", `%${company}%`)
}))

app.use(route.get('/api/v1/search/association/:association', function*(association){
  this.body = yield db.all("SELECT * FROM Files WHERE association LIKE ?", `%${association}%`)
}))

app.use(route.get('/api/v1/search/classification/:classification', function*(classification){
  this.body = yield db.all("SELECT * FROM Files WHERE classification = ?", `${classification}`)
}))

app.listen(3000)