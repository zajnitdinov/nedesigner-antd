const selected = (state, action) => {
    if (state === undefined){
        return []
    }

    switch (action.type) {
        case 'ADD_TO_SELECTED_TAGS':
            return [
                action.payload,
                ...state.selected
            ]
        case 'REMOVE_FROM_SELECTED_TAGS':
            return [
                ...state.selected.filter(el => action.payload !== el)
            ]
        default:
            return state.selected;
    }
}

export default selected;