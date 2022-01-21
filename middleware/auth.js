import nextConnect from 'next-connect'
import passport from '../lib/passport'

const auth = nextConnect()
  .use((req, res, next)=>{
    next()
  })
  .use(passport.initialize())
export default auth
