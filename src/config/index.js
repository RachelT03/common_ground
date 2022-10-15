import { Client, Account, ID } from 'appwrite';

const client = new Client().setEndpoint('http://localhost/v1')
  .setProject('634aaa8d895d54512b70');

export default client;