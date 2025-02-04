// hooks/useAppDispatch.ts
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/store/store'; // Adjust the import path as needed

export const useAppDispatch = () => useDispatch<AppDispatch>();