document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const kit = urlParams.get('kit');

    // Sample data for kitsContent
    const kitsContent = {
        dji: [
            { name: "DJI Neo", 
              img: "https://m.media-amazon.com/images/I/918XEwF23RL._AC_UL480_FMwebp_QL65_.jpg", 
              description: "Lightweight at just 135g, the DJI Neo is so compact it doesn't require FAA registration or Remote ID. Effortlessly take off from your hand and capture stunning 4K video with AI Subject Tracking and QuickShots. With multiple control options—controller-free, voice, app, or RC its perfect for family BBQs, hiking, or vlogging. The Neo’s propeller guards and level-4 wind resistance ensure safe, smooth flights, making it a fun, flexible, and worry-free drone for everyone. Includes battery, propeller guards, and more for easy, ready-to-go adventures.", 
              amazonLink: "https://amzn.to/4ebcM8V" },
            
            { name: "DJI Mini 4K", 
              img: "https://m.media-amazon.com/images/I/61bi6w6ye4L._AC_SY450_.jpg", 
              description: "The DJI Mini 4K Fly More Combo is a compact and powerful drone designed for enthusiasts and professionals alike. Weighing under 249 grams, it boasts a 4K UHD camera supported by a 3-axis gimbal for stable and smooth footage.With advanced features like 10km video transmission range, automatic return to home capability, and multiple QuickShots modes for creative aerial photography, it offers up to 93 minutes of flight time with its three included batteries. This drone is perfect for capturing stunning aerial views with ease and precision.", 
              amazonLink: "https://www.amazon.com/DJI-Stabilization-Transmission-Resistance-Battery/dp/B0CXJDDJ9X?th=1&linkCode=ll1&tag=rpt96-20&linkId=c20869f001c833d1f5b703d8dfc285ce&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Mini 3 Fly More Combo", 
              img: "https://m.media-amazon.com/images/I/71wfT6VKV8L._AC_SY450_.jpg", 
              description: "Entry-Level DJI Mini 3 Fly More Combo (DJI RC): Lightweight 3-Axis Mechanical Gimbal Mini Camera Drone with 4K HDR Video, 3 Batteries for 114-Minute Flight Time, Vertical Shooting, 32,800ft (10km) Video Transmission. Good Luck!", 
              amazonLink: "https://www.amazon.com/DJI-Mini-Fly-More-Combo/dp/B0BL3R3L45?th=1&linkCode=ll1&tag=rpt96-20&linkId=645f83b958a63754bf48e17434c24108&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Mavic 3 Classic", 
              img: "https://m.media-amazon.com/images/I/61LAgdO1dBL._AC_SY450_.jpg", 
              description: "The DJI Mavic 3 Classic (DJI RC) is a high-performance drone equipped with a 4/3 CMOS Hasselblad camera capable of capturing 5.1K HD video. It offers an impressive 46 minutes of flight time and features omnidirectional obstacle sensing for enhanced safety. With Smart Return to Home and FAA Remote ID compliance, this drone is ideal for capturing breathtaking aerial footage with ease and precision.", 
              amazonLink: "https://www.amazon.com/DJI-Hasselblad-Professionals-Omnidirectional-Transmission/dp/B0BGMJN6MD?th=1&linkCode=ll1&tag=rpt96-20&linkId=b5e5b3a33382afe0a318c9ba7821a369&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Air 3 Fly More Combo ", 
              img: "https://m.media-amazon.com/images/I/6101E4GUMAL._AC_SY450_.jpg", 
              description: "The DJI Air 3 Fly More Combo, paired with the DJI RC 2, offers a versatile aerial photography experience with its dual primary cameras capable of capturing stunning 4K video and 48MP photos. This drone ensures extended flight time with three batteries and boasts a remarkable 20 km maximum video transmission range. Designed to be FAA Remote ID compliant, the DJI Air 3 is ideal for enthusiasts and professionals seeking superior performance and compliance with the latest regulations.", 
              amazonLink: "https://www.amazon.com/DJI-Controller-Wide-Angle-Primary-Batteries/dp/B0C7GV6RRZ?th=1&linkCode=ll1&tag=rpt96-20&linkId=8b3d93be9bfc239c5f70da011af8d0a6&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Avata 2 Fly More Combo", 
              img: "https://m.media-amazon.com/images/I/61VTNpkhkEL._AC_SY450_.jpg", 
              description: "The DJI Avata 2 Fly More Combo offers an immersive FPV experience with its 4K camera and three batteries for extended flight time. Featuring one-push acrobatics and a built-in propeller guard, it ensures safe and dynamic flying. With a 155° field of view, it captures expansive footage and complies with FAA Remote ID regulations. Perfect for thrill-seekers and content creators, this drone delivers exceptional performance and convenience.", 
              amazonLink: "https://www.amazon.com/DJI-Batteries-Immersive-Experience-Acrobatics/dp/B0CS6HVW6P?th=1&linkCode=ll1&tag=rpt96-20&linkId=0653bd0532078f3cb4cdca4159d96c8e&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Mini 2 SE", 
              img: "https://m.media-amazon.com/images/I/61R0jBIH47L._AC_SX466_.jpg", 
              description: "Mini Drone with 10km Video Transmission, 3 Batteries for 93 Mins Max Flight Time, Under 249 g, QHD Video, Auto Return, QuickShots, Drone with Camera for Beginners  ", 
              amazonLink: "https://amzn.to/3NcEs10DJI Mini 2 SE Fly More Combo, Mini Drone with 10km Video Transmission, 3 Batteries for 93 Mins Max Flight Time, Under 249 g, QHD Video, Auto Return, QuickShots, Drone with Camera for Beginners" },

            { name: "DJI Avata Pro-View Combo ", 
              img: "https://m.media-amazon.com/images/I/61yw4lNwkCL._AC_SY450_.jpg", 
              description: "The First-Person View (FPV) Drone UAV Quadcopter offers an immersive flight experience with its 4K stabilized video and super-wide 155° field of view. This advanced quadcopter includes the new RC Motion 2 and Goggles 2, enhancing control and visual immersion. Equipped with features like Emergency Brake and Hover, it ensures safety and precision during flights, making it a top choice for aerial enthusiasts and professionals looking to capture stunning, stabilized footage.", 
              amazonLink: "https://www.amazon.com/DJI-Avata-Pro-View-Combo-First-Person/dp/B0BVZPXR89?th=1&linkCode=ll1&tag=rpt96-20&linkId=07deef18cb1c3a4c863cc53e08216938&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI FPV Explorer Combo", 
              img: "https://m.media-amazon.com/images/I/513lFIcY+jL._AC_SY450_.jpg", 
              description: "The DJI FPV Explorer Combo with Goggles Integra offers an exhilarating and immersive flight experience, featuring a 4K camera capable of 60fps for stunningly smooth footage. This FPV drone boasts 10 km HD low-latency video transmission, ensuring clear and responsive control even at a distance. Equipped with an Emergency Brake and Hover function for enhanced safety, it is also FAA Remote ID compliant, making it a top choice for both adventurous hobbyists and professional aerial videographers.", 
              amazonLink: "https://www.amazon.com/DJI-Experience-Low-Latency-Transmission-First-Person/dp/B0C997HCXQ?th=1&linkCode=ll1&tag=rpt96-20&linkId=b2280b56e837928059aae41ed4961dbd&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Mavic 3 Pro", 
              img: "https://m.media-amazon.com/images/I/61Dk8UJAYcL._AC_SY450_.jpg", 
              description: "The DJI Mavic 3 Pro with DJI RC is a flagship drone featuring a triple-camera system, including a 4/3 CMOS Hasselblad camera for stunning 4K footage. It boasts a 43-minute flight time and 15km HD video transmission, ensuring long-range and high-quality aerial shots. Compliant with FAA Remote ID regulations, this advanced drone is perfect for adult enthusiasts and professionals seeking top-tier performance and reliability.", 
              amazonLink: "https://www.amazon.com/DJI-controller-Triple-Camera-Transmission-photography/dp/B0BYHSDY4C?th=1&linkCode=ll1&tag=rpt96-20&linkId=284bdae082ec24f9167610a3f53c37d5&language=en_US&ref_=as_li_ss_tl" },
        
            { name: "DJI RS 3 Pro Combo", 
              img: "https://m.media-amazon.com/images/I/51LmiCAxmrL._AC_SY450_.jpg", 
              description: "The DJI RS 3 Pro Combo is a professional 3-axis gimbal stabilizer designed for DSLR and cinema cameras, compatible with brands like Canon, Sony, Panasonic, Nikon, Fujifilm, and BMPCC. Featuring automated axis locks and durable carbon fiber arms, this gimbal ensures superior stabilization and ease of use. The combo also includes the Ronin Image Transmitter for seamless video transmission. With its sleek black design, the DJI RS 3 Pro Combo is the perfect tool for filmmakers seeking unparalleled precision and versatility.", 
              amazonLink: "https://www.amazon.com/DJI-Pro-Combo-Stabilizer-Transmission/dp/B09ZPN7G95?th=1&linkCode=ll1&tag=rpt96-20&linkId=e69c65637e46b6269e5ad7b43edec356&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI RS 4 Pro Combo", 
              img: "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/b1e526654c6107aaf38c438da8bb2cfe@origin.jpg", 
              description: "DJI RS 4 Pro Combo, 3-Axis Gimbal Stabilizer for DSLR & Cinema Cameras Canon/Sony/Panasonic/Nikon/Fujifilm, Native Vertical Shooting, 4.5kg/10lbs Payload, with Image Transmitter & Focus Pro Motor", 
              amazonLink: "https://www.amazon.com/DJI-Stabilizer-Panasonic-Fujifilm-Transmitter/dp/B0CS6LY1V7?th=1&linkCode=ll1&tag=rpt96-20&linkId=81c79e6ed7c710ca14e1d0940d346bab&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Ronin-SC", 
              img: "https://m.media-amazon.com/images/I/51BTZF3RRgL._AC_SY450_.jpg", 
              description: "The Ronin-SC is a lightweight, compact gimbal designed for filmmakers and content creators on the go. It ensures smooth, stable footage with dynamic stabilization and precise movement, even during action-packed scenes. The Ronin app and automated features enhance your creative possibilities, while easy-to-reach controls and a flared battery grip provide comfortable, extended use.", 
              amazonLink: "https://www.amazon.com/DJI-Stabilizer-Mirrorless-Stabiliser-Compatible/dp/B07R48NZVD?th=1&linkCode=ll1&tag=rpt96-20&linkId=fc113b69a25240657c3265bb08615f41&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Zenmuse X9-8K", 
              img: "https://m.media-amazon.com/images/I/61Qzscnrw2L._AC_SY450_.jpg", 
              description: "The Zenmuse X9-8K gimbal camera delivers pro-level imaging with up to 8K/60fps video and 14.7 stops of dynamic range. It features built-in 9-stop ND filters for easy exposure adjustments and supports a variety of lens options, including autofocus for manual lenses. Capture exquisite details with minimal noise and achieve cinematic results in any lighting condition.", 
              amazonLink: "https://www.amazon.com/DJI-Full-Frame-Dual-Native-Interchangeable-Autofocus/dp/B0CN8RZ7GP?th=1&linkCode=ll1&tag=rpt96-20&linkId=5912fd98e623aa3f44100e8c71c245ee&language=en_US&ref_=as_li_ss_tl" },

            {name: "DJI Action 2", 
              img: "https://m.media-amazon.com/images/I/61ynVFrjIJL._AC_SY450_.jpg", 
              description: "The DJI Action 2 offers a magnetic design for easy accessory swaps and versatile filming. Its ultra-compact size makes it ideal for travel, and with the Magnetic Lanyard and Headband, you can capture hands-free footage. Record stunning 4K/120fps video with a wide field of view, and effortlessly create share-worthy content using the DJI Mimo app's AI Editor. Note that only the camera unit is waterproof; use the Waterproof Case for underwater filming. The package includes the Camera Unit with 128GB storage, Power Module, Magnetic Protective Case, and more, with a recommended recording time of up to 5 minutes at 4K/120fps.", 
              amazonLink: "https://www.amazon.com/DJI-Super-Wide-Attachments-Stabilization-Technology/dp/B0CS6JDM78?th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=c072c17f8367d788825d5fc6ff3557c6&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Dock 2", 
              img: "https://m.media-amazon.com/images/I/51RO0WqCznL._AC_SX679_.jpg", 
              description: "The DJI Dock 2 is an advanced autonomous drone docking station designed for seamless operations. It enables remote drone deployment, charging, and data transfer, making it ideal for automated aerial missions in various industries.", 
              amazonLink: "https://amzn.to/3zVpF7V" },

            { name: "DJI Osmo Action 3 ", 
              img: "https://m.media-amazon.com/images/I/71BQ8Kjt29L._AC_SY450_.jpg", 
              description: "The DJI Osmo Action 3 captures stunning 4K HDR video with 10-bit color depth, displaying over a billion colors. Its HorizonSteady technology ensures ultra-smooth footage on any terrain. Designed for durability, it boasts a 160-minute battery life and performs in temperatures as low as -20°C (-4°F). With easy vertical mounting and waterproof capabilities up to 16 meters, it's ready for any adventure. Dual touchscreens offer intuitive control, even when wet. The Standard Combo includes essential accessories, but a microSD card must be purchased separately. For first-time use, connect to the DJI Mimo app for activation after five skips.", 
              amazonLink: "https://www.amazon.com/DJI-Super-Wide-HorizonSteady-Waterproof-Long-Lasting/dp/B0B7X2LXQ6?th=1&linkCode=ll1&tag=rpt96-20&linkId=21c319bcdd775215d5e56e6d38a65cf3&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Osmo Action 4", 
              img: "https://m.media-amazon.com/images/I/61l2P9RV24L._AC_SY450_.jpg", 
              description: "Experience exceptional clarity with the 4K action camera’s 1/1.3-inch sensor, offering unparalleled low-light performance and vivid, true-to-life colors with 10-bit D-Log M. Capture stunning sunrises and sunsets with impressive 4K/120fps and a 155º ultra-wide FOV. Brave extreme cold with up to 150 minutes of recording at -20°C (-4°F). Quickly switch perspectives with the Magnetic Quick Release and enjoy steady footage thanks to advanced stabilization. The package includes the DJI Osmo Action 4, battery, and Quick-Release Adapter Mount, ideal for newcomers. Note: Download the latest DJI Mimo app from the DJI website due to Google Play compatibility issues.", 
              amazonLink: "https://www.amazon.com/DJI-Waterproof-Long-Lasting-Stabilization-Touchscreens/dp/B0C783YNW7?th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=c05e1adc7229a0b5876f94cb988d9127&language=en_US&ref_=as_li_ss_tl" },

             { name: "DJI Osmo Action 5", 
              img: "https://m.media-amazon.com/images/I/71pg9H7KEuL._AC_SY450_.jpg", 
              description: "The Osmo Action 5 Pro is perfect for capturing urban nightscapes with its new 1/1.3″ sensor for stunning low-light shots, making nighttime biking adventures a breeze. Its 4nm chip ensures fast subject tracking, keeping fast-moving subjects centered with smooth framing. Enjoy extended battery life of up to 4 hours, making it ideal for all-day use. The dual OLED touchscreens offer vibrant, precise control for fun, outdoor recording. Achieve ultra-stable footage with 360° HorizonSteady, and capture professional audio with the DJI Microphone Connection. For the latest DJI Mimo app, download it directly from DJI's official website due to platform compatibility issues.", 
              amazonLink: "https://amzn.to/3N1xDzp" },
            
            {name: "DJI Osmo Mobile SE", 
              img: "https://m.media-amazon.com/images/I/61+KgwQiHWL._AC_SY300_SX300_.jpg", 
              description: "The compact, foldable Osmo Mobile SE gimbal features a magnetic clamp for quick setup and effortless shooting. With ActiveTrack 6.0, it follows subjects and even tracks you. Control it via your Apple Watch with the DJI Mimo app, and enjoy smooth, stabilized footage with 3-axis stabilization. Effortless editing with ShotGuides and LightCut enhances your videos. The gimbal's ergonomic, stain-resistant design ensures a secure grip.", 
              amazonLink: "https://www.amazon.com/Smartphone-Stabilizer-Magnetic-Portable-Foldable/dp/B0B7XCG225?th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=4c639429858ddd94888946c9f4b1a2ff&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Osmo Mobile 6", 
              img: "https://m.media-amazon.com/images/I/51Q0I+lvW9L._AC_SY450_.jpg", 
              description: "The DJI Osmo Mobile 6 Gimbal Stabilizer is an essential tool for anyone looking to elevate their smartphone videography. Featuring a 3-axis stabilization system, this gimbal ensures your videos are smooth and shake-free, whether you're vlogging, capturing content for YouTube or TikTok, or just documenting everyday moments. The built-in extension rod offers added versatility, allowing for creative angles and dynamic shots, while its portable and foldable design makes it easy to take on the go. Available in a sleek slate gray, the Osmo Mobile 6 combines functionality with style to enhance your content creation experience.", 
              amazonLink: "https://www.amazon.com/DJI-Smartphone-Stabilizer-Extension-ShotGuides/dp/B0B7XD7R43?th=1&linkCode=ll1&tag=rpt96-20&linkId=ccae5eec017ac673aa7571448b0bfb7b&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Pocket 2", 
              img: "https://m.media-amazon.com/images/I/61XKonXOA3L._AC_SY450_.jpg", 
              description: "The pocket-sized DJI Pocket 2, weighing 116 g with a 140-minute battery life, fits perfectly in your hand for instant photo and video capture. Its 3-axis gimbal ensures smooth, stable shots, even in low light. The upgraded 1/1.7-inch sensor delivers 64MP photos and 4K video, while four microphones provide enhanced audio. Glamour Effects and AI Editor help create perfect, share-worthy content effortlessly.", 
              amazonLink: "https://www.amazon.com/DJI-Pocket-Stabilizer-Pocket-Sized-ActiveTrack/dp/B08J7FL57P?crid=2NNZ0ZBYJ8NTS&dib=eyJ2IjoiMSJ9.r0AKWcZnO8J5Uz7BCdKSBqtlTUXdJxxBkX8sHzBvq0GXxbcE3bQ90tQVORp1gj_9ak5l7DrQoOGZ8HtiZtrCQAIP3rev45xF8b4opWfxUXleMAxOE_sGn_0oRUk1eaTOBo-szydBoe2x1lKm0NPYqD0dRlYI5PJ9AphYZ9d-9rZm9ZN3GKGYaTcgek32yf5M2u_urZ7FXEiSbCumC5I1A3F7YA8-BGWwXSrmhkZBu91j6dn616zcT1AtoT_3kusIkdFMY3yBjw-ErpDhGv5a-yvhv_hGu8jcey7PoBvo2VY.MnjLft8MD84d8EGdvfpVJUPmuBaY2F4hnEvJzzRh5U4&dib_tag=se&keywords=dji&qid=1722310835&sprefix=dji%2Caps%2C1147&sr=8-18&th=1&linkCode=ll1&tag=rpt96-20&linkId=9f61ff118fd987f2b7c788b7899a6a0a&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Osmo Pocket 3", 
              img: "https://m.media-amazon.com/images/I/514LEUejXYL._AC_SY450_.jpg", 
              description: "Capture stunning footage with the Osmo Pocket 3, featuring a 1-inch CMOS sensor and 4K resolution at 120fps for breathtaking clarity, even in low light. Effortlessly frame your shots using the 2-inch rotating touch screen, perfect for horizontal and vertical shooting. Enjoy ultra-steady footage with advanced 3-axis stabilization, ideal for dynamic activities. Create captivating vlogs with ActiveTrack 6.0, keeping you centered in the frame. Fast and accurate focusing ensures sharp, clear footage, while D-Log M and 10-bit color depth unlock advanced color grading for stunning visual effects. Stereo recording captures high-quality audio, enhancing your videos with crystal-clear sound. Compact and convenient, the Osmo Pocket 3 is perfect for any adventure, big or small. The package includes the Osmo Pocket 3 starting set, DJI Mic 2 Transmitter, battery handle, Osmo mini tripod, and more. Note: Battery charger sold separately. For the latest DJI Mimo app, download it from the DJI official website.", 
              amazonLink: "https://www.amazon.com/DJI-Vlogging-Stabilization-Tracking-Photography/dp/B0CG19FGQ5?crid=2NNZ0ZBYJ8NTS&dib=eyJ2IjoiMSJ9.r0AKWcZnO8J5Uz7BCdKSBqtlTUXdJxxBkX8sHzBvq0GXxbcE3bQ90tQVORp1gj_9ak5l7DrQoOGZ8HtiZtrCQAIP3rev45xF8b4opWfxUXleMAxOE_sGn_0oRUk1eaTOBo-szydBoe2x1lKm0NPYqD0dRlYI5PJ9AphYZ9d-9rZm9ZN3GKGYaTcgek32yf5M2u_urZ7FXEiSbCumC5I1A3F7YA8-BGWwXSrmhkZBu91j6dn616zcT1AtoT_3kusIkdFMY3yBjw-ErpDhGv5a-yvhv_hGu8jcey7PoBvo2VY.MnjLft8MD84d8EGdvfpVJUPmuBaY2F4hnEvJzzRh5U4&dib_tag=se&keywords=dji&qid=1722310835&sprefix=dji%2Caps%2C1147&sr=8-6&th=1&linkCode=ll1&tag=rpt96-20&linkId=dbc1711b83900ca9c88d2e12d46cafa4&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Transmission", 
              img: "https://m.media-amazon.com/images/I/51IbpviLYtL._AC_SY450_.jpg", 
              description: "The DJI Transmission High-Bright Monitor Combo offers unparalleled video transmission capabilities with a range of up to 20,000 feet at 1080p/60fps. This advanced system includes a transmitter and a high-bright monitor with an integrated wireless receiver, ensuring clear and reliable video feeds. Additionally, it features comprehensive gimbal, focus, and camera control, along with independent recording functionality, making it an essential tool for professional filmmakers and videographers seeking high-quality, long-distance transmission and control.", 
              amazonLink: "https://www.amazon.com/DJI-Transmission-End-End-Integrated/dp/B0B14WLCTC?th=1&linkCode=ll1&tag=rpt96-20&linkId=e424e212b795e644160e159538b70a67&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Power 1000", 
              img: "https://m.media-amazon.com/images/I/610GgknLDbL._AC_SX679_.jpg", 
              description: "The DJI Power 1000 Portable Power Station is a robust 1024Wh solar generator designed for diverse power needs. Equipped with three 100W solar panels and advanced LFP cell technology, it ensures reliable energy storage and efficiency. With 70-minute fast charging and a stable 2200W output, this power station is perfect for home backup, camping, RVs, and off-grid adventures. It offers a dependable solution for keeping your devices and appliances powered wherever you are.", 
              amazonLink: "https://www.amazon.com/DJI-Portable-Generator-Charging-Off-grid/dp/B0CZ6L8RYS?th=1&linkCode=ll1&tag=rpt96-20&linkId=d562fe548fd2e912be7ab0af3e3e4516&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Power 500 ", 
              img: "https://m.media-amazon.com/images/I/61Ox80cpoAL._AC_SX679_.jpg", 
              description: "The DJI Power 500 Portable Power Station is a versatile 512Wh power generator ideal for content creation, drone photography, camping, and RVs. Featuring a LiFePO4 cell and Air 3 fast charge cable, it offers efficient and reliable energy storage. With fast charging capabilities and a maximum output of 1000W, the Power 500 ensures your devices and equipment stay powered up, making it a perfect companion for both outdoor adventures and professional work.", 
              amazonLink: "https://www.amazon.com/DJI-Portable-Generator-4000-Cycle-Life-70-Minute/dp/B0CZ6ZBSW1?th=1&linkCode=ll1&tag=rpt96-20&linkId=6cd66311fb7feb1136480fb6310dc2db&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Mic", 
              img: "https://m.media-amazon.com/images/I/71jTh1T3jGL._AC_SX679_.jpg", 
              description: "The DJI Mic features an all-in-one design with pre-linked transmitters and receiver, stored in a portable charging case. It offers a 250m (820 ft) range, 15-hour battery life, and magnetic attachment for versatile use. The receiver’s 0.95-inch OLED touchscreen provides easy control, while 8GB of internal storage supports 14 hours of uncompressed audio recording. Ideal for livestreaming, vlogging, and outdoor recording.", 
              amazonLink: "https://www.amazon.com/DJI-Charging-Microphone-Cancellation-Interview/dp/B09GYD55JF?th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=310e0194d473b2f424e3a4b1973df1da&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Mic 2", 
              img: "https://m.media-amazon.com/images/I/71h3zzCL4zL._AC_SX679_.jpg", 
              description: "The DJI Mic 2 Bundle, complete with a 2-year extended protection plan, ensures top-tier audio for livestreaming and video production. With transmitters and receivers offering up to 18 hours of battery life via the charging case, it supports seamless, all-in-one operation and Bluetooth connectivity. Featuring an OLED touchscreen for easy adjustments, the bundle includes essential accessories like mobile adapters, windscreens, and a 128GB Lexar microSD card, making it the ultimate choice for hassle-free, high-quality audio recording.", 
              amazonLink: "https://www.amazon.com/DJI-Charging-Microphone-microSDXC-Protection/dp/B0CSKQNS3K?th=1&linkCode=ll1&tag=rpt96-20&linkId=02635932d144f22e30ed18f280b18e01&language=en_US&ref_=as_li_ss_tl" },

            
            // Add more products for DJI kit
        ],
        ecoflow: [
            { name: "EF ECOFLOW RIVER", 
              img: "https://m.media-amazon.com/images/I/61oEgIa--bL._AC_SX679_.jpg", 
              description: "The EF ECOFLOW RIVER 288Wh Portable Power Station is a compact and efficient solution for emergencies, home backup, outdoor camping, and RV use. Featuring three 600W AC outlets with a peak capacity of 1200W, it provides versatile power options. The built-in LED flashlight adds convenience for low-light situations, while its fast charging capability ensures you’re quickly prepared. As a silent solar generator, it offers eco-friendly energy with the option to include solar panels, making it an ideal companion for both indoor and outdoor adventures.", 
              amazonLink: "https://www.amazon.com/EF-ECOFLOW-Flashlight-Generator-Emergencies/dp/B09HGYTDTZ?th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=7a8071b44836daac701b9f4c9f0abb9d&language=en_US&ref_=as_li_ss_tl" },

            { name: "EF ECOFLOW RIVER PRO", 
              img: "https://m.media-amazon.com/images/I/61FgXidtlLL._AC_SX679_.jpg", 
              description: "The EF ECOFLOW RIVER Pro Portable Power Station offers 720Wh of reliable power, ideal for camping, RV trips, outdoor activities, and off-grid use. It can recharge from 0-80% in just 1 hour, ensuring you’re quickly ready to power multiple devices. With its efficient and fast charging capabilities, the RIVER Pro provides a dependable energy source for all your adventures and emergencies.", 
              amazonLink: "https://www.amazon.com/EF-ECOFLOW-Portable-Multiple-Recharge/dp/B08T1KY8SG?th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=61ffcc2c39e0727fef91c3fc63770e29&language=en_US&ref_=as_li_ss_tl" },
            
            { name: "EF ECOFLOW RIVER 2", 
              img: "https://m.media-amazon.com/images/I/61DgKWuw-zL._AC_SX679_.jpg", 
              description: "The EF EcoFlow Portable Power Station RIVER 2 is a versatile power source perfect for camping, RVs, and home use. With a 256Wh LiFePO4 battery, it charges in just 1 hour and offers two AC outlets up to 600W. The optional solar panel allows for eco-friendly recharging, making it an ideal companion for any outdoor adventure or emergency backup.", 
              amazonLink: "https://www.amazon.com/EF-ECOFLOW-Portable-RIVER-Generator/dp/B0B8MXPRDB?crid=1TM85IMBP3YXM&dib=eyJ2IjoiMSJ9.yvrVqhfQt7S7nVYl-K843kYH1o18mP8Ytv2MKpRuXpFYgXPcJwn38JbJ_kED2NLKNCpY5YTCf6oQjwtpUyutIhMAV2bCTs84I5H0aHf9ZxM2MItlUTdZqIqqNk2eLBESPl2JLBMBGtizatineBgN6DYjGwqi9cHdluEvO_6a752SvyPiU3gGG3kbt-cD5dqP3mL-thSW6H-g2wt02EyUfO45NHBjTVvi9zqoS9aLk6i1RhAKtdx16dUN8EXZHOG_XsTC4yx-HoeOV4k2nLMWqYlMlCJcRQ6x_U1YNBXQO2I.A4EepSdQ1457KW91emlXBzCYc59lClZWa2p6taT983Q&dib_tag=se&keywords=ef%2Becoflow&qid=1720605200&sprefix=ef%2Becoflo%2Caps%2C460&sr=8-7&th=1&linkCode=ll1&tag=rpt96-20&linkId=85646634f40aa1bf92ef3515d4ff250a&language=en_US&ref_=as_li_ss_tl" },

            { name: " EF ECOFLOW RIVER 2 Pro ", 
              img: "https://m.media-amazon.com/images/I/61ooUabaG9L._AC_SX679_.jpg", 
              description: "The EF ECOFLOW Portable Power Station RIVER 2 Pro is a compact yet powerful solution for all your energy needs. With a 768Wh LiFePO4 battery, it provides reliable and long-lasting power. This portable station charges swiftly in just 70 minutes and features four 800W AC outlets, with an X-Boost option up to 1600W, making it perfect for outdoor camping, RVs, and home use. Its compatibility with solar panels ensures eco-friendly energy on the go, offering a versatile and efficient power source in a sleek black design.", 
              amazonLink: "https://www.amazon.com/EF-ECOFLOW-Portable-Charging-Generator/dp/B0BVLPGS79?th=1&linkCode=ll1&tag=rpt96-20&linkId=3577c099f2dda159c1ee82403b57d30e&language=en_US&ref_=as_li_ss_tl" },

            { name: "EF ECOFLOW DELTA", 
              img: "https://m.media-amazon.com/images/I/61s0F+Rj+QL._AC_SY300_SX300_.jpg", 
              description: "The EF ECOFLOW Portable Power Station DELTA 1300 is a robust 1260Wh solar-powered generator designed for versatility and reliability. Featuring six 1800W AC outlets, it provides ample power for various devices and appliances, making it an ideal choice for outdoor camping and off-grid adventures. The option to add solar panels enhances its sustainability, ensuring a continuous and eco-friendly energy supply. With its powerful performance and portable design, the DELTA 1300 is perfect for all your outdoor power needs.", 
              amazonLink: "https://www.amazon.com/EF-ECOFLOW-Portable-Station-Generator/dp/B083FR3762?th=1&linkCode=ll1&tag=rpt96-20&linkId=3ec15591f7bce51cefc9e027692caa79&language=en_US&ref_=as_li_ss_tl" },
            
            { name: "ECOFLOW DELTA 2", 
              img: "https://m.media-amazon.com/images/I/61p5Knewi+L._AC_SX679_.jpg", 
              description: "EF ECOFLOW Portable Power Station DELTA 2 Max, 2400W LFP Solar Generator, Full Charge in 1 Hr, 2048Wh Solar Powered Generator for Home Backup(Solar Panel Optional)", 
              amazonLink: "https://www.amazon.com/EF-ECOFLOW-Portable-Charging-Generator/dp/B0B9XB57XM?crid=1TM85IMBP3YXM&dib=eyJ2IjoiMSJ9.yvrVqhfQt7S7nVYl-K843kYH1o18mP8Ytv2MKpRuXpFYgXPcJwn38JbJ_kED2NLKNCpY5YTCf6oQjwtpUyutIhMAV2bCTs84I5H0aHf9ZxM2MItlUTdZqIqqNk2eLBESPl2JLBMBGtizatineBgN6DYjGwqi9cHdluEvO_6a752SvyPiU3gGG3kbt-cD5dqP3mL-thSW6H-g2wt02EyUfO45NHBjTVvi9zqoS9aLk6i1RhAKtdx16dUN8EXZHOG_XsTC4yx-HoeOV4k2nLMWqYlMlCJcRQ6x_U1YNBXQO2I.A4EepSdQ1457KW91emlXBzCYc59lClZWa2p6taT983Q&dib_tag=se&keywords=ef+ecoflow&qid=1720605200&sprefix=ef+ecoflo%2Caps%2C460&sr=8-5&linkCode=ll1&tag=rpt96-20&linkId=97fa162da3f09783421aa35fbedb79e4&language=en_US&ref_=as_li_ss_tl" },

            { name: "EF ECOFLOW Portable DELTA 2 MAX", 
              img: "https://m.media-amazon.com/images/I/61hji+hcW+L._AC_SX679_.jpg", 
              description: "The EF ECOFLOW Portable Power Station DELTA 2 Max is a powerful 2400W LFP solar generator, providing an impressive 2048Wh of energy storage. Ideal for home backup, it ensures you stay powered during outages and emergencies. With the ability to fully charge in just 1 hour, it offers rapid and reliable energy. The option to add solar panels enhances its versatility, making it a sustainable and efficient solution for your energy needs.", 
              amazonLink: "https://www.amazon.com/EF-ECOFLOW-Portable-Generator-Optional/dp/B0C4DW17PD?&linkCode=ll1&tag=rpt96-20&linkId=37835547a71b38894dc377d775d0469b&language=en_US&ref_=as_li_ss_tl" },
            
            { name: "EF ECOFLOW DELTA PRO", 
              img: "https://m.media-amazon.com/images/I/61qMM6iBt3L._AC_SX679_.jpg", 
              description: "The EF ECOFLOW Portable Power Station DELTA Pro is a high-capacity 3600Wh power solution, ideal for home use, power outages, camping, RV trips, and emergencies. Equipped with five 120V AC outlets and a powerful 3600W output, it can handle a wide range of devices and appliances. The DELTA Pro features a fast charging time of just 2.7 hours and utilizes reliable LiFePO4 battery technology. As a solar generator, it offers an eco-friendly energy source, ensuring you stay powered up wherever you are.", 
              amazonLink: "https://www.amazon.com/EF-ECOFLOW-Portable-Expandable-Generator/dp/B0C1Z4GLKS?th=1&linkCode=ll1&tag=rpt96-20&linkId=88ca02c9f0e194a1663146d24554228a&language=en_US&ref_=as_li_ss_tl" },

            { name: "EF ECOFLOW DELTA PRO 3", 
              img: "https://m.media-amazon.com/images/I/61GjkAWylzL._AC_SX679_.jpg", 
              description: "The EF ECOFLOW DELTA Pro 3 Portable Power Station is a high-capacity 4000Wh LFP battery generator, designed for versatile use in home settings, camping, emergencies, and RV trips. With a robust 120/240V 4000W AC output and the ability to expand up to 48kWh, it delivers reliable power for a wide range of needs. Whether for home backup during power outages or off-grid adventures, the DELTA Pro 3 offers a powerful and flexible solution to keep your devices and appliances running smoothly.", 
              amazonLink: "https://www.amazon.com/EF-ECOFLOW-Expandable-Accessories-Emergencies/dp/B0D14FMFZD?th=1&linkCode=ll1&tag=rpt96-20&linkId=2d8e0c9a413a7e992541085d4b7efd03&language=en_US&ref_=as_li_ss_tl" },

            { name: "EF ECOFLOW DELTA PRO ULTRA", 
              img: "https://m.media-amazon.com/images/I/71CY5wdQ2aL._AC_SX679_.jpg", 
              description: "**DELTA Pro Ultra:** This all-in-one whole house generator combines a powerful 7200W inverter with a scalable battery system. It supports both 120V and 240V, handling heavy appliances like a 3-ton central air conditioner, and can be expanded to 21.6kW with additional inverters. With a base 6kWh battery providing up to 2 days of power and expandable to 90kWh for over 30 days of essential power, it offers versatile charging options including electric vehicle chargers, solar panels, and wall outlets. The EcoFlow app allows you to prioritize home circuits and optimize energy use, while its online UPS ensures 24/7 protection with silent operation for the first 30 minutes of 2000W output. Note that the product ships in separate packages.", 
              amazonLink: "https://www.amazon.com/EF-ECOFLOW-Expandable-Generator-Emergency/dp/B0CQXMZ5BK?pd_rd_w=MIHOc&content-id=amzn1.sym.9c71db11-3b2f-49a1-9fef-afd524b20130&pf_rd_p=9c71db11-3b2f-49a1-9fef-afd524b20130&pf_rd_r=ZWRPH96VEFRCJCN5ZMHM&pd_rd_wg=QVQzg&pd_rd_r=16f21477-ea16-4b8d-ad51-53020e2825d7&pd_rd_i=B0CQXMZ5BK&th=1&linkCode=ll1&tag=rpt96-20&linkId=2d5534a644becb93de4645485e0c6684&language=en_US&ref_=as_li_ss_tl" },

            // Add more products for EcoFlow kit
        ],
        evolve: [
            { name: "DJI Osmo Pocket 3", 
              img: "https://m.media-amazon.com/images/I/514LEUejXYL._AC_SY450_.jpg", 
              description: "The DJI Osmo Pocket 3 Creator Combo is a compact yet powerful vlogging camera designed for content creators on the go. Featuring a 1'' CMOS sensor, it captures stunning 4K video at 120fps, ensuring crisp, high-quality footage. Its 3-axis stabilization keeps shots steady, while advanced face and object tracking guarantee sharp focus on your subject. The included microphone delivers clear, professional sound, making it perfect for vlogs, interviews, and dynamic video content. Small and portable, this camera is ideal for photography enthusiasts who need a reliable, high-performance tool in a compact package.", 
              amazonLink: "https://www.amazon.com/DJI-Vlogging-Stabilization-Tracking-Photography/dp/B0CG19FGQ5?crid=YIXFSATKDMQF&dib=eyJ2IjoiMSJ9.Bao558hrQQE2-b_KPB2FqTaZPcsaO6OogrD1QZ-UP3YV_IReZ2kS2oVMlNOvl1pMTR1qkXtWp1yQZTs__Oq_veVaDKPf9SuiCKgTc2nvZj-ciMFBxO2t8WYcp42XtRsHtU6YvQGgHlFyV109MY1uP6OghN3TaqXgSiaUWGTNXVr1HcaQU_luEOCHWi4ouJuMIl10rjZKF2cggsWyt7-T35jXf7B8NtcfV2FMjb9L-MuJEvoonwot3kJmk7GPaXdRhSKoFAiY_XBNaPj6usZNUrVNRehLviYFTvL9ut1GAUQ.VK61iOHN7otKWBLFlLBQ-v28HPZ4e5Tbm785crwRRM0&dib_tag=se&keywords=DJI%2BOsmo%2BPocket%2B3%2BCreator%2BCombo&qid=1720608058&sprefix=dji%2Bosmo%2Bpocket%2B3%2Bcreator%2Bcombo%2Caps%2C707&sr=8-4&th=1&linkCode=ll1&tag=rpt96-20&linkId=ce973d9e55951a8d43ae553637e5789c&language=en_US&ref_=as_li_ss_tl" },

            { name: "Sony a7 III", 
              img: "https://th.bing.com/th/id/OIP.8d657OMQJXKPu6GFuB-QnQAAAA?rs=1&pid=ImgDetMain", 
              description: "Unlock your creative potential with the Sony a7 III, a full-frame mirrorless camera that delivers exceptional image quality and performance. Paired with a versatile 28-70mm lens, this camera captures stunning detail and vibrant colors across a wide range of scenes. The 3-inch LCD screen provides a clear and flexible view for composition and review. With advanced features like high-speed continuous shooting, 4K video recording, and impressive low-light capabilities, the a7 III is perfect for both professional and enthusiast photographers. Its sleek black design and robust build ensure durability and ease of use, making it an ideal companion for any photographic adventure.", 
              amazonLink: "https://www.amazon.com/Sony-Full-frame-Mirrorless-Interchangeable-Lens-ILCE7M3K/dp/B07B45D8WV?dib=eyJ2IjoiMSJ9.X8oskiuvhfP-gEKmYYiZntldCiq1MracOugeMIGGtmEsUXYlBwpzbCoOKWrRwuE97TzIrOaBF4KMAgfp1ah_cv9cbd8u95yd77FtPMs7Bv8_68HXETggDUfarvAnGSr7i0FHEMMHgaXD-kSt4h0bTfUH7XnjvQabPjH86QhzdeiFkG9ZaZIZmkDqTXaSGazTwuaCIkl8wdlVU9aES-W51ii1TcozhL0WZPluZWC3ODzklG0aVFjCQaFV8oFfuIKpx_nIPg4a7LNmzB1faE4FxuCRjUmsYitIXqDr38Fdd1M.z3Pz0WKCm8cA-e_Ne9mjkpwsRaYLAPrLZB5RYKuUcME&dib_tag=se&keywords=sony%2Ba7%2Biii&qid=1720608453&sr=8-5&th=1&linkCode=ll1&tag=rpt96-20&linkId=81a5140b0987fe4a5ab6fd54f20a5b7c&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Mini 3 Fly More Combo", 
              img: "https://m.media-amazon.com/images/I/71wfT6VKV8L._AC_SY450_.jpg", 
              description: "Entry-Level DJI Mini 3 Fly More Combo (DJI RC): Lightweight 3-Axis Mechanical Gimbal Mini Camera Drone with 4K HDR Video, 3 Batteries for 114-Minute Flight Time, Vertical Shooting, 32,800ft (10km) Video Transmission. Good Luck!", 
              amazonLink: "https://www.amazon.com/DJI-Mini-Fly-More-Combo/dp/B0BL3R3L45?th=1&linkCode=ll1&tag=rpt96-20&linkId=645f83b958a63754bf48e17434c24108&language=en_US&ref_=as_li_ss_tl" },

        ],
        hike: [
            { name: "Cascade Mountain Tech Trekking", 
              img: "https://m.media-amazon.com/images/I/71PQlcihbiL._AC_SX679_.jpg", 
              description: "Enhance your hiking experience with Cascade Mountain Tech's lightweight, aircraft-grade aluminum trekking poles. Featuring an extended down grip for superior handling and a tip kit for diverse terrains, these durable poles are perfect for any outdoor adventure.", 
              amazonLink: "https://www.amazon.com/Cascade-Mountain-Tech-Trekking-Poles/dp/B088P9BQNX?crid=16NGL3HFV0I7B&dib=eyJ2IjoiMSJ9.IUdTATRomenSXpZrSaUIcbADH1XVZinVC5aPiYXRMV88R8yyRYolif1I33emCN5xTBZZBNRKrGnP1FYSxbFjab1mtbCHxG1Zj2s6KBNJ9ryar_CEbwHyMtzlDMJvSat0PPxyfLb0lu2sOjzwflU61pXLoMvLN7E4_FX_s9wgSW7KWkNOG1S1hQlX4BoUG3c_EDX2P3OsE-RafIDwz9e8mMSFrqE7VKSkXafDeZkULDY39jQh3BaECjLMjMIPvKaOeciPzJMMgMsTFL-STd4kKeh9cFketdtaM5mf650sCFI.0Py7JdOD75IgrT_MDOXLiT7-y2wRt9krK8dK8du_LC8&dib_tag=se&keywords=Cascade%2BMountain%2BTech%2BAluminum%2BAdjustable%2BTrekking%2BPoles%2B-%2BLightweight%2BQuick%2BLock%2BWalking%2BOr%2BHiking%2BStick%2B-%2B1%2BSet%2B%282%2BPoles&qid=1720608878&sprefix=cascade%2Bmountain%2Btech%2Baluminum%2Badjustable%2Btrekking%2Bpoles%2B-%2Blightweight%2Bquick%2Block%2Bwalking%2Bor%2Bhiking%2Bstick%2B-%2B1%2Bset%2B2%2Bpoles%2Caps%2C687&sr=8-1&th=1&linkCode=ll1&tag=rpt96-20&linkId=6a80646b5111d7f9b5966ad0eaf662d4&language=en_US&ref_=as_li_ss_tl" },

            { name: "Water Buffalo Hydration Backpack", 
              img: "https://m.media-amazon.com/images/I/91lZidFSFRL._AC_SX679_.jpg", 
              description: "Gear up for your next hike with the Sherpa 22L Hydration Backpack from Water Buffalo. Designed with a built-in water bladder, waterproof zippers, and convenient holders for your phone and trekking poles, this versatile backpack keeps you hydrated and organized on any trail. Perfect for outdoor enthusiasts seeking comfort and functionality.", 
              amazonLink: "https://www.amazon.com/dp/B0CM9YV2ZM?_encoding=UTF8&th=1&linkCode=ll1&tag=rpt96-20&linkId=3fa0af80600214ba8d4da428cfa2d656&language=en_US&ref_=as_li_ss_tl" },

            { name: "Coleman Camping Tent", 
              img: "https://m.media-amazon.com/images/I/51mkedU72GL._AC_SX679_.jpg", 
              description: "The Coleman Camping Tent with Instant Setup is designed for hassle-free outdoor adventures, accommodating 4, 6, 8, or 10 people. Its innovative instant setup feature allows you to pitch the tent in just 60 seconds, making it perfect for quick getaways. Built with WeatherTec technology and double-thick fabric, this tent ensures a weatherproof experience, keeping you dry and comfortable even in adverse conditions. It comes with a convenient carry bag for easy transportation and storage, making it an essential item for camping trips with family or friends.", 
              amazonLink: "https://www.amazon.com/Coleman-Weatherproof-Integrated-Double-Thick-Included/dp/B00J955FH0?crid=XQ931WVV35GG&dib=eyJ2IjoiMSJ9.EKfhgP47Pb4yG31mCuRj5VPXz2x82WwiGK7XnPHP3lZ3Jx-hrDsMCQR0R7CkpwcE_nZNkWUSQMEQKur9g8Q_QFwEWUtuwVSKeC5sPLn9m-qcdmMLvmc9AqkWj_dVmkGFDJ6SAjHf-wPVnc4VnI6x7Af6QXabLZujUboiSFraPtDJkzz2pNvnY3PsqO5dUIBoiDUAQ2pRLIAS4UzoVPJhdiMl0MLYGXdtMo9y1RE04WVTr-3g-NihvBhfSBkC2CnNd6DO1dLLmfIN8h9jAUg6GVpkRmHxMyG1gzuT4vgnblY.PPn7_FmWDKBkoHnjlmmiEMdbAOTEjKBG1hL2mnbmlWk&dib_tag=se&keywords=Coleman%2BMontana%2BCamping%2BTent%2C%2B6%2F8%2BPerson%2BFamily%2BTent%2Bwith%2BIncluded%2BRainfly%2C%2BCarry%2BBag%2C%2Band%2BSpacious%2BInterior%2C%2BFits%2BMultiple%2BQueen%2BAirbeds%2Band%2BSets%2BUp%2Bin%2B15%2BMinutes&qid=1720614313&sprefix=coleman%2Bmontana%2Bcamping%2Btent%2C%2B6%2F8%2Bperson%2Bfamily%2Btent%2Bwith%2Bincluded%2Brainfly%2C%2Bcarry%2Bbag%2C%2Band%2Bspacious%2Binterior%2C%2Bfits%2Bmultiple%2Bqueen%2Bairbeds%2Band%2Bsets%2Bup%2Bin%2B15%2Bminutes%2Caps%2C378&sr=8-6&th=1&linkCode=ll1&tag=rpt96-20&linkId=30e5aecbefccfb464ed6eb3773426637&language=en_US&ref_=as_li_ss_tl" },

            { name: "CLIQ Portable Chair", 
              img: "https://m.media-amazon.com/images/I/71XRcxQcpIL._AC_SX679_.jpg", 
              description: "The CLIQ Portable Chair is a lightweight, folding chair designed for camping and outdoor adventures. Despite its compact size, it supports up to 300 lbs, offering a sturdy and reliable seating solution. Its sleek black design makes it versatile for various outdoor activities, from camping to picnics. Easy to carry and set up, the CLIQ Portable Chair is the perfect companion for those who value convenience and comfort on their adventures.", 
              amazonLink: "https://www.amazon.com/sporting-goods-CLIQ-camping-chairs/dp/B07V6MR1R5?content-id=amzn1.sym.2f0a8989-0b67-47e7-b61e-9e3ef9908602%3Aamzn1.sym.2f0a8989-0b67-47e7-b61e-9e3ef9908602&crid=BDQI93QXKED5&cv_ct_cx=Coleman%2BPortable%2BCamping%2BChair%2Bwith%2B4-Can%2BCooler%2C%2BFully%2BCushioned%2BSeat%2Band%2BBack%2Bwith%2BSide%2BPocket%2Band%2BCup%2BHolder%2C%2BCarry%2BBag%2BIncluded%2C%2BCollapsible%2BChair%2Bfor%2BCamping%2C%2BTailgates%2C%2BBeach%2C%2Band%2BSports&dib=eyJ2IjoiMSJ9.pzztjJCDHFd8xGwFBqzojQ.fjSYX4KK293TKn5Q7jBCJUWoeoqLYqcCno95hh1qKlE&dib_tag=se&keywords=Coleman%2BPortable%2BCamping%2BChair%2Bwith%2B4-Can%2BCooler%2C%2BFully%2BCushioned%2BSeat%2Band%2BBack%2Bwith%2BSide%2BPocket%2Band%2BCup%2BHolder%2C%2BCarry%2BBag%2BIncluded%2C%2BCollapsible%2BChair%2Bfor%2BCamping%2C%2BTailgates%2C%2BBeach%2C%2Band%2BSports&pd_rd_i=B07V6MR1R5&pd_rd_r=f9a82d3c-1839-48ba-a531-ec90817e3cf4&pd_rd_w=X8jpS&pd_rd_wg=Tmliz&pf_rd_p=2f0a8989-0b67-47e7-b61e-9e3ef9908602&pf_rd_r=4K4A2Z9ZBBC9HHSDNMKH&qid=1720614674&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=coleman%2Bportable%2Bcamping%2Bchair%2Bwith%2B4-can%2Bcooler%2C%2Bfully%2Bcushioned%2Bseat%2Band%2Bback%2Bwith%2Bside%2Bpocket%2Band%2Bcup%2Bholder%2C%2Bcarry%2Bbag%2Bincluded%2C%2Bcollapsible%2Bchair%2Bfor%2Bcamping%2C%2Btailgates%2C%2Bbeach%2C%2Band%2Bsports%2Caps%2C396&sr=1-1-a61ee601-6e56-4862-a8a2-1d3da5a5406f&th=1&linkCode=ll1&tag=rpt96-20&linkId=84d3724bc98a519e43a9f82b17af253c&language=en_US&ref_=as_li_ss_tl" },

            { name: "Camping Table", 
              img: "https://m.media-amazon.com/images/I/61tqf+wuZ-L._AC_SY300_SX300_.jpg", 
              description: "Meet your outdoor dining needs with the Aluminum Folding Camping Table. Lightweight and easy to transport with its included carrying bag, this table is perfect for camping, backyard gatherings, picnics, and beach days. Its sturdy aluminum construction and convenient roll-up design ensure quick setup and versatility wherever you go.", 
              amazonLink: "https://www.amazon.com/WUROMISE-Lightweight-Aluminum-Carrying-Backyard/dp/B0B2LP7W7R?crid=2LGCQVA3OKEUS&dib=eyJ2IjoiMSJ9.m_DHlMypsKlBIGXmZcEpf2oZPxH_0jGXlVsw2XgNlnngJSOTFijtM7C2WnUrHx8EdyKOAYCdoalW7dPqqki002Ni5YV6j54QUcnGbtSzYKYV4FhfEDBb7Z5w-WakaDt8.uBLc4uxd8H5v-amh7oQt4b-GG7gVTWTfm5iqF0r4iv0&dib_tag=se&keywords=WUROMISE%2BCamping%2BTable%2BThat%2BFold%2Bup%2BLightweight%2C%2BAluminum%2BFolding%2BTable%2BRoll%2BUp%2BTable%2Bwith%2BEasy%2BCarrying%2BBag%2Bfor%2BIndoor%2C%2BOutdoor%2C%2BCamping%2C%2BBackyard%2C%2BBBQ%2C%2BParty%2C%2BPatio%2C%2BBeach%2C%2BPicnic&qid=1720614936&s=lawn-garden&sprefix=wuromise%2Bcamping%2Btable%2Bthat%2Bfold%2Bup%2Blightweight%2C%2Baluminum%2Bfolding%2Btable%2Broll%2Bup%2Btable%2Bwith%2Beasy%2Bcarrying%2Bbag%2Bfor%2Bindoor%2C%2Boutdoor%2C%2Bcamping%2C%2Bbackyard%2C%2Bbbq%2C%2Bparty%2C%2Bpatio%2C%2Bbeach%2C%2Bpicnic%2Clawngarden%2C646&sr=1-4&th=1&linkCode=ll1&tag=rpt96-20&linkId=16c97873088d79ffe1c21e9eb3fd1067&language=en_US&ref_=as_li_ss_tl" },

            { name: "Elegear Self Inflating Sleeping Pad", 
              img: "https://m.media-amazon.com/images/I/71WhGMKKTgL._AC_SX679_.jpg", 
              description: "The Coleman Trailhead II Camping Cot is an easy-to-assemble folding cot designed to enhance your camping experience. It supports campers up to 6 feet 2 inches tall or 300 pounds, providing a comfortable and elevated sleeping surface. Ideal for camping, lounging, and outdoor relaxation, this cot ensures a restful night's sleep away from the ground. Its sturdy frame and durable construction make it a reliable choice for various outdoor adventures.", 
              amazonLink: "https://www.amazon.com/Coleman-765353-Trailhead-Military-Camping/dp/B003696236?dib=eyJ2IjoiMSJ9.rteci0Myt8orgRLn9TMVQRFzV-z_Dotwnr1xO5NL9oFNGAjPzfefI6X7zJ55DBvneeeD3M9jHCEns2Aomo5y5bVE8kDZNmWz0h9W-04LahaN-67JEbYJt-SA_KIf72uXp4esc45yUgZvVRp0pGLiEL1ohoOxpwSYDE5WqfsSRJNfj6hmOkBhaGJhafLAGiyBUqyS0SGnZjeNa-A-qgcl63ToSulD5aKoug8cLjZzuJYJiwZ3tRHvov_reDqs4ZPxDIysQAqyJc278I-fEUm61V-MdqrViV3ihPj3PKuDD1o.6zaHEEd6JL6LfbNtfexpaSMZ2DbzKU9EmyFDgkTRNGQ&dib_tag=se&keywords=camping%2Bbed&qid=1720615679&sr=8-7&th=1&linkCode=ll1&tag=rpt96-20&linkId=681e90eb16a14833d38278c0990f1a19&language=en_US&ref_=as_li_ss_tl" },
        ],
        travel: [
            { name: "Deluxe Travel Cubes", 
              img: "https://m.media-amazon.com/images/I/716zOXXQ3XL.__AC_SX300_SY300_QL70_FMwebp_.jpg", 
              description: "The 8-Piece Deluxe Travel Cubes for Packing Compression are essential for maximizing space in luggage with their innovative double-capacity design. This luxury set includes large, small, and medium packing cubes, perfect for organizing and compressing clothing and essentials during travel. Ideal for frequent travelers, these cubes help keep belongings neat and easily accessible while optimizing luggage space. Whether for short trips or extended vacations, they ensure efficient packing and stress-free travel organization.", 
              amazonLink: "https://www.amazon.com/Well-Traveled-Packing-Cubes-8-piece/dp/B096WMT12P?dib=eyJ2IjoiMSJ9.jSlPblPzM04kLVS5VodgVn7q3FhR0lW02zjhUMdz2I26g7t5NYBC2kM_I7SRTnvEfEldV4D7QGqBUbIb8i1mBM7Cq3v2XvNH8tubhTgwmVS7PTbugBw4BgWEg24aU7k6ABztrnDQ_8UhX0YKN9vDl9f5rSJ15Wp-1__lLJn6GRNC668EaFHKCXhR5HH-TjAM7Rl7ivYlogw-hLlm_7dMBiev2O85Iy1MgNsywgjW2DjcC0U1gS_8md8W1kZUhu2aM4s0k_5tc4JKoROlH7MkpVT8yPpU0zaEQ0GoF9tbNC0.AnF6ShqeoszAt2788GMLZPYP_yKZOBwHg67R3sYsC74&dib_tag=se&keywords=8%2BPiece%2BDeluxe%2BSet%2BCompression%2BPacking%2BCubes%2Bfor%2BTravel%2Bwith%2BHybridMax%2BDouble%2BCapacity%2BDesign%2C%2BLarge%2B%26%2BSmall%2C%2BCarry%2BOn%2BSuitcase%2BOrganizer%2BBags%2BSet%2BTravel%2BBags%2BOrganizer%2BLuggage%2BOrganizers%2BSuitcases&qid=1720616926&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=rpt96-20&linkId=23c90a4f8e96cdd3c31f51d57104c44a&language=en_US&ref_=as_li_ss_tl" },

            { name: "Samsonite Omni Expandable Luggage", 
              img: "https://m.media-amazon.com/images/I/91LRm6mzT1L._AC_SX679_.jpg", 
              description: "The Samsonite Omni PC Hardside Expandable Luggage in Pink is a stylish and practical choice for travelers. This checked-large 28-inch suitcase features spinner wheels for easy maneuverability, even when fully packed. Its durable hardside shell provides excellent protection for your belongings, while the expandable design allows for additional packing capacity when needed. Ideal for longer trips, the Samsonite Omni PC combines functionality with a vibrant, eye-catching color to stand out on the baggage carousel.", 
              amazonLink: "https://www.amazon.com/Samsonite-Hardside-Expandable-Luggage-Checked-Large/dp/B013WFO4JC?crid=1QXXK9KHA3IU&dib=eyJ2IjoiMSJ9.lwD_I-OWPinsxdeS2i7dHRA0lSjvcVjO9Cv2SsyWUb30ejVHKE6pVQQNDXFZB2cria3xsfO8WqzYodTNG8CpX52WYq_r8EOJoBfzVYfoKN9X3kdWQXlGPtKgkyROZ5eiinvl-zjns0SnMI0kO2NjVLXPcv-Ms4RiZOrIFJ8NVEmxCbT1nYMkg-Lqly8ddO2Y2zWFZ_ulqLXXF8ftacYrjy3IGUdysQubIJ9SYc5FEA3cGepVWVWimXSm18PN2ztSpW-2lwZeVU9OAYKnRDP5RgZC1LgMK_XPURsyIBd9z3A.emL4m11nlWb8o2qI9OBYS9BDTPHoy2Z6BKTlQ8f8dik&dib_tag=se&keywords=Samsonite%2BOmni%2BPc%2BHardside%2BExpandable%2BLuggage%2C%2BPink%2C%2BOne%2BSize&qid=1720617268&sprefix=8%2Bpiece%2Bdeluxe%2Bset%2Bcompression%2Bpacking%2Bcubes%2Bfor%2Btravel%2Bwith%2Bhybridmax%2Bdouble%2Bcapacity%2Bdesign%2C%2Blarge%2B%26%2Bsmall%2C%2Bcarry%2Bon%2Bsuitcase%2Borganizer%2Bbags%2Bset%2Btravel%2Bbags%2Borganizer%2Bluggage%2Borganizers%2Bsuitcases%2Caps%2C2748&sr=8-1&th=1&linkCode=ll1&tag=rpt96-20&linkId=5b1a72034650b60b527d9fbd95d25361&language=en_US&ref_=as_li_ss_tl" },

            { name: "Insta360 X3", 
              img: "https://m.media-amazon.com/images/I/61JIsqTNFPL.__AC_SX300_SY300_QL70_FMwebp_.jpg", 
              description: "Capture Every Angle in Stunning Detail: Insta360 X3-360 Action Camera – 5.7K 360 Video, 4K Single-Lens, Waterproof, AI Editing, Perfect for Adventure and Vlogging!", 
              amazonLink: "https://www.amazon.com/insta360-Waterproof-Single-Lens-Stabilization-Touchscreen/dp/B0B9H572LC?crid=1IOG5ZQNV1KAP&dib=eyJ2IjoiMSJ9.MZvHgD_W8hp42dUjOKqehu7vkbtPvbv54jP4jdzSUEcgwPUOjEZtjvy3tX_E3vpNU-D_XZLytU2npGPmLSoKpLfaxPvNGPapEvFJAlobUjF79eyuh3L-YHK8fMQcUjxDZrX7RWIdV8RqAHL6UW851iybnSiOe2ge0q3Y0J88U7EamPYjo2W0RbPOMYUrVZRrc_UkmyRy6zbpB454MgEKxml6aQOGKeWckdksqdY3SMq4s6VeYQlPP2BhzXRMeC19IYNnf1F4abOJ8S3MqpTuuHDxP3SZhnr1xjGqrjnY61E.ZH-ZSPTqiWNYsqIPcSd9lk7S7AOSe6JEXfYfKU0GlLU&dib_tag=se&keywords=Insta360%2BX3%2BOfficial%2BSticker%2BCollection%2C%2B360%2BDegree%2BCamera%2C%2BAction%2BCamera%2C%2BNew%2B1%2F2%2BInch%2B48%2BMP%2BSensor%2C%2BIPX8%2BWaterproof%2C%2B5.7K%2B360%2BDegree%2BVideo%2C%2B72%2BMP360%2BDegree%2BPhoto%2C%2BImage%2BStabilization%2C%2BActive%2BHDR%2C%2B4K&qid=1720617514&sprefix=insta360%2Bx3%2Bofficial%2Bsticker%2Bcollection%2C%2B360%2Bdegree%2Bcamera%2C%2Baction%2Bcamera%2C%2Bnew%2B1%2F2%2Binch%2B48%2Bmp%2Bsensor%2C%2Bipx8%2Bwaterproof%2C%2B5.7k%2B360%2Bdegree%2Bvideo%2C%2B72%2Bmp360%2Bdegree%2Bphoto%2C%2Bimage%2Bstabilization%2C%2Bactive%2Bhdr%2C%2B4k%2Caps%2C393&sr=8-1&th=1&linkCode=ll1&tag=rpt96-20&linkId=1af6a3ab98227fdd48c0f5514f32a711&language=en_US&ref_=as_li_ss_tl" },

            { name: "Buffway Slim Leather Wallet", 
              img: "https://m.media-amazon.com/images/I/81Z5VBmnPAL._AC_SX679_.jpg", 
              description: "The Buffway Slim Minimalist Front Pocket RFID Blocking Leather Wallet is a sleek and practical choice for both men and women. Crafted from high-quality leather, it offers a stylish appearance while providing RFID blocking technology to protect your cards from unauthorized scanning. Designed for minimalists, it fits comfortably in front pockets without adding bulk, making it ideal for everyday use or travel. With its slim profile and efficient organization, this wallet ensures both security and convenience.", 
              amazonLink: "https://www.amazon.com/Slim-Minimalist-Leather-Wallets-Women/dp/B079DCW7GB?crid=26OB2SWRMZFKI&dib=eyJ2IjoiMSJ9.A-jp4w_Qa1IYJ2Eg1GKAYfwLHTHWzkXccWx4hnWEOYLoiddeIsgWI5SCHeg9zS3sv6HCjsm83Z65iZcnH-gn8vtn1RAtmlCGB9SjZliflXl8fTCoqzCPt5gLyg1JudkbyELze3GL8k1MYB9cBG4UNIni8nFE-3QoUo6fBoX7AZ1utXLcbLjrKXZWHG7moYlz3eX7EvVHcvEhQNhiogZGbY5LdEPV8ZWtcArSVFndSA_VDWOsE-A-prERxQO5gekC6XAqupbQ_vu-rxZxiJLeq758q9b6o766iY03u7ig6Tc.AYXQoa6sqFmbVxl9Cl3HuQAVxM_Opa5KvfsGi6QexKQ&dib_tag=se&keywords=Buffway+Slim+Minimalist+Front+Pocket+RFID+Blocking+Leather+Wallets+for+Men+Women&qid=1720617671&sprefix=buffway+slim+minimalist+front+pocket+rfid+blocking+leather+wallets+for+men+women%2Caps%2C517&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=rpt96-20&linkId=89b4e89349378dba060ee9b7b6cd145c&language=en_US&ref_=as_li_ss_tl" },

            { name: " SAUNORCH Universal Travel Adapter", 
              img: "https://m.media-amazon.com/images/I/71Qc4DSnFqL._AC_SX679_.jpg", 
              description: "Power Up Anywhere: SAUNORCH Universal Travel Adapter – 7-in-1 Fast Charging for Global Adventures!", 
              amazonLink: "https://www.amazon.com/SAUNORCH-Universal-Adapter-International-Worldwide/dp/B0D2B7YXBY?crid=1506GECSQ4MDH&dib=eyJ2IjoiMSJ9.B6-fdItCyKXRUbdtBOLZAEa8TLu55g5eBQMAq3w59_IlZM_1E3pASXKGQRbCY2sfUyGap1vl62x0kLW9feHc3tholm9odHYprIQ-J7v9l_pwQmDuVz7JjNPCnid3KOXvtZFjigzcd-kqf6AY8RXtHN8ubi86nn5VyTEgd_VdCZlpGJon3g5t-5qUUMet6IPKcgWDaJaBZ1REVbw57vTKoiRBZPnxMiCmItuz_hhoJzNmkRW-07ik3zpWFKnXaALnDSuDU43basJJo9Cc_L2vM0QRpexy8EE6Kgqa8aK2K-U.PQe4F_5ItHnQFDk1JKqeO5X_VCFILd1eGLEywSDSbns&dib_tag=se&keywords=saunorch%2Buniversal%2Btravel%2Badapter%2Bpd%2B35w%2B7%2Bin%2B1%2Binternational%2Bpower%2Bplug%2Badapter%2Bwith%2B7%2B0a%2B4%2Busb%2Bc%2Band%2B2%2Busb%2Ba%2Bfast%2Bwall%2Bcharger%2Bworldwide%2Bac%2Boutlet%2Bfor%2Bus%2Beurope%2Buk%2Baus&qid=1720618023&sprefix=saunorch%2Buniversal%2Btravel%2Badapter%2Bpd%2B35w%2B7%2Bin%2B1%2Binternational%2Bpower%2Bplug%2Badapter%2Bwith%2B7%2B0a%2B4%2Busb%2Bc%2Band%2B2%2Busb%2Ba%2Bfast%2Bwall%2Bcharger%2Bworldwide%2Bac%2Boutlet%2Bfor%2Bus%2Beurope%2Buk%2Baus%2Caps%2C404&sr=8-1&th=1&linkCode=ll1&tag=rpt96-20&linkId=50ff89beaa536fb59243d1961a443e40&language=en_US&ref_=as_li_ss_tl" },

            { name: "Owala FreeSip Insulated Stainless Steel Water Bottle ", 
              img: "https://m.media-amazon.com/images/I/71Cfld2aMpL._AC_SX679_.jpg", 
              description: "Stay Hydrated on the Go: Owala FreeSip 32 Oz Insulated Stainless Steel Water Bottle with Straw – BPA-Free, Perfect for Travel!", 
              amazonLink: "https://www.amazon.com/Owala-Insulated-Stainless-Steel-Push-Button-32-Ounce/dp/B085DVHQ57?crid=7TESK9IQL82X&dib=eyJ2IjoiMSJ9.BWT9VS8V5NZOtsMZZ8_5-vLbVHMDgZ8nmzyV8ysa2GpA_BaqUr2QtA8G8e2uolhG8BEy5WUIjGrL4b4fC539hqiF6X9pg3mJwO8yWNLM9b3EovC8g3byoofPD4sT-7djMVUVdDtBvhiRMqp3HOqA0AwsxhvAfEXH0fMvKdZl4OwoRqOa_-M6y-15ZjhwdpA7HdAq1KAGj75Pq3M8THmYwvHWe4WxPLmAwAY5Dve_JldLabZW7ON67jTBlppgxs4QZmAKpnVI1jYuT2vDODj77YAFBf-TbLjtUfy3E30VFpE.OMwtqC2uSm8sya3oAk4lzNutLDvX7pMbs8MW17M-lGY&dib_tag=se&keywords=Owala+FreeSip+Stainless-Steel+Insulated+Water+Bottle+with+Locking+Push-Button+Lid%2C+32-Ounce%2C+Black+%28Very%2C+Very+Dark%29&qid=1720618190&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=owala+freesip+stainless-steel+insulated+water+bottle+with+locking+push-button+lid%2C+32-ounce%2C+black+very%2C+very+dark+%2Caps%2C363&sr=8-1&linkCode=ll1&tag=rpt96-20&linkId=34ac2315046e04caaf0d7b24a5484078&language=en_US&ref_=as_li_ss_tl" },
            
        ],
        books: [
            { name: "Joe Dispenza Collection 3 Books Set", 
              img: "https://m.media-amazon.com/images/I/71SSwtb9smL._SY466_.jpg", 
              description: "Transform your life with the Joe Dispenza Collection 📚✨. Dive into Becoming Supernatural, You Are The Placebo, and Breaking The Habit of Being Yourself to unlock the power of your mind and achieve extraordinary personal growth. Explore these groundbreaking books to reshape your reality and harness your potential!", 
              amazonLink: "https://www.amazon.com/Dispenza-Collection-Becoming-Supernatural-Breaking/dp/912376080X?crid=2ET2D5259ZBRF&dib=eyJ2IjoiMSJ9.uLCLhc61D30kaO5MxX5meQ.XlN49Y1Ln_REwZjAhVvigtEZFlSB1WD1sipBqGOwJEY&dib_tag=se&keywords=Joe+Dispenza+Collection+3+Books+Set+%28Becoming+Supernatural%2C+You+Are+The+Placebo%2C+Breaking+The+Habit+Of+Being+Yourself%29&qid=1720618372&sprefix=joe+dispenza+collection+3+books+set+becoming+supernatural%2C+you+are+the+placebo%2C+breaking+the+habit+of+being+yourself+%2Caps%2C369&sr=8-1&linkCode=ll1&tag=rpt96-20&linkId=3db9908f1e20d8b9c9a70d2e03c87fda&language=en_US&ref_=as_li_ss_tl" },

            { name: "The Secret ", 
              img: "https://m.media-amazon.com/images/I/91Wj9JEjtiL._SY466_.jpg", 
              description: "All around the world, The Secret is helping millions achieve their dream lives. With The Secret Daily Teachings, Rhonda Byrne guides readers through the next steps in living The Secret every day. This beautifully designed book reveals daily facets of the law of attraction to bring more joy, abundance, and blessings into your life. With removable pages, you can easily share your favorite teachings or carry cherished inspirations with you. Harness the untapped power of the Universe within you and remember, as one teaching says, “No matter where you are, no matter how difficult things may appear to be, you are always being moved toward magnificence. Always.”", 
              amazonLink: "https://www.amazon.com/Secret-Daily-Teachings-Rhonda-Byrne/dp/1439130833?crid=ATQPUVG4WLPX&dib=eyJ2IjoiMSJ9.fgIVOX7JU6_KljpkMlyqYQBRj7-7gmoYTos26W4yjoQNyo8YxCicE6teG9l6d9Zn.Bk6SIcyRoMWNeVjYpXY4zunY5EOJouzOFl4nYRk_WDw&dib_tag=se&keywords=The+Secret+Daily+Teachings+%28Volume+7%29&qid=1720618612&sprefix=the+secret+daily+teachings+volume+7+%2Caps%2C361&sr=8-1&linkCode=ll1&tag=rpt96-20&linkId=e3c26675de89a5bff0c0f6c5a1c7a214&language=en_US&ref_=as_li_ss_tl" },

            { name: "Rich Dad, Poor Dad", 
              img: "https://m.media-amazon.com/images/I/51rDoNGbMAL._SY445_SX342_.jpg", 
              description: "April 2022 marks the 25th anniversary of Rich Dad Poor Dad, the timeless personal finance classic that remains the #1 book in its genre. Despite the fast-paced changes in our world, the financial wisdom and principles shared by Robert Kiyosaki are as relevant today as they were a quarter-century ago. As money continues to play a pivotal role in our lives, the enduring messages of Rich Dad Poor Dad are more crucial and impactful than ever.", 
              amazonLink: "https://www.amazon.com/Teach-Their-Money-that-Middle-Paperback/dp/B004D803FW?dib=eyJ2IjoiMSJ9.rBeNl3JZhDbQCjzIlBiAFbfHkw5gdqtx6VAAOcIOoQPRIOowhbebseWKR_Cv-aX1m3aJJCIZ_3Pc5ykOwcvkQeAP6F8yfJGh-XGjBQPyg7g.663g8I5Srq67Tyji2QcN8fwaEYZ_AyrWAH4_4aKWQdg&dib_tag=se&keywords=Rich+Dad+Poor+Dad%3A+What+the+Rich+Teach+Their+Kids+About+Money+That+the+Poor+and+Middle+Class+Do+Not%21+Mass&qid=1720618769&sr=8-4&linkCode=ll1&tag=rpt96-20&linkId=dc73d31d4ad82fe563c2f9d9c75c43a6&language=en_US&ref_=as_li_ss_tl" },

            { name: "How Much Money Do I Need to Retire?", 
              img: "https://m.media-amazon.com/images/I/41FUZ5ydgdL._SY445_SX342_.jpg", 
              description: "How Much Money Do I Need to Retire takes you beyond the scientific facade of modern retirement planning. Author and former hedge fund manager Todd R. Tresidder has helped thousands of people find financial freedom through his website and podcast. Now you too can use his advice to take the guesswork out of your retirement planning.", 
              amazonLink: "https://www.amazon.com/How-Much-Money-Need-Retire/dp/1939273064?dib=eyJ2IjoiMSJ9.3Im7F3bLQS5ZbLW2tWc3xPRRURW_TnuC1MIWkUZy1pM.0-FQ3Xar71oyCsrEDdNRSHrIqFN34oRDrr5FCLGwMMM&dib_tag=se&keywords=How+Much+Money+Do+I+Need+to+Retire%3F%3A+Uncommon+Financial+Planning+Wisdom+for+a+Stress-Free+Retirement&qid=1720619035&sr=8-1&linkCode=ll1&tag=rpt96-20&linkId=ad5d0852110bf2e84eb1957b8bae8c39&language=en_US&ref_=as_li_ss_tl" },

        ],
        timelessradiance: [
            { name: "Dr. Barbara Sturm", 
              img: "https://m.media-amazon.com/images/I/61r0dFTj4bL._AC_SX679_.jpg", 
              description: "This advanced anti-aging formula provides instant and long-term results, delivering a plumping effect on wrinkles for a smoother, more youthful appearance. Infused with plankton biopolymers, the product supports firmness and suppleness, enhancing the skin's natural resilience. It also boosts the skin's natural barrier function, ensuring better protection against environmental stressors. Enriched with purslane, this formula offers fundamental nutrition, reduces signs of irritation, and defends against damage caused by free radicals. Available in a 50ml bottle, this skincare solution is designed to promote a radiant and healthy complexion.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Super-Anti-Aging/dp/B09WTHY5R2?ie=UTF8&ASIN=B09WTHY5R2&sr=1-7&qid=1721198114&_encoding=UTF8&dib=eyJ2IjoiMSJ9.aceW8swgPevX3WFKGA92Psq8G-XNaf8vLV8ZHufZ0geoRctdxyvrVCx90GlhYJ_3CLgQe_EDPLaPOsXJhGIlJeyfAtmVcFCKhXy1tA8jWd24niKiPi-_asDoBu4ne2pS8xP6D19NUbyWb4Qni4Hd9tXOgcx2FfZ2dtGMUuTQamoU85BixSwQLa6uPqKp4i_7sm60N87DEl2ieYL_S49cFmdF0t91dypLzOd1AM-BhzAOCeSmsQ2skgmBg9fOo3BktTTfEXuolGyOwuURzmoo2ztlBDVtgMswaPK12OVoNL4.AMy1SC8zp_JuzXqIpqJWAeoIGfYYxnwgUg_xjn9QWFs&rnid=18981045011&dib_tag=se&th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=0ed15a48ca8e0a36eef5aaffe50a3c2e&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Sturm Glow Drops", 
              img: "https://m.media-amazon.com/images/I/618GRBCXQYL._AC_SY741_.jpg", 
              description: "Dr. Sturm Glow Drops revitalizes dull, tired skin and restores its natural radiance. Formulated with polygonum bistorta root, it acts as an antimicrobial anti-ager, optimizing skin tone for a more youthful look. Wild rose extract refines pores and provides an even complexion, while purslane boosts levels of vitamin A and omega-3 acids, significantly reducing irritation. Available in a 30ml bottle, this potent skincare solution is designed to rejuvenate and enhance your skin's glow.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Glow-Drops/dp/B09V9LB9L3?ie=UTF8&ASIN=B09V9LB9L3&sr=1-3&qid=1721198114&_encoding=UTF8&dib=eyJ2IjoiMSJ9.aceW8swgPevX3WFKGA92Psq8G-XNaf8vLV8ZHufZ0geoRctdxyvrVCx90GlhYJ_3CLgQe_EDPLaPOsXJhGIlJeyfAtmVcFCKhXy1tA8jWd24niKiPi-_asDoBu4ne2pS8xP6D19NUbyWb4Qni4Hd9tXOgcx2FfZ2dtGMUuTQamoU85BixSwQLa6uPqKp4i_7sm60N87DEl2ieYL_S49cFmdF0t91dypLzOd1AM-BhzAOCeSmsQ2skgmBg9fOo3BktTTfEXuolGyOwuURzmoo2ztlBDVtgMswaPK12OVoNL4.AMy1SC8zp_JuzXqIpqJWAeoIGfYYxnwgUg_xjn9QWFs&rnid=18981045011&dib_tag=se&linkCode=ll1&tag=rpt96-20&linkId=b562bf48a7aa4f1b41dbf229b8a77f32&language=en_US&ref_=as_li_ss_tl" },

            { name: "Clé de Peau Beauté The Foundation SPF 22", 
              img: "https://m.media-amazon.com/images/I/61k1cRPAxgL._AC_SY741_.jpg", 
              description: "Clé de Peau Beauté The Foundation SPF 22 instantly blurs imperfections and camouflages for an even-toned, radiant finish that lasts up to 24 hours. This luxuriously rich yet lightweight cream melts on contact with the skin to moisturize, plump, and protect, while reducing the appearance of lines and wrinkles and promoting firmness. The finish is sheer, buildable, and exquisitely radiant, with SPF 22 offering protection against harmful UV rays. After 4 weeks of use, the foundation improves softness, hydration, and firmness, with 72% of users noting a reduction in fine lines and 84% feeling their skin has become more beautiful. Very light with neutral undertones, this foundation is designed to enhance the natural beauty of your skin.", 
              amazonLink: "https://www.amazon.com/Cl%C3%A9-Peau-Beaut%C3%A9-Foundation-Light/dp/B0D1CJH2SJ?ie=UTF8&ASIN=B0D1CJH2SJ&sr=1-13&qid=1721191302&_encoding=UTF8&dib=eyJ2IjoiMSJ9.Nm-z1wZI2MHYBMH_fZ8LHIDb42hmWCOhiwS1dyRC8V8xpL9jLu8NZt6eHHwV80cqIspQczz2nnYYJMo2lacTmNdTUDf9APcsFUOg1Mkv5oPiy5KWa8FoOUgi9QTd_WNUfdAnWcCCCsj0yW90XN5DPVM10rWiImmIdMNoPvjhPQDl9iYCayrO3Qda0gPUxGcl0FzbbwWXjpZOerlYrJCR2nPqnBSDMrzFR12BuLxWPFjlbW7p_S82WlAQg3IeiicP_PUAngFhLNB0W-gYlbLX-d6vxJlRHReNrU38aEHQlB8.s62LeAeKNpMMJidiFyEL89Rfw5Jr50ZVbvCA3hdS2V8&rnid=20657941011&dib_tag=se&th=1&linkCode=ll1&tag=rpt96-20&linkId=7bfb438def67beb64a1612acee1aaa24&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Barbara Sturm Summer Kit", 
              img: "https://m.media-amazon.com/images/I/51eyF8r8kKL._AC_SX679_.jpg", 
              description: "Dr. Barbara Sturm’s new SUMMER KIT offers a comprehensive 7-step skincare routine designed to maintain hydrated, healthy, and glowing skin during the warmer months. Packaged in a reusable yellow neoprene bag, this kit reflects Dr. Sturm’s commitment to sustainable packaging. It includes a FACE MASK, HYALURONIC SERUM, CALMING SERUM, FACE CREAM, SUN DROPS SPF50, HYDRATING FACE MIST, and ALOE VERA GEL in a selection of full, deluxe, and mini sizes. The SUMMER KIT not only protects your skin against UVA and UVB rays but also addresses oxidative and other stresses associated with sun exposure, ensuring your skin stays radiant and well-protected all summer long.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Summer-Kit/dp/B0C89WZ3ZT?&linkCode=ll1&tag=rpt96-20&linkId=44104b862f28ba5cfd6438ba60923bd8&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Barbara Sturm Face Cream", 
              img: "https://m.media-amazon.com/images/I/61yBAA1RgDL._AC_SX679_.jpg", 
              description: "Dr. Barbara Sturm Face Cream keeps your skin hydrated and firm throughout the day. This fast-absorbing formula provides a radiant glow, while ingredients like skullcap and purslane work to calm the skin and reduce visible signs of irritation. Available in a 50ml size, this face cream is designed to deliver long-lasting hydration and a smooth, luminous complexion.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Face-Cream/dp/B09VY7FK6T?ie=UTF8&ASIN=B09VY7FK6T&sr=1-16&qid=1721202745&dib=eyJ2IjoiMSJ9.aceW8swgPevX3WFKGA92Psq8G-XNaf8vLV8ZHufZ0geoRctdxyvrVCx90GlhYJ_3CLgQe_EDPLaPOsXJhGIlJeyfAtmVcFCKhXy1tA8jWd24niKiPi-_asDoBu4ne2pS8xP6D19NUbyWb4Qni4Hd9tXOgcx2FfZ2dtGMUuTQamoU85BixSwQLa6uPqKp4i_7sm60N87DEl2ieYL_S49cFmdF0t91dypLzOd1AM-BhzAOCeSmsQ2skgmBg9fOo3BktTTfEXuolGyOwuURzmoo2ztlBDVtgMswaPK12OVoNL4.AMy1SC8zp_JuzXqIpqJWAeoIGfYYxnwgUg_xjn9QWFs&dib_tag=se&th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=36818f1319830259961a76ead6e68b5f&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Barbara Sturm Everything Eye Patches", 
              img: "https://m.media-amazon.com/images/I/51aM7Kk3k0L._AC_SX679_.jpg", 
              description: "Dr. Barbara Sturm's Everything Eye Patches are formulated to rejuvenate the delicate skin around the eyes. Infused with avocado polyphenols, they reduce dark circles, depuff under-eye bags, minimize the appearance of fine lines and wrinkles, and combat oxidative stress. The inclusion of triple hyaluronic acid provides intensive hydration, helping skin maintain moisture and delivering an immediate plumping effect. Vegan collagen enhances skin elasticity and offers powerful anti-aging benefits, while skin-identical ceramides reinforce the skin barrier and protect against transepidermal water loss, ensuring supple, smooth, and soft skin. Additionally, panthenol acts as a humectant, binding water into the skin to boost hydration and smooth texture. Each box contains 30 pairs (60 patches) designed to restore vitality to the eye area.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Everything-Patches/dp/B0CYGK58SN?ie=UTF8&ASIN=B0CYGK58SN&sr=1-27&qid=1721202745&dib=eyJ2IjoiMSJ9.aceW8swgPevX3WFKGA92Psq8G-XNaf8vLV8ZHufZ0geoRctdxyvrVCx90GlhYJ_3CLgQe_EDPLaPOsXJhGIlJeyfAtmVcFCKhXy1tA8jWd24niKiPi-_asDoBu4ne2pS8xP6D19NUbyWb4Qni4Hd9tXOgcx2FfZ2dtGMUuTQamoU85BixSwQLa6uPqKp4i_7sm60N87DEl2ieYL_S49cFmdF0t91dypLzOd1AM-BhzAOCeSmsQ2skgmBg9fOo3BktTTfEXuolGyOwuURzmoo2ztlBDVtgMswaPK12OVoNL4.AMy1SC8zp_JuzXqIpqJWAeoIGfYYxnwgUg_xjn9QWFs&dib_tag=se&linkCode=ll1&tag=rpt96-20&linkId=b96396696435121d70ae271a10882141&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Barbara Sturm Glow Cream", 
              img: "https://m.media-amazon.com/images/I/516Yluiu0KL._AC_SX679_.jpg", 
              description: "Dr. Barbara Sturm's Glow Cream is a luxurious skincare product designed to enhance your skin's radiance and vitality. It features polygonum bistorta root extract, which smooths the appearance of fine lines and wrinkles, boosts skin radiance by 42%, and reduces skin irregularities. Exopolysaccharides work synergistically with specific skin growth factors to promote a rosier, fresher-looking complexion. Wild rose extract refines pores, giving the complexion a more even appearance, while purslane and vitamin E provide powerful antioxidant protection against oxidative damage and offer potent anti-aging effects. Biosaccharides deliver intense moisturization, anti-inflammatory, and skin-soothing benefits. The inclusion of triple hyaluronic acid ensures intensive hydration, helping the skin maintain moisture and providing an immediate plumping effect. Light-reflecting pearl pigments give the skin an instant shimmer, leaving it glowing and luminous.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Glow-Cream/dp/B0CYGK76GJ?ie=UTF8&ASIN=B0CYGK76GJ&sr=1-30&qid=1721202745&dib=eyJ2IjoiMSJ9.aceW8swgPevX3WFKGA92Psq8G-XNaf8vLV8ZHufZ0geoRctdxyvrVCx90GlhYJ_3CLgQe_EDPLaPOsXJhGIlJeyfAtmVcFCKhXy1tA8jWd24niKiPi-_asDoBu4ne2pS8xP6D19NUbyWb4Qni4Hd9tXOgcx2FfZ2dtGMUuTQamoU85BixSwQLa6uPqKp4i_7sm60N87DEl2ieYL_S49cFmdF0t91dypLzOd1AM-BhzAOCeSmsQ2skgmBg9fOo3BktTTfEXuolGyOwuURzmoo2ztlBDVtgMswaPK12OVoNL4.AMy1SC8zp_JuzXqIpqJWAeoIGfYYxnwgUg_xjn9QWFs&dib_tag=se&linkCode=ll1&tag=rpt96-20&linkId=94a3f22bfea2368661720fc2fb0a461c&language=en_US&ref_=as_li_ss_tl" },
            
            { name: "Dr. Barbara Sturm Facial Scrub", 
              img: "https://m.media-amazon.com/images/I/51ff8mPFGaL._AC_SY741_.jpg", 
              description: "Dr. Barbara Sturm's Facial Scrub is a refined, imported exfoliant that is both gentle and effective. This 100ml scrub removes dry, flaky skin, prevents breakouts, and stimulates blood circulation for a radiant complexion. Infused with Horse Chestnut, it strengthens the skin matrix, leaving your skin smooth and revitalized.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Facial-Scrub/dp/B09WTYCRNX?ie=UTF8&keywords=Exfoliation&ASIN=B09WTYCRNX&sr=1-1&qid=1721365804&dib=eyJ2IjoiMSJ9.RL-jeu16ODWAGUPEUqkeLKyYtpur2EPs_a8-9c0UpDb_Jlg315sgfxS3kDiUgtXFsW-zCHdTGp3-rZalESqADWVK5N_ykJeb3yMaOaLvsxkeBGOmier6LCLQuni9sfXMaXYTgFpB2ST1FgxwlZwZt15oeSVqWqTbiHQmw2SKRHeyaXnpnf4kqoFRR9gUm2CLiy_8csomeaLzfKyPhzTjHK5SkerOYNfLLg5xCf_EHKQ.bl8TOpq16hSXcHzmbtdhF8GLzzaW5wAdiCtfL38RbfQ&dib_tag=se&th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=04a2cb4ac8031ef98606e07950cd3f19&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Barbara Sturm Enzyme Cleanser", 
              img: "https://m.media-amazon.com/images/I/51fTWdzkOBL._AC_SY741_.jpg", 
              description: "Dr. Barbara Sturm's Enzyme Cleanser, imported and weighing 75g, offers a deep yet gentle cleanse and exfoliation. It removes dry and dead skin, makeup, pollution, and other impurities from your pores. Post-cleansing, your skin is revitalized and smooth, with a noticeable reduction in blackheads.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Enzyme-Cleanser/dp/B09VB6S5J7?ie=UTF8&keywords=Exfoliation&ASIN=B09VB6S5J7&sr=1-2&qid=1721366133&dib=eyJ2IjoiMSJ9.RL-jeu16ODWAGUPEUqkeLKyYtpur2EPs_a8-9c0UpDb_Jlg315sgfxS3kDiUgtXFsW-zCHdTGp3-rZalESqADWVK5N_ykJeb3yMaOaLvsxkeBGOmier6LCLQuni9sfXMaXYTgFpB2ST1FgxwlZwZt15oeSVqWqTbiHQmw2SKRHeyaXnpnf4kqoFRR9gUm2CLiy_8csomeaLzfKyPhzTjHK5SkerOYNfLLg5xCf_EHKQ.bl8TOpq16hSXcHzmbtdhF8GLzzaW5wAdiCtfL38RbfQ&dib_tag=se&linkCode=ll1&tag=rpt96-20&linkId=cc5f95ea80d25ecfb2b8be01020043a9&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Barbara Sturm  Clarifying Face Cream", 
              img: "https://m.media-amazon.com/images/I/612ZgRG-0dL._AC_SX679_.jpg", 
              description: "The clarifying face cream is an anti-aging moisturizer specifically developed for blemished skin. A complex of Balloon Vine, Viper’s Bugloss and Sunflower Seed Oil strengthens the skin’s moisture barrier and helps to restore its natural balance. Purslane provides a soothing and calming effect. Zinc removes excess sebum, a key factor in the formation of blemishes, while Bistorta Root Extract provides a radiant glow. When used as part of your daily skincare routine, it will result in a more even and more clarified complexion. Your skin will feel hydrated and the appearance of fine lines and wrinkles will be visibly reduced.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Clarifying-Cream/dp/B09VB5XMRS?th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=65c54625ddf86454654d000d6c1917d6&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Barbara Sturm Hyaluronic Serum", 
              img: "https://m.media-amazon.com/images/I/412to1xfIFL._AC_SX569_.jpg", 
              description: "The Hyaluronic Serum is the most fundamental creation in Dr. Barbara Sturm’s skincare line. Packed with an optimal concentration of low and high weighted Hyaluronic Molecules, it provides instant hydration at the surface and deeper skin layers. The low molecular weight Hyaluronic Acid penetrates deeper skin layers, leaving skin feeling firmer, refreshed and visibly more radiant for the long term. High weight Hyaluronic Molecules provide immediate intensive hydration to the surface layers of the skin. When used as part of your daily skincare routine, the Hyluronic Serum improves the skin matrix and acts as a super-hydrator, improving skin health and reducing the formation of wrinkles caused by dehydration. It’s also the perfect travel companion after exposure to the sun and the elements, as Purslane, an anti-aging powerhouse, reduces the appearance of the visible signs of irritation.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Hyaluronic-Serum/dp/B09V9ZHKR7?th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=2d7dff9731a0dba81985b9db57b9c14c&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Barbara Sturm  Microbiotic Kit", 
              img: "https://m.media-amazon.com/images/I/51lMDSPoFGL._AC_SX679_.jpg", 
              description: "Dr. Sturm’s MICROBIOTIC KIT includes full-size products in a sustainable craft paper bag. Use the Gentle Cleansing Balm to cleanse dry skin, turning it into a milky emulsion with lukewarm water. Apply the Hydrating Blemish Control Serum by patting one pipette length onto your face, then follow with the Balancing Face Cream morning and evening. For blemishes, use the Ultimate Stinky Pimple Treatment directly on spots or as a mask. For large inflamed areas, apply thickly and leave overnight; for a thin layer under makeup, apply sparingly.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Microbiotic-Kit/dp/B0BZWVT7Z3?&linkCode=ll1&tag=rpt96-20&linkId=e46e46235fd19249cf7ea1781f457071&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Barbara Sturm Dr Barbara Sturm, Darker Skin Tones Discovery Kit", 
              img: "https://m.media-amazon.com/images/I/61pNajSd-8L._AC_SX679_.jpg", 
              description: "Dr. Barbara Sturm developed the DARKER SKIN TONES COLLECTION after identifying both the specific dermatological needs of melanin-rich skin and the absence of a skincare regimen to address those needs. Additional melanin protects against photoaging damage and makes the skin more elastic – however, darker skin tones also have a heightened sensitivity to inflammation which can result in hyperpigmentation and breakouts. Dr. Sturm’s DARKER SKIN TONES COLLECTION contains additional ingredient science shown to have potent skin evening and anti-irritation effects and is infused with ingredients that help balance out the sebum production of the skin as well as Lumicol, a micro algae extract that helps even skin tone for a natural, healthy glow. Includes DARKER SKIN TONES FOAM CLEANSER, DARKER SKIN TONES ENZYME CLEANSER, DARKER SKIN TONES HYALURONIC SERUM and the DARKER SKIN TONES FACE CREAM or DARKER SKIN TONES FACE CREAM RICH.", 
              amazonLink: "https://www.amazon.com/Barbara-Sturm-Darker-Tones-Discovery/dp/B0BKZS4Z5X?&linkCode=ll1&tag=rpt96-20&linkId=abacbce7ef29e06265a98a90fdf6f9f4&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Barbara Sturm Sun Skin", 
              img: "https://m.media-amazon.com/images/I/511t2i1z4aL.__AC_SY445_SX342_QL70_FMwebp_.jpg", 
              description: "Dr. Barbara Sturm introduces **Sun Skin**, a new addition to the Sturm Inside Collection designed to protect your skin from sun exposure and skin reactions like sun allergies and heat rashes. This supplement gives a natural, sun-kissed glow without sun exposure, even in winter. It includes vitamins, polyphenols, and trace elements like Golden Fern, Raw Cacao, and Green Tea Extract to support UV protection and collagen formation. Beta-Carotene and Calcium help guard against sun allergies, while Purslane and Glutathione offer anti-aging benefits. Packaged sustainably in biodegradable materials, Sun Skin can be taken alone or with other supplements. Consult your doctor if pregnant, breastfeeding, or on medication.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Skin-Count/dp/B0BX4C674W?ie=UTF8&keywords=DR%2BSTURM%2BSUN%2BSKIN&ASIN=B0BX4C674W&sprefix=dr%2Bsturm%2Bsun%2Bski%2Cluxury%2C406&sr=1-1&crid=36URCEPP272IC&qid=1722314460&dib=eyJ2IjoiMSJ9.hq4_j-ZMoSI2du4m8S6nQUmJcbEAjHjp3mRLd7KJHdELpJm_qwb1Q7yUFs3hqO1-Hu-vSLI_Zc4_7s6z3BhTzM17HzW5QAnBwt9AwJteVBY_fiAf8SoB-QuLpujIZimnwHCwM2gjAQ884H4R6k6V_tsmu3hS42Bq2Shzk-QX42k.MxUyrlVgR68TkEOmvQC_zAi199jGO7rk4Y7xHO4JFRQ&dib_tag=se&th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=824df63881f65a207893437bef1ba8dd&language=en_US&ref_=as_li_ss_tl" },

             { name: "Georgia Louise", 
              img: "https://m.media-amazon.com/images/I/51n-JhNGKiL._AC_SY741_.jpg", 
              description: "This oil smoothes the appearance of fine lines and wrinkles, is high in omegas and natural antioxidants, and has a stimulating scent. It is suitable for all skin types and ages, but works best for normal, dry, and sensitive skin types.", 
              amazonLink: "https://www.amazon.com/Sleeping-Beauty-Oil-1-0-Fl/dp/B0CTJ726FW?ie=UTF8&keywords=beauty&ASIN=B0CTJ726FW&sr=1-5&crid=2PI4XQKOIF329&qid=1721190190&dib=eyJ2IjoiMSJ9.uVmueQmA-E-TN1T6bkSDvWc1x6YQ5xn7KZg9tTAhU7Qt6NgrzI8hrPzCChsb8UaPylm--tkoThZ4L2ygHDAJgx_1N8l26QWe2hCPdJZGKk2n1XIHQVYFHi0r0A1YJSnbzaSIz4iHn1GQE8yOUW5-thB99tkeviNWD4IGjKl-HwG8mYB6togMyhyJQeI2xfs5J1RWSy9B__NZZweI5pLcyLIODxHNxVPHqraJxZbxNWNMQRSTytxhXrO9Ef4cTzWSNmROCY-V2QHW4F4vuDC_MVhSOLPEhqITbA8rSxpBjKA.905afGfDvNV2YdIaU1pebyJNGr9H0Z262CLpe69plKY&dib_tag=se&th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=ac354d19e4c91d3f2842152231ce7347&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Barbara Sturm Cleanser", 
              img: "https://m.media-amazon.com/images/I/51yHPCnJXJL._AC_SY741_.jpg", 
              description: "Thorough cleansing is an essential step of an effective skincare routine. Without it, impurities lodge on and in the skin, and active skincare ingredients cannot be optimally absorbed or used by the skin. This gentle foaming Cleanser removes complexion makeup and other impurities and prepares your skin for moisturizer or serum, without disturbing the delicate pH-balance or skin barrier function. Containing natural functional ingredients, Purslane calms, soothes and moisturizes, while Aloe Vera helps to repair and rejuvenate the skin.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Cleanser-150ml/dp/B09VHZ9GJ8?th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=65de567a615470b4c5cb558245a65b03&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Barbara Sturm Sun Drops SPF 50", 
              img: "https://m.media-amazon.com/images/I/61nbgk7Q+9L._AC_SY741_.jpg", 
              description: "This innovative, light-textured SPF 50 sun serum that doubles as skincare provides truly broad-spectrum protection against both UVA and UVB rays. An active complex of Cassia Extract, Vitamin E and Beta-Glucan protects the skin from oxidative damage, while Purslane, an anti-aging powerhouse, helps calm the skin and reduces visible signs of irritation.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Drops-30ml/dp/B09V6PSJMS?th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=ceb6cebaacec924392497dd413e9c7e4&language=en_US&ref_=as_li_ss_tl" },

            { name: "Monpure Follicle Boost Hair Density Serum ", 
              img: "https://m.media-amazon.com/images/I/41O8Aj8bM8L._AC_SX679_.jpg", 
              description: "Monpure Follicle Boost Hair Density Serum promotes thicker, fuller hair with regular use. It stimulates hair follicles and increases cell turnover on the scalp, enhancing overall hair health. This serum naturally blocks the conversion of testosterone to DHT, a hormone known to cause hair loss. Recognized for its efficacy, it won the Harper’s Bazaar Beauty Award for Best Stimulating Scalp Oil in 2021 and the Natural Health Beauty Award for Best Hair Product in 2020.", 
              amazonLink: "https://www.amazon.com/Monpure-Follicle-Boost-Density-Serum/dp/B09LVY9DL6?ie=UTF8&sbo=CU4Pt4JlFi0Kd%2B17c8I6Zw%3D%3D&ASIN=B09LVY9DL6&pf_rd_r=CD3HGCQPWZHNYD0H2Y5N&pf_rd_p=53d84f87-8073-4df1-9740-1bf3fa798149&th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=5e8a0588f1074c93a5c22382703325ad&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Barbara Sturm Face Mask", 
              img: "https://m.media-amazon.com/images/I/618mjEEKd9L._AC_SX679_.jpg", 
              description: "This deeply hydrating face mask is perfect when travelling, after exposure to sun or the elements, or whenever your skin needs an instant moisture boost. Purslane, an anti-aging powerhouse, helps calm the skin and reduces visible signs of irritation. Soothing Aloe Vera and Chamomile infuse your skin with moisture while Kaolin, also known as ‘China Clay,’ leaves your complexion feeling silky soft and supple.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Face-Mask/dp/B09V9VZ1BH?th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=71ca259ddbf4d87963ff6191c1e76933&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Barbara Sturm Eye Cream, 15ML", 
              img: "https://m.media-amazon.com/images/I/31BH646SBqL._AC_.jpg", 
              description: "Dr. Barbara Sturm's hydrating Eye Cream has been specially developed to target the dark shadows, bags, and puffiness around the delicate eye area. Purslane with the special complex of Golden Root, Sugar Beet and Yeast provide a soothing 'de-puffing' effect. While active Omega lipids help the skin to retain moisture for a more youthful appearance.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Cream-15ML/dp/B09XJ8S4Q4?&linkCode=ll1&tag=rpt96-20&linkId=513e41409ae4f067f427f405ddc738ad&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Barbara Sturm Calming Serum", 
              img: "https://m.media-amazon.com/images/I/61ZFGvIMWkL._AC_SY741_.jpg", 
              description: "CALMING SERUM soothes and rebalances irritated skin. Perfect for soothing your complexion after sun exposure, shaving, sleep loss, jet lag, air conditioning or environmental pollution.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Calming-Unisex/dp/B09H3L9WCM?th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=5e367e189cb85f091e0a5a6b199961dd&language=en_US&ref_=as_li_ss_tl" },

            
        ],
        handbags: [
            { name: "Oscar de la Renta", 
              img: "https://m.media-amazon.com/images/I/71E5uOIDt0L._AC_SY741_.jpg", 
              description: "Oscar de la Renta's Flora & Fauna TRO Bag", 
              amazonLink: "https://www.amazon.com/Oscar-Renta-Flora-Fauna-Printed/dp/B0CRLVJWDN?ie=UTF8&ASIN=B0CRLVJWDN&sr=1-29&qid=1721709114&_encoding=UTF8&dib=eyJ2IjoiMSJ9.XN5g2qb6A8x5XY3KbNfqI2KGvu8jz0xWnM9K30d7JhqPvNvpI9mnr_kFHMNKKkgilm9a30VklWCorL9MN_feoG3vOkim2sXglJ-8y0iURFvD1PA-hEE1ZXNoil11W-2qBOb5i3Hac2Eq-Bv7xZkOlwdVnWTSnqlC9UqIWALCTngJnOO0svz2vl_rMsYQ0pYfTXWk_2bsdFWtmeFXasorImuPnq5Tsx-R9TV0rtI9Jahm4h9CXOCCPn50mMBTBOU-Jju0O8MkGfcCknnNhbcipsbCGOqRaLPnPLjLcsdZ2uc.7zaSZmymCXTzNG-GlbEcOFTfXU7uj2K2Ju_EGip9JYQ&rnid=20722800011&dib_tag=se&th=1&linkCode=ll1&tag=rpt96-20&linkId=bbfb40582509e80fb85a9e46e2e7ca66&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dior", 
              img: "https://m.media-amazon.com/images/I/611kRdScViL._AC_SY741_.jpg", 
              description: "The Pre-Loved White Calfskin 30 Montaigne Avenue Bag by Dior features smooth calfskin leather and gold logo closure inspired by Dior perfume bottles. In excellent condition with light scratching on the hardware, this Italian-made bag has an adjustable chain link and leather shoulder strap with a turnlock closure. Its elegant silhouette and super-fine lines make it a versatile, ultra-chic accessory for adding a touch of glam to any outfit.", 
              amazonLink: "https://www.amazon.com/Dior-Pre-Loved-Calfskin-Montaigne-Avenue/dp/B0D9HWBZH4?ie=UTF8&ASIN=B0D9HWBZH4&sr=1-50&qid=1721709642&_encoding=UTF8&dib=eyJ2IjoiMSJ9.QQ2u85lF5D6gKZWU5fW-yYzh4fkruve9ZIUxFV3enq-KTjk9UMZQBapZzLDW9dL2YArsjNt0nJQFHQrzLcyasGOApGm_K89SnWcHUYLMVIq-WnmJ7MEPTu5NQxWAZgRjbwGSDnYtlh24nbuc_skSdtHoIhDEWTBmHVAKe-gJGiC62DjTBBMP9jw9KAAdAfGoRLsIvncsQ1QORcVvVgAGy9m_VcjaOCKffOMbkdyJgic1bCrgDH5fqxoARps8DbrhveL0jCn9PCDneKGvnS45nPHkFM6U6hQFJIDsZMVG7LA.2J5SWTQuzs-8191DcuimuNHKcF7N6gEIhF1U_dk0n98&rnid=20722800011&dib_tag=se&linkCode=ll1&tag=rpt96-20&linkId=95b19676995c51b07484e4ca4662a35c&language=en_US&ref_=as_li_ss_tl" },

            { name: "Prada", 
              img: "https://m.media-amazon.com/images/I/71ev4d3IXkL._AC_SY741_.jpg", 
              description: "The Pre-Loved Blue Saffiano Camera Bag Mini by Prada is crafted in signature Saffiano leather and features silver-tone hardware. In excellent condition with faint scuffs on the hardware, this Italian-made bag includes a detachable leather shoulder strap and zip closure, offering a compact and stylish accessory.", 
              amazonLink: "https://www.amazon.com/Prada-Pre-Loved-Blue-Saffiano-Camera/dp/B0D1FXDSBY?ie=UTF8&ASIN=B0D1FXDSBY&sr=1-16&qid=1721709114&_encoding=UTF8&dib=eyJ2IjoiMSJ9.XN5g2qb6A8x5XY3KbNfqI2KGvu8jz0xWnM9K30d7JhqPvNvpI9mnr_kFHMNKKkgilm9a30VklWCorL9MN_feoG3vOkim2sXglJ-8y0iURFvD1PA-hEE1ZXNoil11W-2qBOb5i3Hac2Eq-Bv7xZkOlwdVnWTSnqlC9UqIWALCTngJnOO0svz2vl_rMsYQ0pYfTXWk_2bsdFWtmeFXasorImuPnq5Tsx-R9TV0rtI9Jahm4h9CXOCCPn50mMBTBOU-Jju0O8MkGfcCknnNhbcipsbCGOqRaLPnPLjLcsdZ2uc.7zaSZmymCXTzNG-GlbEcOFTfXU7uj2K2Ju_EGip9JYQ&rnid=20722800011&dib_tag=se&linkCode=ll1&tag=rpt96-20&linkId=2b87fccd2becda923203200fe75a10c9&language=en_US&ref_=as_li_ss_tl" },

            { name: "Gucci", 
              img: "https://m.media-amazon.com/images/I/71NInMahd7L._AC_SY741_.jpg", 
              description: "The Gucci Soho Tote, crafted in red grained leather, features the iconic interlocking 'GG' logo, leather tassel, and gold chain-link straps. Pre-loved in excellent condition with light scuffing at the corners, this Italian-made bag offers both elegance and practicality with its adjustable straps, clasp closure, and multiple interior pockets. it’s a timeless accessory for any wardrobe.", 
              amazonLink: "https://www.amazon.com/Gucci-Pre-Loved-Leather-Soho-Chain/dp/B0D38G6978?ie=UTF8&ASIN=B0D38G6978&sr=1-24&qid=1721709668&_encoding=UTF8&dib=eyJ2IjoiMSJ9.XN5g2qb6A8x5XY3KbNfqI2KGvu8jz0xWnM9K30d7JhqPvNvpI9mnr_kFHMNKKkgilm9a30VklWCorL9MN_feoG3vOkim2sXglJ-8y0iURFvD1PA-hEE1ZXNoil11W-2qBOb5i3Hac2Eq-Bv7xZkOlwdVnWTSnqlC9UqIWALCTngJnOO0svz2vl_rMsYQ0pYfTXWk_2bsdFWtmeFXasorImuPnq5Tsx-R9TV0rtI9Jahm4h9CXOCCPn50mMBTBOU-Jju0O8MkGfcCknnNhbcipsbCGOqRaLPnPLjLcsdZ2uc.7zaSZmymCXTzNG-GlbEcOFTfXU7uj2K2Ju_EGip9JYQ&rnid=20722800011&dib_tag=se&linkCode=ll1&tag=rpt96-20&linkId=c501ff3e94efb1da52e4a91b91bc3e5e&language=en_US&ref_=as_li_ss_tl" },

            { name: "Wandler", 
              img: "https://m.media-amazon.com/images/I/61xg3X+h1TL._AC_SY741_.jpg", 
              description: "The Women's Oscar Baguette Purse in Seaweed Crust green leather features gold-tone hardware and a fold-over flap with magnetic closure.Includes an adjustable shoulder strap and patch interior pocket. Imported and elegantly designed, this purse is both stylish and practical.", 
              amazonLink: "https://www.amazon.com/Wandler-Womens-Oscar-Baguette-Seaweed/dp/B0CG2JYF6V?ie=UTF8&ASIN=B0CG2JYF6V&sr=1-9&qid=1721709668&_encoding=UTF8&dib=eyJ2IjoiMSJ9.XN5g2qb6A8x5XY3KbNfqI2KGvu8jz0xWnM9K30d7JhqPvNvpI9mnr_kFHMNKKkgilm9a30VklWCorL9MN_feoG3vOkim2sXglJ-8y0iURFvD1PA-hEE1ZXNoil11W-2qBOb5i3Hac2Eq-Bv7xZkOlwdVnWTSnqlC9UqIWALCTngJnOO0svz2vl_rMsYQ0pYfTXWk_2bsdFWtmeFXasorImuPnq5Tsx-R9TV0rtI9Jahm4h9CXOCCPn50mMBTBOU-Jju0O8MkGfcCknnNhbcipsbCGOqRaLPnPLjLcsdZ2uc.7zaSZmymCXTzNG-GlbEcOFTfXU7uj2K2Ju_EGip9JYQ&rnid=20722800011&dib_tag=se&linkCode=ll1&tag=rpt96-20&linkId=1e2499a8372f51fe91ff81c6aabe6bb6&language=en_US&ref_=as_li_ss_tl" },

            { name: "Gucci", 
              img: "https://m.media-amazon.com/images/I/81XR2ffaUIL._AC_SY741_.jpg", 
              description: "The Pre-Loved Original GG Supreme Canvas Ophidia Shoulder Bag by Gucci features the iconic GG monogram and Web stripe. Made in Italy, this vintage-inspired bag has an adjustable leather shoulder strap and top zip closure. Crafted in GG Supreme coated canvas with brown leather trim, it is adorned with a gold-tone Running 'GG' logo. The GG monogram, a fashion staple since the mid-1960s, signifies leisure and luxury with its recognizable diamond pattern.", 
              amazonLink: "https://www.amazon.com/Gucci-Pre-Loved-Original-Supreme-Shoulder/dp/B0CZ7N3SCW?ie=UTF8&ASIN=B0CZ7N3SCW&pf_rd_r=RR180GYR91582E49Q054&pf_rd_p=16a5ceac-4369-4773-9a03-99ce6ea02530&_encoding=UTF8&pd_rd_i=B0CZ7N3SCW&content-id=amzn1.sym.16a5ceac-4369-4773-9a03-99ce6ea02530&pd_rd_w=PWAuS&pd_rd_wg=hFwhC&pd_rd_r=56edc5b1-1a62-415c-840e-68a5d37fa8dd&linkCode=ll1&tag=rpt96-20&linkId=ab269a355f9bc71ef857aabfb6111701&language=en_US&ref_=as_li_ss_tl" },

            { name: "Oscar de la Renta", 
              img: "https://m.media-amazon.com/images/I/61X3oEXLQNL._AC_SY741_.jpg", 
              description: "The Oscar de la Renta Poppy Printed Mini TRO Bag is a must-have for any handbag collection. Crafted from saffiano leather with a seasonal poppy motif, it offers a versatile look for day or night. Wear it with either the gold-tone chain strap or the statement resin chain for a chic, stylish accessory.", 
              amazonLink: "https://www.amazon.com/Oscar-Renta-Poppy-Printed-Mini/dp/B0CRM2WMXL?th=1&linkCode=ll1&tag=rpt96-20&linkId=461735467728b3670e0011256a762c47&language=en_US&ref_=as_li_ss_tl" },

            { name: "ANIMA IRIS", 
              img: "https://m.media-amazon.com/images/I/51vJRCrb9SL._AC_SY741_.jpg", 
              description: "The ANIMA IRIS Baby ZURI in Nectar is a luxurious mini version of the original Zuri bag, crafted from 100% imported leather. The shiny orange croc leather with a white undertone offers a smooth texture and standout quality, making it an eye-catching and elegant accessory.", 
              amazonLink: "https://www.amazon.com/ANIMA-IRIS-Baby-ZURI-Nectar/dp/B0BGMDKG34?ie=UTF8&ASIN=B0BGMDKG34&sr=1-46&qid=1721709114&_encoding=UTF8&dib=eyJ2IjoiMSJ9.XN5g2qb6A8x5XY3KbNfqI2KGvu8jz0xWnM9K30d7JhqPvNvpI9mnr_kFHMNKKkgilm9a30VklWCorL9MN_feoG3vOkim2sXglJ-8y0iURFvD1PA-hEE1ZXNoil11W-2qBOb5i3Hac2Eq-Bv7xZkOlwdVnWTSnqlC9UqIWALCTngJnOO0svz2vl_rMsYQ0pYfTXWk_2bsdFWtmeFXasorImuPnq5Tsx-R9TV0rtI9Jahm4h9CXOCCPn50mMBTBOU-Jju0O8MkGfcCknnNhbcipsbCGOqRaLPnPLjLcsdZ2uc.7zaSZmymCXTzNG-GlbEcOFTfXU7uj2K2Ju_EGip9JYQ&rnid=20722800011&dib_tag=se&linkCode=ll1&tag=rpt96-20&linkId=5cd6ec2c819789b4278fe79accad8561&language=en_US&ref_=as_li_ss_tl" },

            { name: "Prada", 
              img: "https://m.media-amazon.com/images/I/71662V-c3AL._AC_SY741_.jpg", 
              description: "The Pre-Loved Pink Saffiano Executive Tote Small by Prada is a chic and structured bag crafted from rose pink Saffiano leather. In very good condition with light scuffs on hardware and faint creasing on the leather trim, it is made in Italy and features two rolled leather top handles and an optional shoulder strap. The tote includes two zip compartments and is finished with gold-tone hardware. Saffiano leather, known for its cross-hatched embossed grain and satin finish, offers durability and water resistance.", 
              amazonLink: "https://www.amazon.com/Prada-Pre-Loved-Saffiano-Executive-Small/dp/B0CSSFPVP5?ie=UTF8&ASIN=B0CSSFPVP5&sr=1-42&qid=1721709114&_encoding=UTF8&dib=eyJ2IjoiMSJ9.XN5g2qb6A8x5XY3KbNfqI2KGvu8jz0xWnM9K30d7JhqPvNvpI9mnr_kFHMNKKkgilm9a30VklWCorL9MN_feoG3vOkim2sXglJ-8y0iURFvD1PA-hEE1ZXNoil11W-2qBOb5i3Hac2Eq-Bv7xZkOlwdVnWTSnqlC9UqIWALCTngJnOO0svz2vl_rMsYQ0pYfTXWk_2bsdFWtmeFXasorImuPnq5Tsx-R9TV0rtI9Jahm4h9CXOCCPn50mMBTBOU-Jju0O8MkGfcCknnNhbcipsbCGOqRaLPnPLjLcsdZ2uc.7zaSZmymCXTzNG-GlbEcOFTfXU7uj2K2Ju_EGip9JYQ&rnid=20722800011&dib_tag=se&linkCode=ll1&tag=rpt96-20&linkId=41ec49f692f886bd9b090176951662bb&language=en_US&ref_=as_li_ss_tl" },

            { name: "Oscar de la Renta", 
              img: "https://m.media-amazon.com/images/I/81W5LVnTeZL._AC_SY741_.jpg", 
              description: "The Oscar de la Renta Black Saffiano Mini TRO Bag is a stylish accessory crafted from 100% leather. This imported bag features a magnetic-fastening front flap and an interior open pocket. Reworked in a compact mini style, it showcases subtle saffiano leather with a tonal gardenia flower and chain strap, offering a chic and elegant look.", 
              amazonLink: "https://www.amazon.com/Oscar-Renta-Black-Saffiano-Mini/dp/B08GKFYRFQ?ie=UTF8&ASIN=B08GKFYRFQ&sr=1-47&qid=1721709114&_encoding=UTF8&dib=eyJ2IjoiMSJ9.XN5g2qb6A8x5XY3KbNfqI2KGvu8jz0xWnM9K30d7JhqPvNvpI9mnr_kFHMNKKkgilm9a30VklWCorL9MN_feoG3vOkim2sXglJ-8y0iURFvD1PA-hEE1ZXNoil11W-2qBOb5i3Hac2Eq-Bv7xZkOlwdVnWTSnqlC9UqIWALCTngJnOO0svz2vl_rMsYQ0pYfTXWk_2bsdFWtmeFXasorImuPnq5Tsx-R9TV0rtI9Jahm4h9CXOCCPn50mMBTBOU-Jju0O8MkGfcCknnNhbcipsbCGOqRaLPnPLjLcsdZ2uc.7zaSZmymCXTzNG-GlbEcOFTfXU7uj2K2Ju_EGip9JYQ&rnid=20722800011&dib_tag=se&th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=f0ead229ac9ef610f5c84a2e2a1f5fb6&language=en_US&ref_=as_li_ss_tl" },

            { name: "Gucci", 
              img: "https://m.media-amazon.com/images/I/81LMaPgrKUL._AC_SY741_.jpg", 
              description: "The Gucci Pre-Loved Original GG Canvas Web Crossbody is crafted in beige Original GG Canvas with black leather trimmings, and finished with pale gold-tone metal hardware. In excellent pre-loved condition with visible scuffing at the interior, it features an adjustable leather shoulder strap and snap closure. Made in Italy, this crossbody bag showcases the iconic GG monogram, a symbol of leisure and luxury since the mid-1960s, forming a recognizable diamond pattern.", 
              amazonLink: "https://www.amazon.com/Gucci-Pre-Loved-Original-Canvas-Crossbody/dp/B0D38C26PQ?ie=UTF8&ASIN=B0D38C26PQ&sr=1-7&qid=1721709094&_encoding=UTF8&dib=eyJ2IjoiMSJ9.XN5g2qb6A8x5XY3KbNfqI2KGvu8jz0xWnM9K30d7JhqPvNvpI9mnr_kFHMNKKkgilm9a30VklWCorL9MN_feoG3vOkim2sXglJ-8y0iURFvD1PA-hEE1ZXNoil11W-2qBOb5i3Hac2Eq-Bv7xZkOlwdVnWTSnqlC9UqIWALCTngJnOO0svz2vl_rMsYQ0pYfTXWk_2bsdFWtmeFXasorImuPnq5Tsx-R9TV0rtI9Jahm4h9CXOCCPn50mMBTBOU-Jju0O8MkGfcCknnNhbcipsbCGOqRaLPnPLjLcsdZ2uc.7zaSZmymCXTzNG-GlbEcOFTfXU7uj2K2Ju_EGip9JYQ&rnid=20722800011&dib_tag=se&linkCode=ll1&tag=rpt96-20&linkId=1bf9e92e9861bcd939650a6c2a7c19a2&language=en_US&ref_=as_li_ss_tl" },

            { name: "Louis Vuitton", 
              img: "https://m.media-amazon.com/images/I/81+NAaNOSJL._AC_SY741_.jpg", 
              description: "The Louis Vuitton Pre-Loved Monogram Canvas Turenne MM is a simple and refined tote perfect for everyday carry. Made in France, this medium-sized bag features the iconic Monogram Canvas with natural Vachetta leather trim and gold-tone brass hardware. In excellent pre-loved condition with an even patina and light watermarks on the leather trim, it has two leather top handles, an optional shoulder strap, and a top zip closure. The Monogram Print, first introduced in 1896 by Georges Vuitton to deter counterfeiters, is a recognizable symbol of luxury and durability, making it ideal for daily use.", 
              amazonLink: "https://www.amazon.com/Louis-Vuitton-Pre-Loved-Monogram-Turenne/dp/B0D3SF6YJL?ie=UTF8&ASIN=B0D3SF6YJL&sr=1-8&qid=1721709114&_encoding=UTF8&dib=eyJ2IjoiMSJ9.XN5g2qb6A8x5XY3KbNfqI2KGvu8jz0xWnM9K30d7JhqPvNvpI9mnr_kFHMNKKkgilm9a30VklWCorL9MN_feoG3vOkim2sXglJ-8y0iURFvD1PA-hEE1ZXNoil11W-2qBOb5i3Hac2Eq-Bv7xZkOlwdVnWTSnqlC9UqIWALCTngJnOO0svz2vl_rMsYQ0pYfTXWk_2bsdFWtmeFXasorImuPnq5Tsx-R9TV0rtI9Jahm4h9CXOCCPn50mMBTBOU-Jju0O8MkGfcCknnNhbcipsbCGOqRaLPnPLjLcsdZ2uc.7zaSZmymCXTzNG-GlbEcOFTfXU7uj2K2Ju_EGip9JYQ&rnid=20722800011&dib_tag=se&linkCode=ll1&tag=rpt96-20&linkId=6798a0075a794c6a05d986098b3b082b&language=en_US&ref_=as_li_ss_tl" },

             { name: "Wandler", 
              img: "https://m.media-amazon.com/images/I/61XmZpL-VVL._AC_SY741_.jpg", 
              description: "The Wandler Women's Penelope Big Bag is an elegant accessory crafted from polyester and features gold-tone hardware. It has divided compartments, a fold-over flap with magnetic closure, and an optional adjustable strap. The bag is finished with a suede backing, combining style and functionality. Imported and designed for versatility, it's perfect for everyday use.", 
              amazonLink: "https://www.amazon.com/Wandler-Womens-Penelope-Saddle-Brown/dp/B0CMC8QDDB?ie=UTF8&ASIN=B0CMC8QDDB&sr=1-26&qid=1721709114&_encoding=UTF8&dib=eyJ2IjoiMSJ9.XN5g2qb6A8x5XY3KbNfqI2KGvu8jz0xWnM9K30d7JhqPvNvpI9mnr_kFHMNKKkgilm9a30VklWCorL9MN_feoG3vOkim2sXglJ-8y0iURFvD1PA-hEE1ZXNoil11W-2qBOb5i3Hac2Eq-Bv7xZkOlwdVnWTSnqlC9UqIWALCTngJnOO0svz2vl_rMsYQ0pYfTXWk_2bsdFWtmeFXasorImuPnq5Tsx-R9TV0rtI9Jahm4h9CXOCCPn50mMBTBOU-Jju0O8MkGfcCknnNhbcipsbCGOqRaLPnPLjLcsdZ2uc.7zaSZmymCXTzNG-GlbEcOFTfXU7uj2K2Ju_EGip9JYQ&rnid=20722800011&dib_tag=se&th=1&linkCode=ll1&tag=rpt96-20&linkId=7599aafa98e1c10629112e5941fbcc08&language=en_US&ref_=as_li_ss_tl" },

             { name: "Gucci", 
              img: "https://m.media-amazon.com/images/I/816p7pFARzL._AC_SY741_.jpg", 
              description: "The Gucci Pre-Loved Black Denim Dionysus Super Mini Shoulder Bag is a pristine example of timeless Italian style. Crafted from black denim with black leather trim and accented by a silver-tone metal double tiger head, this structured bag references the Greek god Dionysus. It features a flap front with a snap closure and a detachable chain link crossbody strap. Made in Italy, it offers a luxurious touch with the GG monogram, a symbol of leisure and elegance since the mid-1960s.", 
              amazonLink: "https://www.amazon.com/Gucci-Pre-Loved-Black-Dionysus-Shoulder/dp/B0D9JM3B2L?ie=UTF8&ASIN=B0D9JM3B2L&sr=1-48&qid=1721709668&_encoding=UTF8&dib=eyJ2IjoiMSJ9.XN5g2qb6A8x5XY3KbNfqI2KGvu8jz0xWnM9K30d7JhqPvNvpI9mnr_kFHMNKKkgilm9a30VklWCorL9MN_feoG3vOkim2sXglJ-8y0iURFvD1PA-hEE1ZXNoil11W-2qBOb5i3Hac2Eq-Bv7xZkOlwdVnWTSnqlC9UqIWALCTngJnOO0svz2vl_rMsYQ0pYfTXWk_2bsdFWtmeFXasorImuPnq5Tsx-R9TV0rtI9Jahm4h9CXOCCPn50mMBTBOU-Jju0O8MkGfcCknnNhbcipsbCGOqRaLPnPLjLcsdZ2uc.7zaSZmymCXTzNG-GlbEcOFTfXU7uj2K2Ju_EGip9JYQ&rnid=20722800011&dib_tag=se&linkCode=ll1&tag=rpt96-20&linkId=1aac1f1a3e5dbb16f9c61004017e0ed7&language=en_US&ref_=as_li_ss_tl" },

             { name: "Louis Vuitton", 
              img: "https://m.media-amazon.com/images/I/81adu3AHjmL._AC_SY741_.jpg", 
              description: "The Louis Vuitton Pre-Loved Damier Ebene Neverfull PM is a classic tote crafted from signature Damier Ebene coated canvas. In very good condition with minor scratching on hardware and creasing on the exterior leather trim, it features two leather shoulder straps and a clasp closure. Made in France, this iconic bag was first introduced in 2007 and remains one of Louis Vuitton's most successful silhouettes due to its durable design and versatile appeal. The Neverfull continues to be offered in various colors and leathers, reflecting the brand's creativity and enduring popularity.", 
              amazonLink: "https://www.amazon.com/Louis-Vuitton-Pre-Loved-Damier-Neverfull/dp/B0CSSVMZ14?ie=UTF8&ASIN=B0CSSVMZ14&sr=1-40&qid=1721709668&_encoding=UTF8&dib=eyJ2IjoiMSJ9.XN5g2qb6A8x5XY3KbNfqI2KGvu8jz0xWnM9K30d7JhqPvNvpI9mnr_kFHMNKKkgilm9a30VklWCorL9MN_feoG3vOkim2sXglJ-8y0iURFvD1PA-hEE1ZXNoil11W-2qBOb5i3Hac2Eq-Bv7xZkOlwdVnWTSnqlC9UqIWALCTngJnOO0svz2vl_rMsYQ0pYfTXWk_2bsdFWtmeFXasorImuPnq5Tsx-R9TV0rtI9Jahm4h9CXOCCPn50mMBTBOU-Jju0O8MkGfcCknnNhbcipsbCGOqRaLPnPLjLcsdZ2uc.7zaSZmymCXTzNG-GlbEcOFTfXU7uj2K2Ju_EGip9JYQ&rnid=20722800011&dib_tag=se&linkCode=ll1&tag=rpt96-20&linkId=7be361ef7292f132dedb1f4bc38c8452&language=en_US&ref_=as_li_ss_tl" },

            { name: "Louis Vuitton", 
              img: "https://m.media-amazon.com/images/I/715lM50rAyL._AC_SY741_.jpg", 
              description: "Sleek Louis Vuitton Victoire shoulder bag crafted in the brand's signature Monogram coated canvas, featuring red leather paneling and finished with gold-tone brass hardware. About the Monogram Print: If you love Louis Vuitton, you are no stranger to the classic Monogram Print. First introduced in the year 1896 by Georges Vuitton, the print was created to stop counterfeiters from copying the brands designs. The repeated pattern is made up of interlocking L and V initials in a serif font, and flowers inspired by Japanese and Oriental designs. The canvas was made to be durable and water resistant which makes it the perfect for everyday use.", 
              amazonLink: "https://www.amazon.com/Louis-Vuitton-Pre-Loved-Monogram-Victoire/dp/B0D1G95WDZ?ie=UTF8&ASIN=B0D1G95WDZ&sr=1-14&qid=1722229194&_encoding=UTF8&dib=eyJ2IjoiMSJ9.9R0gNro7xGaK7rCOe4c4_TOx4HBTtIarFqg4Wlr09aDk7UvKxWpo0Ut4O75Ozxk9tlptjHYnONRdTCJcYQSU__JWkO_uZfPC9hoPbNWf2q5M_YJS89N-TJxmPQW8jofk_LXzYG0sVhVXuOfTcPuE6ruW-qCZPNk47gUXbzMLrCafSu0dS5T3llIdyij1QQo2a0WJSgW9qXk0wcDHoCi0ewgAAzC6Zk2A4ij7be3qBrEKiOOH5OiyNR8IHyLS4tponC4dw0VzR7Jq_n92GNoJna-rPnFW3Gj67FKOmIdEFEo.7nv66579uaRIyGwjkAvlr6NqWXwovo2XgZ9y7y5eFTo&dib_tag=se&linkCode=ll1&tag=rpt96-20&linkId=6b92abb6d771fb5887abeff9ad526c97&language=en_US&ref_=as_li_ss_tl" },

            { name: "Prada", 
              img: "https://m.media-amazon.com/images/I/71niTItVY6L._AC_SY741_.jpg", 
              description: "Structured Prada crossbody bag in red Nappa Gaufre leather, featuring gathered details and finished with silver-tone hardware.", 
              amazonLink: "https://www.amazon.com/Prada-Pre-Loved-Nappa-Gaufre-Crossbody/dp/B0D38CZN69?ie=UTF8&ASIN=B0D38CZN69&sr=1-22&qid=1722241423&_encoding=UTF8&dib=eyJ2IjoiMSJ9.KAeSaZwaqIGmLkpF3M92Ezhj5Ln3udwSc7AQnW0TxeSUTZnliJhXLDGbPcWL_xHtP9qUbsWEf7m2K9EbCCM078WMynZMHycsd0-Y9ZDMdakrq9-K1vqYpJDzQofYtlpewajF9yYonOVzjOoa5j8I647o20l4t8a1nNcQQwO4XkW2GokhR6lCDiKe29dW1NhMBgeC2LvAzVBjiFLRSo9S0h_P73Wk5ktlMDqoY6BOt0kUKUfkc4sJsXn75Betg6dAZi4NYIp-A3HuXgPoHes82ri36gA9N7wZN5_S5zCPt5s.4UBoJj9XoH31TQ-u_AaBUZPDOr9sfyomoJBniR6ZuoA&rnid=20722800011&dib_tag=se&linkCode=ll1&tag=rpt96-20&linkId=02aac33efb552788a06947ffeef39ffb&language=en_US&ref_=as_li_ss_tl" },

             { name: "YVES SAINT LAURENT", 
              img: "https://m.media-amazon.com/images/I/71hL-8YMIML._AC_SY741_.jpg", 
              description: " The Yves Saint Laurent Jamie shoulder bag is an adorable accessory made of tweed with a leather interior and gold-tone logo hardware. It's a perfect choice for any occasion, adding elegance and sophistication to your style. ", 
              amazonLink: "https://www.amazon.com/Saint-Laurent-Pre-Loved-Shoulder-Medium/dp/B0D1XQ8V9P?&linkCode=ll1&tag=rpt96-20&linkId=27aaa464831313bc584d3fb10e87ee0a&language=en_US&ref_=as_li_ss_tl" },

        ],
        clothing: [
             { name: "Rodarte", 
               img: "https://m.media-amazon.com/images/I/717EVkMgQaL._AC_SY741_.jpg", 
               description: "Fresh and modern, this midi is cut from silk twill adorned with a pink and blue rose print. The fitted bodice flows into a graceful circle skirt. A vibrant pink rose accents the neckline with blue leaves. Puff sleeves are gathered into a tailored sleeve.", 
               amazonLink: "https://www.amazon.com/Rodarte-Printed-Sleeve-Flower-Detail/dp/B0CZCBXQPP?th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=7710bfe6a1f91af72ac245047f3f98bd&language=en_US&ref_=as_li_ss_tl" },

              { name: "PatBO", 
               img: "https://m.media-amazon.com/images/I/61DFVdnga+L._AC_SX569_.jpg", 
               description: "This mini dress features a deep V-neckline and ruched waistband detail. Concealed back zipper closure. Fully Lined. Runs small.", 
               amazonLink: "https://www.amazon.com/Viera-V-Neck-Mini-Dress-2/dp/B0CT9R1H7J?th=1&linkCode=ll1&tag=rpt96-20&linkId=db0f90e2e37a44f8040fe48923c75348&language=en_US&ref_=as_li_ss_tl" },

              { name: "Elie Saab", 
               img: "https://m.media-amazon.com/images/I/71D72lgyXnL._AC_SY741_.jpg", 
               description: "This exquisite lace embroidered long dress is crafted from a luxurious blend of 34% silk, 33% polyester, and 33% nylon. The dress features a sophisticated scoop neck, open back, and sleeveless design, perfectly complemented by a scalloped hemline. Fitted to accentuate your silhouette, it pairs beautifully with heels for an elegant look. The dress, imported and dry clean only, comes with a silk lining for added comfort and style.", 
               amazonLink: "https://www.amazon.com/Elie-Saab-Embroidered-Dress-Cosmopolitan/dp/B0D2F4NVC9?th=1&linkCode=ll1&tag=rpt96-20&linkId=bb12d1c2e201d251de70c51cabc0a272&language=en_US&ref_=as_li_ss_tl" },

              { name: "Rodarte", 
               img: "https://m.media-amazon.com/images/I/71bSJ9otyAL._AC_SY741_.jpg", 
               description: "This elegant slip dress from the Rodarte Spring 24 Collection is crafted entirely from 100% silk, with a hand-molded silk flower adorning the neckline. Made in the USA, this minimalist gown is cut on the bias from blue and pink rose-printed silk charmeuse, creating a graceful and streamlined silhouette. Specialized dry cleaning ensures its luxurious quality is maintained. Pair this exquisite dress with its matching floor-length cape for a truly sophisticated ensemble.", 
               amazonLink: "https://www.amazon.com/Rodarte-Printed-Dress-Flower-Detail/dp/B0CWSGD954?th=1&linkCode=ll1&tag=rpt96-20&linkId=28fb786ae6d4d9436517303cd2ababc6&language=en_US&ref_=as_li_ss_tl" },

              { name: "Elie Saab", 
               img: "https://m.media-amazon.com/images/I/71+gUuJxgEL._AC_SY741_.jpg", 
               description: "This Elie Saab knit and lace midi dress is crafted from a luxurious blend of 70% viscose, 5% metal, 10% nylon, 5% polyamide, 5% elastane, and 5% polyester. Featuring scalloped straps and neckline with delicate lace inserts, it boasts a straight-across neckline and a closed back. The sleeveless design is fitted through the bust, waist, and hips, flaring elegantly at the hem. This versatile dress can be styled with flats or heels, making it perfect for various occasions. Dry clean only to maintain its exquisite quality. Imported.", 
               amazonLink: "https://www.amazon.com/Elie-Saab-Dress-Spritz-Powder/dp/B0D2DVSMSP?th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=9d6dd721281905da1d432b9b15f8d0f5&language=en_US&ref_=as_li_ss_tl" },

              { name: "PatBO", 
               img: "https://m.media-amazon.com/images/I/61S58HDAAiL._AC_SX569_.jpg", 
               description: "This stunning PatBO Aura Metallic Plunge Mini Dress is crafted from a shimmering blend of 50% polyester and 50% metallic fabric. It features a daring plunge neckline and a fitted skirt with an elegant side drape detail. The concealed back zipper ensures a seamless fit, while the design runs true to size for a flattering silhouette. Perfect for making a statement at any event, this imported dress requires dry cleaning to maintain its radiant appearance.", 
               amazonLink: "https://www.amazon.com/Aura-Metallic-Plunge-Mini-Dress/dp/B0CT9TQBSQ?ie=UTF8&ASIN=B0CT9TQBSQ&sr=1-78&qid=1721975658&_encoding=UTF8&dib=eyJ2IjoiMSJ9.kH4gcULqUssF_PGK9VZ8PkvRhn3EVSPsgdgm4Sdd0hmrnjKzgx31_gNP2JccvCVboE-uQxlyxeG82C1DRb7yG_IQMur7-Q4EJWaTnLFAaGymzZevbo5eTgtVQrEzGHvT7RUJJksffz4IZMSEd-9rSitOWftCJyzF1W_e_uODQMGdLcEJf3P71TRgPPsA3Eu476A7fz2YlKa5Iq-XgnRq-zGi3fj_Rqzc05iTFFL5Imen2QSuHyCl8AGpvyWTVa0eHdwXhmWB7ybYsA1POzrxcv5kZRvHpDXqQrHcaatmnI0.aXtzTEk0bkFmUidJbLRvFS_n8Cc-dfCofr5r2VeEMMw&rnid=20722800011&dib_tag=se&th=1&linkCode=ll1&tag=rpt96-20&linkId=40ca924f8f7941ef1a696df2c77eb673&language=en_US&ref_=as_li_ss_tl" },

              { name: "Altuzarra", 
               img: "https://m.media-amazon.com/images/I/61sQHbjH+WL._AC_SY741_.jpg", 
               description: "The Altuzarra Connie Dress, showcased in the SS24 runway show, is a stunning piece inspired by the generous trapeze volumes of fifties and sixties couture. Made from 100% cotton, this imported dress features a ribbed, compact-knit design with slim shoulder straps and a square neckline. The slim bodice transitions into a flattering midi-length hem. Ideal for various occasions, the dress should be dry cleaned only to maintain its elegant structure.", 
               amazonLink: "https://www.amazon.com/Altuzarra-Connie-Dress-Natural-White/dp/B0CT66DK78?th=1&linkCode=ll1&tag=rpt96-20&linkId=9c470cf72d8094b0830da923e50c92bc&language=en_US&ref_=as_li_ss_tl" },

              { name: "PatBO", 
               img: "https://m.media-amazon.com/images/I/51uvjoGmv-L._AC_SX569_.jpg", 
               description: "The PatBO Viera V-Neck Midi Dress is an elegant piece made from 100% polyester. This imported dress features a low v-neckline with adjustable shoulder straps, ensuring a perfect fit. The ankle-length A-line skirt offers a timeless silhouette, complemented by a concealed back zipper closure. Fully lined for added comfort, this sleeveless dress runs true to size and requires dry cleaning to maintain its pristine condition. Perfect for any occasion, it combines style and sophistication effortlessly.", 
               amazonLink: "https://www.amazon.com/Viera-V-Neck-Midi-Dress-4/dp/B0CT9MBB9G?th=1&linkCode=ll1&tag=rpt96-20&linkId=c9f75839a31490f6d1143c4836fa5177&language=en_US&ref_=as_li_ss_tl" },

              { name: "PatBO", 
               img: "https://m.media-amazon.com/images/I/71nMYQEJRDL._AC_SX569_.jpg", 
               description: "The PatBO Viera Lace Pants are a stylish and elegant addition to your wardrobe, crafted from 100% cotton lace fabric. These imported pants feature a front zipper closure and are lined with shorts for added comfort and coverage. Perfect for creating a chic, sophisticated look, these lace pants should be dry cleaned only to maintain their delicate fabric and intricate design.", 
               amazonLink: "https://www.amazon.com/PatBO-Viera-Lace-Pants-8/dp/B0CT9JDF9G?th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=3edeffc5ec5886fd42fb2360fa183419&language=en_US&ref_=as_li_ss_tl" },

              { name: "Rodarte", 
               img: "https://m.media-amazon.com/images/I/51-mWYVxX8L._AC_SY741_.jpg", 
               description: "Part of the Rodarte Spring 24 Collection, this exquisite gown is crafted from 100% silk crepe, with a luxurious 100% silk lining. Made in the USA, the dress is cut on the bias from lustrous off-white silk two-ply crepe, creating a fluid and elegant silhouette. It features cross-body panel inlays and is adorned with black velvet ribbon bows that tie over the puff shoulders, adding a touch of vintage charm. The empire waistline gently flares into a maxi length, ensuring a perfect fit. This dress requires specialized dry cleaning to maintain its pristine condit", 
               amazonLink: "https://www.amazon.com/Rodarte-White-Velvet-Ribbon-Details/dp/B0CWSHD4W9?ie=UTF8&ASIN=B0CWSHD4W9&pf_rd_r=31WYHM1KB3DRCM1GKGQS&pf_rd_p=16a5ceac-4369-4773-9a03-99ce6ea02530&_encoding=UTF8&pd_rd_i=B0CWSHD4W9&pd_rd_w=qSQju&content-id=amzn1.sym.16a5ceac-4369-4773-9a03-99ce6ea02530&pd_rd_wg=ZiENc&pd_rd_r=a3263cfb-a4d7-4d57-ac15-b4d4591cba6e&linkCode=ll1&tag=rpt96-20&linkId=bfb64d0ac86bbb008541143d9b35c52e&language=en_US&ref_=as_li_ss_tl" },

              { name: "Sergio Hudson", 
               img: "https://m.media-amazon.com/images/I/71r95tdEuzL._AC_SY741_.jpg", 
               description: "This elegant mini dress by Sergio Hudson is crafted from a luxurious blend of 97% wool and 3% Lycra, ensuring a comfortable and flattering fit. Made in the USA, the dress features a square neckline and a sleeveless design. The multi-seamed construction adds a sophisticated touch, while the straight bodice fits snugly around the waist and transitions into a playful tulip-shaped trumpet flare skirt just past the hips. Dry clean only to maintain its impeccable quality.", 
               amazonLink: "https://www.amazon.com/Sergio-Hudson-Multi-Seamed-Trumpet-Front/dp/B0B8PXJDXK?ie=UTF8&ASIN=B0B8PXJDXK&sr=1-72&qid=1721975658&_encoding=UTF8&dib=eyJ2IjoiMSJ9.kH4gcULqUssF_PGK9VZ8PkvRhn3EVSPsgdgm4Sdd0hmrnjKzgx31_gNP2JccvCVboE-uQxlyxeG82C1DRb7yG_IQMur7-Q4EJWaTnLFAaGymzZevbo5eTgtVQrEzGHvT7RUJJksffz4IZMSEd-9rSitOWftCJyzF1W_e_uODQMGdLcEJf3P71TRgPPsA3Eu476A7fz2YlKa5Iq-XgnRq-zGi3fj_Rqzc05iTFFL5Imen2QSuHyCl8AGpvyWTVa0eHdwXhmWB7ybYsA1POzrxcv5kZRvHpDXqQrHcaatmnI0.aXtzTEk0bkFmUidJbLRvFS_n8Cc-dfCofr5r2VeEMMw&rnid=20722800011&dib_tag=se&th=1&linkCode=ll1&tag=rpt96-20&linkId=1cf6a2c65cca1ed6e66507b0923b6caf&language=en_US&ref_=as_li_ss_tl" },

              { name: "Rodarte", 
               img: "https://m.media-amazon.com/images/I/81Wsc9dOQbL._AC_SY741_.jpg", 
               description: "This enchanting mini dress by Rodarte, made from 100% silk, features a beautiful purple iris print on elegant silk twill. Crafted in the USA, the dress boasts a white silk crepe de chine notched collar and band cuffs, adding a touch of sophistication. Lightly padded shoulders accentuate the puffed sleeves, while the waist is cinched with a self-belt for a flattering fit. The neatly tailored yoke and flared panel skirt create graceful movement with every step. For best care, specialized dry cleaning is recommended to maintain its luxurious appearance.", 
               amazonLink: "https://www.amazon.com/Rodarte-Purple-Printed-Collared-Detail/dp/B0CWSGB9GW?ie=UTF8&ASIN=B0CWSGB9GW&pf_rd_r=ZS6ZG8N6TKBMRM9WS36W&pf_rd_p=a997db7d-2ac0-475b-b74a-9f3109158ba2&_encoding=UTF8&pd_rd_i=B0CWSGB9GW&pd_rd_w=VE2eL&content-id=amzn1.sym.a997db7d-2ac0-475b-b74a-9f3109158ba2&pd_rd_wg=5L0Ax&pd_rd_r=5e082db1-836d-4c82-b9e9-cb97c09f3751&th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=95b1d8e3dd242076cc20daf24b38f828&language=en_US&ref_=as_li_ss_tl" },

              { name: "ADRIANA DEGREAS", 
               img: "https://m.media-amazon.com/images/I/41SAAhm6FJL._AC_SY741_.jpg", 
               description: "The ADRIANA DEGREAS Seashell Solid Cut-Out Long Dress in Old Rose is a sophisticated addition to any wardrobe. Made from a blend of 55% linen and 45% viscose, this imported dress features unique side cut-outs shaped like sea waves, adding a relaxed yet elegant touch. The long dress includes thin straps, side pockets, and a square neckline, offering both style and practicality. For care, hand wash with neutral soap in cold water, avoid bleach and tumble drying, and iron up to 110°C. Pair this dress with flat sandals and accessories for an effortlessly chic Adriana Degreas look.", 
               amazonLink: "https://www.amazon.com/Adriana-Degreas-Seashell-Solid-Cut-Out/dp/B0CZRGL3TY?ie=UTF8&ASIN=B0CZRGL3TY&sr=1-17&qid=1721975595&_encoding=UTF8&dib=eyJ2IjoiMSJ9.dXbyHGurP5zTA1_ZJmzUNn7LwtmA5QhwUN3vXAmirzKlOLsa-NiEsCpMlCospQT_sUh9XPDe792BLcSqMvRN6Ffq_V6Jr-w6H884P4k8eOL2bC2LdAD8V_nbYQSdYnmsKl0GbPTnx_Z5ihSuQkb0TtfSJmMmzJqDrUj6ZXedR3RZ3jGyn5qF2mu8152cgua7rNEIxY93ApAkZdQcAKhpg8Pu-2Z09MuArqeQPd7TkhX9vn3kYXmDJet1Jp7Sg0D2DxJ5LzQA8dWLdarjIWvZ7wyajtCqojpHUlxnU8EqIj8.samGOERYMjbjiVLbMzNesZ5nKuOWW4IAOHsayYgRYBg&rnid=20722800011&dib_tag=se&th=1&linkCode=ll1&tag=rpt96-20&linkId=7419c1b531d34ed1bd7931dd348efe78&language=en_US&ref_=as_li_ss_tl" },

              { name: "Oscar de la Renta", 
               img: "https://m.media-amazon.com/images/I/71oF0ijMrPL._AC_SY741_.jpg", 
               description: "This stunning Oscar de la Renta Cactus Eyelet Guipure Dress in cerulean blue is crafted from 98% cotton and 2% elastane, with intricate 100% polyester lace appliques. Made in the USA, this sleeveless midi dress features a square neckline and a coordinating removable buckle belt for a tailored fit. The dress is designed with concealed side pockets and is unlined for a lightweight feel. Perfect for making a statement, this show-stopping dress requires dry cleaning only to maintain its exquisite quality.", 
               amazonLink: "https://www.amazon.com/Oscar-Renta-Cactus-Guipure-Cerulean/dp/B0CRNRYT1M?ie=UTF8&ASIN=B0CRNRYT1M&sr=1-3&qid=1721975595&_encoding=UTF8&dib=eyJ2IjoiMSJ9.dXbyHGurP5zTA1_ZJmzUNn7LwtmA5QhwUN3vXAmirzKlOLsa-NiEsCpMlCospQT_sUh9XPDe792BLcSqMvRN6Ffq_V6Jr-w6H884P4k8eOL2bC2LdAD8V_nbYQSdYnmsKl0GbPTnx_Z5ihSuQkb0TtfSJmMmzJqDrUj6ZXedR3RZ3jGyn5qF2mu8152cgua7rNEIxY93ApAkZdQcAKhpg8Pu-2Z09MuArqeQPd7TkhX9vn3kYXmDJet1Jp7Sg0D2DxJ5LzQA8dWLdarjIWvZ7wyajtCqojpHUlxnU8EqIj8.samGOERYMjbjiVLbMzNesZ5nKuOWW4IAOHsayYgRYBg&rnid=20722800011&dib_tag=se&th=1&linkCode=ll1&tag=rpt96-20&linkId=644db2261bf2d8c5e7d77d30fd22064d&language=en_US&ref_=as_li_ss_tl" },

              { name: "AREA", 
               img: "https://m.media-amazon.com/images/I/71RzcU1YQBL._AC_SX679_.jpg", 
               description: "The AREA Flower Slit Shorts are a chic denim option crafted from 100% cotton. These imported shorts feature a removable flower corsage, adding a touch of playful elegance. With a stylish side slit and a distinctive 'AREA' crystal nameplate at the rear pocket, they offer a unique twist on classic denim. Available in a Super Light Wash, these shorts require dry cleaning to maintain their pristine condition.", 
               amazonLink: "https://www.amazon.com/AREA-Flower-Short-Super-Light/dp/B0D64JDSTX?ie=UTF8&ASIN=B0D64JDSTX&sr=1-85&qid=1721975658&_encoding=UTF8&dib=eyJ2IjoiMSJ9.kH4gcULqUssF_PGK9VZ8PkvRhn3EVSPsgdgm4Sdd0hmrnjKzgx31_gNP2JccvCVboE-uQxlyxeG82C1DRb7yG_IQMur7-Q4EJWaTnLFAaGymzZevbo5eTgtVQrEzGHvT7RUJJksffz4IZMSEd-9rSitOWftCJyzF1W_e_uODQMGdLcEJf3P71TRgPPsA3Eu476A7fz2YlKa5Iq-XgnRq-zGi3fj_Rqzc05iTFFL5Imen2QSuHyCl8AGpvyWTVa0eHdwXhmWB7ybYsA1POzrxcv5kZRvHpDXqQrHcaatmnI0.aXtzTEk0bkFmUidJbLRvFS_n8Cc-dfCofr5r2VeEMMw&rnid=20722800011&dib_tag=se&th=1&linkCode=ll1&tag=rpt96-20&linkId=b64f8391091c3a22098d53417af8c6e8&language=en_US&ref_=as_li_ss_tl" },

              { name: "Rodarte", 
               img: "https://m.media-amazon.com/images/I/71sVc-oop8L._AC_SY741_.jpg", 
               description: "From the Rodarte Spring 24 Collection, this exquisite gown is crafted from 100% silk charmeuse with a lustrous blue and white floral print. Made in the USA, the gown features a bias cut that enhances its elegant flow. It is adorned with intricate gossamer lace inlays and ruffles of white lace trim along the halter neckline. The empire waistline is cinched with thin silk ribbons that tie at the back, creating a slim fit that gently flares into a maxi length. Specialized dry cleaning is recommended to preserve its delicate beauty.", 
               amazonLink: "https://www.amazon.com/Rodarte-White-Floral-Printed-Details/dp/B0CWSGBXHJ?th=1&linkCode=ll1&tag=rpt96-20&linkId=862ffe36d3773b9f19cb66e7604fd01a&language=en_US&ref_=as_li_ss_tl" },

              { name: "ADRIANA DEGREAS", 
              img: "https://m.media-amazon.com/images/I/41frqLdwpiL._AC_SY741_.jpg", 
              description: "ADRIANA DEGREAS COTTON SOLID TOP & SKIRT SET. Sets are increasingly present in AD collections. versatile piece that can be worn in coordination with each other or even with other options for a mix and match proposal. Combine the iconic shell top with shorts in vibrant colors for a fresh summer look. We love the skirt with swimsuits and low-heeled sandals for lunch by the pool.", 
              amazonLink: "https://www.amazon.com/COTTON-SOLID-TOP-SKIRT-WHITE/dp/B0CVR2FV99?ie=UTF8&ASIN=B0CVR2FV99&sr=1-55&qid=1722582479&_encoding=UTF8&dib=eyJ2IjoiMSJ9.YF-8eCmpM3p4tZLosupnqjCssbmInJ7fFHuGCJbfKwgommH0ac8jX1nSRQ716puBi7wv0XHDVJWJsvR4cOgJ6TEKhUxTYC0BWNRJk4qs2jyS3uHxvIwN331amhLWoKfyhT_53pMUboBm99nhKyQcIw.viiWgMloCt4Vg4pdPswLVp0ZxB9alCCLlZe7QJcJ054&rnid=20722800011&dib_tag=se&th=1&linkCode=ll1&tag=rpt96-20&linkId=e3390c6bba7385a28afd16c4eeb55788&language=en_US&ref_=as_li_ss_tl" },

             { name: "Perfect Moment", 
              img: "https://m.media-amazon.com/images/I/51fScY55k3L._AC_SY741_.jpg", 
              description: "Perfect Moment Women’s Aurora High Waist Flare Pant  ", 
              amazonLink: "We’ve put a retro spin on our favourite ski pants, taking design cues from the glory days of skiing in the 1960s. The Aurora High Waist Flare Pant is cut from waterproof, breathable fabric, with a high waist for a more secure fit. Slip them on like your favourite pair of jeans – the kick-flared design makes them perfect for fitting over ski and snow boots." },

            { name: "Rodarte", 
              img: "https://m.media-amazon.com/images/I/71iB+CDBzRL._AC_SY741_.jpg", 
              description: "Rodarte White Floral Tulle Tiered Ruffle Dress with Bow Belt. This lace tulle tiered dress features a fitted bodice, delicate straps, layers of white tulle ruffles at its straight neckline. Its waistline is defined by a self-belt with a bow atop a slightly flared skirt adorned with tiers of frothy tulle ruffles. Lined in off white silk crepe de chine. ", 
              amazonLink: "https://www.amazon.com/Rodarte-White-Floral-Tiered-Ruffle/dp/B0C42NZB14?th=1&linkCode=ll1&tag=rpt96-20&linkId=8ff6aab7464d14f9cd39c9f289ed6a71&language=en_US&ref_=as_li_ss_tl" },

            { name: "Lela Rose", 
              img: "https://m.media-amazon.com/images/I/61879ldcraL._AC_SY741_.jpg", 
              description: "Lela Rose Off The Shoulder Button Detail Midi Dress. Romance incarnate gets a slinky, effortlessly wearable moment. Iconic off-the-shoulder vintage-inspired silhouette, full-length functional button placket, Murano-inspired graphic button detailing, and gorgeous gesture-worthy sleeves are rendered in a luscious and tactile seamless knit. Designed to be fitted through the waist.  ", 
              amazonLink: "https://www.amazon.com/Shoulder-Button-Detail-Dress-Medium/dp/B0D35ZB2MP?ie=UTF8&ASIN=B0D35ZB2MP&sr=1-38&qid=1722582449&_encoding=UTF8&dib=eyJ2IjoiMSJ9.09RpxkCHeHtbMJqKoFXWvljbb_rLWvJaoLSl376MagBFguwRzgBj3Zh1fE4lbTXC-h6i0EDUv1oEEpOAB8EwKLs5KPdLVOTtadtUUzlACPpVvouwg6326CnhyUqRidRevuexgbpSmZxjmuHn11i4GIHUCtsoVVeQx4eeQPIgrsyLVrYJJmPPbGWMPHSAldOWt9eZ-L8mQOOZuSaECDDpYR8MkCchqagLPMlELpTFzYKrvWK6F2dhJznkyqlSYjO9zkiX63zzC5jyBkev5ztINjSs1J33cgSill_omgXZ7ok.Ordb9Rz-M8jVzetLTKvpl_8yIKxXqYDKcUZoILhRzck&rnid=20722800011&dib_tag=se&th=1&linkCode=ll1&tag=rpt96-20&linkId=db5583f1cebc18c3c8302ea0e91dbd2c&language=en_US&ref_=as_li_ss_tl" },

        
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
                    <span>Top-rated options</span>
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

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const kit = urlParams.get('kit');

    // Define kit names
    const kitNames = {
        dji: "DJI",
        ecoflow: "EF ECOFLOW",
        evolve: "Explore and Evolve",
        hike: "Hiker's Haven",
        travel: "Travel",
        books: "Empowerment Pack",
        timelessradiance: "Timeless Radiance",
        clothing: "Enchanted Euphoria"
    };

    // Set the kit name in <h3>
    const kitTitle = document.querySelector('h3');
    if (kitTitle && kitNames[kit]) {
        kitTitle.textContent = kitNames[kit];
    }
});

document.addEventListener('DOMContentLoaded', () => {
            const urlParams = new URLSearchParams(window.location.search);
            const kit = urlParams.get('kit');
            const kitsContent = {
                dji: "DJI",
                ecoflow: "EF ECOFLOW",
                evolve: "Explore and Evolve",
                hike: "Hiker's Haven",
                travel: "Travel",
                books: "Empowerment Pack",
                timelessradiance: "Timeless Radiance",
                clothing: "Enchanted Euphoria"

            };

            if (kit && kitsContent[kit]) {
                document.title = kitsContent[kit];
            }
        });
