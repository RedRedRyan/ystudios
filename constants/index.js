const navLinks = [
    {
       id: "services",
       title: "Services",
    },
    {
       id: "about",
       title: "About Us",
    },
    {
       id: "work",
       title: "Projects",
    },
    {
       id: "contact",
       title: "Contact",
    },
   ];
   
   const cocktailLists = [
    {
       name: "Chapel Hill Shiraz",
       country: "AU",
       detail: "Battle",
       price: "$10",
    },
    {
       name: "Caten Malbee",
       country: "AU",
       detail: "Battle",
       price: "$49",
    },
    {
       name: "Rhino Pale Ale",
       country: "CA",
       detail: "750 ml",
       price: "$20",
    },
    {
       name: "Irish Guinness",
       country: "IE",
       detail: "600 ml",
       price: "$29",
    },
   ];
   
   const mockTailLists = [
    {
       name: "Tropical Bloom",
       country: "US",
       detail: "Battle",
       price: "$10",
    },
    {
       name: "Passionfruit Mint",
       country: "US",
       detail: "Battle",
       price: "$49",
    },
    {
       name: "Citrus Glow",
       country: "CA",
       detail: "750 ml",
       price: "$20",
    },
    {
       name: "Lavender Fizz",
       country: "IE",
       detail: "600 ml",
       price: "$29",
    },
   ];
   
   const profileLists = [
    {
       imgPath: "/images/profile1.png",
    },
    {
       imgPath: "/images/profile2.png",
    },
    {
       imgPath: "/images/profile3.png",
    },
    {
       imgPath: "/images/profile4.png",
    },
   ];
   
   const featureLists = [
    "Perfectly balanced blends",
    "Garnished to perfection",
    "Ice-cold every time",
    "Expertly shaken & stirred",
   ];
   
   const goodLists = [
    "Handpicked ingredients",
    "Signature techniques",
    "Bartending artistry in action",
    "Freshly muddled flavors",
   ];
   
   const storeInfo = {
    heading: "Where to Find Us",
    address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
    contact: {
       phone: "(555) 987-6543",
       email: "hello@jsmcocktail.com",
    },
   };
   
   const openingHours = [
    { day: "Mon–Thu", time: "11:00am – 12am" },
    { day: "Fri", time: "11:00am – 2am" },
    { day: "Sat", time: "9:00am – 2am" },
    { day: "Sun", time: "9:00am – 1am" },
   ];
   
   const socials = [
    {
       name: "Instagram",
       icon: "/images/insta.png",
       url: "#",
    },
    {
       name: "X (Twitter)",
       icon: "/images/x.png",
       url: "#",
    },
    {
       name: "Facebook",
       icon: "/images/fb.png",
       url: "#",
    },
   ];
   
   const sliderLists = [
    {
       id: 1,
       name: "Classic Mojito",
       image: "/images/drink1.png",
       title: "Simple Ingredients, Bold Flavor",
       description:
        "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
    },
    {
       id: 2,
       name: "Raspberry Mojito",
       image: "/images/drink2.png",
       title: "A Zesty Classic That Never Fails",
       description:
        "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
    },
    {
       id: 3,
       name: "Violet Breeze",
       image: "/images/drink3.png",
       title: "Simple Ingredients, Bold Flavor",
       description:
        "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
    },
    {
       id: 4,
       name: "Curacao Mojito",
       image: "/images/drink4.png",
       title: "Crafted With Care, Poured With Love",
       description:
        "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
    },
   ];
const projectsData = [
    {
        id: 1,
        title: 'BlockFridge',
        category: 'Software',
        description: 'Safeguarding customer payment to transform prepaid retail transactions.Smart contracts confirm pickup, triggering instant merchant payouts.',
        image: '/projects/game.jpg', // Path to your image
        link: 'https://github.com/JudeTulel/BlockFridge' // Project detail page or external link
    },
    {
        id: 2,
        title: 'Rave-Race',
        category: 'Games',
        description: 'Action Packed racing game, with multiplayer maps and variety of cars to race.',
        image: '/projects/ecommerce.jpg',
        link: '/projects/ecommerce'
    },
    {
        id: 3,
        title: 'Y-Coin',
        category: 'Software',
        description: 'A decentralized cryptocurrency that uses blockchain technology to ensure security and privacy.',
        image: '/projects/web.jpg',
        link: '/projects/web'
    },
    {
        id: 4,
        title: 'Campus-Connect',
        category: 'Software',
        description: 'A social media platform that connects students to their peers and professors. Allowing sharing of files and scheduling of classes',
        image: '/projects/web.jpg',
        link: '/projects/web'
    }

    // Add other projects...
];
const servicesData = [
    {
        id:1,
        title: 'Graphic Design',
        icon: '/images/icon-design.svg',
        description: 'Craft visually compelling brand identities, marketing materials, and digital assets. We help businesses communicate their message effectively through Brand identity and logo design.',
        image: new URL ('../public/images/graphicdesign.png', import.meta.url).href,
        link: '/services/design',
        videolink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'Software Development',
      icon: '/images/icon-web.svg',
      description: 'Point of Sale (POS) systems, high-performance websites, cross-platform mobile applications, and immersive Unity Engine games.',
        image: new URL ('../public/images/softwaredev.png', import.meta.url).href,
      link: '/services/web',
        videolink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
        id: 3,
        title: 'Animation',
        icon: '/images/icon-animation.svg',
        description: 'From explainer videos to interactive web animations, visually engaging motion content that is captivating',
        image: new URL ('../public/images/anims.png', import.meta.url).href,
        videolink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        link: '/services/animation'
    },

]
   
   export {
    navLinks,
    cocktailLists,
    mockTailLists,
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    sliderLists,
       projectsData,
       servicesData,
   };