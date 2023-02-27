import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
configureStore
import { counterReducer } from './counterReducer';

export const store = createStore(counterReducer)