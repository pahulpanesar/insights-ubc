
export default class Course {
    [key: string]: any;
    courses_dept: string;// - The department that offered the course.
    courses_id: string;// - The course number (will be treated as a string, e.g., 499b).
    courses_avg: number;// - The average of the course offering.
    courses_instructor: string;// - The instructor teaching the course offering.
    courses_title: string;// - The name of the course.
    courses_pass: number;// - The number of students that passed the course offering.
    courses_fail: number;// - The number of students that failed the course offering.
    courses_audit: number;// - The number of students that audited the course offering.
    courses_uuid: string;// - The unique id of a course offering.
    courses_year: number; //This key represents the year the course was offered. If the "Section":"overall"property is set, the year should be 1900
    constructor() {
    }
}
