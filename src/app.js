import  Express  from "express";
import {pool} from "./db.js";
import {PORT} from './config.js'

const app = Express();

app.get('/', async (req, res)=> {
  const [rows] = await pool.query('select * FROM users');
  res.json(rows)
});

app.get('/ping', async (req, res)=>{
    const [result] = await pool.query(`SELECT "hello world" as RESULT`);
    res.json(result[0]);
});

app.get('/create', async (req, res) => {
    const result = await pool.query('INSERT INTO users(name) VALUES("jony")')
    res.json(result);})

app.listen(PORT);
console.log('Server on port', PORT);//investigar modulos loggin => morgan wiston pino 