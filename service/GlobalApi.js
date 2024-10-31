import axios from 'axios';

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient = axios.create({
  baseURL: 'http://localhost:1337',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  },
});

const CreateNewResume = (data) => axiosClient.post('/api/resumes', data);

const GetUserResumes = (userEmail) => axiosClient.get('/api/resumes?filters[userEmail][$eq]=${userEmail}')

const UpdateResumeDetail=(data)=> axiosClient.put('/api/resumes', data);

export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetail
}
