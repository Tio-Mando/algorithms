/**
 * Sistema de Gestión de Cursos Online (Online Course Management System)
 */
class Course {
    constructor(courseId, title, instructor, duration, price) {
        if (courseId.trim() === '' || typeof courseId !== 'string') throw new Error("courseId no es un string");
        if (title.trim() === '' || typeof title !== 'string') throw new Error("title no es un string");
        if (instructor.trim() === '' || typeof instructor !== 'string') throw new Error("instructor no es un string");
        if (duration <= 0) throw new Error("duration debe ser mayor que 0");
        if (price <= 0) throw new Error("price debe ser mayor que 0");

        this.enrolledStudents = []
        this.lessons = []
        this.courseId = courseId
        this.title = title
        this.instructor = instructor
        this.duration = duration
        this.price = price

    }

    enrollStudent(student) {
        if (!(student instanceof Student)) throw new Error("student no es una instancia de objeto de Student");
        if (this.enrolledStudents.length === 0 || this.enrolledStudents.find(stu => stu.studentId === student.studentId) === undefined) this.enrolledStudents.push(student)

        return this.enrollStudent.length

    }

    addLesson(lessonTitle, duration) {
        if (typeof lessonTitle !== 'string') throw new Error("lessonTitle no es un string");
        if (duration <= 0) throw new Error("duration debe ser mayor que =");

        this.lessons.push({
            lessonTitle: lessonTitle,
            duration: duration
        })
        return this.lessons.length
    }

    getTotalLessons() {
        return this.lessons.length
    }

    getTotalDuration() {
        return this.lessons.reduce((acumulador, lesson) => {
            return acumulador + (lesson.duration)
        }, 0)
    }

    getEnrollmentCount() {
        return this.enrollStudent.length
    }

    getCompletionRate() {
        const studentsAproved = this.enrolledStudents.filter(stu => {
            return stu.completedCourses.filter(curse => curse.title === this.title)
        })

        // parseFloat(((studentsAproved / this.enrolledStudents.length) * 100).toFixed(2))
        return studentsAproved
    }
}

class Student {
    constructor(studentId, name, email) {
        if (studentId.trim() === '' || typeof studentId !== 'string') throw new Error("");
        if (name.trim() === '' || typeof name !== 'string') throw new Error("");
        if (email.trim() === '' || typeof email !== 'string') throw new Error("");


        this.enrolledCourses = []
        this.completedCourses = []
        this.progress = {}
        this.studentId = studentId
        this.name = name
        this.email = email
    }

    enrollInCourse(course) {
        throw new Error('Method enrollInCourse not implemented');
    }

    completeCourse(courseId) {
        throw new Error('Method completeCourse not implemented');
    }

    updateProgress(courseId, percentage) {
        throw new Error('Method updateProgress not implemented');
    }

    getProgress(courseId) {
        throw new Error('Method getProgress not implemented');
    }

    getTotalCoursesEnrolled() {
        throw new Error('Method getTotalCoursesEnrolled not implemented');
    }

    getCompletionRate() {
        throw new Error('Method getCompletionRate not implemented');
    }
}

class LearningPlatform {
    constructor(name) {
        throw new Error('LearningPlatform constructor not implemented');
    }

    addCourse(course) {
        throw new Error('Method addCourse not implemented');
    }

    registerStudent(student) {
        throw new Error('Method registerStudent not implemented');
    }

    getCoursesByInstructor(instructor) {
        throw new Error('Method getCoursesByInstructor not implemented');
    }

    getMostPopularCourse() {
        throw new Error('Method getMostPopularCourse not implemented');
    }

    getTotalRevenue() {
        throw new Error('Method getTotalRevenue not implemented');
    }

    getAverageCompletionRate() {
        throw new Error('Method getAverageCompletionRate not implemented');
    }

    getStudentStatistics(studentId) {
        throw new Error('Method getStudentStatistics not implemented');
    }
}


const photografi = new Course('21231', 'Curso de Fotografia', 'Rosangel Rodriguez', 231, 400)
const student1 = new Student('1', 'Erick Toro', 'ellacrita@gmail.com')
const student2 = new Student('2', 'Carlos TOro', 'acrita@gmail.com')
student1.completedCourses.push(photografi)
console.log(photografi.enrollStudent(student1))
console.log(photografi.enrollStudent(student2))
console.log(photografi.addLesson('clase 1: La muerte', 22))
console.log(photografi.addLesson('clase 2: camara', 10))
console.log(photografi.getTotalLessons())
console.log(photografi.getTotalDuration())
console.log(photografi.getEnrollmentCount())
console.log(photografi.getCompletionRate())






module.exports = { Course, Student, LearningPlatform };
