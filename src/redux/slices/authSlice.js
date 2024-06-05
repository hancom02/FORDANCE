import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  signOut,
} from 'firebase/auth';
import { auth } from './firebase';

export const registerWithEmailAndPassword = createAsyncThunk(
  'auth/registerWithEmailAndPassword',
  async ({ email, password }) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// export const loginWithEmailAndPassword = createAsyncThunk(
//   'auth/loginWithEmailAndPassword',
//   async ({ email, password }) => {
//     try {
//       const { user } = await signInWithEmailAndPassword(auth, email, password);
//       return user;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// );

// export const sendPasswordReset = createAsyncThunk(
//   'auth/sendPasswordReset',
//   async (email) => {
//     try {
//       await sendPasswordResetEmail(auth, email);
//       return true;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// );

// export const resetPasswordByCode = createAsyncThunk(
//   'auth/verifyPasswordResetCode',
//   async (code) => {
//     try {
//       const email = await verifyPasswordResetCode(auth, code);
//       return email;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// );

// export const logout = createAsyncThunk('auth/logout', async () => {
//   try {
//     await signOut(auth);
//     return true;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// });

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerWithEmailAndPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerWithEmailAndPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerWithEmailAndPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    //   .addCase(loginWithEmailAndPassword.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(loginWithEmailAndPassword.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.user = action.payload;
    //   })
    //   .addCase(loginWithEmailAndPassword.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.error.message;
    //   })
    //   .addCase(sendPasswordReset.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(sendPasswordReset.fulfilled, (state) => {
    //     state.loading = false;
    //   })
    //   .addCase(sendPasswordReset.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.error.message;
    //   })
    //   .addCase(verifyPasswordResetCode.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(verifyPasswordResetCode.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.user = { email: action.payload };
    //   })
    //   .addCase(verifyPasswordResetCode.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.error.message;
    //   })
    //   .addCase(logout.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(logout.fulfilled, (state) => {
    //     state.loading = false;
    //     state.user = null;
    //   })
    //   .addCase(logout.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.error.message;
    //   });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;