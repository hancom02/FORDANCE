import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {firebaseDatabase} from '../../firebase/reactNativeFirebase/firebaseConnect';
import {readDataFirestore} from '../../firebase/reactNativeFirebase/firebaseController';
import {act} from 'react';
import {
  readDataDBFirestore,
  readDataDBFirestoreCollection,
  readDataDBFirestoreWithCondition,
  readDataFirestoreCollection,
} from '../../firebase/firebase/firebaseDBController';
import getSavedLesson from '../../api/lesson/getSaved';
import getOwnLesson from '../../api/lesson/getOwn';
import getTodayLesson from '../../api/lesson/getToday';

// Hàm fetchAllLessons sử dụng createAsyncThunk để lấy tất cả các lesson
export const fetchAllLessons = createAsyncThunk(
  'lesson/fetchAll',
  async (_, {rejectWithValue, dispatch}) => {
    try {
      // const lessons = await readDataFirestore('lessons');
      // const lessons = await readDataDBFirestoreCollection('lessons');
      const lessons = await getOwnLesson();

      dispatch(setAllLessons(lessons)); //đẩy action fetchAllLessons vào reducer mới được xử lý
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchSavedLessons = createAsyncThunk(
  'lesson/fetchSaved',
  async (_, {rejectWithValue, dispatch}) => {
    try {
      // const lessons = await readDataFirestore('lessons');
      // const lessons = await readDataDBFirestoreCollection('lessons');
      const lessons = await getSavedLesson();

      dispatch(setSavedLessons(lessons)); //đẩy action fetchAllLessons vào reducer mới được xử lý
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchTodayLessons = createAsyncThunk(
  'lesson/fetchSaved',
  async (_, {rejectWithValue, dispatch}) => {
    try {
      // const lessons = await readDataFirestore('lessons');
      // const lessons = await readDataDBFirestoreCollection('lessons');
      const lessons = await getTodayLesson();

      dispatch(setTodayLessons(lessons)); //đẩy action fetchAllLessons vào reducer mới được xử lý
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// const favLessonByUserId = () => createAsyncThunk('song/reactHeartSong', async ({ lessonId, userId }, { rejectWithValue }) => {
//     //logic
// })

const lessonSlice = createSlice({
  name: 'lesson',
  initialState: {
    lesson: null,
    allLessons: null,
    savedLessons: [],
    todayLessons: [],
    isFav: false,
    dowload: false,
    join: false,
    haveOffline: false,
    schedule: null,
    loading: false,
    error: null,
  },
  reducers: {
    //danh sách các reducer sẽ dùng cho nội bộ đối tượng lesson
    setLesson: (state, action) => {
      state.lesson = action.payload;
    },
    setAllLessons: (state, action) => {
      state.allLessons = action.payload;
    },
    setSavedLessons: (state, action) => {
      state.savedLessons = action.payload;
    },
    setTodayLessons: (state, action) => {
      state.todayLessons = action.payload;
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
  extraReducers: builder => {
    //dùng cho việc lắng nghe các action khác ko thuộc lessonSlice
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

export const {
  setLesson,
  setAllLessons,
  setSavedLessons,
  setTodayLessons,
  addLesson,
  updateLesson,
  removeLesson,
  approveLesson,
  lockLesson,
} = lessonSlice.actions;

export default lessonSlice.reducer;
