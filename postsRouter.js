const express = require('express'); //노드제이에스 선언
const router = express.Router(); //라우터 선언
const db = require('./db');

router.post('/', async (req, res) => { //데이터를 서버에 제출하거나 전송할때 사용
    const { title, content, category_name } = req.body; //req.body에서 추출하여서 title, content에 저장
    try {
        const [result] = await db.query('INSERT INTO posts (title, content, category_name) VALUES (?, ?, ?)', [title, content, category_name]); //posts테이블에 title, content값 삽입
        const [rows] = await db.query('SELECT id, title, content, category_name FROM posts'); //여기서의 rows, 배열의 row
        res.json(rows);
        } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/showpost', async (req, res) => { //데이터를 읽거나 가져올때 사용
    try {
        const [rows] = await db.query('SELECT id, title, content, category_name FROM posts'); //여기서의 rows, 배열의 row
        //const titles = rows.map(row=>row.title); //rows.map의미: rows배열에 들어있는 {title: 첫글}과 같은 객체에서 title을 뽑아옴
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message }); //오류메세지
    }
});

router.delete('/deletepost', async (req, res) => {
    try {
        const id = req.query.id;
        await db.query('DELETE FROM posts WHERE id = ?', [id]);
        res.status(204).send(); // 메시지 없이 성공적인 삭제 응답
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;