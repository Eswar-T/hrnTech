import { FETCH_USERSLIST }  from '../actions/constants';

const initialState = { 
                       users : []
                    
                    };

export default function getList(state = initialState ,action) {

    console.log("entering into function 2")

    switch(action.type){

        case FETCH_USERSLIST : 
            return {users : action.payload};
                
            
        default : return state;
    }
    
}