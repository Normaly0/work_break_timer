export function handleIncrement(e) {
    return {
        type: 'INCREMENT',
        value: e.currentTarget.value
    }
}

export function handleDecrement(e) {
    return {
        type: 'DECREMENT',
        value: e.currentTarget.value
    }
}

export function handleStart() {
    return {
        type: 'START',
        value: true
    }
}

export function handlePause() {
    return {
        type: 'PAUSE',
        value: false
    }
}

export function handleReset() {
    return {
        type: 'RESET'
    }
}

export function update(deltaTime) {
    return {
        type: 'UPDATE',
        value: deltaTime
    }
}