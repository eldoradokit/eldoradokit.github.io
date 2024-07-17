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
        harrypotter: [
            { name: "Harry Potter Hogwarts Sweater", 
              img: "https://m.media-amazon.com/images/I/91hVPkaNsAL._AC_SX679_.jpg", 
              description: "Immerse yourself in the wizarding world with the Harry Potter Official Hogwarts Sweater. Featuring intricate details and house colors, this sweater is crafted with premium materials for warmth and comfort. Ideal for fans, it’s perfect for everyday wear, themed events, or simply showcasing your Hogwarts pride. Elevate your wardrobe with this officially licensed piece, bringing the magic of Harry Potter to your everyday life.", 
              amazonLink: "https://www.amazon.com/Cinereplicas-Potter-Hogwarts-V-Neck-Sweater/dp/B07X2XCBQQ?crid=2SKYTXHKHTNYQ&dib=eyJ2IjoiMSJ9.dTvg563xoBX2E_TENQz57TB1If2cE6UAiRStFK0kvgERQknjWafuFYPwVE0qfdadmiJ4ajgHwclGpSEkqGYgcvtsQHYxPKP6thXnXLuC65C-w-j2phOndrMkysgz_6btO3P3Fbs_OHh8WwYEekH022d8G0dwA0feELqEiwgyAXNB6ySyvTGAEa4IUkvAvpEoyigyW5tH1b1D6Ug0QJTnp_FulO6HeIsbna1cdVeYTCmSHmpc2Q3dMZLrIG0krGrXGbifPUe9Fki_PNmeOSjevmVYhie_cbLbIMEkX2rIxP0.h4z8SCrCBQeogept4ttnUA1WHvhtM15IVjezBJLGfd4&dib_tag=se&keywords=Cinereplicas+Harry+Potter+-+Hogwarts+Sweater+-+Official+License&qid=1720679267&sprefix=cinereplicas+harry+potter+-+hogwarts+sweater+-+official+license%2Caps%2C378&sr=8-1&linkCode=ll1&tag=rpt96-20&linkId=651b80ea8424971fb51c537f1377b7a2&language=en_US&ref_=as_li_ss_tl" },

            { name: "Harry Potter Illuminating Wand", 
              img: "https://m.media-amazon.com/images/I/71XbbIZpzpS._AC_SX679_.jpg", 
              description: "Own a piece of magic with Harry Potter’s iconic wand. Crafted with exquisite detail, this wand captures the essence of the Boy Who Lived. Perfect for collectors and fans alike, it’s a must-have for any Harry Potter enthusiast.", 
              amazonLink: "https://www.amazon.com/Noble-Collection-NN1910-Illuminating-14-Inch/dp/B000U80O26?&linkCode=ll1&tag=rpt96-20&linkId=a7ce5f3354175bf1e54bea9993f9678b&language=en_US&ref_=as_li_ss_tl" },

            { name: "Marauders Map", 
              img: "https://m.media-amazon.com/images/I/81dJ2QAgvoL._AC_SX679_.jpg", 
              description: "Uncover the secrets of Hogwarts with the Harry Potter Marauder’s Map. This magical map reveals every hidden passage and room within the castle, allowing you to explore like never before. Perfect for fans and collectors, it’s a must-have piece of the wizarding world. 🧙‍♂️✨", 
              amazonLink: "https://www.amazon.com/The-Noble-Collection-NN7888-Marauders/dp/B0026PW67W?&linkCode=ll1&tag=rpt96-20&linkId=00fc0df52ce93a3a3aca5805214a0151&language=en_US&ref_=as_li_ss_tl" },

            { name: "Hedwig Figurine", 
              img: "https://m.media-amazon.com/images/I/81G7Y-HzXpL._AC_SX679_.jpg", 
              description: "Celebrate the magic of Harry Potter with The Noble Collection's exquisite Hedwig figurine. Standing 7 inches tall, this acrylic figure captures the beloved snowy owl's elegance with stunning detail in white and brown tones. Perfect for collectors and fans, Hedwig is a timeless addition to any magical collection.", 
              amazonLink: "https://www.amazon.com/Noble-Collection-Potter-Magical-Creatures/dp/B01I5IPP4E?&linkCode=ll1&tag=rpt96-20&linkId=3967c9da04f18d8ef3efa4ba80176f00&language=en_US&ref_=as_li_ss_tl" },

            { name: "Dobby", 
              img: "https://m.media-amazon.com/images/I/81ZSk2O2kAL._AC_SX679_.jpg", 
              description: "Bring Magic Home: Dobby Figure from Harry Potter – A Perfect Collectible for Fans!", 
              amazonLink: "https://www.amazon.com/Noble-Collection-Potter-Magical-Creatures/dp/B01I5IH5VA?th=1&linkCode=ll1&tag=rpt96-20&linkId=23c775783fd4e553cc6bedd0e9845665&language=en_US&ref_=as_li_ss_tl" },

            { name: "Fawkes", 
              img: "https://m.media-amazon.com/images/I/81PaBi-pd3L._AC_SX679_.jpg", 
              description: "Bring the magic of Hogwarts to life with The Noble Collection’s Fawkes, Dumbledore’s majestic phoenix. Crafted with stunning detail, this collectible figure captures Fawkes' fiery beauty and legendary elegance, making it a must-have for Harry Potter fans and collectors.", 
              amazonLink: "https://www.amazon.com/Noble-Collection-Magical-Creatures-Fawkes/dp/B01I5K1EVA?&linkCode=ll1&tag=rpt96-20&linkId=6bcb1e7683d1c45621c27bcb211bb830&language=en_US&ref_=as_li_ss_tl" },

            { name: "Basilisk", 
              img: "https://m.media-amazon.com/images/I/81SxpQMrcKL._AC_SX679_.jpg", 
              description: "Bring the magic of Harry Potter to life with The Noble Collection’s Basilisk figurine. Meticulously crafted, this collectible piece captures the legendary serpent's formidable presence and intricate details, making it a must-have for fans and collectors alike. 🧙‍♂️✨", 
              amazonLink: "https://www.amazon.com/Noble-Collection-Potter-Magical-Creatures/dp/B01I5JAYHQ?&linkCode=ll1&tag=rpt96-20&linkId=2e99a4d88451dcd2d28278e9ba20018f&language=en_US&ref_=as_li_ss_tl" },

            { name: "Buckbeak", 
              img: "https://m.media-amazon.com/images/I/71XziJ4GDHL._AC_SX679_.jpg", 
              description: "Discover the majesty of Buckbeak with The Noble Collection’s detailed figure from the Harry Potter Magical Creatures series. Meticulously crafted, this collectible captures the noble hippogriff in all his glory, making it an essential addition for fans and collectors alike.", 
              amazonLink: "https://www.amazon.com/Harry-Potter-Magical-Creatures-Buckbeak/dp/B01I5JYKIU?&linkCode=ll1&tag=rpt96-20&linkId=8412881abfd12641cb29a995ec53fc4f&language=en_US&ref_=as_li_ss_tl" },

            { name: "Nagini", 
              img: "https://m.media-amazon.com/images/I/61Lu8ktjULL._AC_SX679_.jpg", 
              description: "Step into the mystical world of Harry Potter with The Noble Collection’s Nagini figurine. This exquisitely detailed collectible captures the sinister elegance of Voldemort’s loyal serpent, making it an essential addition for fans and collectors alike. 🧙‍♂️✨", 
              amazonLink: "https://www.amazon.com/Noble-Collection-Potter-Magical-Creatures/dp/B01I5K4YYO?&linkCode=ll1&tag=rpt96-20&linkId=1ff34871b7401014ce2c29d2ad3e4eac&language=en_US&ref_=as_li_ss_tl" },

            { name: "Hungarian Horntail", 
              img: "https://m.media-amazon.com/images/I/51OFk9oMdAL._AC_SX679_.jpg", 
              description: "Dive into the magical world of Harry Potter with The Noble Collection’s Hungarian Horntail figurine. This meticulously detailed collectible captures the fierce and fiery essence of the dragon, making it a stunning addition for fans and collectors. 🧙‍♂️✨", 
              amazonLink: "https://www.amazon.com/Noble-Collection-Potter-Magical-Creatures/dp/B01I5J0NLS?th=1&linkCode=ll1&tag=rpt96-20&linkId=099b8726c5b4cdcb5f28ae3347d19760&language=en_US&ref_=as_li_ss_tl" },

            { name: "Occamy", 
              img: "https://m.media-amazon.com/images/I/81IWZVTkWcL._AC_SX679_.jpg", 
              description: "Dive into the magical world of Fantastic Beasts with The Noble Collection’s Occamy figurine. This exquisitely detailed collectible captures the serpentine beauty and unique characteristics of the Occamy, making it a captivating addition for fans and collectors alike. ✨🧙‍♂️", 
              amazonLink: "https://www.amazon.com/Noble-Collection-Fantastic-Magical-Creatures/dp/B075NQDFY8?&linkCode=ll1&tag=rpt96-20&linkId=b1d24f65393053955d38636e348b50bf&language=en_US&ref_=as_li_ss_tl" },

            { name: "Aragog", 
              img: "https://m.media-amazon.com/images/I/81+Z+MAId8L._AC_SX679_.jpg", 
              description: "Embark on a journey into the magical world of Harry Potter with The Noble Collection’s Aragog figurine. This intricately crafted collectible captures the menacing presence and intricate details of Hagrid’s giant spider, making it a captivating addition for fans and collectors. 🧙‍♂️✨", 
              amazonLink: "https://www.amazon.com/Harry-Potter-Magical-Creatures-No/dp/B07H5HNS6X?&linkCode=ll1&tag=rpt96-20&linkId=d49e9fc7e053479da5d65197e905d2b7&language=en_US&ref_=as_li_ss_tl" },

            { name: "Gringotts Goblin", 
              img: "https://m.media-amazon.com/images/I/91AmXQX5byL._AC_SX679_.jpg", 
              description: "Explore the magical world of Harry Potter with The Noble Collection’s Gringotts Goblin figurine. This intricately detailed collectible captures the unique features and enigmatic presence of the goblin, making it a fascinating addition for fans and collectors. ✨🏦", 
              amazonLink: "https://www.amazon.com/Harry-Potter-Magical-Creatures-Statue/dp/B01I5JV7XQ?&linkCode=ll1&tag=rpt96-20&linkId=54c75eaf814279e2af4d9aab10a01a90&language=en_US&ref_=as_li_ss_tl" },

            { name: "Niffler", 
              img: "https://m.media-amazon.com/images/I/81kJWG5kwwL._AC_SX679_.jpg", 
              description: "Explore the magical creatures of the Wizarding World with The Noble Collection’s Niffler figurine. This charming collectible captures the mischievous and adorable nature of the creature known for its affinity for shiny objects, making it a delightful addition for fans and collectors. ✨🧙‍♂️", 
              amazonLink: "https://www.amazon.com/Noble-Collection-Fantastic-Magical-Creatures/dp/B079PDLDKN?th=1&linkCode=ll1&tag=rpt96-20&linkId=84afe6f5081e0339cb30b3f664e07324&language=en_US&ref_=as_li_ss_tl" },

            
        ],
        mensgift: [
            { name: "Miabella Italian Men Necklace", 
              img: "https://m.media-amazon.com/images/I/713tkhR-EvL._AC_SY535_.jpg", 
              description: "The Miabella Italian Solid 925 Sterling Silver 3.5mm Diamond Cut Cuban Link Curb Chain Necklace is a stunning piece of jewelry that suits men perfectly. Crafted with precision in Italy, this necklace features a 3.5mm width and a diamond-cut finish that adds a touch of elegance and sophistication. Made from high-quality 925 sterling silver, it promises durability and a timeless appeal. This Cuban link chain necklace is an excellent gift for men, exuding classic style and impeccable craftsmanship for any occasion.", 
              amazonLink: "https://www.amazon.com/MiaBella-Sterling-Italian-Diamond-Necklace/dp/B07MCLTP7R?crid=253NZCB0O1QJ4&dib=eyJ2IjoiMSJ9.EKx7YAmfzmmE_JJ6Ze5On33VQwdqZE-TWmx0INPLZBjfNey6wJPmc4a5pbSVlDEynN4--Yej1LPUthJZtSe1L9lD5sXx7iyqxVJEeU0SMgMm9NpDXq2-BWVIszWUL4YftnZSkMA_mD9ijoTSx43tMBEbaetobPMjXD5OKJ_qOmEVAO4S260PDrsjdS6x-RW6F7q5VWy-3fdSdRMDQI8NluiiL4SE-bkeOTS4jvfGadisigvVFGfjRD5VF3gDUO1N-dcwjZ53xb2gOKi5q31gUeOZ_ackAJ9bsANFOj69kuY.mBT4Sc4G0-d2ibmCdmrmHr38eG3cleig4D5QiIhf1b0&dib_tag=se&keywords=men%2Bnecklace&qid=1720681665&sprefix=men%2Bneckla%2Caps%2C460&sr=8-5&th=1&linkCode=ll1&tag=rpt96-20&linkId=70fe80786db331e388c8f68d26b23d12&language=en_US&ref_=as_li_ss_tl" },

            { name: "Natural Stone Bracelets", 
              img: "https://m.media-amazon.com/images/I/61ICwh5fFNL._AC_SY535_.jpg", 
              description: "The M MOOHAM Natural Stone Bracelets for Men are a stylish and meaningful accessory, featuring 8mm beads made from Tiger Eye, Matte Agate, and Lava Rock. These bracelets are designed to complement any outfit while offering the natural benefits of these stones. Ideal for men and teen boys, they make a thoughtful gift for anniversaries, Father's Day, birthdays, or any special occasion. Each bracelet embodies strength and elegance, making them perfect for the modern man who appreciates both fashion and wellness.", 
              amazonLink: "https://www.amazon.com/MOOHAM-Bracelets-Adjustable-Aromatherapy-Essential/dp/B07RG9QWMN?content-id=amzn1.sym.a9932944-95cf-4953-992f-6a2334e77f6c%3Aamzn1.sym.a9932944-95cf-4953-992f-6a2334e77f6c&crid=OT214UFQ8M5O&cv_ct_cx=men%2Bbracelet&dib=eyJ2IjoiMSJ9.RiY43Kmiwm_a5l69alv__nJ7-i4omNORxod7bLDxWG9llsxu7Blwf-VvDvrnowpSKinDesX5c7lRDfAgYmfydw.mMbCNzaa9fQnhqy92dEvxd2EaNe3JN--sEoudUElAjA&dib_tag=se&keywords=men%2Bbracelet&pd_rd_i=B07RG9QWMN&pd_rd_r=38a0bf16-4358-4611-824a-c399de59186a&pd_rd_w=bb9Wg&pd_rd_wg=xS6LW&pf_rd_p=a9932944-95cf-4953-992f-6a2334e77f6c&pf_rd_r=RY09SR807W2CSHZDYWH4&qid=1720681917&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=men%2Bbr%2Caps%2C486&sr=1-2-183302c6-8dec-4386-8e58-6031e7be5ad8-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&smid=AJ3NUPTKILK80&th=1&linkCode=ll1&tag=rpt96-20&linkId=7d5100399de84945dc08f39d34a531ff&language=en_US&ref_=as_li_ss_tl" },

            { name: "Buffway Slim Leather Wallet", 
              img: "https://m.media-amazon.com/images/I/81h8T1iLpNL._AC_SY550_.jpg", 
              description: "The Buffway Slim Minimalist Front Pocket RFID Blocking Leather Wallet is a sleek and practical choice for men. Crafted from high-quality leather, it offers a stylish appearance while providing RFID blocking technology to protect your cards from unauthorized scanning. Designed for minimalists, it fits comfortably in front pockets without adding bulk, making it ideal for everyday use or travel. With its slim profile and efficient organization, this wallet ensures both security and convenience. It's a perfect gift for men, combining style, functionality, and modern protection.", 
              amazonLink: "https://www.amazon.com/Slim-Minimalist-Leather-Wallets-Women/dp/B079DCW7GB?crid=26OB2SWRMZFKI&dib=eyJ2IjoiMSJ9.A-jp4w_Qa1IYJ2Eg1GKAYfwLHTHWzkXccWx4hnWEOYLoiddeIsgWI5SCHeg9zS3sv6HCjsm83Z65iZcnH-gn8vtn1RAtmlCGB9SjZliflXl8fTCoqzCPt5gLyg1JudkbyELze3GL8k1MYB9cBG4UNIni8nFE-3QoUo6fBoX7AZ1utXLcbLjrKXZWHG7moYlz3eX7EvVHcvEhQNhiogZGbY5LdEPV8ZWtcArSVFndSA_VDWOsE-A-prERxQO5gekC6XAqupbQ_vu-rxZxiJLeq758q9b6o766iY03u7ig6Tc.AYXQoa6sqFmbVxl9Cl3HuQAVxM_Opa5KvfsGi6QexKQ&dib_tag=se&keywords=Buffway+Slim+Minimalist+Front+Pocket+RFID+Blocking+Leather+Wallets+for+Men+Women&qid=1720617671&sprefix=buffway+slim+minimalist+front+pocket+rfid+blocking+leather+wallets+for+men+women%2Caps%2C517&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=rpt96-20&linkId=89b4e89349378dba060ee9b7b6cd145c&language=en_US&ref_=as_li_ss_tl" },

            { name: "GRIP6 Belt", 
              img: "https://m.media-amazon.com/images/I/61YEZsSmhBL._AC_SX679_.jpg", 
              description: "Looking for a thoughtful gift for your guy friend? Consider the GRIP6 Men's Casual Belt, a favorite among men for its blend of style, durability, and versatility. Proudly made in the USA from high-quality nylon, this belt is built to withstand daily wear and tear with ease. Its adjustable design ensures a perfect fit, making it ideal for any occasion, from casual outings to outdoor adventures. Give him a gift he’ll love and use daily, showcasing your thoughtfulness and his impeccable style.", 
              amazonLink: "https://www.amazon.com/Mens-Belt-GRIP6-Black-Strap/dp/B018I1NPG8?crid=3OW3QDC8VIITL&dib=eyJ2IjoiMSJ9.fTk27k0WI6_zhmVKoq7ZUqE-SX1TaJ9-VZrZoa24RZSdvPPq8FlNrFN1Gb7KtQjD-tOxSb-o0US6es-2lu8Seqcs5wUyiFjBgpNiMfc16u8XzaUno_na-ssvQ3wq1QGueQeS1dgw_Ku_1RwmCOilXEeyd6K7J2nfWCUxOMajzd5ZObc2aY0nDE2QhEGLQmXe1sqfjFdfcHEk2qmZ_2BaLujo1YChsVWL4a2gDqackMyB-rlhNzr8k_9SxwehUJ19af7gezxudcIYph8e1DgEXZG5OTVJRmb2DCtg5XpQ-EI.NR5t7LQdMyh-fOPML8cqs_xcApP6uFqyV7wsFeN9opU&dib_tag=se&keywords=GRIP6+Web+Belt-+Adjustable+Nylon+Belt+for+Men+%26+Women&qid=1720682261&sprefix=grip6+web+belt-+adjustable+nylon+belt+for+men+%26+women%2Caps%2C456&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll1&tag=rpt96-20&linkId=5e050ee20934ea14d2bdea3d7882992b&language=en_US&ref_=as_li_ss_tl" },

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
        harrypotter: "Harry Potter Collection",
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
                harrypotter: "Harry Potter Collection",
                mensgift: "Men's Gift"

            };

            if (kit && kitsContent[kit]) {
                document.title = kitsContent[kit];
            }
        });
