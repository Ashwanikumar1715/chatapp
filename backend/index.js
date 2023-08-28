const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
try {
    const r= await axios.put('https://api.chatengine.io/users',
    {
        username:username, secret:username, first_name:username
    },
    {
        headers:{"private-key":"07a27f81-8f89-49ae-9680-b8ff0ea78de0"}
    }
    
    )
    return res.status(r.status).json(r.data)
} catch (error) {
    return res.status(error.response.status).json(error.response.data)
}


  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);