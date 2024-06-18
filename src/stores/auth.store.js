import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

export const useAuth = create(
  persist(
    immer((set, get) => ({
      isLogin: undefined,
      isStudent: false,
      id: '',
      displayname: '',
      googleId: '',
      email: '',
      photoUrl: '',
      accessToken: '',
      login(
        isStudent,
        id,
        displayname,
        email,
        googleId,
        photoUrl,
        accessToken,
      ) {
        set(state => {
          state.id = id;
          state.displayname = displayname;
          state.isStudent = isStudent;
          state.googleId = googleId;
          state.email = email;
          state.photoUrl = photoUrl;
          state.accessToken = accessToken;
          state.isLogin = true;
        });
      },
      logout() {
        set(state => {
          state.id = '';
          state.isStudent = false;
          state.displayname = '';
          state.googleId = '';
          state.email = '';
          state.accessToken = '';
          state.isLogin = false;
        });
      },
    })),
    {
      name: 'auth',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
