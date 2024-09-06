// migrations/2024-09-07-add-index.js

import { connect, connection, disconnect } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/calendar-core-db';

async function runMigration() {
  try {
    await connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = connection;

    // Ajouter un index sur le champ 'email' de la collection 'contacts'
    const contactsCollection = db.collection('contacts');
    await contactsCollection.createIndex({ email: 1 }, { unique: true });

    console.log('Migration d\'index ajoutée avec succès !');
  } catch (err) {
    console.error('Erreur lors de l\'ajout de l\'index :', err);
  } finally {
    await disconnect();
  }
}

runMigration();
