import axios from 'axios';
import {STUDENT_RECORDS_URL} from '../constants/constants';




export const getStudentRecords = () => {
    return axios.get(STUDENT_RECORDS_URL);
}