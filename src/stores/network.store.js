import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

export const useNetwork = create(
  persist(
    immer((set, get) => ({
      ip: '',
      setIp(ip) {
        set(state => {
          state.ip = ip;
        });
      },
    })),
    {
      name: 'auth',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
