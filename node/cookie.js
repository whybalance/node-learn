const http = require('http');

const session = {}

http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.end('')
    return
  }
  console.log('cookie:', req.headers.cookie)

  const sessionKey = 'sid'
  const cookie = req.headers.cookie

  if (cookie && cookie.indexOf(sessionKey) > -1) {
    // 登录过
    res.end('Come Back')
    const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`)
    const sid = pattern.exec(cookie)[1]
    console.log('session', sid, session[sid])
  } else {
    // 没登录过
    const sid = (Math.random() * 99999999).toFixed()
    // 设置到cookie
    res.setHeader('Set-Cookie', `${sessionKey}=${sid};`)
    session[sid] = {
      name: 'huang'
    }
    res.end('hello')
  }

  // 设置cookie
  // res.setHeader('Set-Cookie', 'cookie1=abc;')
  // res.end('hello cookie')
}).listen(3000)