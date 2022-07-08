import { ProductsModel } from "./site-page-model.js";

const _products = [
  {
    "id": "76w0hz7015kkr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
      "https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg"
    ],
    "title": "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
    "rating": 2.89,
    "price": 15999,
    "category": "laptops",
    "brand": "acer"
  },
  {
    "id": "qeagrlm9lrkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/178060622.jpg",
      "https://content2.rozetka.com.ua/goods/images/big_tile/178060625.jpg"
    ],
    "title": "Ноутбук Acer Aspire 7 A715-41G-R9KP (NH.Q8QEU.00L) Charcoal Black",
    "rating": 1.96,
    "price": 21500,
    "category": "laptops",
    "brand": "acer"
  },
  {
    "id": "0y9ksratv6akr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/178060660.jpg",
      "https://content1.rozetka.com.ua/goods/images/big_tile/178060662.jpg"
    ],
    "title": "Ноутбук Acer Aspire 7 A715-75G-51ZW (NH.Q88EU.00P) Charcoal Black",
    "rating": 2.42,
    "price": 22999,
    "category": "laptops",
    "brand": "acer"
  },
  {
    "id": "cvr29caokhhkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/25101152.jpg",
      "https://content1.rozetka.com.ua/goods/images/big_tile/25101161.jpg"
    ],
    "title": "Ноутбук Acer Nitro 5 AN515-55-56WH (NH.Q7PEU.00L) Obsidian Black Суперцена!!!",
    "rating": 0.53,
    "price": 28999,
    "category": "laptops",
    "brand": "acer"
  },
  {
    "id": "k9hb29sfeekr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/24790127.jpg"
    ],
    "title": "Ноутбук Acer Aspire 7 A715-75G-57LR (NH.Q87EU.006) Charcoal Black",
    "rating": 3.2,
    "price": 22500,
    "category": "laptops",
    "brand": "acer"
  },
  {
    "id": "4g0lv7ii7ytkr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/30872664.jpg",
      "https://content1.rozetka.com.ua/goods/images/big_tile/30872671.jpg",
      "https://content1.rozetka.com.ua/goods_tags/images/original/187290948.png"
    ],
    "title": "Ноутбук Apple MacBook Air 13\" M1 256GB 2020 (MGND3) Gold",
    "rating": 1.57,
    "price": 33999,
    "category": "laptops",
    "brand": "apple"
  },
  {
    "id": "f4zo7g5nb4okr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/119503415.jpg",
      "https://content.rozetka.com.ua/goods/images/big_tile/119503486.jpg",
      "https://content1.rozetka.com.ua/goods_tags/images/original/187290948.png"
    ],
    "title": "Ноутбук Apple MacBook Pro 16\" 512GB 2019 (MVVL2) Silver",
    "rating": 1.57,
    "price": 81000,
    "category": "laptops",
    "brand": "apple"
  },
  {
    "id": "g9amcjezcmkr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/24373314.jpg",
      "https://content.rozetka.com.ua/goods/images/big_tile/24373327.jpg",
      "https://content1.rozetka.com.ua/goods_tags/images/original/187290948.png"
    ],
    "title": "Ноутбук Apple MacBook Pro 13\" A2251 Retina 1TB 2020 (MWP82) Silver",
    "rating": 1.89,
    "price": 70999,
    "category": "laptops",
    "brand": "apple"
  },
  {
    "id": "b6rae36v8vvkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/169147176.jpg"
    ],
    "title": "Ноутбук Apple MacBook Pro 13\" M1 512GB 2020 (Z11C000Z3) Custom Space Gray",
    "rating": 0.92,
    "price": 51999,
    "category": "laptops",
    "brand": "apple"
  },
  {
    "id": "nyvu7xbonwfkr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/175329117.jpg",
      "https://content.rozetka.com.ua/goods/images/big_tile/175329129.jpg"
    ],
    "title": "Ноутбук Apple MacBook Air 13\" M1 512GB 2020 (Z124001DD) Custom Space Gray",
    "rating": 4.67,
    "price": 48500,
    "category": "laptops",
    "brand": "apple"
  },
  {
    "id": "st0auucse2ikr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/27122440.jpg"
    ],
    "title": "Ноутбук Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black",
    "rating": 2.2,
    "price": 25500,
    "category": "laptops",
    "brand": "asus"
  },
  {
    "id": "n03aecr0qrokr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/191836868.jpg",
      "https://content.rozetka.com.ua/goods/images/big_tile/191836880.jpg"
    ],
    "title": "Ноутбук Asus VivoBook 15 X513EA-BQ409 (90NB0SG4-M05090) Black",
    "rating": 3.83,
    "price": 22000,
    "category": "laptops",
    "brand": "asus"
  },
  {
    "id": "7m3ixctumiwkr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/192276490.jpg",
      "https://content1.rozetka.com.ua/goods/images/big_tile/192276498.jpg"
    ],
    "title": "Ноутбук Asus Laptop M515UA-BQ387 (90NB0U11-M05340) Slate Grey",
    "rating": 2.97,
    "price": 21000,
    "category": "laptops",
    "brand": "asus"
  },
  {
    "id": "ypyszmjg7okr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/172755042.jpg"
    ],
    "title": "Ноутбук Asus ZenBook UX425EA-BM295 (90NB0SM1-M07340) Pine Grey + фирменный чехол",
    "rating": 2.63,
    "price": 27000,
    "category": "laptops",
    "brand": "asus"
  },
  {
    "id": "wx7ch9y9dvnkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/180781181.jpg",
      "https://content2.rozetka.com.ua/goods/images/big_tile/180781173.jpg"
    ],
    "title": "Ноутбук Asus ROG Strix G15 G513QE-HN029 (90NR05I2-M00950) Eclipse Gray",
    "rating": 2.65,
    "price": 36500,
    "category": "laptops",
    "brand": "asus"
  },
  {
    "id": "8lxdgefbn0hkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/171121266.jpg"
    ],
    "title": "Ноутбук Dell Vostro 15 3500 (N3001VN3500UA03_2201_UBU) Black",
    "rating": 1.02,
    "price": 17000,
    "category": "laptops",
    "brand": "dell"
  },
  {
    "id": "ur7ngd675jckr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/163134380.jpg",
      "https://content.rozetka.com.ua/goods/images/big_tile/163134233.jpg"
    ],
    "title": "Ноутбук Dell Vostro 14 3400 (N4011VN3400EMEA01_i5XeW) Accent Black",
    "rating": 4.93,
    "price": 25999,
    "category": "laptops",
    "brand": "dell"
  },
  {
    "id": "0p2cm6tmha3kr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/167648554.jpg",
      "https://content2.rozetka.com.ua/goods/images/big_tile/167648555.jpg"
    ],
    "title": "Ноутбук Dell Vostro 15 3501 (N6503VN3501EMEA01_2105_UBU) Black",
    "rating": 4.79,
    "price": 16500,
    "category": "laptops",
    "brand": "dell"
  },
  {
    "id": "cjcqnurj2tkkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/173835446.jpg"
    ],
    "title": "Ноутбук Dell Latitude 7300 (N034L730013EMEA_U) Black",
    "rating": 4.45,
    "price": 18500,
    "category": "laptops",
    "brand": "dell"
  },
  {
    "id": "mz3plkehdaakr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/28982516.jpg"
    ],
    "title": "Ноутбук Dell Latitude 9410 (N199L941014ERC_W10) Gray",
    "rating": 1.57,
    "price": 15500,
    "category": "laptops",
    "brand": "dell"
  },
  {
    "id": "4rtmbvjt2lekr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/186616819.jpg"
    ],
    "title": "Ноутбук Lenovo IdeaPad 3 15IGL05 (81WQ000PRA) Business Black",
    "rating": 3.85,
    "price": 12500,
    "category": "laptops",
    "brand": "lenovo"
  },
  {
    "id": "y3cvcnkzvklkr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/75254690.jpg",
      "https://content1.rozetka.com.ua/goods/images/big_tile/180803645.jpg"
    ],
    "title": "Ноутбук Lenovo ThinkPad X1 Carbon (7th Gen) (20QESCNN00) Black",
    "rating": 1.43,
    "price": 12999,
    "category": "laptops",
    "brand": "lenovo"
  },
  {
    "id": "dev7j3c71h5kr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/190172493.jpg"
    ],
    "title": "Ноутбук Lenovo V15-IGL (82C30027RA) Iron Grey",
    "rating": 1.85,
    "price": 9500,
    "category": "laptops",
    "brand": "lenovo"
  },
  {
    "id": "sgmj070kykkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/159696413.jpg"
    ],
    "title": "Ноутбук Lenovo IdeaPad Gaming 3 15ARH05 (82EY00G4RA) Chameleon Blue",
    "rating": 5,
    "price": 25999,
    "category": "laptops",
    "brand": "lenovo"
  },
  {
    "id": "487jzxlrawzkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/173824234.jpg",
      "https://content2.rozetka.com.ua/goods/images/big_tile/173824235.jpg"
    ],
    "title": "Ноутбук Lenovo V14-ADA (82C600DERA) Iron Grey",
    "rating": 5,
    "price": 8300,
    "category": "laptops",
    "brand": "lenovo"
  },
  {
    "id": "je1r13p0xckr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/57322367.jpg",
      "https://i1.rozetka.ua/promotions/constructors/2074/2074368.png"
    ],
    "title": "Монитор 23\" Asus VC239HE-W (90LM01E2-B03470)",
    "rating": 1.14,
    "price": 3800,
    "category": "laptops",
    "brand": "asus"
  },
  {
    "id": "ci0q634ou8kr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/168721089.jpg",
      "https://i1.rozetka.ua/promotions/constructors/2074/2074368.png"
    ],
    "title": "Монитор 24.5\" Asus TUF Gaming VG259QR (90LM0530-B03370)",
    "rating": 0.69,
    "price": 14200,
    "category": "monitors",
    "brand": "asus"
  },
  {
    "id": "fkoq4doui78kr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/11445215.jpg"
    ],
    "title": "Монитор 21.5\" Asus VZ229HE (90LM02P0-B02670)",
    "rating": 2.42,
    "price": 3500,
    "category": "monitors",
    "brand": "asus"
  },
  {
    "id": "93nmu5dyv9ckr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/176308948.jpg",
      "https://content2.rozetka.com.ua/goods/images/big_tile/176308949.jpg",
      "https://i1.rozetka.ua/promotions/constructors/2074/2074368.png"
    ],
    "title": "Монитор 23.8\" Asus TUF Gaming VG249Q1A (90LM06J1-B01170) + Asus TUF M3 USB (90MP01J0-B0UA00) у подарунок!",
    "rating": 1.39,
    "price": 6500,
    "category": "monitors",
    "brand": "asus"
  },
  {
    "id": "612cw75a1yfkr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/45618019.jpg"
    ],
    "title": "Монитор 18.5\" Asus VS197DE (90LMF1001T02201C)",
    "rating": 3.33,
    "price": 2700,
    "category": "monitors",
    "brand": "asus"
  },
  {
    "id": "r5u52e43qrkr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/11444172.jpg"
    ],
    "title": "Монитор 24\" BenQ Zowie XL2411P (9H.LGPLB.QBE/9H.LGPLB.QPE)",
    "rating": 0.54,
    "price": 6500,
    "category": "monitors",
    "brand": "benq"
  },
  {
    "id": "w73oaydowenkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/178050370.jpg"
    ],
    "title": "Монитор 23.8\" BenQ GW2475H (9H.LFELA.TBE)",
    "rating": 5,
    "price": 3800,
    "category": "monitors",
    "brand": "benq"
  },
  {
    "id": "83untvwqsidkr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/178050401.jpg",
      "https://content.rozetka.com.ua/goods/images/big_tile/178050403.jpg"
    ],
    "title": "Монитор 24\" BenQ Zowie XL2411K (9H.LJPLB.QBE)",
    "rating": 3.52,
    "price": 7200,
    "category": "monitors",
    "brand": "benq"
  },
  {
    "id": "ffgk9pwx9yjkr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/63300018.jpg"
    ],
    "title": "Монитор 23.8\" Benq GW2480E Black (9H.LHELA.CBE/9H.LHELB.CBE) + встроенные колонки 2х1 Вт, HDMI кабель в комлекте",
    "rating": 2.9,
    "price": 4000,
    "category": "monitors",
    "brand": "benq"
  },
  {
    "id": "az1ovdsjng7kr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/178058442.jpg"
    ],
    "title": "Монитор 27\" BenQ PD2705Q (9H.LJELA.TBE)",
    "rating": 1.16,
    "price": 14200,
    "category": "monitors",
    "brand": "benq"
  },
  {
    "id": "r5pyc7y91djkr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/73891904.jpg"
    ],
    "title": "Монитор 27\" Dell S2721DGFA (210-AXRQ)",
    "rating": 2.13,
    "price": 6900,
    "category": "monitors",
    "brand": "dell"
  },
  {
    "id": "qea8wdar4zkkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/26649277.jpg",
      "https://content1.rozetka.com.ua/goods/images/big_tile/26649310.jpg"
    ],
    "title": "Монитор 23.8\" Dell E2420H Black (210-ATTS)",
    "rating": 3.65,
    "price": 3800,
    "category": "monitors",
    "brand": "dell"
  },
  {
    "id": "uz2lnvfkq5kr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/12330253.jpg"
    ],
    "title": "Монитор 23\" Dell P2319H Black (210-APWT)",
    "rating": 1.51,
    "price": 5300,
    "category": "monitors",
    "brand": "dell"
  },
  {
    "id": "3xaz1nx5a9lkr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/26635597.jpg"
    ],
    "title": "Монитор 24.1\" Dell P2421 Black (210-AWLE)",
    "rating": 1.43,
    "price": 6900,
    "category": "monitors",
    "brand": "dell"
  },
  {
    "id": "4l150fmw7yekr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/9559719.jpg"
    ],
    "title": "Монитор 23.8\" Dell E2421HN Black (210-AXMC)",
    "rating": 3.43,
    "price": 3900,
    "category": "monitors",
    "brand": "dell"
  },
  {
    "id": "ibr8c2zb1sokr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/183166007.jpg"
    ],
    "title": "MSI PCI-Ex GeForce RTX 3080 Ti Suprim X 12G 12GB GDDR6X (384bit) (1770/19000) (HDMI, 3 x DisplayPort) (RTX 3080 Ti Suprim X 12G)",
    "rating": 2.66,
    "price": 59000,
    "category": "video_cards",
    "brand": "msi"
  },
  {
    "id": "q2dbkr3tvmnkr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/183751632.jpg"
    ],
    "title": "MSI PCI-Ex GeForce RTX 3070 Ti Suprim X 8G 8GB GDDR6X (256bit) (1860/19000) (HDMI, 3 x DisplayPort) (GeForce RTX 3070 Ti SUPRIM X 8G)",
    "rating": 3.52,
    "price": 34000,
    "category": "video_cards",
    "brand": "msi"
  },
  {
    "id": "n9az8i4xq8pkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big/31428478.jpg"
    ],
    "title": "MSI PCI-Ex GeForce RTX 3090 GAMING X TRIO 24GB GDDR6X (384bit) (HDMI, 3 x DisplayPort) (RTX 3090 GAMING X TRIO 24G)",
    "rating": 2.95,
    "price": 80000,
    "category": "video_cards",
    "brand": "msi"
  },
  {
    "id": "zhj76jx6tyskr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big/178039424.jpg"
    ],
    "title": "MSI PCI-Ex GeForce RTX 3090 Suprim X 24G 24GB GDDR6X (384bit) (1860/19500) (HDMI, 3 x DisplayPort) (GeForce RTX 3090 SUPRIM X 24G)",
    "rating": 3.01,
    "price": 85000,
    "category": "video_cards",
    "brand": "msi"
  },
  {
    "id": "s7px0qga2sqkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big/183176087.jpg"
    ],
    "title": "MSI PCI-Ex GeForce RTX 3080 Ti Gaming X Trio 12GB GDDR6X (384bit) (1770/19000) (HDMI, 3 x DisplayPort) (RTX 3080 Ti GAMING X TRIO 12G)",
    "rating": 0.65,
    "price": 57000,
    "category": "video_cards",
    "brand": "msi"
  },
  {
    "id": "kub9vo3i3hckr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/165161262.jpg",
      "https://content1.rozetka.com.ua/goods/images/big_tile/165161264.jpg"
    ],
    "title": "Asus PCI-Ex Radeon RX 6700 XT Dual 12GB GDDR6 (192bit) (HDMI, 3 x DisplayPort) (DUAL-RX6700XT-12G)",
    "rating": 2.04,
    "price": 28000,
    "category": "video_cards",
    "brand": "asus"
  },
  {
    "id": "mnrntvpjpupkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/31959984.jpg",
      "https://content.rozetka.com.ua/goods/images/big_tile/31960011.jpg"
    ],
    "title": "Asus PCI-Ex GeForce RTX 3080 TUF Gaming OC 10GB GDDR6X (320bit) (1440/19000) (2 x HDMI, 3 x DisplayPort) (TUF-RTX3080-O10G-GAMING)",
    "rating": 3.86,
    "price": 64500,
    "category": "video_cards",
    "brand": "asus"
  },
  {
    "id": "3ocfw1ogjgmkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/11015939.jpg"
    ],
    "title": "Asus PCI-Ex GeForce GT 1030 Low Profile 2GB GDDR5 (64bit) (1228/6008) (DVI, HDMI) (GT1030-SL-2G-BRK)",
    "rating": 1.5,
    "price": 2700,
    "category": "video_cards",
    "brand": "asus"
  },
  {
    "id": "hz8t1sdb8zckr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/11574305.png",
      "https://content2.rozetka.com.ua/goods/images/big_tile/11574254.jpg"
    ],
    "title": "Asus PCI-Ex GeForce GT 1030 Low Profile 2GB GDDR5 (64Bit) (1228/6008) (DisplayPort, HDMI) (GT1030-2G-BRK)",
    "rating": 1.43,
    "price": 3200,
    "category": "video_cards",
    "brand": "asus"
  },
  {
    "id": "1prg5ur76hekr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/165166278.jpg"
    ],
    "title": "Asus PCI-Ex Radeon RX 6700 XT ROG Strix Gaming OC Edition 12GB GDDR6 (192bit) (HDMI, 3 x DisplayPort) (ROG-STRIX-RX6700XT-O12G-GAMING)",
    "rating": 1.52,
    "price": 28000,
    "category": "video_cards",
    "brand": "asus"
  },
  {
    "id": "njwul0o0jflkr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/106869010.png"
    ],
    "title": "Gigabyte PCI-Ex GeForce GT 710 2048MB GDDR5 (64bit) (954/5010) (DVI, HDMI, VGA) (GV-N710D5-2GIL)",
    "rating": 2.15,
    "price": 1600,
    "category": "video_cards",
    "brand": "gigabyte"
  },
  {
    "id": "bkfbp1sx534kr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/11526240.jpg",
      "https://content2.rozetka.com.ua/goods/images/big_tile/11526233.jpg"
    ],
    "title": "Gigabyte PCI-Ex GeForce GT 730 2048MB GDDR5 (64bit) (902/5000) (DVI, HDMI) (GV-N730D5-2GL)",
    "rating": 3.21,
    "price": 2000,
    "category": "video_cards",
    "brand": "gigabyte"
  },
  {
    "id": "zuh5j9ufw8ekr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/52297421.jpg"
    ],
    "title": "Gigabyte PCI-Ex GeForce GT 1030 Silent Low Profile 2GB GDDR5 (64bit) (1227/6008) (DVI, HDMI) (GV-N1030SL-2GL)",
    "rating": 3.55,
    "price": 3200,
    "category": "video_cards",
    "brand": "gigabyte"
  },
  {
    "id": "ciky7xll23qkr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/166184495.jpg",
      "https://content.rozetka.com.ua/goods/images/big_tile/166184496.jpg"
    ],
    "title": "Gigabyte PCI-Ex GeForce RTX 3080 Turbo 10G 10GB GDDR6X (320bit) (1710/19000) (2 х HDMI, 3 x DisplayPort) (GV-N3080TURBO-10GD)",
    "rating": 3.15,
    "price": 67000,
    "category": "video_cards",
    "brand": "gigabyte"
  },
  {
    "id": "kf6yp1y9b1kr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/164911188.jpg"
    ],
    "title": "Gigabyte PCI-Ex Radeon RX 6700 XT Eagle 12G 12GB GDDR6 (192bit) (16000) (2 x HDMI, 2 x DisplayPort) (GV-R67XTEAGLE-12GD)",
    "rating": 2.45,
    "price": 46000,
    "category": "video_cards",
    "brand": "gigabyte"
  },
  {
    "id": "uc0b8t6kx6dkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/45455205.jpg",
      "https://content.rozetka.com.ua/goods/images/big_tile/45455215.jpg"
    ],
    "title": "Клавиатура проводная A4Tech X7 G800V USB (4711421857062)",
    "rating": 1.06,
    "price": 619,
    "category": "gaming_keyboards",
    "brand": "a4-tech"
  },
  {
    "id": "hs82vmvo0fkr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/10596419.jpg",
      "https://content.rozetka.com.ua/goods/images/big_tile/10596444.jpg"
    ],
    "title": "Клавиатура проводная A4Tech KB-28G USB (4711421775656)",
    "rating": 4.55,
    "price": 356,
    "category": "gaming_keyboards",
    "brand": "a4-tech"
  },
  {
    "id": "ftthag4so0ikr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/10598872.jpg",
      "https://content.rozetka.com.ua/goods/images/big_tile/10598884.jpg"
    ],
    "title": "Клавиатура проводная A4Tech X7 G100 USB (4711421708104)",
    "rating": 2.36,
    "price": 399,
    "category": "gaming_keyboards",
    "brand": "a4-tech"
  },
  {
    "id": "mksw16hj59kr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/13993060.jpg"
    ],
    "title": "Клавиатура проводная A4Tech KB-28G PS/2 (4711421708456)",
    "rating": 3.05,
    "price": 189,
    "category": "gaming_keyboards",
    "brand": "a4-tech"
  },
  {
    "id": "a4d3x4hwb9nkr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/45346912.jpg",
      "https://content2.rozetka.com.ua/goods/images/big_tile/45346912.jpg"
    ],
    "title": "Клавиатура проводная A4Tech X7-G300 USB (4711421824446)",
    "rating": 0.67,
    "price": 369,
    "category": "gaming_keyboards",
    "brand": "a4-tech"
  },
  {
    "id": "029ba5lt6dk4kr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/96359867.jpg"
    ],
    "title": "Клавиатура беспроводная Logitech G915 Gaming Wireless Mechanical GL Tactile RGB (920-008909)",
    "rating": 3.69,
    "price": 5999,
    "category": "gaming_keyboards",
    "brand": "logitech"
  },
  {
    "id": "unfzuy81nukr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/114962160.jpg",
      "https://content1.rozetka.com.ua/goods/images/big_tile/180768176.jpg"
    ],
    "title": "Клавиатура беспроводная Logitech G915 Gaming TKL Tenkeyless LIGHTSPEED Wireless RGB Mechanical White (920-009664)",
    "rating": 5,
    "price": 7700,
    "category": "gaming_keyboards",
    "brand": "logitech"
  },
  {
    "id": "u9l5aixjedakr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/96907540.jpg"
    ],
    "title": "Клавиатура проводная Logitech G815 Gaming Mechanical GL Linear RGB USB Black (920-009007)",
    "rating": 1.19,
    "price": 2999,
    "category": "gaming_keyboards",
    "brand": "logitech"
  },
  {
    "id": "2fw83q44cx4kr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/3935304.jpg"
    ],
    "title": "Клавиатура проводная Logitech G815 Gaming Mechanical GL Tactile RGB USB (920-008991)",
    "rating": 3.22,
    "price": 4500,
    "category": "gaming_keyboards",
    "brand": "logitech"
  },
  {
    "id": "1n7obbi04u4kr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/69770872.jpg"
    ],
    "title": "Клавиатура проводная Logitech G413 Carbon Mechanical Gaming USB (920-008309)",
    "rating": 1.62,
    "price": 2200,
    "category": "gaming_keyboards",
    "brand": "logitech"
  },
  {
    "id": "nn4cnayf9ydkr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/10596469.jpg"
    ],
    "title": "Мышь Logitech M185 Wireless Grey (910-002238/910-002235)",
    "rating": 1.08,
    "price": 449,
    "category": "computer_mouse",
    "brand": "logitech"
  },
  {
    "id": "pvcgzow2cvkr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/22396992.jpg",
      "https://content.rozetka.com.ua/goods/images/big_tile/22396985.jpg"
    ],
    "title": "Мышь Logitech MX Master 3 Advanced Wireless/Bluetooth Black (910-005710)",
    "rating": 5,
    "price": 3500,
    "category": "computer_mouse",
    "brand": "logitech"
  },
  {
    "id": "pwejup7xxxkkr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/29839978.jpg",
      "https://content1.rozetka.com.ua/goods/images/big_tile/29839907.jpg"
    ],
    "title": "Мышь Logitech M190 Wireless Charcoal (910-005905)",
    "rating": 4.69,
    "price": 272,
    "category": "computer_mouse",
    "brand": "logitech"
  },
  {
    "id": "t4avvtm9ubkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/10595271.jpg",
      "https://content1.rozetka.com.ua/goods/images/big_tile/10595259.jpg"
    ],
    "title": "Мышь Logitech M235 Wireless Red (910-002496)",
    "rating": 3.47,
    "price": 759,
    "category": "computer_mouse",
    "brand": "logitech"
  },
  {
    "id": "rs5qwg5kmfkr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/12241056.jpg",
      "https://content2.rozetka.com.ua/goods/images/big_tile/12241028.jpg"
    ],
    "title": "Мышь Logitech B330 Silent Plus Wireless Black (910-004913)",
    "rating": 1.33,
    "price": 1099,
    "category": "computer_mouse",
    "brand": "logitech"
  },
  {
    "id": "nzbg9f3lqfkkr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/133140519.jpg"
    ],
    "title": "Мишка ASUS ROG Pugio II Wireless Black (90MP01L0-BMUA00)",
    "rating": 2.43,
    "price": 2400,
    "category": "computer_mouse",
    "brand": "asus"
  },
  {
    "id": "orthyzvwufkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/162209995.jpg",
      "https://content2.rozetka.com.ua/goods/images/big_tile/162209997.jpg"
    ],
    "title": "Мышь ASUS ROG Chakram Core Optical USB Gaming (90MP01T0-BMUA00)",
    "rating": 0.87,
    "price": 2999,
    "category": "computer_mouse",
    "brand": "asus"
  },
  {
    "id": "28fhdt2goc2kr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/163141787.jpg"
    ],
    "title": "Мишка ASUS TUF M5 USB Grey (90MP0140-B0UA00)",
    "rating": 5,
    "price": 648,
    "category": "computer_mouse",
    "brand": "asus"
  },
  {
    "id": "xahkxgvo6w8kr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/188787884.jpg"
    ],
    "title": "Провідна миша ASUS TUF Gaming M3 Grey Gaming (90MP01J0-B0UA00)",
    "rating": 2.61,
    "price": 699,
    "category": "computer_mouse",
    "brand": "asus"
  },
  {
    "id": "goryotq715akr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/188787998.jpg",
      "https://content2.rozetka.com.ua/goods/images/big_tile/188788013.jpg"
    ],
    "title": "Безпровідна миша ASUS ROG Strix Impact II Wireless Black (90MP01P0-BMUA00)",
    "rating": 0.54,
    "price": 2000,
    "category": "computer_mouse",
    "brand": "asus"
  },
  {
    "id": "yqsnlxiashjkr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/177613234.jpg"
    ],
    "title": "Gigabyte Aorus NVMe Gen4 7000s SSD 1TB M.2 2280 NVMe PCIe 4.0 x4 3D NAND TLC (GP-AG70S1TB)",
    "rating": 3.35,
    "price": 605,
    "category": "ssd",
    "brand": "gigabyte"
  },
  {
    "id": "dhc1efgwt9jkr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/12327056.jpg"
    ],
    "title": "Gigabyte SSD 120GB 2.5\" SATAIII NAND TLC (GP-GSTFS31120GNTD)",
    "rating": 3.14,
    "price": 809,
    "category": "ssd",
    "brand": "gigabyte"
  },
  {
    "id": "sgtc2t612kr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/12327050.jpg",
      "https://content2.rozetka.com.ua/goods/images/big_tile/12326938.jpg"
    ],
    "title": "Gigabyte SSD 240GB 2.5\" SATAIII NAND TLC (GP-GSTFS31240GNTD)",
    "rating": 4.8,
    "price": 919,
    "category": "ssd",
    "brand": "gigabyte"
  },
  {
    "id": "a19s1ncr1qwkr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/18738560.jpg"
    ],
    "title": "Gigabyte 128GB M.2 2280 NVMe PCIe 3.0 x4 NAND TLC (GP-GSM2NE3128GNTD)",
    "rating": 4.86,
    "price": 889,
    "category": "ssd",
    "brand": "gigabyte"
  },
  {
    "id": "hgvvg4ii0odkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/16529609.jpg"
    ],
    "title": "Gigabyte Aorus NVMe Gen4 SSD 1TB M.2 2280 NVMe PCIe 4.0 x4 3D NAND TLC (GP-ASM2NE6100TTTD)",
    "rating": 1.42,
    "price": 4900,
    "category": "ssd",
    "brand": "gigabyte"
  },
  {
    "id": "1hp5j5gm2geikr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/13467872.jpg",
      "https://content2.rozetka.com.ua/goods/images/big_tile/13467913.jpg"
    ],
    "title": "Kingston SSD HyperX Fury 3D 240GB 2.5\" SATAIII TLC (KC-S44240-6F)",
    "rating": 1.7,
    "price": 1088,
    "category": "ssd",
    "brand": "kingston"
  },
  {
    "id": "g1i5cvs5ivkr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/16355467.jpg",
      "https://content.rozetka.com.ua/goods/images/big_tile/16355360.jpg"
    ],
    "title": "Kingston SSD HyperX Fury 3D 480GB 2.5\" SATAIII 3D NAND TLC (KC-S44480-6F)",
    "rating": 3.87,
    "price": 1850,
    "category": "ssd",
    "brand": "kingston"
  },
  {
    "id": "athlkfyqjqikr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/13467707.jpg",
      "https://content2.rozetka.com.ua/goods/images/big_tile/13467728.jpg"
    ],
    "title": "Kingston SSD HyperX Fury 3D 120GB 2.5\" SATAIII TLC (KC-S44120-6F)",
    "rating": 4.64,
    "price": 869,
    "category": "ssd",
    "brand": "kingston"
  },
  {
    "id": "9q71sd4okt9kr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/169540018.jpg"
    ],
    "title": "Kingston NV1 500GB NVMe M.2 2280 PCIe 3.0 x4 (SNVS/500G)",
    "rating": 2.96,
    "price": 3860,
    "category": "ssd",
    "brand": "kingston"
  },
  {
    "id": "pl8fxwgth9kr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/169540365.jpg"
    ],
    "title": "Kingston NV1 1TB NVMe M.2 2280 PCIe 3.0 x4 (SNVS/1000G)",
    "rating": 5,
    "price": 2600,
    "category": "ssd",
    "brand": "kingston"
  },
  {
    "id": "4xij1knhfoukr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/59014647.jpg"
    ],
    "title": "Звуковая карта Asus Xonar U7 MKII",
    "rating": 5,
    "price": 2670,
    "category": "sound_cards",
    "brand": "asus"
  },
  {
    "id": "54mt82049zlkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/10687036.jpg",
      "https://content2.rozetka.com.ua/goods/images/big_tile/10687086.jpg"
    ],
    "title": "Звуковая карта Asus Strix Soar (90YB00J0-M1UA00)",
    "rating": 4.63,
    "price": 2400,
    "category": "sound_cards",
    "brand": "asus"
  },
  {
    "id": "js87e5b8rcqkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/46331525.jpg"
    ],
    "title": "Звуковая карта Asus Xonar U5",
    "rating": 2.83,
    "price": 1800,
    "category": "sound_cards",
    "brand": "asus"
  },
  {
    "id": "bp7satk44xrkr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big/21329737.jpg"
    ],
    "title": "Звуковая карта Asus Xonar SE (90YA00T0-M0UA00)",
    "rating": 4.26,
    "price": 1600,
    "category": "sound_cards",
    "brand": "asus"
  },
  {
    "id": "w9jfp9mn1zdkr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big/21329571.jpg"
    ],
    "title": "Звуковая карта Asus Xonar U7 MKII (90YB00KB-M0UC00)",
    "rating": 4.27,
    "price": 2800,
    "category": "sound_cards",
    "brand": "asus"
  },
  {
    "id": "qcufkbjnewkr9kjkav",
    "images": [
      "https://content.rozetka.com.ua/goods/images/big_tile/10975625.jpg"
    ],
    "title": "Адаптер Dynamode USB C-Media 108 7.1 каналов, алюминий Черная (USB-SOUND7-ALU black)",
    "rating": 1.17,
    "price": 126,
    "category": "sound_cards",
    "brand": "dynamode"
  },
  {
    "id": "1vua8ay0yrzkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/10679253.jpg"
    ],
    "title": "Адаптер Dynamode C-Media 108 (7.1) USB-SOUND7 White",
    "rating": 5,
    "price": 65,
    "category": "sound_cards",
    "brand": "dynamode"
  },
  {
    "id": "ypntx0h5pqkkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/44905372.jpg"
    ],
    "title": "Адаптер Dynamode USB C-Media 108 7.1 каналов, алюминий Серебристая (USB-SOUND7-ALU silver)",
    "rating": 5,
    "price": 126,
    "category": "sound_cards",
    "brand": "dynamode"
  },
  {
    "id": "9ye984f8xqtkr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/10608119.jpg"
    ],
    "title": "Адаптер Dynamode 3D Sound (5.1) USB-SoundCard 2.0 Gray",
    "rating": 3.51,
    "price": 53,
    "category": "sound_cards",
    "brand": "dynamode"
  },
  {
    "id": "pveyhdit33mkr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/10608061.jpg"
    ],
    "title": "Адаптер Dynamode C-Media 108 (7.1) USB-SOUND7",
    "rating": 3.09,
    "price": 58,
    "category": "sound_cards",
    "brand": "dynamode"
  },
  {
    "id": "1c45q527aaskr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/6151372.jpg"
    ],
    "title": "RAM Kingston DDR4-2666 8192MB PC4-21300 ValueRAM (KVR26N19S6/8)",
    "rating": 1.34,
    "price": 2500,
    "category": "ram",
    "brand": "kingston"
  },
  {
    "id": "lqivo0gh5mokr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/59164756.jpg",
      "https://content.rozetka.com.ua/goods/images/big_tile/59164744.jpg"
    ],
    "title": "RAM Kingston SODIMM DDR4-2400 4096MB PC4-19200 (KCP424SS6/4)",
    "rating": 1.89,
    "price": 759,
    "category": "ram",
    "brand": "kingston"
  },
  {
    "id": "vbdh6bsx26rkr9kjkav",
    "images": [
      "https://content1.rozetka.com.ua/goods/images/big_tile/36439229.jpg",
      "https://content1.rozetka.com.ua/goods/images/big_tile/36439238.jpg"
    ],
    "title": "RAM Kingston SODIMM DDR4-2666 8192MB PC4-21300 ValueRAM (KVR26S19S6/8)",
    "rating": 1.81,
    "price": 2700,
    "category": "ram",
    "brand": "kingston"
  },
  {
    "id": "ym1uizveicakr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/12593655.jpg"
    ],
    "title": "RAM Kingston SODIMM DDR4-2666 8192MB PC4-21300 (KVR26S19S8/8)",
    "rating": 2.49,
    "price": 1250,
    "category": "ram",
    "brand": "kingston"
  },
  {
    "id": "4qh0zq6skm4kr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/11107145.jpg"
    ],
    "title": "RAM Kingston DDR4-2666 8192MB PC4-21300 (KVR26N19S8/8)",
    "rating": 5,
    "price": 1075,
    "category": "ram",
    "brand": "kingston"
  }
]

export default class StaticProductsModel extends ProductsModel {
  get productsCount() {
    return _products.length;
  }

  _getProducts() {
    return _products;
  }

}
