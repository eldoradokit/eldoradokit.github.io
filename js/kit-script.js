document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const kit = urlParams.get('kit');

    // Sample data for kitsContent
    const kitsContent = {
        dji: [
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

            { name: "DJI RS 4 Pro Combo", 
              img: "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/b1e526654c6107aaf38c438da8bb2cfe@origin.jpg", 
              description: "DJI RS 4 Pro Combo, 3-Axis Gimbal Stabilizer for DSLR & Cinema Cameras Canon/Sony/Panasonic/Nikon/Fujifilm, Native Vertical Shooting, 4.5kg/10lbs Payload, with Image Transmitter & Focus Pro Motor", 
              amazonLink: "https://www.amazon.com/DJI-Stabilizer-Panasonic-Fujifilm-Transmitter/dp/B0CS6LY1V7?th=1&linkCode=ll1&tag=rpt96-20&linkId=81c79e6ed7c710ca14e1d0940d346bab&language=en_US&ref_=as_li_ss_tl" },

            { name: "DJI Osmo Mobile 6", 
              img: "https://m.media-amazon.com/images/I/51Q0I+lvW9L._AC_SY450_.jpg", 
              description: "The DJI Osmo Mobile 6 Gimbal Stabilizer is an essential tool for anyone looking to elevate their smartphone videography. Featuring a 3-axis stabilization system, this gimbal ensures your videos are smooth and shake-free, whether you're vlogging, capturing content for YouTube or TikTok, or just documenting everyday moments. The built-in extension rod offers added versatility, allowing for creative angles and dynamic shots, while its portable and foldable design makes it easy to take on the go. Available in a sleek slate gray, the Osmo Mobile 6 combines functionality with style to enhance your content creation experience.", 
              amazonLink: "https://www.amazon.com/DJI-Smartphone-Stabilizer-Extension-ShotGuides/dp/B0B7XD7R43?th=1&linkCode=ll1&tag=rpt96-20&linkId=ccae5eec017ac673aa7571448b0bfb7b&language=en_US&ref_=as_li_ss_tl" },


            // Add more products for DJI kit
        ],
        ecoflow: [
            { name: "EF ECOFLOW RIVER 2", 
              img: "https://m.media-amazon.com/images/I/61DgKWuw-zL._AC_SX679_.jpg", 
              description: "The EF EcoFlow Portable Power Station RIVER 2 is a versatile power source perfect for camping, RVs, and home use. With a 256Wh LiFePO4 battery, it charges in just 1 hour and offers two AC outlets up to 600W. The optional solar panel allows for eco-friendly recharging, making it an ideal companion for any outdoor adventure or emergency backup.", 
              amazonLink: "https://www.amazon.com/EF-ECOFLOW-Portable-RIVER-Generator/dp/B0B8MXPRDB?crid=1TM85IMBP3YXM&dib=eyJ2IjoiMSJ9.yvrVqhfQt7S7nVYl-K843kYH1o18mP8Ytv2MKpRuXpFYgXPcJwn38JbJ_kED2NLKNCpY5YTCf6oQjwtpUyutIhMAV2bCTs84I5H0aHf9ZxM2MItlUTdZqIqqNk2eLBESPl2JLBMBGtizatineBgN6DYjGwqi9cHdluEvO_6a752SvyPiU3gGG3kbt-cD5dqP3mL-thSW6H-g2wt02EyUfO45NHBjTVvi9zqoS9aLk6i1RhAKtdx16dUN8EXZHOG_XsTC4yx-HoeOV4k2nLMWqYlMlCJcRQ6x_U1YNBXQO2I.A4EepSdQ1457KW91emlXBzCYc59lClZWa2p6taT983Q&dib_tag=se&keywords=ef%2Becoflow&qid=1720605200&sprefix=ef%2Becoflo%2Caps%2C460&sr=8-7&th=1&linkCode=ll1&tag=rpt96-20&linkId=85646634f40aa1bf92ef3515d4ff250a&language=en_US&ref_=as_li_ss_tl" },

            { name: "ECOFLOW DELTA 2", 
              img: "https://m.media-amazon.com/images/I/61p5Knewi+L._AC_SX679_.jpg", 
              description: "EF ECOFLOW Portable Power Station DELTA 2 Max, 2400W LFP Solar Generator, Full Charge in 1 Hr, 2048Wh Solar Powered Generator for Home Backup(Solar Panel Optional)", 
              amazonLink: "https://www.amazon.com/EF-ECOFLOW-Portable-Charging-Generator/dp/B0B9XB57XM?crid=1TM85IMBP3YXM&dib=eyJ2IjoiMSJ9.yvrVqhfQt7S7nVYl-K843kYH1o18mP8Ytv2MKpRuXpFYgXPcJwn38JbJ_kED2NLKNCpY5YTCf6oQjwtpUyutIhMAV2bCTs84I5H0aHf9ZxM2MItlUTdZqIqqNk2eLBESPl2JLBMBGtizatineBgN6DYjGwqi9cHdluEvO_6a752SvyPiU3gGG3kbt-cD5dqP3mL-thSW6H-g2wt02EyUfO45NHBjTVvi9zqoS9aLk6i1RhAKtdx16dUN8EXZHOG_XsTC4yx-HoeOV4k2nLMWqYlMlCJcRQ6x_U1YNBXQO2I.A4EepSdQ1457KW91emlXBzCYc59lClZWa2p6taT983Q&dib_tag=se&keywords=ef+ecoflow&qid=1720605200&sprefix=ef+ecoflo%2Caps%2C460&sr=8-5&linkCode=ll1&tag=rpt96-20&linkId=97fa162da3f09783421aa35fbedb79e4&language=en_US&ref_=as_li_ss_tl" },

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

            { name: "Georgia Louise", 
              img: "https://m.media-amazon.com/images/I/51n-JhNGKiL._AC_SY741_.jpg", 
              description: "This oil smoothes the appearance of fine lines and wrinkles, is high in omegas and natural antioxidants, and has a stimulating scent. It is suitable for all skin types and ages, but works best for normal, dry, and sensitive skin types.", 
              amazonLink: "https://www.amazon.com/Sleeping-Beauty-Oil-1-0-Fl/dp/B0CTJ726FW?ie=UTF8&keywords=beauty&ASIN=B0CTJ726FW&sr=1-5&crid=2PI4XQKOIF329&qid=1721190190&dib=eyJ2IjoiMSJ9.uVmueQmA-E-TN1T6bkSDvWc1x6YQ5xn7KZg9tTAhU7Qt6NgrzI8hrPzCChsb8UaPylm--tkoThZ4L2ygHDAJgx_1N8l26QWe2hCPdJZGKk2n1XIHQVYFHi0r0A1YJSnbzaSIz4iHn1GQE8yOUW5-thB99tkeviNWD4IGjKl-HwG8mYB6togMyhyJQeI2xfs5J1RWSy9B__NZZweI5pLcyLIODxHNxVPHqraJxZbxNWNMQRSTytxhXrO9Ef4cTzWSNmROCY-V2QHW4F4vuDC_MVhSOLPEhqITbA8rSxpBjKA.905afGfDvNV2YdIaU1pebyJNGr9H0Z262CLpe69plKY&dib_tag=se&th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=ac354d19e4c91d3f2842152231ce7347&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Sturm Glow Drops", 
              img: "https://m.media-amazon.com/images/I/618GRBCXQYL._AC_SY741_.jpg", 
              description: "Dr. Sturm Glow Drops revitalizes dull, tired skin and restores its natural radiance. Formulated with polygonum bistorta root, it acts as an antimicrobial anti-ager, optimizing skin tone for a more youthful look. Wild rose extract refines pores and provides an even complexion, while purslane boosts levels of vitamin A and omega-3 acids, significantly reducing irritation. Available in a 30ml bottle, this potent skincare solution is designed to rejuvenate and enhance your skin's glow.", 
              amazonLink: "https://www.amazon.com/Dr-Barbara-Sturm-Glow-Drops/dp/B09V9LB9L3?ie=UTF8&ASIN=B09V9LB9L3&sr=1-3&qid=1721198114&_encoding=UTF8&dib=eyJ2IjoiMSJ9.aceW8swgPevX3WFKGA92Psq8G-XNaf8vLV8ZHufZ0geoRctdxyvrVCx90GlhYJ_3CLgQe_EDPLaPOsXJhGIlJeyfAtmVcFCKhXy1tA8jWd24niKiPi-_asDoBu4ne2pS8xP6D19NUbyWb4Qni4Hd9tXOgcx2FfZ2dtGMUuTQamoU85BixSwQLa6uPqKp4i_7sm60N87DEl2ieYL_S49cFmdF0t91dypLzOd1AM-BhzAOCeSmsQ2skgmBg9fOo3BktTTfEXuolGyOwuURzmoo2ztlBDVtgMswaPK12OVoNL4.AMy1SC8zp_JuzXqIpqJWAeoIGfYYxnwgUg_xjn9QWFs&rnid=18981045011&dib_tag=se&linkCode=ll1&tag=rpt96-20&linkId=b562bf48a7aa4f1b41dbf229b8a77f32&language=en_US&ref_=as_li_ss_tl" },

            { name: "Monpure Follicle Boost Hair Density Serum ", 
              img: "https://m.media-amazon.com/images/I/41O8Aj8bM8L._AC_SX679_.jpg", 
              description: "Monpure Follicle Boost Hair Density Serum promotes thicker, fuller hair with regular use. It stimulates hair follicles and increases cell turnover on the scalp, enhancing overall hair health. This serum naturally blocks the conversion of testosterone to DHT, a hormone known to cause hair loss. Recognized for its efficacy, it won the Harper’s Bazaar Beauty Award for Best Stimulating Scalp Oil in 2021 and the Natural Health Beauty Award for Best Hair Product in 2020.", 
              amazonLink: "https://www.amazon.com/Monpure-Follicle-Boost-Density-Serum/dp/B09LVY9DL6?ie=UTF8&sbo=CU4Pt4JlFi0Kd%2B17c8I6Zw%3D%3D&ASIN=B09LVY9DL6&pf_rd_r=CD3HGCQPWZHNYD0H2Y5N&pf_rd_p=53d84f87-8073-4df1-9740-1bf3fa798149&th=1&psc=1&linkCode=ll1&tag=rpt96-20&linkId=5e8a0588f1074c93a5c22382703325ad&language=en_US&ref_=as_li_ss_tl" },

            { name: "Clé de Peau Beauté The Foundation SPF 22", 
              img: "https://m.media-amazon.com/images/I/61k1cRPAxgL._AC_SY741_.jpg", 
              description: "Clé de Peau Beauté The Foundation SPF 22 instantly blurs imperfections and camouflages for an even-toned, radiant finish that lasts up to 24 hours. This luxuriously rich yet lightweight cream melts on contact with the skin to moisturize, plump, and protect, while reducing the appearance of lines and wrinkles and promoting firmness. The finish is sheer, buildable, and exquisitely radiant, with SPF 22 offering protection against harmful UV rays. After 4 weeks of use, the foundation improves softness, hydration, and firmness, with 72% of users noting a reduction in fine lines and 84% feeling their skin has become more beautiful. Very light with neutral undertones, this foundation is designed to enhance the natural beauty of your skin.", 
              amazonLink: "https://www.amazon.com/Cl%C3%A9-Peau-Beaut%C3%A9-Foundation-Light/dp/B0D1CJH2SJ?ie=UTF8&ASIN=B0D1CJH2SJ&sr=1-13&qid=1721191302&_encoding=UTF8&dib=eyJ2IjoiMSJ9.Nm-z1wZI2MHYBMH_fZ8LHIDb42hmWCOhiwS1dyRC8V8xpL9jLu8NZt6eHHwV80cqIspQczz2nnYYJMo2lacTmNdTUDf9APcsFUOg1Mkv5oPiy5KWa8FoOUgi9QTd_WNUfdAnWcCCCsj0yW90XN5DPVM10rWiImmIdMNoPvjhPQDl9iYCayrO3Qda0gPUxGcl0FzbbwWXjpZOerlYrJCR2nPqnBSDMrzFR12BuLxWPFjlbW7p_S82WlAQg3IeiicP_PUAngFhLNB0W-gYlbLX-d6vxJlRHReNrU38aEHQlB8.s62LeAeKNpMMJidiFyEL89Rfw5Jr50ZVbvCA3hdS2V8&rnid=20657941011&dib_tag=se&th=1&linkCode=ll1&tag=rpt96-20&linkId=7bfb438def67beb64a1612acee1aaa24&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dr. Barbara Sturm Summer Kit", 
              img: "https://m.media-amazon.com/images/I/51eyF8r8kKL._AC_SX679_.jpg", 
              description: "Dr. Barbara Sturm’s new SUMMER KIT 2022 offers a comprehensive 7-step skincare routine designed to maintain hydrated, healthy, and glowing skin during the warmer months. Packaged in a reusable yellow neoprene bag, this kit reflects Dr. Sturm’s commitment to sustainable packaging. It includes a FACE MASK, HYALURONIC SERUM, CALMING SERUM, FACE CREAM, SUN DROPS SPF50, HYDRATING FACE MIST, and ALOE VERA GEL in a selection of full, deluxe, and mini sizes. The SUMMER KIT not only protects your skin against UVA and UVB rays but also addresses oxidative and other stresses associated with sun exposure, ensuring your skin stays radiant and well-protected all summer long.", 
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
        mensgift: "Men's Gift"
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
                mensgift: "Men's Gift"

            };

            if (kit && kitsContent[kit]) {
                document.title = kitsContent[kit];
            }
        });
