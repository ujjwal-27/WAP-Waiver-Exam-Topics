/**
 * var -> function scoped
 * Variable 'i' is defined within for-loop, but it is still accessible outside for-loop scope.
 * It is accessible within the scope of function.
 */
function testVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i); // out of scope of for-loop (block)
}

testVar();

/**
 * let -> block scoped
 * Variable 'i' is defined within for-loop.
 * It is not accessible outside for-loop scope .
 */
function testLet() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    // console.log(i); // out of scope of for-loop (block)
}

testLet();

/**
 * const -> block scoped
 * The value of variable cannot be changed if defined using 'const'
 */
function testConst() {
    const i = 7;

    console.log(i++); // value cannot be changed with 'const'

}

testConst();


