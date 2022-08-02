// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const db = require('../../../libs/db');


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse

) {
    const { country } = req.query;
    const countryList = await db.getCities(country.toString().toLowerCase()) 
    console.log(countryList)
    res.send(countryList)
}