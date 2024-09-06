// migrations/2024-09-06-init.js

import { connect, connection, disconnect } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/calendar-core-db';

async function runMigration() {
  try {
    await connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = connection;

    // Créer des collections et insérer des documents de base
    const contactsCollection = db.collection('contacts');
    await contactsCollection.insertMany([
      { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
      { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    ]);

    console.log('Migration initiale réussie !');
  } catch (err) {
    console.error('Erreur lors de la migration initiale :', err);
  } finally {
    await disconnect();
  }
}

runMigration();
