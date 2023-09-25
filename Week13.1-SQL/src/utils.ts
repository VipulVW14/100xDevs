import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://bgpogneh:4hgDzzZtApq2xHBbHmG2rTdFJHByKZcW@bubble.db.elephantsql.com/bgpogneh");
    await client.connect();
    return client;
}

