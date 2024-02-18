const { Pool } = require("pg");

const pool = new Pool({
    user: "root",
    password: "wFgKlq9SeScjWSyb0etIKaf8kAfgyXzx",
    host: "dpg-cn8q5pgl5elc738v0q8g-a.oregon-postgres.render.com",
    port: 5432,
    database: "aagam_h9mv",
    ssl: "true"
})

module.exports = pool;