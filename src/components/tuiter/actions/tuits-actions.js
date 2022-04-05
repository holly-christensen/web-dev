import * as service from '../../../server/services/tuits-service.js';

export const CREATE_TUIT = 'CREATE_TUIT';
export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const FIND_TUIT_BY_ID = 'FIND_TUIT_BY_ID';
export const UPDATE_TUIT = 'UPDATE_TUIT';
export const DELETE_TUIT = 'DELETE_TUIT';

export const createTuit = async (dispatch, tuit) => {
    const newTuit = await service.createTuit(tuit);
    dispatch({
        type: CREATE_TUIT,
        newTuit
    });
}
export const findAllTuits = async (dispatch) => {
    const tuits = await service.findAllTuits();
    dispatch({
        type: FIND_ALL_TUITS,
        tuits
    });
}
export const findTuitById = async (dispatch, tuitId) => {
    const tuit = await service.findTuitById(tuitId);
    dispatch({
        type: FIND_TUIT_BY_ID,
        tuit
    });
}

export const updateTuit = async (dispatch, tuit) => {
    const status = await service.updateTuit(tuit);
    dispatch({
        type: UPDATE_TUIT,
        tuit
    });

}
export const deleteTuit = async (dispatch, tuit) => {
    const response = await service.deleteTuit(tuit);
    dispatch({
        type: DELETE_TUIT,
        tuit
    })
}