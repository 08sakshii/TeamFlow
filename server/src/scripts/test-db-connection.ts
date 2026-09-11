import dotenv from 'dotenv';
import prisma from '../lib/prisma';

dotenv.config();

async function testDatabaseConnection() {
  const dbUrl = process.env.DATABASE_URL;

  console.log('--- TeamFlow PostgreSQL Connection Test ---');

  if (!dbUrl || dbUrl.includes('username:password')) {
    console.warn('⚠️  DATABASE_URL is not configured with real PostgreSQL credentials.');
    console.warn('   Please create server/.env and set a valid DATABASE_URL, e.g.:');
    console.warn('   DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/teamflow_db?schema=public"\n');
    process.exit(1);
  }

  try {
    console.log('Attempting to connect to PostgreSQL database via Prisma...');
    const result = await prisma.$queryRaw`SELECT 1 as connected`;
    console.log('✅ PostgreSQL connection verified successfully!');
    console.log('Query output:', result);
  } catch (error: any) {
    console.error('❌ Failed to connect to PostgreSQL database:');
    console.error(error.message || error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

testDatabaseConnection();
