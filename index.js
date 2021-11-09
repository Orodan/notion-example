import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config()

const databaseId = process.env.NOTION_DATABASE_ID

const notion = new Client({ auth: process.env.NOTION_KEY })

async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
          title: [
            {
              "text": {
                "content": text
              }
            }
          ]
        }
      }
    })

    console.log('response: ', response)
    console.log('Success ! Entry added.')
  } catch (error) {
    console.error(error.body);
  }
}

addItem('Yurts in Big Sur, California');