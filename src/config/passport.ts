import passport from "passport";
import { BasicStrategy } from "passport-http";
import { modelData } from "../models/mariadbModel";
import { Request, Response, NextFunction } from "express";

const notAuthorized = { status: 401, message: 'Not Authorized by passport'}

passport.use(new BasicStrategy(async (email, password, done) => {

    if( email && password){
        const verify = await modelData.findOne({
            where: {email, password}
        });
        if(verify){
            return done(null, verify);
        }
    }
    return done(notAuthorized, false);
}));

export const privateRoute = (req:Request, res: Response, next: NextFunction)=> {
 
    passport.authenticate('basic', (error:any, verify: string) => {
        
        console.log('User no Middleware: ', verify);
        return verify ? next() : next(notAuthorized);
        
    })
    (req, res, next);
}

export default passport;