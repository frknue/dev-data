/*
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const cheerio = require('cheerio');

import { httpHeaders, puppeteerConfig, programmingLangs, programmingLangNames, frameworks, categories , timestamp} from "./globals";


const programmingLangsData = {};
const frameworksData = {};
const categoriesData = {};

// Scrape Indeed for jobs
puppeteer.use(StealthPlugin())
async function scrapeData(currenCity) {
    const browser = await puppeteer.launch(puppeteerConfig);
    const page = await browser.newPage();
    for(let i: number = 0; i < programmingLangs.length; i++) {
        const url: string = `https://de.indeed.com/jobs?q=${programmingLangs[i]}&l=${currenCity}&radius=0`;
        await page.goto(url);
        await page.waitForTimeout(1000);
        const html = await page.content();

        const $ = cheerio.load(html);
        const searchCount = $('#searchCountPages');
        const jobCount: string = searchCount.text();
        const jobs: string = jobCount.replace(/\s/g, '');
        const valTmp: string = jobs.slice(9, jobs.indexOf('Jobs'));
        const val: number = parseInt(valTmp.replace(/(?<=\d)[\s.]+(?=\d)/g, ''));
        const currentLang: string = programmingLangNames[i];

        console.log(`Site ${i} of ${programmingLangs.length} scraped`);

        programmingLangsData[currentLang] = val;
    }
    for(let i: number = 0; i < frameworks.length; i++) {
        const url: string = `https://de.indeed.com/jobs?q=${frameworks[i]}&l=${currenCity}&radius=0`;
        await page.goto(url);
        await page.waitForTimeout(1000);
        const html = await page.content();

        const $ = cheerio.load(html);
        const searchCount = $('#searchCountPages');
        const jobCount: string = searchCount.text();
        const jobs: string = jobCount.replace(/\s/g, '');
        const valTmp: string = jobs.slice(9, jobs.indexOf('Jobs'));
        const val: number = parseInt(valTmp.replace(/(?<=\d)[\s.]+(?=\d)/g, ''));
        const currentFramework: string = frameworks[i];

        console.log(`Site ${i} of ${frameworks.length} scraped`);

        frameworksData[currentFramework] = val;
    }
    for(let i: number = 0; i < categories.length; i++) {
        const url: string = `https://de.indeed.com/jobs?q=${categories[i]}&l=${currenCity}&radius=0`;
        await page.goto(url);
        await page.waitForTimeout(1000);
        const html = await page.content();

        const $ = cheerio.load(html);

        const searchCount = $('#searchCountPages');
        const jobCount: string = searchCount.text();
        const jobs: string = jobCount.replace(/\s/g, '');
        const valTmp: string = jobs.slice(9, jobs.indexOf('Jobs'));
        const val: number = parseInt(valTmp.replace(/(?<=\d)[\s.]+(?=\d)/g, ''));
        const currentCategories: string = categories[i];

        console.log(`Site ${i} of ${categories.length} scraped`);

        categoriesData[currentCategories] = val;
    }
    const data = {
        "city": currenCity,
        "programmingLangs": programmingLangsData,
        "frameworks": frameworksData,
        "categories": categoriesData,
        "timestamp": timestamp,
    }
    await browser.close();
    console.log(data)
    return data;
}

module.exports = {
    scrapeData,
}
*/