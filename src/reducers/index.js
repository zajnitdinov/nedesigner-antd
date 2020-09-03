import selected from "./selected";

const reducer = (state , action) => {
    return{
        selected: selected(state, action)
    }
}

export default reducer;