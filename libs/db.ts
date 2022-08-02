const dayjs = require('dayjs');
export {}

const { MongoClient } = require('mongodb');
// require('dotenv').config();

const uri = process.env.URI;

const client = new MongoClient(uri);

async function updateDB(data: any) {
    await client.connect()
        .then(() => {console.log('Connected')})
        .catch(err => {console.log(err)});
    // If data exists, update it otherwise create a new entry
    const city = await client.db('DevProject').collection('germany').findOne({city: data.city});
    if (city) {
        console.log('City exists, update it');
        await client.db('DevData').collection('Cities').replaceOne({city: data.city}, data);
    }
        else {
        console.log('City does not exist, create a new entry');
        // await client.db('DevData').collection('Cities').insertOne(data);
    }
    // await client.close();
}

async function getCity(country: String , city: String) {
    await client.connect()
        .then(() => {console.log('Connected')})
        .catch(err => {console.log(err)});
    const cityData = await client.db('DevProject').collection(country.toLowerCase()).findOne({city: city});
    // await client.close();
    return cityData;
}

async function getCities(country: String) {
    await client.connect()
    .then(() => {console.log('Connected')})
    .catch(err => {console.log(err)});
    const countries = await client.db('DevProject').collection(country.toLowerCase()).find({}, {projection: {_id : 0, city: 1}}).toArray();

    const countryList = await countries.map(element => {
        return element.city
    });

    // await client.close();
    return countryList
}

async function userSuggestion(data: any) {
    const date = dayjs().format('DD-MM-YYYY');
    console.log(date)
    await client.connect()
    .then(() => {console.log('Connected')})
    .catch(err => {console.log(err)});

    const userSuggestion = await client.db('UserSuggestions').collection(date).findOne({city: data.city});

    if(userSuggestion) {
        console.log(data)
        // await client.close();
        return {exists: true}
    } else {
        console.log(data)
        await client.db('UserSuggestions').collection(date).insertOne({city: data.city, country: data.country});
        // await client.close();
        return {exists: false}
    }
}

async function getCountCountries(country: String) {
    await client.connect()
    .then(() => {console.log('Connected')})
    .catch(err => {console.log(err)});
    const count = await client.db('DevProject').collection(country.toLocaleLowerCase()).countDocuments();

    // await client.close();
    return count;
}

async function getAllDocumentsCount() {
    await client.connect()
    .then(() => {console.log('Connected')})
    .catch(err => {console.log(err)});
    const collections = await client.db('DevProject').listCollections().toArray();

    let count = 0;

    for(let collection of collections) {
        let x = await client.db('DevProject').collection(collection.name).countDocuments();
        count += x;
    }

    // await client.close();
    return count;
}


module.exports = {
    updateDB,
    getCity,
    getCities,
    userSuggestion,
    getCountCountries,
    getAllDocumentsCount
}
