let defaultState = {
    break: 5,
    work: 25,
    session: 1500000,
    countDown: false,
    currentCounter: 'work',
    looped: false
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const START = 'START';
const UPDATE = 'UPDATE';
const PAUSE = 'PAUSE';
const RESET = 'RESET';

function changeStyle() {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#f8e2c1';
    document.getElementsByClassName('count-down')[0].style.border = '5px solid #ffb95d';
}

function revertStyle() {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#d2c1f8';
    document.getElementsByClassName('count-down')[0].style.border = '5px solid #905dff';
}

function playAlarm(state) {
    const bigBell = new Audio('Meditation-bell.mp3');
    bigBell.volume = 0.5;
    const smallBell = new Audio('small-bell.mp3');
    (state.currentCounter === 'work') ? bigBell.play() : smallBell.play()
}


function mainReducer (state = defaultState, action) {
    switch(action.type) {
        case INCREMENT:
            if (action.value === 'break' && state.break < 60) {
                return {
                    ...state,
                    break: state.break + 1,
                }
            } else if (action.value !== 'break' && state.work < 60) {
                return {
                    ...state,
                    work: state.work + 1,
                    session: (state.work + 1) * 60000
                }
            } else {
                return {
                    ...state,
                }
            }
        case DECREMENT:
            if (action.value === 'break' && state.break !== 0) {
                return {
                    ...state,
                    break: state.break - 1
                }
            } else  if (action.value !== 'break' && state.work !== 0) {
                return {
                    ...state,
                    work: state.work - 1,
                    session: (state.work - 1) * 60000
                }
            } else {
                return {
                    ...state
                }
            }
        case START:
            return {
                ...state,
                countDown: action.value
            }

        case PAUSE:
            return {
                ...state,
                countDown: action.value
            }
        case RESET:
            revertStyle();
            return {
                ...state,
                session: state.work * 60000,
                countDown: false,
                looped: false,
                currentCounter: 'work'
            }
        case UPDATE :
            if (state.countDown === true && state.session > 1000) {
                return {
                    ...state,
                    session: state.session - action.value
                }
            } else if (state.countDown === true && state.session < 2000 && state.currentCounter === 'work') {
                changeStyle();
                playAlarm(state);
                return {
                    ...state,
                    session: state.break * 60000,
                    currentCounter: 'break',
                    looped: true
                }
            } else if (state.looped === true && state.countDown === true) {
                revertStyle();
                playAlarm(state);
                return {
                    ...state,
                    session: state.work * 60000,
                    countDown: false,
                    currentCounter: 'work',
                    looped: false
                }
            }   
        default:
            return {
                ...state
            }
    }
}

export default mainReducer;