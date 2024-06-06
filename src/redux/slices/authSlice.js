import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
  auth, 
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  // GoogleAuthProvider,
  signOut,
  sendEmailVerification,
  serverTimestamp,

} from '../../firebase/firebase/firebaseDBConnect';
import { writeDataDBFirestore } from '../../firebase/firebase/firebaseDBController';
import { Alert } from 'react-native';
import { saveDataAsyncStorage } from '../../firebase/asyncStorage/AsyncStorage';

export const registerWithEmailAndPassword = createAsyncThunk(
  'auth/registerWithEmailAndPassword',
  async ({ userName, email, password, role }, {rejectWithValue, dispatch}) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userId = user.uid

      // Send email verification
      sendEmailVerification(user)
        .then(() => {
          // Alert.alert('Please verify in your Email!')
          console.log('Success sending email verification!');
        })
        .catch((error) => {
          console.log('Error sending email verification:', error);
          // Alert.alert("Error! Email doesn not exist!")
        });
        
        {role === "student" && 
          writeDataDBFirestore('users', userId, {
            displayName: userName,
            email: user.email,
            emailVerified: user.emailVerified,
            providerId: user.providerId,
            role: role,
            createAt: serverTimestamp() 
          })
        }
        {role === "instructor" &&
          writeDataDBFirestore('instructors', userId, {
            displayName: userName,
            email: user.email,
            emailVerified: user.emailVerified,
            providerId: user.providerId,
            role: role,
            createAt: serverTimestamp() 
          })
        }

        return { success: true, message: 'Register successful', user: user };  
        // return user;  
      } catch (error) {
        throw new Error(error.message);
      }
  }
);

export const loginWithEmailAndPassword = createAsyncThunk('auth/loginWithEmailAndPassword', async ({email, password}, { rejectWithValue }) => {
  // console.log('user/getUser', email + ',' + password)
  try {
      const respone = await signInWithEmailAndPassword(auth, email, password);
      // debugger
      if (respone.user) {
        const user = {
            uid: respone.user.uid,
            email: respone.user.email,
            emailVerified: respone.user.emailVerified,
            email: respone.user.email,
            provider: respone.user.id,
        }

        // Khi login thành công thì sẽ lưu trạng thái đăng nhập vào AsyncStrogae
        saveDataAsyncStorage("userUid", user.uid);

        console.log('Login succes');
        return user;
      } 
      console.log("Login fail")
      return null;      
  } catch (error) {
    // console.log('error')
    return rejectWithValue(error.message);
  }
});


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