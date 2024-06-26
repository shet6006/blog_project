const express = require('express');
const bodyParser = require('body-parser'); // 리퀘스트 바디를 파싱(분석)
const cors = require('cors');
const postsRouter = require('./postsRouter');
const categoriesRouter = require('./categoriesRouter'); // 파일 이름 오타 수정
const app = express();
const port = 5000;

app.use(bodyParser.json()); // use는 요청을 매번 실행함
app.use(cors());

app.use('/posts', postsRouter);
app.use('/categories', categoriesRouter);

app.get('/', (req, res) => {
    res.send('<h2>Welcome to the blog server</h2>');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // 문자열 보간법 수정
});
