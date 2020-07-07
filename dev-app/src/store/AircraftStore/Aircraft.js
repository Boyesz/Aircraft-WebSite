import { routerMiddleware, push } from 'react-router-redux'

const initialState = {
    aircrafts: [],
    loading: false,
    errors: {},
    forceReload: false
}

export const actionCreators = {
    requestAircrafts: () => async (dispatch, getState) => {

        const url = 'http://localhost:63508/api/Aircraft/Aircrafts';
        const response = await fetch(url);
        const aircrafts = await response.json();
        dispatch({ type: 'FETCH_AIRCRAFTS', aircrafts });
    },
    saveAircraft: aircraft => async (dispatch, getState) => {
        try {
            const url = 'http://localhost:63508/api/Aircraft/Aircraft';
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const requestOptions = {
                method: 'POST',
                headers,
                body: JSON.stringify(aircraft)
            };
            const request = new Request(url, requestOptions);
            const response = await fetch(request);

            if (response.ok) {
                dispatch({ type: 'SAVE_AIRCRAFT', aircraft });
            }
            else {
                dispatch(push('/wow'))
            }
        }
        catch (error) {
            console.log(error);
        }
    },
    deleteAircraft: id => async (dispatch, getState) => {
        const url = 'http://localhost:63508/api/Aircraft/Aircraft' + id;
        const requestOptions = {
            method: 'DELETE',
        };
        const request = new Request(url, requestOptions);
        await fetch(request);
        dispatch({ type: 'DELETE_AIRCRAFT', id });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case 'FETCH_AIRCRAFTS': {
            return {
                ...state,
                aircrafts: action.aircrafts,
                loading: false,
                errors: {},
                forceReload: false
            }
        }
        case 'SAVE_AIRCRAFT': {
            return {
                ...state,
                aircrafts: Object.assign({}, action.aircraft),
                forceReload: true
            }
        }
        case 'DELETE_AIRCRAFT': {
            return {
                ...state,
                id: action.id,
                forceReload: true
            }
        }
        default:
            return state;
    }
};
