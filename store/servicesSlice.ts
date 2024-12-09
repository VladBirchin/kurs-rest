// servicesSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchServicesApi } from './servicesApi';
import { Service } from '../types/types';


export const fetchServices = createAsyncThunk('services/fetchServices', async () => {
    return await fetchServicesApi();
});

interface ServicesState {
    services: Service[];
    selectedCategory: string;
    visibleIndexes: Record<string, number>;
    loading: boolean;
    error: string | null;
}

const initialState: ServicesState = {
    services: [],
    selectedCategory: '',
    visibleIndexes: {},
    loading: false,
    error: null,
};

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        setSelectedCategory: (state, action: PayloadAction<string>) => {
            state.selectedCategory = action.payload;
        },
        setVisibleIndexes: (
            state,
            action: PayloadAction<{ category: string; index: number }>
        ) => {
            const { category, index } = action.payload;
            state.visibleIndexes[category] = index;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.services = action.payload;
                state.loading = false;
            })
            .addCase(fetchServices.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to fetch data';
                state.loading = false;
            });
    },
});

export const { setSelectedCategory, setVisibleIndexes } = servicesSlice.actions;

export default servicesSlice.reducer;
