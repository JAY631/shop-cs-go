const express = require("express");
const server = express();
const cors = require("cors");

const PORT = 7070;

server.use(cors());
server.use(express.json());

server.get('/', (req, res)=>{
    res.send( [
        {   
            id: '0',
            title: 'USP-S Cyrex',
            description: 'USP-S | Сайрекс (USP-S | Cyrex) был добавлен в игру 28 ноября 2016 года в составе «Перчаточной» коллекции, которая вышла в рамках обновления Brothers In Arms. Автором скина является Nextgenz #Prisma2.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3KqnUjlRd4cJ5nqfC9Inz3VHtrRJrNmj6d4XEdlBqZw7R-VTqxr-6hJS-uJjAm3FnsnQi-z-DyGAd0sdD',
            price: '220',
            case: 'Перчаточная',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '1',
            title: 'USP-S Neo-Noir',
            description: 'USP-S | Неонуар (USP-S | Neo-Noir) был добавлен в игру 15 марта 2017 в составе коллекции «Спектр», вышедшей в рамках обновления Take a trip to the Canals. Автором скина является donschi.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh-TLPbTYhFRd4cJ5nqfE8dzz3Abg_hBtMWDzJ4fGdFI6YFjT-lHtlOi70Jfqvcifm3Vmvigj-z-DyA8aEmbE',
            price: '2473',
            case: '«Спектр»',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '2',
            title: 'Glock-18 High Beam',
            description: 'Glock-18 | Дальний свет (Glock-18 | High Beam) был добавлен в игру 31 августа 2018 года в составе коллекции INFERNO 2018, вышедшей в рамках обновления FACEIT 2018 – Ways to Watch.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0vL3ZzhQ-NWxm7-Jm-LxDLfYkWNFppV33uiS8I-t31K1rUJrMTv7IYOSI1c9M13Xq1i3x-7p1MW-uM7NzSd9-n51CmsDOd4',
            case: '«Inferno 2018»',
            price: '54',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '3',
            title: 'Glock-18 synth-leaf',
            description: 'Glock-18 | Полимерные листья (Glock-18 | Synth Leaf) был добавлен в игру 18 ноября 2019 года в составе коллекции St. Marc, которая вышла одновременно с началом операции «Расколотая сеть».',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf2-r3fThD6uO0mJWOqPv9NLPFqWdQ-sJ0xLjDpd2ii1fsr0dpam2nLYSRdwU5N1HZ-Fnqk-rtgJXq6pvLwXBrvnM8pSGKZyeyDW0',
            price: '8779',
            case: '«St. Marc»',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '4',
            title: 'AK-47 Vulcan',
            description: 'AK-47 | Вулкан (AK-47 | Vulcan) был добавлен в мастерскую 13 декабря 2013 года и появился в игре 1 мая 2014 в составе Охотничьей коллекции, вышедшей в рамках обновления The Hunt Begins. Автором скина является jim´s.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj4OrzZgiUEsJYnibqZ8d-l2wO1_hJtNWDzctDBIQ5taAzQqFi6wujo1se06cud1zI97ZAmS4pT',
            price: '7725',
            case: '«Охотничья»',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '5',
            title: 'AK-47 Redline',
            description: 'AK-47 | Красная линия (AK-47 | Redline) был добавлен в игру 20 февраля 2014 года в составе коллекции «Феникс», вышедшей одновременно с началом одноименной операции. Автором скина является EmKay.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPv9NLPF2G1UsZFw373Cp96kigbgrUBuY22nLIWUcgRvN17Y8lnrlbrm157quJ3XiSw0p7BLliM',
            price: '782',
            case: '«Феникс»',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '6',
            title: 'M4A4 Desolate Space',
            description: 'M4A4 | Безлюдный космос (M4A4 | Desolate Space) был добавлен в игру 15 июня 2016 года в составе коллекции «Гамма», вышедшей в рамках обновления Gamma Exposure. Авторами скина являются Andy и DryDoctorEgg.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09izh4-HluPxDKjBl2hU18l4jeHVu93zi1aw_hZtYW2icYHGdwJtN1nSr1foxui8gZW96ZvPznMyvSMq4XrD30vgc83x0v4',
            price: '1100',
            case: '«Гамма»',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '7',
            title: 'M4A4 Magnesium',
            description: 'M4A4 | Магний (M4A4 | Magnesium) появился в мастерской 9 ноября 2018 года и был добавлен в игру 7 декабря 2018 года в составе коллекции The Danger Zone, вышедшей в рамках обновления Welcome to the Danger Zone. Авторами скина являются Marduk и EGO DEATH.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09--m5CbkuXLNLPehX9u5Mx2gv2Pptuh0QXnrxJoamvwJ4SXcVJrZQuB-wfowee-h5bv75-YziNqviIq7WGdwULQRBs-zw',
            price: '214',
            case: '«Запретная зона»',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '8',
            title: 'M4A4 X-Ray',
            description: 'M4A4 | Рентген (M4A4 | X-Ray) был добавлен в игру 18 декабря 2013 года в составе коллекции eSports Winter 2013, вышедшей в рамках обновления Winter Offensive.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszQYzxb09Hiq4yCkP_gfb6IxDJT6pYo07HF89is2Aa3-RE4ZT_1ctTHdQE7Mg2D-la_xOvn18ei_MOeUwVqCl8',
            price: '741',   
            case: '...',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '9',
            title: 'AWP Dragon Lore',
            description: 'AWP | История о драконе (AWP | Dragon Lore) был добавлен в игру 1 июля 2014 года в составе коллекции Cobblestone, вышедшей одновременно с началом операции «Прорыв».',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu5Mx2gv2P9o6migzl_Us5ZmCmLYDDJgU9NA6B81S5yezvg8e-7cycnXJgvHZx5WGdwUJqz1Tl4g',
            price: '96093',
            case: '«Cobblestone»',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '10',
            title: 'AWP Desert Hydra',
            description: 'AWP | Пустынная гидра (AWP | Desert Hydra) был добавлен в игру 22 сентября 2021 года в составе коллекции 2021 Mirage, вышедшей одновременно с началом операции «Хищные воды». Автором скина является студия 2minds.',
            image: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJK9diklb-HnvD8J4Tdl3lW7Ytw3LDD8NWnjFDhrUo5Nj_3cI6dIA9tZ1zQrFLqk7jugMK075WfznowpGB8suOz62BA',
            price: '154522',
            case: 'Mirage 2021',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '11',
            title: 'Desert Eagle Light Rail',
            description: 'Desert Eagle | Рельсотрон (Desert Eagle | Light Rail) был добавлен в игру 13 марта 2019 года в составе коллекции «Призма», вышедшей в рамках обновления Seeing the Light. Автором скина является de puiseau.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PTbTjlH7du6kb-Oj_jLP7LWnn9u5MRjjeyPrY7xiw3nrUI-Z2ymctTEcw45ZlzY-le7lbu505-6u8icn3o1uHYgsWGdwUIySWubDg',
            price: '219',
            case: '«Призма»',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '12',
            title: 'Desert Eagle Blaze',
            description: 'Desert Eagle | Пламя (Desert Eagle | Blaze) Выход Desert Eagle | Blaze был добавлен в игру 14 августа 2013 года в составе коллекции Dust, вышедшей в рамках обновления The Arms Deal.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTjtO7dGzh7-HnvD8J_XVkjoFuMYiiLqUrI-k3le3r0s5amj7d9eTI1I-M1rW-Fm_xO-50Jfvot2XnhS4_w8U',
            price: '1599',
            case: '«Dust»',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '13',
            title: 'Desert Eagle Printstream',
            description: 'Desert Eagle | Printstream был добавлен в игру 07 августа 2020 года в составе коллекции The Fracture, вышедшей в рамках обновления On the Case. Автором скина является JTPNZ.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7duJhJKCmePnJ6nUl2Zu5Mx2gv3--Y3nj1H6qUdqazz2IoCVdVJvYlGGqFPtyea6gZ-_uJjPy3tj7HQnsS3cmBHkiQYMMLIjaxhhAw',
            price: '7300',
            case: '«Разлом»',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '14',
            title: 'M4A1-S Decimator',
            description: 'M4A1-S | Опустошитель (M4A1-S | Decimator) был добавлен в игру 15 марта 2017 года в составе коллекции «Спектр», вышедшей в рамках обновления Take a trip to the Canals. Автором скина является Coridium.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDL_UlWJc6dF-mNbN_Iv9nBrhqhVkYTz6LYSScVBtMliB_gDqwuu9h5-7vc_PynVrvXV37HfUyxPmn1gSOa-1kwUB',
            price: '1259',
            case: '«Спектр»',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '15',
            title: 'M4A1-S Cyrex',
            description: 'M4A1-S | Сайрекс (M4A1-S | Cyrex) был добавлен в игру 1 июля 2014 года в составе коллекции «Прорыв», вышедшей одновременно с началом одноименной операции. Автором скина является Nextgenz #Prisma2.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITSj3lU8Pp9g-7J4cKk3AC2_0NpYDyhI4XHdlc6Zg7Y-1O2lLy9hcO0vJWdwSdhsnYnt3aOgVXp1hcjOJd2',
            price: '1436',
            case: '«Прорыв»',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '16',
            title: '★ Karambit Marble Fade',
            description: 'Керамбит | Мраморный градиент (Karambit | Marble Fade) был добавлен в игру 8 января 2015 года в рамках обновления Full Spectrum. Скин доступен во всех «Хромированных кейсах».',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20mvbmMbfUqW1Q7MBOhuDG_Zi7jQGw-xVoZGigd4LEI1I2NQyE_ATqlOrtjMfq6ZWanXA3siBx5CyLnQv3309Lv_QKkg',
            price: '58998',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '17',
            title: '★ Butterfly Knife Lore',
            description: 'Нож-бабочка | Легенды (Butterfly Knife | Lore) был добавлен в игру 22 сентября 2021 года в рамках обновления «Хищные воды». Скин доступен в кейсе операции «Хищные воды»',
            image: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4OeqPXhJ6_UhG1d8fp9hfvEyoHwjF2hpiwwMiukcZjBdVNsZgnYr1i-kOm5gZC5tZqYwHdrs3R05XfYlkGz1R8ZP7Rv0_yeVxzAUFm-H04o',
            price: '67000',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '18',
            title: 'MP9 Wild Lily',
            description: 'MP9 | Дикая лилия (MP9 | Wild Lily) был добавлен в игру 18 ноября 2019 года в составе коллекции St. Marc, которая вышла одновременно с началом операции «Расколотая сеть».',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJL_9C3moS0kfv7IbrdqWdY781lteXA54vwxlDsrUVvYG2iJo-Vd1Q_ZV6ErlO_wem6gJ--vJvBmyYxuSMhs3vUzEGpwUYbWcvqfhg',
            price: '94446',
            case: '«St. Marc»',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '19',
            title: 'MP9 Hydra',
            description: 'MP9 | Гидра (MP9 | Hydra) был добавлен в игру 18 октября 2019 года в составе юбилейного кейса CS20, вышедшего в рамках обновления Cache and Release. Автором скина является Frostbite.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJK9diklb-HnvD8J4Tdl3lW7Ytz3b6Xpo2t2QW2-BE_aj3yLdKVdgM-Yw6Cq1Hrlb3p1sTpv5jMznRlpGB8snH8MK4B',
            price: '2675',
            case: '«CS20»',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '20',
            title: 'P90 | Death by Kitty',
            description: 'P90 | Смертоносные кошечки (P90 | Death by Kitty) был добавлен в игру 14 августа 2013 года в составе коллекции eSports 2013, вышедшей в рамках обновления The Arms Deal.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PDJZS5J-dC6h7-bzqfLP7LWnn8fuMN32OqU9tmmiQLt-hZuaz2mJITGJgFsZViF-Vi7levs0Z7vupXLz2wj5HegSjteqg',
            price: '5485',
            case: ' «eSports 2013»',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '21',
            title: 'P90 | Asiimov',
            description: 'P90 | Азимов (P90 | Asiimov) был добавлен в игру 1 июля 2014 года в составе коллекции «Прорыв», вышедшей одновременно с началом одноименной операции. Автором скина является Coridium.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIXBD_9W_mY-dqPv9NLPF2DtS6ZJ33e_Cpd-niw3sqEY_MGzzItXGJlM3YwrT-QS7ye3p1J7ttJXXiSw09F9GDzA',
            price: '2830',
            case: '«Прорыв»',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '22',
            title: 'Sport Gloves Vice',
            description: 'Спортивные перчатки | Порок (Sport Gloves | Vice) были добавлены в игру 15 февраля 2018 года. Перчатки доступны в кейсе «Решающий момент».',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eO0mJWOqOf9PbDummJW4NE_2u3Aooj2i1KwrkNoYW_7dYKXeg9vNVyC_AK-wb_thse9vpmYz3Bn7z5iuyh6Nk1_Sw',
            price: '164077',
            case: 'Перчаточная',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '23',
            title: 'SCAR-20 Cardiac',
            description: 'SCAR-20 | Кардио (SCAR-20 | Cardiac) был добавлен в игру 11 ноября 2014 года в составе коллекции «Авангард», вышедшей одновременно с началом одноименной операции. Автором скина является Nextgenz #Prisma2.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c7kxL-CmePxIa3UmH9Y58tOhuDG_Zi70QKw8hJuZTqgdYCUdQQ-ZlrQ8gC2wui7gZS46JvOzyAw6CJxsHyPlgv3308fY4CoRw',
            price: '85937',
            case: '«Авангард»',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '24',
            title: 'SCAR-20 | Cyrex',
            description: 'SCAR-20 | Сайрекс (SCAR-20 | Cyrex) был добавлен в игру 1 мая 2014 года в составе «Охотничьей коллекции», вышедшей в рамках обновления The Hunt Begins. Автором скина является Nextgenz #Prisma2.',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c6Jl5mZku_LP7LWnn8f7cAljuiQpomnjAPgr0M6N2ilcNTEIw5oYwuB_ljrk--8gsC87c6amGwj5HcY7eHXug',
            price: '1528',
            case: 'Охотничья',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '25',
            title: 'AUG Torque',
            description: 'AUG | Закрученный (AUG | Torque) был добавлен в игру 1 мая 2014 года в составе коллекции «Охотничьего оружейного кейса», вышедшего в рамках обновления The Hunt Begins. Автором скина является ReakenTheRock.',
            case: 'Охотничья',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJS_tOxhoWYhP7iDLfYkWNFpsMm27vD9Iqs2gHnqRdvZm6gI4fEcwM8ZAyBqVS_lO3vh5-075TMynd9-n51xJ7ya_c',
            price: '320',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '26',
            title: 'AUG Radiation Hazard',
            description: 'AUG | Радиационная опасность (AUG | Radiation Hazard) был добавлен в игру 8 августа 2014 года в составе коллекции Cache, вышедшей одновременно с обновлением, приуроченным к началу ESL Cologne 2014.',
            case: '«Cache»',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRw7P3dejhR-M6_hIW0mOX1PbzUqWpE7_p9g-7J4cKh2wTt-kBkMT32do_Adwc2Z1rYrlS_xr_tgpO7uJqcmnswuCIi4ivegVXp1vNtKNLo',
            price: '75',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '27',
            title: 'M4A1-S Icarus Fell',
            description: 'M4A1-S | Падение Икара (M4A1-S | Icarus Fell) был добавлен в игру 26 мая 2015 года в составе коллекции «Боги и чудовища», вышедшей одновременно с началом операции Bloodhound.',
            case: '«Боги и чудовища»',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-ClPbmJqjummJW4NE_3ujHpY2sigXl-UFoZGj7JYCXdgQ4YVnQ-1Lqxenn1MLpuszJz3tk6D5iuyjCqdNpmA',
            price: '8493',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '28',
            title: 'M4A1-S Nightmare',
            description: 'M4A1-S | Ночной кошмар (M4A1-S | Nightmare) появился в мастерской 29 октября 2017 года и был добавлен в игру 2 августа 2018 года в составе коллекции «Горизонт», вышедшей в рамках обновления A New Horizon. Автором скина является Apel.',
            case: '«Горизонт»',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITfn2xZ_MhwmOz--YXygED6_Us5a2DxcdSRJlNqMAzY-li8weu-gMDovJufyHVmuCklsX6PyhTk0wYMMLLeV8xVfw',
            price: '1637',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '29',
            title: 'SG 553 Darkwing',
            description: 'SG 553 | Darkwing (SG 553 | Darkwing) был добавлен в игру 31 марта 2020 года в составе коллекции Prisma 2, вышедшей в рамках обновления Clearing Out the Cobwebs. Автором скина является blossomalex.',
            case: '«Призма 2»',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JkIGZnOD9PbzummJW4NFOhujT8om7jg23-ENuYW76ddDAIFJqY1rR-VW6l7_qjMC7v5WfwHFivXRx4X7fnQv330_a99p--w',
            price: '106',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
        {
            id: '30',
            title: 'SSG 08 Dragonfire',
            description: 'SSG 08 | Пламя дракона (SSG 08 | Dragonfire) был добавлен в игру 28 ноября 2016 года в составе «Перчаточной коллекции», вышедшей в рамках обновления Brothers In Arms. Авторами скина являются Helenek и Puffin (•⌔• ).',
            case: 'Перчаточная',
            image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJkJKKkPj6NbLDk1RC68phj9bN_Iv9nBrg80FkZmGgLdKVeg46ZFyC_lPrxO25hZTotZ_OmHphuiNx43aJyUa1n1gSOaKu3f6c',
            price: '1325',
            "rating": {
                "rate": 3.9,
                "count": 120
                }
        },
    ])
});

server.listen(PORT, ()=>{
    console.log(`Сервер запущен на порту 7070 ${PORT}`)
});
