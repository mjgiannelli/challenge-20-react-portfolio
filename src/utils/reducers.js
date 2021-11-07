import {
    UPDATE_COLOR_THEME
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR_THEME:
            return {
                colorTheme: !state
            }
        default:
            return state;
    };
}