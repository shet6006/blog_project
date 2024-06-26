const express = require('express');
const bodyParser = require('body-parser'); //리퀘스트바디를 파싱(분석)
const cors = require('cors');
const postsRouter = require('./postsRouter');

const app = express();
const port = 5000;

app.use(bodyParser.json()); //use는 요청을 매번 실행함
app.use(cors());

app.use('/posts', postsRouter);

app.get('/', (req, res) => {
    res.send('<h2>Welcome to the blog server</h2>');
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:${port)');
});