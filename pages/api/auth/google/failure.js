import handler from '../../handler'
import auth from '../../../../middleware/auth'
import passport from '../../../../lib/passport'
handler.use(auth).get((req, res,next)=>{
  res.send("in google failure")
  next();
})

export default handler;