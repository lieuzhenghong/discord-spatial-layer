export const runTests = ({ setup = _ => null, tests = [], teardown = _ => null }) => {
    if (process.env.NODE_ENV !== 'development') return
    const context = setup()
    console.log(context)
    tests.forEach(test => test(context))
    teardown(context)
}

export const expectEqual = (a, b) => {
    if (a !== b) {
        console.log('Assertion failed:')
        console.log(`LHS: ${a}`)
        console.log(`LHS: ${b}`)
    } else {
        console.log('1 test passed')
    }
}
