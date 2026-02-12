export interface Item {
    title : string
    description : string
    link : string 
    image : string
}

export const items : Item[] = [
    {
      title: "Web Portfolio",
      description:
        "A ReactJS web portfolio that showcases my recent project achievements in my IT journey.",
      link: "https://github.com/John-BYTEs/portfolio",
      image: "./portfolio.png",
    },
    {
      title: "Country Explorer",
      description:
        "A ReactJS web application that fetches country data from a provided API endpoint, maps the data, and dynamically displays detailed information about a selected country. The application will leverage React components, hooks, and state management.",
      link: "https://github.com/John-BYTEs/Country-Explorer",
      image: "./countryexplorer.jpg",
    },
    
    {
      title: "News Scraper",
      description:
        "This project involves building a ReactJS app using Cheerio to scrape and display news headlines, authors, dates, and sources. It handles dynamic content, ensures accurate links, and includes filtering and sorting features. The project also addresses ethical scraping practices and includes a bonus input field for scraping any URL, with a loading indicator for better UX.",
      link: "No link available.",
      image: "./newsscraper.jpg",
    },
    {
      title: "Simple Point-Of-Sale",
      description:
        "A full-stack Point of Sale (POS) application built with React.js and Tailwind CSS on the frontend, and Laravel 12 with MySQL on the backend. Key features include product listing, cart management, and receipt printing.",
      link: "https://github.com/John-BYTEs/Simple-POS",
      image: "./simplepos.jpg",
    },
    {
      title: "Bosxmark Motovlog Long Sleeve",
      description:
        "A full sublimation long sleeve design for Bosxmark Motovlog designed to pair with his motorcycle color.",
      link: "./bosxmark-MOCKUP.png",
      image: "./bosxmark-MOCKUP.png",
    },
    {
      title: "Valencia Chess Club Tshirt",
      description:
        "A full sublimation tshirt design for Valencia Chess Club in VNHS.",
      link: "./finalChessClub2.png",
      image: "./finalChessClub2.png",
    },
    {
      title: "Jomar Motovlog Long Sleeve",
      description:
        "A full sublimation long sleeve design for Jomar Motovlog.",
      link: ".Jomar_Moto.png",
      image: "./Jomar_Moto.png",
    },
    {
      title: "Purok Makiangayon Jersey",
      description:
        "A full sublimation jersey design for Purok Makiangayon basketball players.",
      link: "./prkMkiangyn.png",
      image: "./prkMkiangyn.png",
    },
    {
      title: "Baslay Elem School Alumni T-shirt",
      description:
        "A full sublimation t-shirt design for Baslay Elementary School alumni.",
      link: "./baslayClient.png",
      image: "./baslayClient.png",
    },
    {
      title: "Cyber Security Awareness",
      description:
        "A text graphics for digital security awareness.",
      link: "./Johndel-Wolfe_TextActivity.png",
      image: "./Johndel-Wolfe_TextActivity.png",
    },
    
];