import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {firebaseDatabase} from '../../firebase/firebaseConnect';
import {
  readDataDBFirestore,
  readDataDBFirestoreCollection,
  readDataDBFirestoreWithCondition,
  readDataFirestoreCollection,
} from '../../firebase/firebase/firebaseDBController';
import apiInstance from '../../api/apiInstance';
import getAllPrograms from '../../api/program/getAll';

// Hàm fetchAllPrograms sử dụng createAsyncThunk để lấy tất cả các chương trình
export const fetchAllPrograms = createAsyncThunk(
  'program/fetchAll',
  async (_, {rejectWithValue, dispatch}) => {
    try {
      const programs = await getAllPrograms();
      // const programs = await readDataDBFirestoreCollection('programs');
      dispatch(setAllPrograms(programs)); //đẩy action fetchAllPrograms vào reducer mới được xử lý
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const programSlice = createSlice({
  name: 'program',
  initialState: {
    program: null,
    allPrograms: null,
    isFav: false,
    join: false,
    loading: false,
    error: null,
  },
  reducers: {
    //danh sách các reducer sẽ dùng cho nội bộ đối tượng program
    setProgram: (state, action) => {
      state.program = action.payload;
    },
    setAllPrograms: (state, action) => {
      state.allPrograms = action.payload;
    },
    addProgram(state, action) {
      // Xử lý thêm chương trình vào danh sách
    },
    updateProgram(state, action) {
      // Xử lý cập nhật chương trình trong danh sách
    },
    removeProgram(state, action) {
      // Xử lý xoá chương trình khỏi danh sách
    },
    approveProgram(state, action) {
      // Xử lý duyệt chương trình
    },
    lockProgram(state, action) {
      // Xử lý khóa chương trình
    },
  },
  extraReducers: builder => {
    //dùng cho việc lắng nghe các action khác ko thuộc programSlice
    // builder.addCase(fetchAllPrograms.pending, (state) => {
    //     state.loading = true;
    // });
    // builder.addCase(fetchAllPrograms.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.allPrograms = action.payload;
    // });
    // builder.addCase(fetchAllPrograms.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    // });
  },
});

export const {
  setProgram,
  setAllPrograms,
  addProgram,
  updateProgram,
  removeProgram,
  approveProgram,
  lockProgram,
} = programSlice.actions;

export default programSlice.reducer;
