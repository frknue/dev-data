const dayjs = require("dayjs");

export const httpHeaders = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
    
}

export const puppeteerConfig = {
    ignoreHTTPSErrors: true,
    headless: false,
    args: [
        `--window-size=600,1000`,
        "--window-position=000,000",
        "--disable-dev-shm-usage",
        "--no-sandbox",
        '--user-data-dir="/tmp/chromium"',
        "--disable-web-security",
        "--disable-features=site-per-process",
      ],
};
// get timestamp with dayjs
export const timestamp = dayjs().format('DD-MM-YYYY');
export const currenCity = 'Heidelberg'; // Get this from user input

export const programmingLangs: string[] = ["Java", "JavaScript", "Typescript", "Python", "Kotlin", "C", "C%2B%2B", "C%23", "Go", "Rust", "Visual Basic", "PHP", "Delphi", "Swift", "Ruby", "Perl", "Objective C"]
export const programmingLangNames: string[] = [];
programmingLangs.forEach((el: string) => {
    if (el == 'C%2B%2B') el = 'C++';
    if (el == 'C%23') el = 'C#';
    programmingLangNames.push(el);
});
export const frameworks: string[] = ["Angular", "React", "Vue", "ASP NET", "Django", "jQuery", "Spring", "Laravel", "Ruby on Rails", "NodeJS"]
export const categories: string[] = ["DevOps", "Web Developer", "Backend Developer", "Frontend Developer", "Fullstack Developer", "Data Scientist", "Game Developer", "Mobile Developer", "IT Security"]

export const dummyData = {
    "city":"Stuttgart",
    "programmingLangs":{
        "Java":2247,
        "JavaScript":1227,
        "Python":1001,
        "Kotlin":235,
        "C++":442,
        "C#":567,
        "Golang":946,
        "Rust":20,
        "Visual Basic":36,
        "PHP":514,
        "Delphi":33,
        "Swift":100,
        "Ruby":56,
        "Perl":48,
        "Lua":13
    },
    "frameworks":{
        "Angular":459,
        "React":579,
        "Vue":277,
        "ASP NET":78,
        "Django":28,
        "jQuery":87,
        "Spring":413,
        "Laravel":97
    },
    "categories":{
        "DevOps":954,
        "Web Developer":626,
        "Backend Developer":507,
        "Frontend Developer":366,
        "Fullstack Developer":144,
        "Data Scientist":3333,
        "Game Developer":3333,
        "Mobile Developer":3333
    },
    "timestamp":"06-05-2022"
}