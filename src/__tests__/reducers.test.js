import {
    UPDATE_COLOR_THEME
} from '../utils/actions';
import { reducer } from '../utils/reducers';

const initialState = {
    colorTheme: 'Light',
}

test('UPDATE_COLOR_THEME', () => {
    let newState = reducer(initialState, {
        type: UPDATE_COLOR_THEME,
        colorTheme: 'Dark'
    });

    expect(newState.colorTheme).toBe('Dark');
    expect(initialState.colorTheme).toBe('Light');
})