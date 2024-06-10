import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readDataDBFirestoreWithCondition } from "../../firebase/firebase/firebaseDBController";

// Hàm fetchStudents sử dụng createAsyncThunk để lấy tất cả các user có role là student
export const fetchStudents = createAsyncThunk('user/fetchStudents', async (_, { rejectWithValue }) => {
    try {
        const students = await readDataDBFirestoreWithCondition('users', 'role', 'student');
        return students;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// Hàm fetchInstructors sử dụng createAsyncThunk để lấy tất cả các user có role là instructor
export const fetchInstructors = createAsyncThunk('user/fetchInstructors', async (_, { rejectWithValue }) => {
    try {
        const instructors = await readDataDBFirestoreWithCondition('users', 'role', 'instructor');
        return instructors;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        allUsers: null,
        students: [],
        instructors: [],
        loading: false,
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setAllUsers: (state, action) => {
            state.allUsers = action.payload;
        },
        setStudents: (state, action) => {
            state.students = action.payload;
        },
        setInstructors: (state, action) => {
            state.instructors = action.payload;
        },
        addUser(state, action) {
            // Xử lý thêm user vào danh sách
        },
        updateUser(state, action) {
            // Xử lý cập nhật user trong danh sách
        },
        removeUser(state, action) {
            // Xử lý xoá user khỏi danh sách
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStudents.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchStudents.fulfilled, (state, action) => {
            state.loading = false;
            state.students = action.payload;
        });
        builder.addCase(fetchStudents.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(fetchInstructors.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchInstructors.fulfilled, (state, action) => {
            state.loading = false;
            state.instructors = action.payload;
        });
        builder.addCase(fetchInstructors.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const {
    setUser,
    setAllUsers,
    setStudents,
    setInstructors,
    addUser,
    updateUser,
    removeUser,
} = userSlice.actions;

export default userSlice.reducer;
