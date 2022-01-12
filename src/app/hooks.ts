import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
// Use throughout your app instead of plain `useDispatch` and `useSelector`
/**
 * this two hooks will be used throughout app instead of plain `useDispatch` and `useSelector` to provide the right types
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
