import { createAsyncThunk, createSlice }  from "@reduxjs/toolkit";
import { firebaseDatabase } from "../../firebase/firebaseConnect";
import { readDataFirestore } from "../../firebase/firebaseController";

// Hàm fetchAllLessons sử dụng createAsyncThunk để lấy tất cả các lesson
const fetchAllLessons = createAsyncThunk('lesson/fetchAll', async (_, { rejectWithValue }) => {
    console.log('lessons fetch all createAsyncThunk')

    try {
        const lessons = await readDataFirestore('lessons');

        // console.log("LESSON AFTER FETCH IN SLICE: ",lessons);

        return lessons;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


// const favLessonByUserId = () => createAsyncThunk('song/reactHeartSong', async ({ lessonId, userId }, { rejectWithValue }) => {
//     //logic
// })

const lessonSlice = createSlice({
    name: 'lesson',
    initialState: {
        lesson: null,
        isFav: false,
        dowload: false,
        join: false,
        haveOffline: false,
        schedule: null,
        loading: false,
        error: null,
    },
    reducers: { //danh sách các reducer sẽ dùng cho nội bộ đối tượng lesson
        setLesson: (state, action) => {
            state.lesson = action.payload
        },
        addLesson(state, action) {
            // Xử lý thêm lesson vào danh sách
        },
        updateLesson(state, action) {
            // Xử lý cập nhật lesson trong danh sách
        },
        removeLesson(state, action) {
            // Xử lý xoá lesson khỏi danh sách
        },
        approveLesson(state, action) {
            // Xử lý duyệt lesson
        },
        lockLesson(state, action) {
            // Xử lý khóa lesson
        },
    },
    extraReducers: (builder) => { //dùng cho việc lắng nghe các action khác ko thuộc lessonSlice
        // builder.addCase(favLessonByUserId.fulfilled, (state) => { //vì action fav lesson sẽ ghi data vào bảng 'likeLessons' -> ko thuộc nội bộ bảng 'lessons' -> thuộc extraReducer
        //     state.loading = false;
        //     console.log("reactHeartSong fulfilled")
        // });
        // builder.addCase(downloadLessonByUserId, (state, action) => {
        //     // Xử lý tải xuống lesson
        // });
        // builder.addCase(joinLessonByUserI, (state, action) => {
        //     // Xử lý tham gia lesson
        // });
    },
});

export {
    fetchAllLessons,

}

export const {
    setLesson, 
    addLesson, 
    updateLesson, 
    removeLesson, 
    approveLesson, 
    lockLesson
} = lessonSlice.actions;

export default lessonSlice.reducer;