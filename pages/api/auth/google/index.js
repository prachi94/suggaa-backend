
import handler from '../../handler'
import auth from '../../../../middleware/auth'
import passport from '../../../../lib/passport'
handler.use(auth).get(passport.authenticate('google',{scope:['https://www.googleapis.com/auth/userinfo.profile','https://www.googleapis.com/auth/userinfo.email']}),(req, res, next)=>{
  console.log("in google ")
  res.json({ user: req.user })
  
})

export default handler;