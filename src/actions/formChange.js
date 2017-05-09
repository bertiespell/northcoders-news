import * as types from '../types/types';

export function formChange (event) {
    return {
        type: types.FORM_CHANGE,
        event 
    };
}