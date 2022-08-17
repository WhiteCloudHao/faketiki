import userApi from '../../api/userApi';

const { createSlice, createAsyncThunk}  = require('@reduxjs/toolkit')

export const register = createAsyncThunk(
    'users/register',
    async (payload) => {
      const data = await userApi.register(payload);


     
      return data.user
    }
  )

  export const login = createAsyncThunk(
    'users/login',
    async (payload) => {
      const data = await userApi.login(payload);


      localStorage.setItem('access_token', data.jwt);
      localStorage.setItem('user', JSON.stringify(data.user))
      return data.user
    }
  )
const UserSlice = createSlice({
    name: 'user',
    initialState: {
         current: JSON.parse(localStorage.getItem('user')) || {},
    },

    reducers: {

      logout(state) {
        // localStorage.removeItem('user');
        // localStorage.removeItem('access_token');
        state.current = {};
      }
    },

    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
        [login.fulfilled]: (state, action) => {
          state.current = action.payload;
      },
    }

});


const {actions, reducer} = UserSlice; 
export const  {logout} = actions;
export default reducer;