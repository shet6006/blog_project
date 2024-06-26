const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/', async (req, res) => { //데이터를 서버에 제출하거나 전송할때 사용
    const { name } = req.body; //req.body에서 추출하여서 title, content에 저장
    try {
        const [result] = await db.query('INSERT INTO categories (name) VALUES (?)', [name]); //posts테이블에 title, content값 삽입
        const [rows] = await db.query('SELECT id, name FROM categories ORDER BY id ASC'); //여기서의 rows, 배열의 row
        //const titles = rows.map(row=>row.title); //rows.map의미: rows배열에 들어있는 {title: 첫글}과 같은 객체에서 title을 뽑아옴
        res.json(rows);    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/showcategory', async (req, res) => { //데이터를 읽거나 가져올때 사용
    try {
        const [rows] = await db.query('SELECT id, name FROM categories ORDER BY id ASC'); //여기서의 rows, 배열의 row
        //const titles = rows.map(row=>row.title); //rows.map의미: rows배열에 들어있는 {title: 첫글}과 같은 객체에서 title을 뽑아옴
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message }); //오류메세지
    }
});

router.delete('/deletecategory', async (req, res) => {
    try {
        const id = req.query.id;
        const category_name = req.query.name;
        await db.query('DELETE FROM posts WHERE category_name = ?',[category_name]);
        await db.query('DELETE FROM categories WHERE id = ?', [id]);
        res.status(204).send(); // 메시지 없이 성공적인 삭제 응답
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;