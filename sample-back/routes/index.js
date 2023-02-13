const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('router get /');
  res.status(200).send('hello express router');
});






// Sample Router Code

// acd, abcd
router.get('/ab?cd', (req, res) => {
  res.send('ab?cd');
});

// abcd, abbcd, abbbcd
router.get('/ab+cd', (req, res) => {
  res.send('ab+cd');
});

// abcd, abxcd, abRANDOMcd, ab123cd
router.get('/ab?cd', (req, res) => {

});

// abe, abcde
router.get('/ab(cd)?e', (req, res) => {

});

// 정규식 기반
// 라우트 이름에 'z' 가 포함된 모든 항목과 일치
router.get(/z/, (req, res) => {

});

// butterfly dragnfly와 일치하지만 butterflymman 및 dragonflyman 등과 일치하지는 않습니다.
router.get(/.*fly$/, (req, res) => {
  res.send('/.*fly$');
});



module.exports = router;