import { useReducer } from 'react';

import {
    UPDATE_COLOR_THEME
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR_THEME:
            return {
                state,
                colorTheme: action.colorTheme
            }
        default:
            return state;
    };
}

export function useColorThemeReducer(initialState) {
    return useReducer(reducer, initialState);
}