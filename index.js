function receivesAFunction(cb){
    return cb()
}

function returnsANamedFunction(cb){
    return function namedFunction(){
        console.log(`real`)
    }
}

function returnsAnAnonymousFunction(cb){
    return function() {
        console.log(`not real`)
    }
}