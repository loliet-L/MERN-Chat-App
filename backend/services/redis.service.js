import Redis from 'ioredis';

const redisClient = new Redis({
    host: 'redis-17532.crce179.ap-south-1-1.ec2.redns.redis-cloud.com',
    port: '17532',
    password:'RLZjwwiSTvRIScpV6VNEY1agoMoimX8t',
});

try {
redisClient.on('connect',()=>{
    console.log("Redis connected");
});
} catch(errors){
    console.log(errors);
}


export default redisClient;