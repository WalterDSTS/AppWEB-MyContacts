import HttpClient from './utils/HttpClient';

const baseUrl = 'http://localhost:3001';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient(baseUrl);
  }

  listCategories() {
    return this.httpClient.get('/categories');
  }
}

export default new CategoriesService();
