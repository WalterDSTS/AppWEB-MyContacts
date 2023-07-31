import CategoryMapper from './mappers/CategoryMapper';
import HttpClient from './utils/HttpClient';

const baseUrl = 'http://localhost:3001';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient(baseUrl);
  }

  async listCategories() {
    const categories = await this.httpClient.get('/categories');

    return categories.map((category) => CategoryMapper.toDomain(category));
  }
}

export default new CategoriesService();
