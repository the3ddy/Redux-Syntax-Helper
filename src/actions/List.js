//////////////////////////////

export const storeNameChange = (e) => ({
    type: 'STORE_NAME_CHANGE',
    e: e.target.value
})

//////////////////////////////

export const actionName = (e) => ({
    type: 'ACTION_NAME',
    e: e.target.value
})

export const actionLogic = (e) => ({
    type: 'ACTION_LOGIC',
    e: e.target.value
})

export const saveAction = () => ({
    type: 'SAVE_ACTION'
})

export const deleteAction = (chosenAction) => ({
    type: 'DELETE_ACTION',
    chosenAction
})

//////////////////////////////

export const reducerName = (e) => ({
    type: 'REDUCER_NAME',
    e: e.target.value
})

export const reducerState = (e) => ({
    type: 'REDUCER_STATE',
    e: e.target.value
})

export const reducerLogic = (e) => ({
    type: 'REDUCER_LOGIC',
    e: e.target.value
})

export const saveReducer = () => ({
    type: 'SAVE_REDUCER'
})

export const deleteReducer = (chosenReducer) => ({
    type: 'DELETE_REDUCER',
    chosenReducer
})

//////////////////////////////

export const componentName = (e) => ({
    type: 'COMPONENT_NAME',
    e: e.target.value
})

export const saveComponent = () => ({
    type: 'SAVE_COMPONENT'
})

export const deleteComponent = (chosenComponent) => ({
    type: 'DELETE_COMPONENT',
    chosenComponent
})