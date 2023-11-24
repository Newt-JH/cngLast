import connectToDatabase from '../../../util/db';

export default async function handler(req, res) {
  try {
    const connection = await connectToDatabase();

    const [rows] = await connection.query('SELECT * FROM product');
      console.log(rows);
    connection.end();

    res.status(200).json(rows);
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ error: 'Database error' });
  }
}