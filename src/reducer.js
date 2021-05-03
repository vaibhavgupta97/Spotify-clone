export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:"BQBEs1bOu1ONLELVhhtiJxC7B-JM_5rb9GU6Y6K6pqwFzzCPGM…L19H_sqeR4x_dpTJFuN75n06_lfMLru28sFN_GPKaj65KsHx8",
}

const reducer=(state,action)=>{
console.log(action);
switch(action.type){
     case 'SET_USER':
         return{
             ...state,
             user:action.user
         };
         case 'SET_TOKEN':
             return{
                 ...state,token:action.token
             }
         default:
         return state;
}
}
export default reducer;