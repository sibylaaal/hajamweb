import { configureStore } from '@reduxjs/toolkit';
import Authslice from '../reudcers/Authslice';

const store = configureStore({
    reducer: {
        auth: Authslice,
    },
});

export default store;
