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


router.get('/exaple/a', (req, res) => {
  res.send('Hello from A!');
});

router.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function...');
  next();
}, (req, res) => {
  res.send('Hello from B!');
});

let cb1 = (req, res, next) => {
  console.log('cb1');
  next();
};
let cb2 = (req, res, next) => {
  console.log('cb2');
  next();
};
let cb3 = (req, res, next) => {
  console.log('cb3');
  next();
};

router.get('/example/c', [cb1, cb2, cb3], (req, res) => {
  res.send('sample c');
});

// res.download() : 파일이 다운로드되도록 프롬프트합니다.
// res.end() : 응답 프로세스를 종료합니다.
// res.json() : json 읍답을 전송합니다.
// res.jsonp() : jsonp 지원을 통해 json 응답을 전송합니다.
// res.redirect() : 요청 경로를 재지정합니다.
// res.render() : 보기 템플리트를 렌더링합니다.
// res.send() : 다양한 유형의 응답을 전송합니다.
// res.sendFile() : 파일을 옥텟 스트림의 형태로 전송합니다.
// res.sendStatus() : 응답 상태 코드를 설정한 후 해당 코드를 문자여로 표현한 내용을 응답 본문으로서 전송합니다.

// /index/${id}?name='byungho'
router.get('/index/:id', (req, res, next) => {
  console.log(req.params);
  console.log(req.params.id);
  console.log(req.query.name);
  res.send(' test ! ');
});



// router.param()


module.exports = router;