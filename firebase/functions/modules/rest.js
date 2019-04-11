const functions = require('firebase-functions');


exports.rest = functions.https.onRequest((request, response) => {
    const cost = request.query.cost;
    let data;
    if(!cost){
        data={
            fortune: 'desperate',
            wish: 'go to hell'
        }
    }else if(cost < 1000){
        data={
            fortune:'normal',
            wish: 'normal life is good'
        }
    }else{
        data={
            forturne:'super lucky',
            wish: 'you are super lucky today'
        }
    }
    response.status(200).send(data);
 });