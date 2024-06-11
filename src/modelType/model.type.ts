type StudentType = {
    name: String;
    email: String;
    image_link: String;
    level: LevelType;
    fav_categories: CategoryType[];
    joined_lessons: LessonType[];
    fav_lessons: LessonType[];
    schedule: ScheduleType;
}

type InstructorType = {
    name: String;
    email: String;
    image_link: String;
    introduce: String;
    prizes: String[];
    lessons: LessonType[];
    programs: ProgramType[];
}

type CommunityType = {
    // lessonID: String;
    comments: CommentType[]

}

type CommentType = {
    user: StudentType | InstructorType;
    content: String;
}

interface LevelType {
    name: String,
    introduce: String;
}

interface CategoryType {
    name: String,
    introduce: String;
}

type ScheduleType = {
    scheduleLesson: DetailScheduleType[]
}

type DetailScheduleType = {
    date: String;
    lessons: LessonType[]
}

type OfflineLessonType = {
    address: String;
    start_at: String;
    end_at: String;
    registers: ResigterOffLessonType[]
}

interface ResigterOffLessonType {
    student_name: String;
    student_email: String;
    studentPhone: String;
}

type LessonType = {
    name: String;
    introduce: String;
    level: String;
    category: String;
    total_time: String;
    video_URL: String;
    instructor: InstructorType;
    community: CommunityType;
    offline_lesson: OfflineLessonType;

}

type ProgramType = {
    name: String;
    introduce: String;
    level: String;
    category: String;
    total_time: String;
    lessons: LessonType[];
    instructor: InstructorType;
}

// type InstructorProgramType = {
//     name: String;
//     introduce: String;
//     level: String;
//     category: String;
//     total_time: String;
//     lessons: LessonType[];
//     instructor: InstructorType;
// }

export type {
    StudentType,
    InstructorType,
    LessonType,
    ProgramType,
    LevelType,
    CategoryType,
    OfflineLessonType,
    ResigterOffLessonType,
    CommunityType,
    CommentType,
    ScheduleType,
    DetailScheduleType,

}