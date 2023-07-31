import ContactMapper from './mappers/ContactMapper';
import HttpClient from './utils/HttpClient';

const baseUrl = 'http://localhost:3001';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient(baseUrl);
  }

  async listContacts(orderBy = 'asc') {
    const contacts = await this.httpClient.get(`/contacts?orderBy=${orderBy}`);

    return contacts.map((contact) => ContactMapper.toDomain(contact));
  }

  async getContactById(id) {
    const contact = await this.httpClient.get(`/contacts/${id}`);

    return ContactMapper.toDomain(contact);
  }

  createContact(contact) {
    const body = ContactMapper.toPersistence(contact);

    return this.httpClient.post('/contacts', { body });
  }

  updateContact(id, contact) {
    const body = ContactMapper.toPersistence(contact);

    return this.httpClient.put(`/contacts/${id}`, { body });
  }

  deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
