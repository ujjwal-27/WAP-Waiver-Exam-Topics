function testVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i); // out of scope of for-loop (block)
}

testVar();

function testLet() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    // console.log(i); // out of scope of for-loop (block)
}

testLet();

function testConst() {
    const i = 7;

    console.log(i++); // value cannot be changed with 'const'

}

testConst();


