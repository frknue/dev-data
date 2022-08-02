// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const db = require('../../../libs/db');

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { country, city } = req.query;
    const cityName: string = city.toString().toLowerCase();
    const countryName: string  = country.toString().toLowerCase();
    
    const cityDatabase = await db.getCity(countryName ,cityName);

    if (cityDatabase) {
        console.log('!!!!!!!!!!!!!!!!! City exists, send it !!!!!!!!!!!!!!!!!');
        res.send(cityDatabase);
      } else {
        res.send(0);
      }
}