const axios = require('axios');

// Get blocks from the Notion API with axios
  const response = axios.get(
    `https://api.notion.com/v1/blocks/d34ce50e-380b-43fb-8191-cb3ceaa3c526`,
    {
      headers: {
        // 'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
        'Authorization': 'Bearer secret_YA2mfxGx8uUJc4YIHjIIdNYCk4Crv4kutP8QeJankUl',
        // 'Notion-Version': `${process.env.NOTION_VERSION}`
        'Notion-Version': '2022-06-28',
        "Content-Type": "application/json; charset=utf-8",
		"Cookie": "notion_browser_id=22bcc65c-61dd-42ce-ba2b-8ba60e8afcfb; notion_check_cookie_consent=false"
     }
    }
  );
  const block =  response;


// Export a test block
export const testBlock = { data: 'hi' };