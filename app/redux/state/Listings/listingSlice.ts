import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import listings from '@/public/static/bookList';
import { Book } from '@/app/types/book';

interface listingState {
    data: Book[]
}

const initialState: listingState = {
    data: listings
}

export const listingSlice = createSlice({
    name: 'listings',
    initialState,
    reducers: {
        addListing: (state, action: PayloadAction<Book>) => {
            state.data.push(action.payload);
        },
        deleteListing: (state, action: PayloadAction<string>) => {
            state.data = state.data.filter((book) => book.id !== action.payload);
        },
        updateListing: (state, action: PayloadAction<Book>) => {
            const index = state.data.findIndex((book) => book.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = action.payload;
            }
        }
    }
})

export const { addListing, deleteListing, updateListing } = listingSlice.actions;

export default listingSlice.reducer;