import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

export const useCreateProgram = create(
  immer((set, get) => ({
    name: '',
    introduce: '',
    level: '',
    category: '',
    learn: '',
    need: '',
    update(newProgram) {
      set(state => ({
        ...state,
        ...newProgram,
      }));
    },
    reset() {
      set(state => ({
        name: '',
        introduce: '',
        level: '',
        category: '',
        learn: '',
        need: '',
      }));
    },
  })),
);
