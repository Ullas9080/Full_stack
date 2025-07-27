const greet="hello"
const otherGreet="hello"

const foo=function () {
    return 'foo'
}

const fe=foo
function refernenceFoo(){
    return 'foo'
}

console.log(foo == fe)