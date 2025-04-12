import pg from "pg";
import dotenv  from "dotenv";

dotenv.config();

const db = new pg.Client({
    user:process.env.PG_USER,
    password:process.env.PG_PASS,
    database:process.env.PG_DATABASE,
    host:process.env.PG_HOST,
    port:process.env.PG_PORT,
});

try {
    db.connect();
    console.log("Connected to Db")
} catch (error) {
    console.log(error.message)
}


export const query = (text,params) => db.query(text,params)

