import Dexie, { Table } from 'dexie';

type UserTable = {
  id?: string;
  name: string;
  cpf: string;
  phone: string;
  email: string;
};

const initialData = [
  {
    name: 'Joao da Silva',
    cpf: '26899337649',
    phone: '4233335555',
    email: 'joao@joaosilva.com.br',
  },
  {
    name: 'Maria Antonieta',
    cpf: '65138896180',
    phone: '1255553333',
    email: 'maria@mariaantonieta.com.br',
  },
  {
    name: 'Luiz Souza',
    cpf: '32420496329',
    phone: '1144446666',
    email: 'luiz@luizsouza.com.br',
  },
];

export class Database extends Dexie {
  users!: Table<UserTable>;

  constructor() {
    super('users_db');
    this.version(1).stores({
      users: '++id, name, cpf, phone, email',
    });
  }
}

const database = new Database();

database.on('populate', function (transaction) {
  database.users.bulkAdd(initialData);
});

export { database };
