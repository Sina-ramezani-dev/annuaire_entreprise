import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getEntreprises() {
    return apiClient.get('/entreprises');
  },
  createEntreprise(data) {
    return apiClient.post('/entreprises', data);
  },
  updateEntreprise(id, data) {
    return apiClient.put(`/entreprises/${id}`, data);
  },
  deleteEntreprise(id) {
    return apiClient.delete(`/entreprises/${id}`);
  },
};
