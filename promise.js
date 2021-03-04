const myPromises = new Promise((resolve,reject)=>{
    if(false){
        setTimeout(()=>{
            resolve('Ihave succeeded')
        },1000);
    }else{
        reject('I have failed');
    }

});
/* .then can only be called on resolved promise */

myPromises.then(value=>console.log(value)).
catch(rejectValue => console.log(rejectValue));