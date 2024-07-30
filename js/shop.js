document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const kit = urlParams.get('shopnow');

    // Sample data for kitsContent
    const kitsContent = {
        shopping: [
            { name: "Upstreman Mini Fridge", 
              img: "https://m.media-amazon.com/images/I/61Y4tbAP8zL._AC_SX679_.jpg", 
              description: "Compact & Convenient:** With dimensions of 18.9” x 17.7” x 19.3” (W x D x H), this mini fridge fits easily on counters or under desks, making it perfect for apartments, dorms, offices, bedrooms, and RVs. Its reversible door enhances flexibility in tight spaces. The fridge offers adjustable temperatures from 33.8°F to 46.4°F (1°C to 8°C) and includes a compact freezer for making ice cubes and keeping food fresh. Operating quietly at just 38 dB, it’s ideal for noise-sensitive environments like bedrooms or offices. Energy-efficient with an estimated daily cost of only 0.5 kWh, it uses eco-friendly R600a refrigerant. Upstreman provides a one-year warranty for peace of mind. ", 
              amazonLink: "https://www.amazon.com/Upstreman-Adjustable-Thermostat-Refrigerator-Black-FR17/dp/B09W9KSQBL?th=1&linkCode=ll1&tag=rpt96-20&linkId=bc79f4caeed7dee9ccc964ff0a86567f&language=en_US&ref_=as_li_ss_tl" },

            { name: "Amazon Fire TV Stick ", 
              img: "https://m.media-amazon.com/images/I/51TjJOTfslL._AC_SY450_.jpg", 
              description: "Powerful Streaming Experience:** 50% more powerful than its predecessor, this device ensures fast Full HD streaming. It comes with an Alexa Voice Remote featuring power and volume controls. Enjoy over 1.5 million movies and TV episodes from platforms like Netflix, Prime Video, Disney+, and Peacock, and listen to millions of songs. With your Fire TV purchase, receive a 6-month MGM+ subscription for Hollywood movies and original series. Watch live TV, news, and sports with subscriptions to services like SLING TV and YouTube TV. Access over 300,000 free movies and episodes from ad-supported apps such as Amazon Freevee and Pluto TV. Use Alexa Voice Remote to search and launch shows, control TV and soundbar functions, and immerse yourself in Dolby Atmos audio on select titles. Setup is easy: plug in, turn on your TV, and connect to the internet. ", 
              amazonLink: "https://www.amazon.com/fire-tv-stick-with-3rd-gen-alexa-voice-remote/dp/B08C1W5N87?psc=1&linkCode=ll1&tag=rpt96-20&linkId=4de2eb16c6c883db7c481d2e93d63b3f&language=en_US&ref_=as_li_ss_tl" },

            { name: "Apple AirPods", 
              img: "https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SX522_.jpg", 
              description: "Apple AirPods (2nd Generation) Wireless Ear Buds, Bluetooth Headphones with Lightning Charging Case Included, Over 24 Hours of Battery Life, Effortless Setup for iPhone", 
              amazonLink: "https://www.amazon.com/Apple-AirPods-Charging-Latest-Model/dp/B07PXGQC1Q?psc=1&linkCode=ll1&tag=rpt96-20&linkId=2d7b2bd1de08110bf1a86e5fe3bb061c&language=en_US&ref_=as_li_ss_tl" },

            { name: "AGLUCKY Ice Makers ", 
              img: "https://m.media-amazon.com/images/I/71BFpUMS5zL._SX522_.jpg", 
              description: "The AGLUCKY ice maker offers rapid ice production, creating 9 bullet-shaped ice cubes every 6-8 minutes and producing up to 26.5 pounds of ice daily. With a 1.2L water tank and a self-cleaning function, it ensures a hassle-free ice-making experience. The intelligent control panel features indicators for Ice Full and Add Water, and the portable, compact design (11.428.7411.57 inches) with a sturdy handle and large viewing window makes it ideal for both home use and on-the-go. ", 
              amazonLink: "https://www.amazon.com/AGLUCKY-Countertop-26-5Lbs-Portable-Self-Cleaning/dp/B0CNVL19YJ?psc=1&linkCode=ll1&tag=rpt96-20&linkId=9dd44a02fb8867a3fa9c13ed470a0617&language=en_US&ref_=as_li_ss_tl" },

            { name: "Sony ZX Series Wired On-Ear Headphones", 
              img: "https://m.media-amazon.com/images/I/41CiQ7hR31L.__AC_SX300_SY300_QL70_FMwebp_.jpg", 
              description: " These lightweight headphones feature 1.38-inch neodymium dynamic drivers for a punchy, rhythmic sound across demanding tracks. The swiveling earcups allow for easy storage and enhanced portability, making them ideal for travel. Cushioned earpads and an enfolding closed-back design ensure total comfort and sound isolation. With a wide frequency range of 12 Hz to 22 kHz, they deliver deep bass, rich midrange, and soaring highs. The headphones come with a 3.94 ft cord and an L-shaped 3.5mm stereo mini plug, and have an impedance of 24 ohms at 1 kHz.", 
              amazonLink: "https://www.amazon.com/Sony-MDRZX110-BLK-Stereo-Headphones/dp/B00NJ2M33I?th=1&linkCode=ll1&tag=rpt96-20&linkId=9e2ea3d534765858537a8c50cfe07f53&language=en_US&ref_=as_li_ss_tl" },

            { name: "Apple Watch Series 9", 
              img: "https://m.media-amazon.com/images/I/71OSc6IfGcL._AC_SX522_.jpg", 
              description: "The aluminum Apple Watch Series 9 with the latest Sport Loop is carbon neutral, reflecting Apple's environmental commitment. Featuring the powerful S9 chip, this watch offers a superbright display and innovative touch-free interaction. It provides advanced health monitoring, including ECG and sleep tracking, along with fitness features, safety alerts, and seamless compatibility with Apple devices. Customizable with various bands and watch faces, it’s durable with crack resistance and 50m water resistance. Stay connected with text, calls, music, and notifications while enjoying three months of Apple Fitness+ for free. ", 
              amazonLink: "https://www.amazon.com/Apple-Smartwatch-Midnight-Aluminum-Resistant/dp/B0CSTFHP3W?psc=1&linkCode=ll1&tag=rpt96-20&linkId=ecd6294ddb52a1a604f5d00adbd371f4&language=en_US&ref_=as_li_ss_tl" },

            { name: "Blink Video Doorbell", 
              img: "https://m.media-amazon.com/images/I/41te-uzWxDL._AC_SY450_.jpg", 
              description: "Monitor your door from anywhere with the Video Doorbell, featuring 1080p HD video, infrared night vision, and two-way audio. Enjoy long battery life, customizable alerts, and privacy settings. Receive notifications for motion or doorbell presses and connect to existing wiring or use with a Sync Module (sold separately) for live view and audio. Save clips with a free 30-day Blink Subscription Plan trial or locally with a Sync Module 2 and USB drive (sold separately). Easily set up with the included AA batteries and connect via the app. Works with Alexa for hands-free access and two-way communication. Includes doorbell, batteries, screws, and a case opening tool; Sync Module 2 sold separately.https://www.amazon.com/Blink-Video-Doorbell/dp/B08SG2MS3V?psc=1&linkCode=ll1&tag=rpt96-20&linkId=3a39705521ad98bd4d8d371b5dc16407&language=en_US&ref_=as_li_ss_tl ", 
              amazonLink: "" },

            { name: "Amazon Echo Dot", 
              img: "https://m.media-amazon.com/images/I/518cRYanpbL._AC_SY450_.jpg", 
              description: "Experience superior sound with the latest Echo Dot, offering clearer vocals, deeper bass, and vibrant audio. Play music, audiobooks, and podcasts from services like Amazon Music, Apple Music, and Spotify, or via Bluetooth. Alexa provides weather updates, sets timers, answers questions, and even tells jokes. Use voice commands and built-in sensors to control smart home devices, set routines, and maintain comfort. With robust privacy controls and a mic off button, your personal information is secure. Pair with other Echo devices for multi-room audio, create a home theater with Fire TV, or extend wifi coverage with compatible eero networks. ", 
              amazonLink: "https://www.amazon.com/All-New-release-Smart-speaker-Charcoal/dp/B09B8V1LZ3?psc=1&linkCode=ll1&tag=rpt96-20&linkId=d0aeb8a8df50ad94b4b2887a498a912d&language=en_US&ref_=as_li_ss_tl" },

            { name: "Amazon Kindle Paperwhite", 
              img: "https://m.media-amazon.com/images/I/51QCk82iGcL._AC_SY450_.jpg", 
              description: "The Kindle Paperwhite now features a 6.8” display with thinner borders, adjustable warm light, and up to 10 weeks of battery life with 20% faster page turns. Designed for reading, it offers a flush-front 300 ppi glare-free display that mimics real paper, even in bright sunlight. Store thousands of books with a single USB-C charge lasting weeks. Enjoy adjustable warm light for a more comfortable reading experience and waterproof design for worry-free use at the beach or in the bath. Discover new stories with Kindle Unlimited and listen hands-free with an Audible subscription and Bluetooth headphones or speakers. ", 
              amazonLink: "https://www.amazon.com/Kindle-Paperwhite-16-GB-adjustable/dp/B09TMN58KL?psc=1&linkCode=ll1&tag=rpt96-20&linkId=b4b42cf11d97a99d61a7fc1dc1ff9d08&language=en_US&ref_=as_li_ss_tl" },

            { name: "Apple iPad", 
              img: "https://m.media-amazon.com/images/I/61goypdjAYL._AC_SX522_.jpg", 
              description: "The reimagined iPad offers a stunning 10.9-inch Liquid Retina display, powered by the A14 Bionic chip for smooth performance. With iPadOS, multitask seamlessly, use Scribble with Apple Pencil, and access a vast array of apps from the App Store. Enjoy fast Wi-Fi 6 connectivity and all-day battery life, ideal for gaming, photo editing, and more. The Apple Pencil (1st generation) transforms iPad into a drawing and note-taking powerhouse, while the Magic Keyboard Folio adds a versatile keyboard and protective back. Touch ID ensures secure unlocking and payments, and advanced 12MP Ultra Wide and Wide cameras support high-quality video and photo capabilities. ", 
              amazonLink: "https://www.amazon.com/Apple-2022-10-9-inch-iPad-Wi-Fi/dp/B0BJLCWFNM?psc=1&linkCode=ll1&tag=rpt96-20&linkId=b33544fe536645aa6f856b6842245028&language=en_US&ref_=as_li_ss_tl" },






            
  ]
        // Add more kits similarly
    };

    if (kitsContent[kit]) {
        const productsContainer = document.querySelector('.products-container');
        const productsPreview = document.querySelector('.products-preview');
        productsContainer.innerHTML = '';
        productsPreview.innerHTML = '';

        kitsContent[kit].forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.dataset.name = `p-${index + 1}`;
            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
            `;
            productsContainer.appendChild(productDiv);

            const previewDiv = document.createElement('div');
            previewDiv.classList.add('preview');
            previewDiv.dataset.target = `p-${index + 1}`;
            previewDiv.innerHTML = `
                <i class="fas fa-times"></i>
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span>Verified</span>
                </div>
                <p>${product.description}</p>
                <div class="buttons">
                    <a href="${product.amazonLink}" class="amazon-button" target="_blank">Buy On Amazon</a>
                </div>
            `;
            productsPreview.appendChild(previewDiv);
        });
    } else {
        document.querySelector('.container').innerHTML = '<h3>Kit not found</h3>';
    }

    // Function to handle click on product box and show preview
    document.querySelectorAll('.products-container .product').forEach(product => {
        product.onclick = () => {
            const productName = product.dataset.name;
            const previewBoxes = document.querySelectorAll('.products-preview .preview');
            
            previewBoxes.forEach(preview => {
                if (preview.dataset.target === productName) {
                    preview.classList.add('active');
                } else {
                    preview.classList.remove('active');
                }
            });

            document.querySelector('.products-preview').style.display = 'flex';
        };
    });

    // Function to handle click on close button in product preview
    document.querySelectorAll('.products-preview .preview .fa-times').forEach(close => {
        close.onclick = () => {
            close.parentElement.classList.remove('active');
            document.querySelector('.products-preview').style.display = 'none';
        };
    });

    // Functionality to toggle mobile menu
    document.querySelector('#menu-btn').onclick = () => {
        document.querySelector('.header .navbar').classList.toggle('active');
        document.querySelector('.header .search-form').classList.remove('active');
    };

    // Close mobile menu on scroll
    window.onscroll = () => {
        document.querySelector('.header .search-form').classList.remove('active');
        document.querySelector('.header .navbar').classList.remove('active');
    };
});

