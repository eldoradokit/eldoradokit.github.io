document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const kit = urlParams.get('shopnow');

    // Sample data for kitsContent
    const kitsContent = {
        shopping: [
            { name: "Portable Neck Fan", 
              img: "https://m.media-amazon.com/images/I/7198ZLVxH1L._AC_SX679_.jpg", 
              description: "The upgraded personal neck fan features 72 wind outlets and 60 twin-turbine blades for 360° cooling. Weighing just 8.8 ounces, it's lightweight and hands-free for comfortable, long-term use. Operating at less than 20 decibels, it's ultra-quiet, made from food-grade TPE for enhanced comfort and durability. With a 4000mAh battery, it offers 3 to 24 hours of operation depending on speed settings. Ideal for all ages and versatile for various activities, this neck fan makes a thoughtful gift for anyone seeking portable cooling.  ", 
              amazonLink: "https://www.amazon.com/Portable-Bladeless-Rechargeable-Personal-directions/dp/B09PCSR9SX?crid=1GHTCVVNG7EZM&dib=eyJ2IjoiMSJ9.ND4SzjJ6T19M6epvZYdCX_gFShrHph-h33YAe9CpHbhmjDi-WGTbEErb1eWjd0ABugCcXQW-m5iiBURPyAeyT8NlRTIaEp7gQ-yxTPnRROsul03PLbw6RacczY3SUU82kRm_dPMnw-X6c6kUVLsAPncy0LrenlF-yh_xiWiDug-bRpO_GRgVapAWn3inSgSw1f_XNWPCowk7nWIx1hYZpii20B_TIEUsQBckzqiZFI06RPk24OLNUVlbakbYVpyWprhdg1i20gYYDz010Gl90IsFFQAX-3rZIu_fHGSydPE.qNdUc0c4XZWlIHG8W_M1YEkBN8OFdklesfq-E0ulJiw&dib_tag=se&keywords=trending&qid=1722431307&sprefix=tren%2Caps%2C473&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=rpt96-20&linkId=9f4dba275a09649798bbf6b1c7d9df96&language=en_US&ref_=as_li_ss_tl" },

            { name: "Clean Skin Club Clean Towels", 
              img: "https://m.media-amazon.com/images/I/51bryY47IFL._SX679_.jpg", 
              description: " These dermatologist-tested, biobased face towels are designed to help achieve visibly clearer skin with reduced irritation and redness. Featuring advanced cellulose fiber technology, they support skin health and barrier function while being 100% vegan and cruelty-free. Enjoy the assurance of a clean, bacteria-free towel every time you dry your face. ", 
              amazonLink: "https://www.amazon.com/Clean-Skin-Club-Disposable-Sensitive/dp/B07PBXXNCY?crid=1GHTCVVNG7EZM&dib=eyJ2IjoiMSJ9.ND4SzjJ6T19M6epvZYdCX_gFShrHph-h33YAe9CpHbhmjDi-WGTbEErb1eWjd0ABugCcXQW-m5iiBURPyAeyT8NlRTIaEp7gQ-yxTPnRROsul03PLbw6RacczY3SUU82kRm_dPMnw-X6c6kUVLsAPncy0LrenlF-yh_xiWiDug-bRpO_GRgVapAWn3inSgSw1f_XNWPCowk7nWIx1hYZpii20B_TIEUsQBckzqiZFI06RPk24OLNUVlbakbYVpyWprhdg1i20gYYDz010Gl90IsFFQAX-3rZIu_fHGSydPE.qNdUc0c4XZWlIHG8W_M1YEkBN8OFdklesfq-E0ulJiw&dib_tag=se&keywords=trending&qid=1722431307&sprefix=tren%2Caps%2C473&sr=8-25&linkCode=ll1&tag=rpt96-20&linkId=0bd458c3deb81fc5dba89e2d471e4a05&language=en_US&ref_=as_li_ss_tl" },

            { name: "Paulas Choice SKIN PERFECTING", 
              img: "https://m.media-amazon.com/images/I/61bLRVPWH7L._SX679_.jpg", 
              description: "  ", 
              amazonLink: "https://www.amazon.com/Paulas-Choice-SKIN-PERFECTING-Exfoliant-Facial-Blackheads/dp/B00949CTQQ?adgrpid=1335909030422677&dib=eyJ2IjoiMSJ9.3b477-S1oLcIGF6hWUYVGYWffjRNwWqvO-mZRkcegxekYPFQkUcAjNe9QS3gQV0sCBO5_c-E-HgkXCRSHcYAvgOMphVApyEk4XBgNzQBEPVF5HL54zzqY-RUImeBY-9PseUTJIy53t2yqJiM4hUDL_1j65izTeODMhffcpn4m9Xl3ympqKrcTaVDVmcJ-d74XRTJnJHgyuC2AEZGvpVXrSLrZ7CIY7J7_m_tC9C5TCHpft8n_wTaQkD5mPRRU4fBKGxwBs19A6vEng_U2tqUI0LU0OwWvdDuwb7MZKTtTig.8mpMg-4jTTy042xEAIWcVQI5ffk1PV623RcdR5Znvyw&dib_tag=se&hvadid=83494578236543&hvbmt=bb&hvdev=c&hvlocphy=158940&hvnetw=o&hvqmt=b&hvtargid=kwd-83495365302756&hydadcr=7690_13466622&keywords=amazon%27s+best+deals&msclkid=6adbba3032e1154dee98dc9a0a148070&qid=1722431736&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=rpt96-20&linkId=10260138f6dc429bf80a4c977f890c29&language=en_US&ref_=as_li_ss_tl" },

            { name: "Amazon Basics Everyday Paper Plates", 
              img: "https://m.media-amazon.com/images/I/61OxyGRWqVL.__AC_SX300_SY300_QL70_FMwebp_.jpg", 
              description: "  This pack includes 100 disposable paper plates, each 8.62 inches in diameter, perfect for dinners, everyday meals, parties, and picnics. These microwave-safe, soak-proof, and cut-resistant plates are made in the USA. Convenient for various occasions, they can be easily reordered with Alexa by saying, “Alexa, reorder Amazon Basics Disposable Plate.”", 
              amazonLink: "https://www.amazon.com/Amazon-Basics-Everyday-Plates-Disposable/dp/B0C2CY22B8?adgrpid=1335909030422677&dib=eyJ2IjoiMSJ9.3b477-S1oLcIGF6hWUYVGYWffjRNwWqvO-mZRkcegxekYPFQkUcAjNe9QS3gQV0sCBO5_c-E-HgkXCRSHcYAvgOMphVApyEk4XBgNzQBEPVF5HL54zzqY-RUImeBY-9PseUTJIy53t2yqJiM4hUDL_1j65izTeODMhffcpn4m9Xl3ympqKrcTaVDVmcJ-d74XRTJnJHgyuC2AEZGvpVXrSLrZ7CIY7J7_m_tC9C5TCHpft8n_wTaQkD5mPRRU4fBKGxwBs19A6vEng_U2tqUI0LU0OwWvdDuwb7MZKTtTig.8mpMg-4jTTy042xEAIWcVQI5ffk1PV623RcdR5Znvyw&dib_tag=se&hvadid=83494578236543&hvbmt=bb&hvdev=c&hvlocphy=158940&hvnetw=o&hvqmt=b&hvtargid=kwd-83495365302756&hydadcr=7690_13466622&keywords=amazon%27s+best+deals&msclkid=6adbba3032e1154dee98dc9a0a148070&qid=1722431736&sr=8-18&linkCode=ll1&tag=rpt96-20&linkId=1e0cfd31aa172e76b3e96fa77ef324b8&language=en_US&ref_=as_li_ss_tl" },

            { name: "RENPHO Smart Scale", 
              img: "https://m.media-amazon.com/images/I/61bAnOXDl7L._AC_SX679_.jpg", 
              description: " The Renpho Health app integrates seamlessly with popular fitness apps like Samsung Health, MyFitnessPal, Fitbit, and Apple Health. With easy setup, it tracks 13 essential body measurements, including weight, BMI, and body fat percentage, and supports unlimited users. The app works with Bluetooth 4.0 and above and is compatible with Apple Watch (except Series 1). Featuring auto calibration and high precision sensors, the scale measures in increments of 0.2 lb or 0.05 kg, with a capacity of 400 lbs or 180 kg. It also includes a baby weighing mode and helps monitor progress over time. The app can be downloaded from the App Store or Google Play. ", 
              amazonLink: "https://www.amazon.com/RENPHO-Bluetooth-Bathroom-Composition-Smartphone/dp/B01N1UX8RW?adgrpid=1335909030422677&dib=eyJ2IjoiMSJ9.3b477-S1oLcIGF6hWUYVGYWffjRNwWqvO-mZRkcegxekYPFQkUcAjNe9QS3gQV0sCBO5_c-E-HgkXCRSHcYAvgOMphVApyEk4XBgNzQBEPVF5HL54zzqY-RUImeBY-9PseUTJIy53t2yqJiM4hUDL_1j65izTeODMhffcpn4m9Xl3ympqKrcTaVDVmcJ-d74XRTJnJHgyuC2AEZGvpVXrSLrZ7CIY7J7_m_tC9C5TCHpft8n_wTaQkD5mPRRU4fBKGxwBs19A6vEng_U2tqUI0LU0OwWvdDuwb7MZKTtTig.8mpMg-4jTTy042xEAIWcVQI5ffk1PV623RcdR5Znvyw&dib_tag=se&hvadid=83494578236543&hvbmt=bb&hvdev=c&hvlocphy=158940&hvnetw=o&hvqmt=b&hvtargid=kwd-83495365302756&hydadcr=7690_13466622&keywords=amazon%27s+best+deals&msclkid=6adbba3032e1154dee98dc9a0a148070&qid=1722431736&sr=8-20-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1&linkCode=ll1&tag=rpt96-20&linkId=7d848e59ea489753ba7f30575f81ed98&language=en_US&ref_=as_li_ss_tl" },

            { name: "TIETOC Mini Chainsaw Cordless", 
              img: "https://m.media-amazon.com/images/I/71eIaqO6rSL._AC_SX679_.jpg", 
              description: " The Tietoc mini chainsaw is a powerful and user-friendly tool equipped with an 880-watt motor, manganese steel chain, and an auto oiler system, making it ideal for effortless cutting of 6-inch branches. Lightweight at just 3.3 pounds, it is easy to handle, perfect for women, the elderly, or those with arthritis. The chainsaw features an auto chain lubrication system for smooth, efficient cutting and a large 2000mAh rechargeable battery suitable for extensive use. Safety features include a security lock, safety baffles, and an anti-slip handle. It comes with a 365-day warranty and includes essential accessories for immediate use. ", 
              amazonLink: "https://www.amazon.com/Mini-Chainsaw-Rechargeable-Oiler-System-Chainsaws/dp/B0C1Z9V6N1?adgrpid=1335909030422677&dib=eyJ2IjoiMSJ9.3b477-S1oLcIGF6hWUYVGYWffjRNwWqvO-mZRkcegxekYPFQkUcAjNe9QS3gQV0sCBO5_c-E-HgkXCRSHcYAvgOMphVApyEk4XBgNzQBEPVF5HL54zzqY-RUImeBY-9PseUTJIy53t2yqJiM4hUDL_1j65izTeODMhffcpn4m9Xl3ympqKrcTaVDVmcJ-d74XRTJnJHgyuC2AEZGvpVXrSLrZ7CIY7J7_m_tC9C5TCHpft8n_wTaQkD5mPRRU4fBKGxwBs19A6vEng_U2tqUI0LU0OwWvdDuwb7MZKTtTig.8mpMg-4jTTy042xEAIWcVQI5ffk1PV623RcdR5Znvyw&dib_tag=se&hvadid=83494578236543&hvbmt=bb&hvdev=c&hvlocphy=158940&hvnetw=o&hvqmt=b&hvtargid=kwd-83495365302756&hydadcr=7690_13466622&keywords=amazon%27s+best+deals&msclkid=6adbba3032e1154dee98dc9a0a148070&qid=1722431736&sr=8-29&linkCode=ll1&tag=rpt96-20&linkId=3407c97736f4dce5d3934b0e619ac9ce&language=en_US&ref_=as_li_ss_tl" },

            { name: "Liquid I.V.® Hydration Multiplier®", 
              img: "https://m.media-amazon.com/images/I/71JsWvIbgBL._AC_SX679_.jpg", 
              description: " Hydration Multiplier Sugar-Free is a delicious, non-GMO electrolyte drink mix that offers superior hydration compared to water alone. With a refreshing White Peach flavor, this blend combines 0 sugar and 0 artificial sweeteners with a proprietary Amino Acid Allulose Blend. It features 3x the electrolytes of leading sports drinks and includes 8 essential vitamins and nutrients. Convenient single-serving packets make it easy to stay hydrated on the go—just mix with 16 oz of water. Since 2015, Liquid I.V. has donated over 55 million servings globally and contributes over 1% of revenue to impact programs. ", 
              amazonLink: "https://www.amazon.com/Sugar-Free-White-Peach-14/dp/B0BQ4ZFNZV?adgrpid=1335909030422677&dib=eyJ2IjoiMSJ9.3b477-S1oLcIGF6hWUYVGYWffjRNwWqvO-mZRkcegxekYPFQkUcAjNe9QS3gQV0sCBO5_c-E-HgkXCRSHcYAvgOMphVApyEk4XBgNzQBEPVF5HL54zzqY-RUImeBY-9PseUTJIy53t2yqJiM4hUDL_1j65izTeODMhffcpn4m9Xl3ympqKrcTaVDVmcJ-d74XRTJnJHgyuC2AEZGvpVXrSLrZ7CIY7J7_m_tC9C5TCHpft8n_wTaQkD5mPRRU4fBKGxwBs19A6vEng_U2tqUI0LU0OwWvdDuwb7MZKTtTig.8mpMg-4jTTy042xEAIWcVQI5ffk1PV623RcdR5Znvyw&dib_tag=se&hvadid=83494578236543&hvbmt=bb&hvdev=c&hvlocphy=158940&hvnetw=o&hvqmt=b&hvtargid=kwd-83495365302756&hydadcr=7690_13466622&keywords=amazon%27s+best+deals&msclkid=6adbba3032e1154dee98dc9a0a148070&qid=1722431736&sr=8-21-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1&linkCode=ll1&tag=rpt96-20&linkId=4ab2d386ccb3952a9fa3de21f1faaf2c&language=en_US&ref_=as_li_ss_tl" },

            { name: "Secura Electric Wine Opener", 
              img: "https://m.media-amazon.com/images/I/619SlTg+B9L._AC_SY300_SX300_.jpg", 
              description: "The Rechargeable Electric Wine Bottle Opener removes corks effortlessly in seconds and works with most wine bottle sizes, opening up to 30 bottles on a single charge. Simply place it on top of your bottle and press a button to instantly uncork your wine. Its compact design saves space, making it easy to store discreetly next to your wine fridge or storage rack. An elegant gift for wine enthusiasts, it's also perfect for home use, catering, or bars. With a wide input voltage range of 100-240V, it’s compatible globally. For longevity, charge it every three months if not in regular use. Enjoy reliable performance and 12 months of friendly customer service.  ", 
              amazonLink: "https://www.amazon.com/Secura-SWO-3N-Electrical-Bottle-Stainless/dp/B01261VEOG?adgrpid=1335909030422677&dib=eyJ2IjoiMSJ9.nqCDaazfHIIWQHO6mEd7ZdAPI5lGKdOgpFpFt44Gw40a38ATk_1y7HxfGKuIYT4ltqqgAEao1BW4a0Il7Y2zZ_Fw5rxJwpa06ZczstS203B6qyZ0yvVk5W34rfrye6qhmwMAimNWYWyKc-DcGgVu8pSBfGbxg3wEpWRhHqMRrBES4vitzmEOcw85WTidpxonMfX_RLLG9bcQgRAEnyLgOlo1PtceUW33dVwa6MuYqMSUQPC4vQX6AOcTw-I-oA78SgDLlan9tcfjJaNqHF8Mp8UGcEBmt_uvLE0YC7t8geg.S6pGjLx04VAnbck8rwnhei7oSqU_HdcmMNia_1FiZIs&dib_tag=se&hvadid=83494578236543&hvbmt=bb&hvdev=c&hvlocphy=158940&hvnetw=o&hvqmt=b&hvtargid=kwd-83495365302756&hydadcr=7690_13466622&keywords=amazon%27s+best+deals&msclkid=6adbba3032e1154dee98dc9a0a148070&qid=1722432387&sr=8-59-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1&linkCode=ll1&tag=rpt96-20&linkId=a186e69cbddabcebfc037a8d219db55b&language=en_US&ref_=as_li_ss_tl" },

            { name: "Owala FreeSip Insulated Stainless Steel", 
              img: "https://m.media-amazon.com/images/I/518uAgWUTgL._AC_SX679_.jpg", 
              description: "The 32-ounce insulated stainless-steel water bottle features a patented FreeSip spout, allowing you to sip upright through the built-in straw or tilt back for a swig from the spout opening. It includes a push-button lid with a lock to keep the spout clean and a convenient carry loop. The double-wall insulation maintains cold temperatures for up to 24 hours, while the wide opening makes it easy to clean and add ice. Made from BPA and phthalate-free materials, it is hand washable and dishwasher-safe (lid only). Note: Not suitable for hot liquids.", 
              amazonLink: "https://www.amazon.com/Owala-FreeSip-Insulated-Stainless-BPA-Free/dp/B0C59F7Y8J?pd_rd_w=VTdu5&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=3XN6GJWAC51G8Q3TZX2Y&pd_rd_wg=NpC6k&pd_rd_r=9709039b-afde-4412-a669-13196733ec6c&pd_rd_i=B0C59F7Y8J&th=1&linkCode=ll1&tag=rpt96-20&linkId=ab989351d239b3c7aa45f00c95360b0e&language=en_US&ref_=as_li_ss_tl" },

            { name: "Upstreman Mini Fridge", 
              img: "https://m.media-amazon.com/images/I/61Y4tbAP8zL._AC_SX679_.jpg", 
              description: "With dimensions of 18.9” x 17.7” x 19.3” (W x D x H), this mini fridge fits easily on counters or under desks, making it perfect for apartments, dorms, offices, bedrooms, and RVs. Its reversible door enhances flexibility in tight spaces. The fridge offers adjustable temperatures from 33.8°F to 46.4°F (1°C to 8°C) and includes a compact freezer for making ice cubes and keeping food fresh. Operating quietly at just 38 dB, it’s ideal for noise-sensitive environments like bedrooms or offices. Energy-efficient with an estimated daily cost of only 0.5 kWh, it uses eco-friendly R600a refrigerant. Upstreman provides a one-year warranty for peace of mind. ", 
              amazonLink: "https://www.amazon.com/Upstreman-Adjustable-Thermostat-Refrigerator-Black-FR17/dp/B09W9KSQBL?th=1&linkCode=ll1&tag=rpt96-20&linkId=bc79f4caeed7dee9ccc964ff0a86567f&language=en_US&ref_=as_li_ss_tl" },

            { name: "Amazon Fire TV Stick ", 
              img: "https://m.media-amazon.com/images/I/51TjJOTfslL._AC_SY450_.jpg", 
              description: "Powerful Streaming Experience 50% more powerful than its predecessor, this device ensures fast Full HD streaming. It comes with an Alexa Voice Remote featuring power and volume controls. Enjoy over 1.5 million movies and TV episodes from platforms like Netflix, Prime Video, Disney+, and Peacock, and listen to millions of songs. With your Fire TV purchase, receive a 6-month MGM+ subscription for Hollywood movies and original series. Watch live TV, news, and sports with subscriptions to services like SLING TV and YouTube TV. Access over 300,000 free movies and episodes from ad-supported apps such as Amazon Freevee and Pluto TV. Use Alexa Voice Remote to search and launch shows, control TV and soundbar functions, and immerse yourself in Dolby Atmos audio on select titles. Setup is easy: plug in, turn on your TV, and connect to the internet. ", 
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
              description: "Monitor your door from anywhere with the Video Doorbell, featuring 1080p HD video, infrared night vision, and two-way audio. Enjoy long battery life, customizable alerts, and privacy settings. Receive notifications for motion or doorbell presses and connect to existing wiring or use with a Sync Module (sold separately) for live view and audio. Save clips with a free 30-day Blink Subscription Plan trial or locally with a Sync Module 2 and USB drive (sold separately). Easily set up with the included AA batteries and connect via the app. Works with Alexa for hands-free access and two-way communication. Includes doorbell, batteries, screws, and a case opening tool; Sync Module 2 sold separately.", 
              amazonLink: "https://www.amazon.com/Blink-Video-Doorbell/dp/B08SG2MS3V?psc=1&linkCode=ll1&tag=rpt96-20&linkId=3a39705521ad98bd4d8d371b5dc16407&language=en_US&ref_=as_li_ss_tl" },

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

            { name: "Tabletop Water Fountain", 
              img: "https://m.media-amazon.com/images/I/815vZaQ9FXL._AC_SX679_.jpg", 
              description: " The EnviraScape Silver Springs Relaxation Fountain enhances any room with its calming, zen ambiance and artistic, Asian-inspired 3-tier design, creating a gentle, soothing flow of water reminiscent of a tranquil spring. Featuring a quiet, built-in submersible pump to keep the water clear of algae, it’s easy to use with a simple plug-and-play setup. The unique lighting feature adds a soft reflection, and natural river rocks can be added to customize the look. Perfect for de-stressing after a long day, aiding meditation, or serving as a serene night-light in a nursery, this fountain comes with a set of river rocks, leaf tiers, power cord, pump cover, water pump, fountain base, and a quick-start guide. ", 
              amazonLink: "https://www.amazon.com/Homedics-Tabletop-Water-Fountain-Soothing/dp/B000QTUJXS?crid=VJXD8IN0VI0S&dib=eyJ2IjoiMSJ9.9RgvSW6hc-9C3365QGCjUY3xpOBVvG2CTeQdfVKgi6fW_owFPsCIQGxee6cTwY1uXvBfulQ8jkDYtPTkq68pfw4t9XBnVqaTzQQpo5z_9Kxi-5tuyLPETKZCEirMJmw-rdDZjDGR0kdNSLQlbtqlyGX8KU-f_bRZnQ2w0c47CX6SPORa_vqL5YiijOX73XF0gwFpRqDzEjYGQEXrq-YwvuICq541UKdoWog-6yg22huHhaPJCYfk8sEDmnQqzHYUdU8bcsVH1-97mHeBQBJ2M_VfA8c7blP15rtyMXBsqt4.DqhAQ5UjO9IaH0N5lq6wqXUVJEyfw7KJ5Y969uUUAzI&dib_tag=se&keywords=table+fountain&qid=1722571938&sprefix=TABLE+FOUUNT%2Caps%2C507&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=rpt96-20&linkId=cb16c970391eb8fec49732e2e53b13f9&language=en_US&ref_=as_li_ss_tl" },

            { name: "Oral-B iO Series 2", 
              img: "https://m.media-amazon.com/images/I/51GE5ZQyuWL._SX679_.jpg", 
              description: "The Oral-B iO electric toothbrush removes 100% more plaque than a regular manual toothbrush, thanks to its advanced technology that’s tough on plaque but gentle on gums. It’s designed for an easy switch to electric brushing with a one-touch button, quiet operation, long-lasting battery, and a super-sensitive cleaning setting. The automatic gum pressure sensor protects your gums by slowing down the brush and signaling red if you brush too hard. With three cleaning settings—super-sensitive, gentle, and daily clean you can easily choose your ideal clean. It features a 2-minute timer with 30-second alerts to help you brush for the recommended time and fits all Oral-B iO replacement brush heads, including Ultimate Clean, Gentle Care, Radiant White, and Specialized Clean.  ", 
              amazonLink: "https://www.amazon.com/Oral-B-Rechargeable-Electric-Powered-Toothbrush/dp/B0D1DQ7BH9?adgrpid=1335909030422677&dib=eyJ2IjoiMSJ9.nijrS_axKaZFGJzlbqvBlSz31h8dLgc0nCDYfATU4bcj0fPkkpxwtdzxS5vfbBTwTlBz1TNgBrQNqt2R9IV_0S4LWUPrvOUvbMUGcx2QOMaoTb3hqsOQAU3IFCJRhELHldFtafgASkexigkNSpAHkprApVNHVtKZjiQEi6WpTAQRN4yuY9TmM3obxja7I1qCjNS29FC7IHjdRcQ_CoKv3F1ME1p1utIE-yGHk_VW7-qwVqjZd9oj0-qUacF9FzF1K70AuC_0How0iB1Yz74rIVB3-FSWlknRopEBv57t9WI.NsCqq-qjyLJVO_4Z2sZ2FAhskOBWFDIALS2YA4JJiTI&dib_tag=se&hvadid=83494578236542&hvbmt=bb&hvdev=c&hvlocphy=158940&hvnetw=o&hvqmt=b&hvtargid=kwd-83495365302756&hydadcr=7690_13583963&keywords=amazon%27s+best+deals&msclkid=5018037cfbe81cfae9f965d09ee36c96&qid=1722574096&sr=8-19-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1&linkCode=ll1&tag=rpt96-20&linkId=a5ff8e4567de7b38e2a43d69741d5907&language=en_US&ref_=as_li_ss_tl" },

            { name: "Utopia Bedding Throw Pillows Insert", 
              img: "https://m.media-amazon.com/images/I/61Vil0HlUUL._AC_SX679_.jpg", 
              description: "The Throw Pillow Pack includes two decorative pillows perfect for couches or bedrooms, offering a cozy, homely vibe with their 18 by 18-inch dimensions. Made from 115 GSM brushed fabric and siliconized fiber filling, these pillows are soft, durable, and won’t look hollow over time. Note that due to vacuum packaging for shipping, they might initially appear as one large pillow. These pillows combine a delicate feel with long-term durability, making them an ideal addition to any living space.  ", 
              amazonLink: "https://www.amazon.com/Utopia-Bedding-Throw-Pillows-Insert/dp/B01NBNDC1T?th=1&linkCode=ll1&tag=rpt96-20&linkId=7739dadd7f586deeb12848310e9b19b8&language=en_US&ref_=as_li_ss_tl" },

            { name: "Thermal Insulated Grommet Blackout Curtains", 
              img: "https://m.media-amazon.com/images/I/61Xsz1yLEML._AC_SX679_.jpg", 
              description: " The NICETOWN Blackout Curtains Set includes two panels, each measuring 42' wide by 63' long, with 6 grommets at the top. Made from high-quality polyester fabric, these curtains block 85%-99% of light and UV rays, and feature noise-reducing triple weave technology for improved TV viewing. The energy-smart design helps insulate against both summer heat and winter chill, protecting your furniture, floors, and artwork. They come thread-trimmed and wrinkle-free, with a 1.6-inch inner diameter ring that fits standard curtain rods. Easy to maintain, these curtains are machine washable, tumble dry, and can be quickly ironed or steamed. Visit the NICETOWN store to explore more curtain options. ", 
              amazonLink: "https://www.amazon.com/NICETOWN-Thermal-Insulated-Blackout-Curtains/dp/B01CS31R94?psc=1&linkCode=ll1&tag=rpt96-20&linkId=47ad7bcfe778984a95515990eea2520c&language=en_US&ref_=as_li_ss_tl" },

            { name: "Curtain Rods", 
              img: "https://m.media-amazon.com/images/I/71ErsU6JMqL._AC_SX679_.jpg", 
              description: "The Byondeth Curtain Rod is made from 100% metal and features a 1-inch diameter, adjustable length that extends from 16 to 144 inches, or up to 150 inches maximum. The rod is constructed with 9 sectional pieces that screw together, ensuring stability and allowing for custom lengths. It can hold up to 50 pounds and is suitable for light, medium, or heavy curtains, including grommet, back tab, rod pocket, and tab top styles. The installation is straightforward with a user manual included, and all necessary hardware—brackets, screws, drywall anchors—is provided. Byondeth guarantees high-quality products and excellent customer service. ", 
              amazonLink: "https://www.amazon.com/Byondeth-Curtain-Adjustable-Diameter-Aluminium/dp/B0B7WQVYGF?th=1&linkCode=ll1&tag=rpt96-20&linkId=9f421e4a5697de8ac8d94c35ad324b22&language=en_US&ref_=as_li_ss_tl" },

            { name: "LINENSPA Memory Foam Mattress Topper", 
              img: "https://m.media-amazon.com/images/I/81HoSSz8keL._AC_SX679_.jpg", 
              description: "The Byondeth Curtain Rod is made from 100% metal and features a 1-inch diameter, adjustable length that extends from 16 to 144 inches, or up to 150 inches maximum. The rod is constructed with 9 sectional pieces that screw together, ensuring stability and allowing for custom lengths. It can hold up to 50 pounds and is suitable for light, medium, or heavy curtains, including grommet, back tab, rod pocket, and tab top styles. The installation is straightforward with a user manual included, and all necessary hardware—brackets, screws, drywall anchors—is provided. Byondeth guarantees high-quality products and excellent customer service.  ", 
              amazonLink: "https://www.amazon.com/Linenspa-Infused-Memory-Mattress-Topper/dp/B01MTO43LV?th=1&linkCode=ll1&tag=rpt96-20&linkId=aa527fdc5341377eb6d60cd8905aa812&language=en_US&ref_=as_li_ss_tl" },

            { name: "Neo Chair", 
              img: "https://m.media-amazon.com/images/I/71EgGUGVrrL.__AC_SX300_SY300_QL70_FMwebp_.jpg", 
              description: "This chair features breathable mesh for optimal airflow and built-in lumbar support to promote healthy posture. It offers exceptional comfort for extended periods, reducing the risk of discomfort. Certified by BIFMA, it ensures safety and durability, contributing to a healthier working environment. Constructed from high-quality materials, it combines durability with overall reliability, maintaining performance through daily use. Customizable positioning includes adjustable tilt, height, and a 360-degree swivel, allowing you to effortlessly tailor your seating arrangements for maximum comfort.  ", 
              amazonLink: "https://www.amazon.com/CHAIR-Office-Chair-Computer-Gaming/dp/B08KSCDM47?psc=1&linkCode=ll1&tag=rpt96-20&linkId=2c8717bf8fea2d974c1980707d4b1fbf&language=en_US&ref_=as_li_ss_tl" },

            { name: "LEVOIT Humidifier", 
              img: "https://m.media-amazon.com/images/I/51-Omd4s6aL._AC_SX679_.jpg", 
              description: "The LEVOIT Classic 160 Humidifier offers fast humidification all night, running up to 25 hours on low with its 2.5-liter capacity. It features an easy top-fill design, allowing you to fill the tank without spilling water. The large opening and detachable parts make cleaning straightforward, with no hard-to-reach corners. It operates quietly at just 26dB, making it ideal for bedrooms and nurseries. Customize your mist output and direction with the 360-degree nozzle and single knob. The humidifier includes an auto shut-off function for low water levels and is made with BPA-free materials for safety. For best results, avoid adding essential oils and use the pre-installed water filter sponge to capture fine impurities.  ", 
              amazonLink: "https://www.amazon.com/LEVOIT-Humidifiers-Humidifier-Shut-off-BPA-Free/dp/B0C2C9NHZW?crid=HDBJEOGM7EX0&dib=eyJ2IjoiMSJ9.lIIwOhC-mFGQiBCF5_Fbw_CsbmP14aOPMa-gTG9TQtHesHSohZ-AWu_qKSotRWewPP8m-yqI_lXo_XrvxvuPyRDGQqAFfjUXGzCH-1qHWf6TqEFwZneXfCnyoczPpuNj9EJOdrdE3EBrr916pLS5Gn61vdpRP6MhS41OBE6FLr9fFg5NUexFlg6gLQjfF4VIPQWwwBEb1JcIZXf7E2V8dsvNi46ShQzvhapUazCNwtXktHboG1QyAHLQE17GevVX00G8_wPPe8WRNL0wiSlcPNNt9kRs7Dli5ndwuNhm7lU.zYiMwiW0hpvkk0Vaat9T5ZU0V-2Aq9sx83tu36C1Ejc&dib_tag=se&keywords=air+humidifier&qid=1722575257&sprefix=air+h%2Caps%2C399&sr=8-5&linkCode=ll1&tag=rpt96-20&linkId=520c71be17f64d036f8195b3af1d221f&language=en_US&ref_=as_li_ss_tl" },

            { name: "Furbo 360° Dog Camera", 
              img: "https://m.media-amazon.com/images/I/71R5E5k2XVL._AC_SY450_.jpg", 
              description: "The Furbo 360° Dog Camera + Nanny Bundle ensures your dog’s safety and keeps you connected when you’re not home. It features a rotating 360° wide-angle lens, 4X HD Zoom, Selfie Alerts, Video History, and a Doggie Diary to record and save your pet's moments. A paid subscription is required, starting at $6.99/month with various plan options available. The camera also offers advanced Barking Alerts and Home Emergency Alerts, such as CO/Smoke, Glass Breaking, and Person Alerts. Keep your dog entertained and trained with treat tossing, adjustable treat sizes, and scheduled rewards. Setup is simple: plug in the power cord, place the Furbo near your WiFi router, download the Furbo app, and connect to your 2.4GHz network. The camera ensures security with 2-Step Verification and bank-level encryption.  ", 
              amazonLink: "https://www.amazon.com/Furbo-Subscription-Designed-Detection-Emergency/dp/B0BWN22T25?dib=eyJ2IjoiMSJ9.9KZ0zbqT_hupjxKWH7a-FHy0MtHlUCfxPo1lj3y99WmHq-kbjqwfUzz7p5sdAu-fusAcHDev6d-N1mZ8twD66pWUi-lABOnANxwim4z1b5fmpT8LjwxIcNlx8kg9HfQ3sy6bif-8OO6O13gAa5wEfcvxCJqekfzSfZGlLT3B-0hOm1MocPbRpLseAdXKRsZkMrsYC1_vz2ojiOEL3gTR8lPwoGwlZJKteQFuUNtIc2Cl0yK0Ljg96fSJ6vAnwKhlYOUQoO4tyUtXCji20itimbokxncnfUKfJomzC6aHQfI.pe3QTC-KVA6L7a5JnWgcbGe52Xo6luBXv7I0rvAUfMM&dib_tag=se&keywords=dog%2Bcamera&qid=1722575451&sr=8-7&th=1&linkCode=ll1&tag=rpt96-20&linkId=e3c9b476bad90c592719a293f320b507&language=en_US&ref_=as_li_ss_tl" },

            { name: "Amazon Echo Show 8", 
              img: "https://m.media-amazon.com/images/I/71JSM9i1bQL._AC_SY450_.jpg", 
              description: "The Echo Show with an 8'' HD touchscreen offers an immersive entertainment experience with spatial audio and high-definition visuals. The 13 MP camera ensures crisp video calls with enhanced sound quality. It integrates seamlessly with smart home devices compatible with Zigbee, Matter, and Thread, and supports Bluetooth and WiFi connectivity. Manage your smart home and control devices using the display or voice commands. Stay connected with hands-free video calls, natural conversations thanks to the auto-framing camera and noise reduction technology, and enjoy a dynamic home screen with Amazon Photos as a digital frame. The device also features adaptive content for quick access to your calendar and reminders. Designed with sustainability in mind, it is made from 29% recycled materials and eco-friendly packaging. Amazon prioritizes your privacy with multiple controls, including the ability to mute the mics through the Alexa app.  ", 
              amazonLink: "https://www.amazon.com/All-New-Echo-Show-8/dp/B0BLS3Y632?crid=WKREHPIUF5V4&dib=eyJ2IjoiMSJ9.pAOL2dFlJsNrP20NPsbzI-r1fXUp4BBE4Zn6Lojs_rRkPIw3hKx6vU-B1riHn7onvmjH1qHUsc4kVZ0HK_IH1wVbCDKRmUR3a2-RAUZxybev-xd9vR7huUCwFYhQRBs3rRRda9RPfR7eeyrVO9vFbys4okcpqKlYdPvIfIX8NkYkce5uAPkTv5ET4MUUUqwDaKMlC1T0uhNZ33pQgPpqZV_a8OEahEPdve2uVvZzVUun-SdX8IHa6QWXbA1JxUQu29srfLUCwksbKUAVlyFcF849T0I99ZZOov_a8JDha5A.CkuG2iWqjinDbLcvdR9u2La0scDd2c2lJ2OEpTzBiFg&dib_tag=se&keywords=smart+home&qid=1722575408&sprefix=smart++%2Caps%2C387&sr=8-15&linkCode=ll1&tag=rpt96-20&linkId=a34fb3324eb1d660a231823bc6f4af0e&language=en_US&ref_=as_li_ss_tl" },

        // Add more kits similarly
   ]         
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
                    <span>Best-rated selections</span>
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

