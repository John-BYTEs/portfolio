export interface Item {
    title : string
    description : string
    link : string 
    image : string
}

export const items : Item[] = [
    {
      title: "Country Explorer",
      description:
        "A ReactJS web application that fetches country data from a provided API endpoint, maps the data, and dynamically displays detailed information about a selected country. The application will leverage React components, hooks, and state management.",
      link: "https://github.com/John-BYTEs/Country-Explorer",
      image: "/countryexplorer.jpg",
    },
    {
      title: "News Scraper",
      description:
        "This project involves building a ReactJS app using Cheerio to scrape and display news headlines, authors, dates, and sources. It handles dynamic content, ensures accurate links, and includes filtering and sorting features. The project also addresses ethical scraping practices and includes a bonus input field for scraping any URL, with a loading indicator for better UX.",
      link: "No link available.",
      image: "/newsscraper.jpg",
    },
    {
      title: "Simple Point-Of-Sale",
      description:
        "A full-stack Point of Sale (POS) application built with React.js and Tailwind CSS on the frontend, and Laravel 12 with MySQL on the backend. Key features include product listing, cart management, and receipt printing.",
      link: "https://github.com/John-BYTEs/Simple-POS",
      image: "/simplepos.jpg",
    },
    {
      title: "Long Sleeve Full Sublimation of Bosxmark Motovlog",
      description:
        "A full sublimation long sleeve design for Bosxmark Motovlog designed to pair with his motorcycle color.",
      link: "No link available.",
      image: "/bosxmark-MOCKUP.png",
    },
    {
      title: "Valencia Chess Club Tshirt",
      description:
        "A full sublimation tshirt design for Valencia Chess Club in VNHS.",
      link: "No link available.",
      image: "/finalChessClub2.png",
    },
    {
      title: "Long Sleeve Full Sublimation of Jomar Motovlog",
      description:
        "A full sublimation long sleeve design for Jomar Motovlog.",
      link: "No link available.",
      image: "/Jomar_Moto.png",
    },
    {
      title: "Basketball Jersey Design for Purok Makiangayon",
      description:
        "A full sublimation jersey design for Purok Makiangayon basketball players.",
      link: "No link available.",
      image: "/prkMkiangyn.png",
    },
    
];