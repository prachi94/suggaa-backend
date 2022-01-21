
import handler from '../../handler';
import auth from '../../../../middleware/auth'
import passport from  '../../../../lib/passport'
import jwt from 'jsonwebtoken'
handler.use(auth).get(passport.authenticate('google',{ failureRedirect: '/' }),(req, res,next)=>{
  console.log("in here", req.user)
  const token = jwt.sign({id: req.user.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24 * 1000})
  res.redirect(`http://localhost:3002?token=${token}`)
})

export default handler;