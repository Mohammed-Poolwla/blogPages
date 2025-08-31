import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://websrc.uk';
  const content = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/api/sitemap.xml`;
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(content);
}


