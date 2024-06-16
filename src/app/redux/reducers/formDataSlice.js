import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: null,
};

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    deleteFormData: (state,action) => {
      state.formData = null;
    }
  },
});

export const {setFormData,deleteFormData} = formDataSlice.actions;
export default formDataSlice.reducer;
