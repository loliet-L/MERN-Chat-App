import jwt from "jsonwebtoken";
import redisClient from "../services/redis.service.js";
export const authUser =  async (req, res,next) =>{
    try {
        const token = req.cookies.token || req.headers.authorization.split(' ')[1]  ;

        if(!token) return res.status(401).send({error: 'Unauthorized User'});

        const isblacklisted =  await redisClient.get(token);

        if(isblacklisted){

            res.cookie('token','');
            return res.status(401).send({error: 'Unauthorized User'});
        }

        const decode = jwt.verify(token,process.env.JWT_SECRET);

        req.user =  decode;
        next();


    } catch (error) {
        console.log(error);
        res.status(401).send({error:'Unauthorized User'});
    }
}