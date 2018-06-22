import {combineReducers} from 'redux'
function XXX(state=1,action) {
  switch (action.type){
    default:
      return state
  }
}
function YYY(state={},action) {
  switch (action.type){
    default:
      return state
  }
}
export default combineReducers({
  XXX,
  YYY
})