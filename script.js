 // --- 1. Base de Dados com Avatares Estilizados em SVG Blindados com Base64 ---
        function criarAvatar(corFundo, corCabelo, texto) {
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" fill="${corFundo}"/><circle cx="50" cy="55" r="25" fill="#ffdbac"/><path d="M25 45 C25 20, 75 20, 75 45" fill="${corCabelo}"/><circle cx="42" cy="50" r="3" fill="#333"/><circle cx="58" cy="50" r="3" fill="#333"/><path d="M45 65 Q50 68 55 65" stroke="#333" stroke-width="2" fill="none"/><text x="50" y="90" font-family="sans-serif" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">${texto}</text></svg>`;
            return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
        }

        const listaPersonagens = [
            // --- Clássicos Shonen/Seinen Iniciais ---
            { nome: "Naruto Uzumaki", anime: "Naruto", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 1999, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/naruto/images/7/7d/Naruto_Part_II.png/revision/latest/scale-to-width-down/1000?cb=20210811111154" },
            { nome: "Son Goku", anime: "Dragon Ball", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 1984, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/dragonball/images/0/00/GokuEndofDB.png/revision/latest?cb=20250305104956" },
            { nome: "Monkey D. Luffy", anime: "One Piece", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 1997, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/dubbing9585/images/6/64/Monkey_D._Luffy_OPStampede.png/revision/latest?cb=20240131091440" },
            { nome: "Satoru Gojo", anime: "Jujutsu Kaisen", genero: "Masculino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 2018, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/f/f5/Satoru_quotes_I_alone_am_the_honored_one_%28Anime%29.png/revision/latest/scale-to-width-down/1000?cb=20230727233257" },
            { nome: "Tanjiro Kamado", anime: "Demon Slayer", genero: "Masculino", cabelo: "Ruivo", demografia: "Shonen", ano_lancamento: 2016, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/p__/images/7/7b/Tanjiro_colored_profile_%28Demon_Slayer_Mark%29.png/revision/latest?cb=20200409101340&path-prefix=protagonist" },
            { nome: "Mikasa Ackerman", anime: "Attack on Titan", genero: "Feminino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2009, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/p__/images/d/db/Zky26sn5hcf01.jpg/revision/latest/scale-to-width-down/1000?cb=20200610203754&path-prefix=protagonist" },
            { nome: "Edward Elric", anime: "Fullmetal Alchemist", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2001, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/p__/images/9/96/Fullmetal4.jpg/revision/latest/scale-to-width-down/1000?cb=20150306042233&path-prefix=protagonist" },
            { nome: "Nezuko Kamado", anime: "Demon Slayer", genero: "Feminino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2016, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/p__/images/2/20/Demon_Slayer_OP_1_-_Nezuko_Kamado.png/revision/latest/scale-to-width-down/1000?cb=20210619025857&path-prefix=protagonist" },
            { nome: "Izuku Midoriya", anime: "My Hero Academia", genero: "Masculino", cabelo: "Verde", demografia: "Shonen", ano_lancamento: 2014, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/p__/images/2/23/My-Hero-Academia-Two-Heroes-Screenshot-04.jpg/revision/latest?cb=20190223182503&path-prefix=protagonist" },
            
            // --- Elenco de Re:Zero ---
            { nome: "Subaru Natsuki", anime: "Re:Zero", genero: "Masculino", cabelo: "Preto", demografia: "Isekai", ano_lancamento: 2014, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/rezero/images/c/cf/Episode_56_Subaru.png/revision/latest/scale-to-width-down/1000?cb=20250410075333" },
            { nome: "Emilia", anime: "Re:Zero", genero: "Feminino", cabelo: "Prateado", demografia: "Isekai", ano_lancamento: 2014, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/rezero/images/7/7c/Emilia_S3_anime_PV2_1st.png/revision/latest/scale-to-width-down/1000?cb=20240324181945" },
            { nome: "Rem", anime: "Re:Zero", genero: "Feminino", cabelo: "Azul", demografia: "Isekai", ano_lancamento: 2014, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/rezero/images/0/02/Rem_Anime.png/revision/latest/scale-to-width-down/1000?cb=20210916151323" },
            { nome: "Ram", anime: "Re:Zero", genero: "Feminino", cabelo: "Rosa", demografia: "Isekai", ano_lancamento: 2014, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/rezero/images/5/54/Episode_70_Ram.png/revision/latest/scale-to-width-down/1000?cb=20260429232012" },
            { nome: "Reinhard van Astrea", anime: "Re:Zero", genero: "Masculino", cabelo: "Ruivo", demografia: "Isekai", ano_lancamento: 2014, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/rezero/images/5/5a/Episode_52_Anime_Site_Preview_3.png/revision/latest/scale-to-width-down/1000?cb=20241008151610" },
            { nome: "Garfiel Tinsel", anime: "Re:Zero", genero: "Masculino", cabelo: "Loiro", demografia: "Isekai", ano_lancamento: 2014, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/rezero/images/4/48/Episode_53_Garfiel_No.2.png/revision/latest/scale-to-width-down/1000?cb=20250305040907" },
            { nome: "Echidna", anime: "Re:Zero", genero: "Feminino", cabelo: "Branco", demografia: "Isekai", ano_lancamento: 2014, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/rezero/images/0/02/Echidna_Anime_PV_2.png/revision/latest/scale-to-width-down/1000?cb=20200611134057" },
            { nome: "Satella", anime: "Re:Zero", genero: "Feminino", cabelo: "Prateado", demografia: "Isekai", ano_lancamento: 2014, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/rezero/images/a/aa/Satella-bd.png/revision/latest/scale-to-width-down/1000?cb=20210204010138" },
            { nome: "Shaula", anime: "Re:Zero", genero: "Feminino", cabelo: "Castanho", demografia: "Isekai", ano_lancamento: 2014, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/rezero/images/e/e9/Episode_70_Shaula_No1.png/revision/latest/scale-to-width-down/1000?cb=20260429232312" },
            {nome: "Beatrice/ Beako", anime: "Re:Zero", genero: "Feminino", cabelo: "Loiro", demografia: "Isekai", ano_lancamento: 2014, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/rezero/images/0/02/Episode_70_Beatrice_No1.png/revision/latest/scale-to-width-down/1000?cb=20260429232924"},
            // --- Dragon Ball ---
            { nome: "Vegeta", anime: "Dragon Ball", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 1988, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/dragonball/images/3/3d/Majin_vegeta_3.PNG/revision/latest/scale-to-width-down/1000?cb=20250826023835" },
            { nome: "Gohan", anime: "Dragon Ball", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 1988, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/dragonball/images/1/13/Gohan_ssj2.PNG/revision/latest?cb=20070626162102" },
            { nome: "Jiren", anime: "Dragon Ball", genero: "Masculino", cabelo: "Careca", demografia: "Shonen", ano_lancamento: 2017, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/dragonball/images/3/33/Jiren1.png/revision/latest?cb=20170723224647" },
            { nome: "Whis", anime: "Dragon Ball", genero: "Masculino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 2013, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/dragonball/images/7/73/SDBHWhis.png/revision/latest?cb=20190128234106" },
            { nome: "Beerus", anime: "Dragon Ball", genero: "Masculino", cabelo: "Careca", demografia: "Shonen", ano_lancamento: 2013, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/dragonball/images/0/06/King_Vegeta2_BoG.png/revision/latest/scale-to-width-down/1000?cb=20210610170903" },
            { nome: "Gotenks", anime: "Dragon Ball", genero: "Masculino", cabelo: "Bicolor", demografia: "Shonen", ano_lancamento: 2013, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/dragonball/images/f/f2/GotenksSSIIINV02.png/revision/latest?cb=20130103162411" },
            
            // --- Demon Slayer ---
            { nome: "Zenitsu Agatsuma", anime: "Demon Slayer", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2016, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/p__/images/1/15/Zenitsu_using_Thunder_Breathing_Technique%2C_First_Form.jpg/revision/latest/scale-to-width-down/1000?cb=20210522161817&path-prefix=protagonist" },
            { nome: "Inosuke Hashibira", anime: "Demon Slayer", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2016, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/p__/images/a/a2/Inosuke_ready_to_attack.png/revision/latest/scale-to-width-down/1000?cb=20210516050456&path-prefix=protagonist" },
            { nome: "Shinobu Kocho", anime: "Demon Slayer", genero: "Feminino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2016, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/p__/images/6/61/B91D3304-63C4-4F7D-909D-D1D8B92A4256.jpeg/revision/latest?cb=20200308014809&path-prefix=protagonist" },
            { nome: "Kyojuro Rengoku", anime: "Demon Slayer", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2016, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/p__/images/a/ad/Kyojuro_anime_introduction.png/revision/latest/scale-to-width-down/1000?cb=20200412175234&path-prefix=protagonist" },
            
            // --- Solo Leveling ---
            { nome: "Sung Jin-woo", anime: "Solo Leveling", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2016, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/p__/images/9/93/Solo_Leveling_Manhwa_Dungeon_and_Prisoners_Arc_Panel_23.png/revision/latest?cb=20240126134340&path-prefix=protagonist" },
            { nome: "Cha Hae-in", anime: "Solo Leveling", genero: "Feminino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2016, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/p__/images/f/fe/Cha_Hae-In_manhwa5.webp/revision/latest?cb=20230909002242&path-prefix=protagonist" },
            { nome: "Sung Jin-ah", anime: "Solo Leveling", genero: "Feminino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 2016, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/p__/images/c/ce/Sung_Jinha_render.webp/revision/latest?cb=20230908234739&path-prefix=protagonist" },
            
            // --- Fragrant Flowers Fade with Dignity ---
            { nome: "Rintaro Tsumugi", anime: "The Fragrant Flowers Fade with Dignity", genero: "Masculino", cabelo: "Loiro", demografia: "Shoujo", ano_lancamento: 2021, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/kaoruhana/images/d/d5/Episode_7_Preview_1.jpeg/revision/latest/scale-to-width-down/1000?cb=20250814090927" },
            { nome: "Kaoruko Waguri", anime: "The Fragrant Flowers Fade with Dignity", genero: "Feminino", cabelo: "Castanho", demografia: "Shoujo", ano_lancamento: 2021, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/kaoruhana/images/1/1d/Episode_4_Preview_1.jpeg/revision/latest/scale-to-width-down/1000?cb=20250724090726" },
            
            // --- My Hero Academia ---
            { nome: "Katsuki Bakugo", anime: "My Hero Academia", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2014, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/videogaming/images/c/c7/My_Hero_Academia_All%27s_Justice_US_Website_-_Character_Card_-_Katsuki_Bakugo.png/revision/latest?cb=20260107012422" },
            { nome: "Shoto Todoroki", anime: "My Hero Academia", genero: "Masculino", cabelo: "Bicolor", demografia: "Shonen", ano_lancamento: 2014, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/videogaming/images/1/10/My_Hero_Ultra_Impact_-_Character_Art_-_Shoto_Todoroki_-_Post-Struggle_-_1.png/revision/latest?cb=20250322201744" }, 
            { nome: "All Might", anime: "My Hero Academia", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2014, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/videogaming/images/1/1b/My_Hero_Academia_All%27s_Justice_US_Website_-_Character_Card_-_All_Might.png/revision/latest?cb=20260107013719"},
            
            // --- Jujutsu Kaisen ---
            { nome: "Yuji Itadori", anime: "SubJujutsu Kaisen", genero: "Masculino", cabelo: "Rosa", demografia: "Shonen", ano_lancamento: 2018, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/p__/images/c/cc/Jujutsu_Kaisen_Season_1_Yuji_threatens_to_kill_Mahito_28Anime29.webp/revision/latest?cb=20240101182448&path-prefix=protagonist" },
            { nome: "Megumi Fushiguro", anime: "Jujutsu Kaisen", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2018, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/p__/images/d/d5/Anime_Jujutsu_Kaisen_Season_2_Megumi_leaves_Shigemo_behind_28Anime29.webp/revision/latest?cb=20240101202341&path-prefix=protagonist" },
            { nome: "Nobara Kugisaki", anime: "Jujutsu Kaisen", genero: "Feminino", cabelo: "Ruivo", demografia: "Shonen", ano_lancamento: 2018, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/p__/images/9/93/Nobara_Kaikai_Kitan_opening_2.png/revision/latest/scale-to-width-down/1000?cb=20201105233540&path-prefix=protagonist" },
            { nome: "Ryomen Sukuna", anime: "Jujutsu Kaisen", genero: "Masculino", cabelo: "Rosa", demografia: "Shonen", ano_lancamento: 2018, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/p__/images/f/ff/Jujutsu_Kaisen_Anime_Season_1_Sukuna_awakens_inside_Yuji27s_body_28Anime29.webp/revision/latest?cb=20240101172844&path-prefix=protagonist" },
            { nome: "Yuta Okkotsu", anime: "Jujutsu Kaisen", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2018, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/p__/images/4/4c/Yuta_declares_he_will_kill_Yuji_himself.webp/revision/latest?cb=20230201200017&path-prefix=protagonist" },

            // --- Fire Force ---
            { nome: "Shinra Kusakabe", anime: "Fire Force", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2015, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/fire-brigade-of-flames/images/5/55/Shinra_Kusakabe.png/revision/latest?cb=20160621224312" },
            { nome: "Arthur Boyle", anime: "Fire Force", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2015, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/fire-brigade-of-flames/images/4/4c/Arthur_Boyle.png/revision/latest?cb=20190923063001" },
            { nome: "Benimaru Shinmon", anime: "Fire Force", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2015, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/fire-brigade-of-flames/images/7/78/Shinmon_Benimaru.png/revision/latest?cb=20190625101804" },
            { nome: "Maki Oze", anime: "Fire Force", genero: "Feminino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2015, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/fire-brigade-of-flames/images/2/21/Maki.png/revision/latest?cb=20200804103959" },
            { nome: "Tamaki Kotatsu", anime: "Fire Force", genero: "Feminino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2015, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/fire-brigade-of-flames/images/6/68/Tamaki.png/revision/latest?cb=20200702130936" },
            { nome: "Joker", anime: "Fire Force", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2015, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/fire-brigade-of-flames/images/8/8f/Five-Two.png/revision/latest?cb=20250415002324" },
            { nome: "Hibana", anime: "Fire Force", genero: "Feminino", cabelo: "Rosa", demografia: "Shonen", ano_lancamento: 2015, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/fire-brigade-of-flames/images/e/e1/Hibana%27s_Vow.png/revision/latest/scale-to-width-down/1000?cb=20190824092436" },
            { nome: "Iris", anime: "Fire Force", genero: "Feminino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2015, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/fire-brigade-of-flames/images/b/b2/Iris_infobox_new.png/revision/latest?cb=20170923224600" },

            // --- Hunter x Hunter ---
            { nome: "Gon Freecss", anime: "Hunter x Hunter", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 1998, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/hunterxhunter/images/3/3e/HxH2011_EP147_Gon_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20230904181801" },
            { nome: "Killua Zoldyck", anime: "Hunter x Hunter", genero: "Masculino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 1998, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/hunterxhunter/images/b/bd/HxH2011_EP147_Killua_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20230904181904" },
            { nome: "Kurapika", anime: "Hunter x Hunter", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 1998, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/hunterxhunter/images/f/f2/HxH2011_EP23_Kurapika%27s_Stare.png/revision/latest?cb=20181226072945"},
            { nome: "Leorio Paradinight", anime: "Hunter x Hunter", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 1998, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/hunterxhunter/images/7/73/HxH2011_EP145_Leorio_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20230902193715" },
            { nome: "Hisoka Morow", anime: "Hunter x Hunter", genero: "Masculino", cabelo: "Ruivo", demografia: "Shonen", ano_lancamento: 1998, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/hunterxhunter/images/0/08/HxH2011_EP3_Hisoka_debut_scene.png/revision/latest/scale-to-width-down/1000?cb=20230308060629" },
            { nome: "Chollo Lucilfer", anime: "Hunter x Hunter", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 1998, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/hunterxhunter/images/4/49/2011_EP52_Chrollo_faces_Silva_and_Zeno.png/revision/latest/scale-to-width-down/1000?cb=20240223031717" },
            {nome: "Kaito", anime: "Hunter x Hunter", genero: "Masculino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 1988, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/hunterxhunter/images/1/1d/Kite_CA_Portrait.png/revision/latest?cb=20190127155247"},
            {nome: "Meruem", anime: "Hunter x Hunter", genero: "Masculino", cabelo: "Careca", demografia: "Shonen", ano_lancamento: 1988, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/hunterxhunter/images/8/8e/126_-_Meruem_asks_for_his_name.png/revision/latest/scale-to-width-down/1000?cb=20240223020155"},

            // --- JoJo's Bizarre Adventure ---
            { nome: "Jotaro Kujo", anime: "JoJo's Bizarre Adventure", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 1987, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/jjba/images/0/01/JotaroProfile.png/revision/latest?cb=20191125014406" },
            { nome: "Dio Brando", anime: "JoJo's Bizarre Adventure", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 1987, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/jjba/images/5/5f/DioSOAnime.png/revision/latest/scale-to-width-down/1000?cb=20211201131104" },
            { nome: "Joseph Joestar", anime: "JoJo's Bizarre Adventure", genero: "Masculino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 1987, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/jjba/images/f/fc/Joseph_Infobox.jpg/revision/latest/scale-to-width-down/1000?cb=20190628200225" },
            { nome: "Josuke Higashikata", anime: "JoJo's Bizarre Adventure", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 1987, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/jjba/images/2/24/JosukeAnime.PNG/revision/latest/scale-to-width-down/1000?cb=20171212081940"},
            { nome: "Giorno Giovanna", anime: "JoJo's Bizarre Adventure", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 1987, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/jjba/images/1/19/Giorno_Giovanna_Anime.png/revision/latest?cb=20200310175513" },
            { nome: "Jolyne Cujoh", anime: "JoJo's Bizarre Adventure", genero: "Feminino", cabelo: "Bicolor", demografia: "Shonen", ano_lancamento: 1987, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/jjba/images/7/7a/Jolyne_so_v04_010.png/revision/latest?cb=20140722104939" },

            // --- Frieren: Beyond Journey's End ---
            { nome: "Frieren", anime: "Frieren", genero: "Feminino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 2020, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/frieren/images/a/a9/Frieren_manga_portrait.png/revision/latest?cb=20260207105659" },
            { nome: "Fern", anime: "Frieren", genero: "Feminino", cabelo: "Roxo", demografia: "Shonen", ano_lancamento: 2020, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/frieren/images/c/c5/Fern_manga_portrait.png/revision/latest?cb=20260205001343" },
            { nome: "Stark", anime: "Frieren", genero: "Masculino", cabelo: "Ruivo", demografia: "Shonen", ano_lancamento: 2020, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/frieren/images/7/79/Stark_manga_portrait.png/revision/latest?cb=20260205001507" },
            { nome: "Himmel", anime: "Frieren", genero: "Masculino", cabelo: "Azul", demografia: "Shonen", ano_lancamento: 2020, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/frieren/images/c/c2/Himmel_manga_portrait.png/revision/latest?cb=20260207105613" },
            { nome: "Heiter", anime: "Frieren", genero: "Masculino", cabelo: "Verde", demografia: "Shonen", ano_lancamento: 2020, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/frieren/images/7/75/Heiter_manga_portrait.png/revision/latest/scale-to-width-down/1000?cb=20241120221347" },
            { nome: "Eisen", anime: "Frieren", genero: "Masculino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 2020, papel: "Coadjuvante", imageUrl:"https://static.wikia.nocookie.net/frieren/images/7/78/Eisen_manga_portrait.png/revision/latest?cb=20260205074219" },

            // --- Yu-Gi-Oh! ---
            { nome: "Yugi Mutou", anime: "Yu-Gi-Oh!", genero: "Masculino", cabelo: "Tricolor", demografia: "Shonen", ano_lancamento: 1996, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/yugioh/images/7/73/Yugi_muto.png/revision/latest?cb=20170309011846" },
            { nome: "Seto Kaiba", anime: "Yu-Gi-Oh!", genero: "Masculino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 1996, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/yugioh/images/4/48/Seto_Kaiba_GX.jpg/revision/latest?cb=20110628113438" },
            { nome: "Joey Wheeler", anime: "Yu-Gi-Oh!", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 1996, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/yugioh/images/1/1b/Joey7xq.png/revision/latest?cb=20120415195604"},
            { nome: "Téa Gardner", anime: "Yu-Gi-Oh!", genero: "Feminino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 1996, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/yugioh/images/0/08/T%C3%A9a_Gardner.png/revision/latest/scale-to-width-down/1000?cb=20140520004117" },
            { nome: "Bakura Ryou", anime: "Yu-Gi-Oh!", genero: "Masculino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 1996, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/yugioh/images/e/ef/Ryo2.png/revision/latest?cb=20150425031740" },
            { nome: "Maximillion Pegasus", anime: "Yu-Gi-Oh!", genero: "Masculino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 1996, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/yugioh/images/0/01/Yu-Gi-Oh_001_Final-scene.png/revision/latest?cb=20141119171316" },

            // --- One Punch Man ---
            { nome: "Saitama", anime: "One Punch Man", genero: "Masculino", cabelo: "Careca", demografia: "Seinen", ano_lancamento: 2012, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/vsbattles/images/1/16/One_Punch_Man_chapter_170_cover.png/revision/latest?cb=20250602065638" },
            { nome: "Genos", anime: "One Punch Man", genero: "Masculino", cabelo: "Loiro", demografia: "Seinen", ano_lancamento: 2012, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/vsbattles/images/5/52/AntiSaitamaArms.png/revision/latest/scale-to-width-down/1000?cb=20160629015156" },
            { nome: "Garou", anime: "One Punch Man", genero: "Masculino", cabelo: "Branco", demografia: "Seinen", ano_lancamento: 2012, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/vsbattles/images/9/90/Newcfgarouwubba.png/revision/latest/scale-to-width-down/1000?cb=20231223171138" },
            { nome: "Tatsumaki", anime: "One Punch Man", genero: "Feminino", cabelo: "Verde", demografia: "Seinen", ano_lancamento: 2012, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/vsbattles/images/1/14/Volume_10Tats.webp/revision/latest/scale-to-width-down/1000?cb=20230816015942" },
            { nome: "Fubuki", anime: "One Punch Man", genero: "Feminino", cabelo: "Preto", demografia: "Seinen", ano_lancamento: 2012, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/onepunchman/images/0/0d/Fubuki_Manga.png/revision/latest?cb=20200216005423" },
            { nome: "Speed-o'-Sound Sonic", anime: "One Punch Man", genero: "Masculino", cabelo: "Preto", demografia: "Seinen", ano_lancamento: 2012, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/vsbattles/images/8/82/Full_Frontal_Attack_OPM.jpg/revision/latest?cb=20181206095438" },
            {nome: "King", anime: "One Punch Man", genero: "Masculino", cabelo: "Loiro", demografia: "Seinen", ano_lancamento: 2012, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/onepunchman/images/7/7d/King_Manga.jpg/revision/latest?cb=20191019062240"},

            // --- Death Note ---
            { nome: "Light Yagami", anime: "Death Note", genero: "Masculino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 2003, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/deathnote/images/6/6f/Kira_answers_as_kira.jpg/revision/latest?cb=20250630141339" },
            { nome: "L Lawliet", anime: "Death Note", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2003, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/deathnote/images/5/50/EPIC_L.jpg/revision/latest?cb=20250702091324" },
            { nome: "Ryuk", anime: "Death Note", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2003, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/deathnote/images/3/32/Ryuk.jpg/revision/latest?cb=20080414001105" },
            { nome: "Misa Amane", anime: "Death Note", genero: "Feminino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2003, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/deathnote/images/8/8a/ImagesCASWBZQN.jpg/revision/latest?cb=20170321051910" },
            { nome: "Near", anime: "Death Note", genero: "Masculino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 2003, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/deathnote/images/1/18/Near_anime.jpg/revision/latest?cb=20131116115524" },
            { nome: "Mello", anime: "Death Note", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2003, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/deathnote/images/e/e1/Mello-01.jpg/revision/latest?cb=20110828082656"},

            // --- Bleach ---
            { nome: "Ichigo Kurosaki", anime: "Bleach", genero: "Masculino", cabelo: "Ruivo", demografia: "Shonen", ano_lancamento: 2001, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/bleach/images/a/a2/282Ichigo%27s_Hollow_mask.png/revision/latest?cb=20220625033053&path-prefix=en" },
            { nome: "Rukia Kuchiki", anime: "Bleach", genero: "Feminino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2001, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/bleach/images/c/c3/Ep149RukiaPreparesHakuren.png/revision/latest?cb=20220304230037&path-prefix=en" },
            { nome: "Sosuke Aizen", anime: "Bleach", genero: "Masculino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 2001, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/bleach/images/6/68/682Aizen_profile.png/revision/latest?cb=20260319222423&path-prefix=en" },
            { nome: "Uryu Ishida", anime: "Bleach", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2001, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/bleach/images/e/eb/Ep379UryuSternritter.png/revision/latest/scale-to-width-down/1000?cb=20221228093102&path-prefix=en" },
            { nome: "Renji Abarai", anime: "Bleach", genero: "Masculino", cabelo: "Ruivo", demografia: "Shonen", ano_lancamento: 2001, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/bleach/images/6/65/685Renji_profile.png/revision/latest?cb=20200322080519&path-prefix=en" },
            { nome: "Kisuke Urahara", anime: "Bleach", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2001, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/bleach/images/b/bd/665Urahara_restructures.png/revision/latest?cb=20190522181348&path-prefix=en"},
            { nome: "Orihime Inoue", anime: "Bleach", genero: "Feminino", cabelo: "Ruivo", demografia: "Shonen", ano_lancamento: 2001, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/bleach/images/c/c7/Ep397OrihimeProfile.png/revision/latest?cb=20241111181107&path-prefix=en" },
            { nome: "Nelliel Tu Odelschwanck", anime: "Bleach", genero: "Feminino", cabelo: "Verde", demografia: "Shonen", ano_lancamento: 2001, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/bleach/images/e/e0/Nelrevealed.jpg/revision/latest?cb=20111113110111&path-prefix=pt" },
            { nome: "Ulquiorra Cifer", anime: "Bleach", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2001, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/bleach/images/6/65/Ulquiorra_Cifer.jpg/revision/latest?cb=20211008162834&path-prefix=pt" },
            { nome: "Unohana Retsu", anime: "Bleach", genero: "Feminino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2001, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/bleach/images/5/5f/523Unohana%27s_scar.png/revision/latest?cb=20170831031822&path-prefix=en" },
            { nome: "Zaraki Kenpachi", anime: "Bleach", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2001, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/bleach/images/e/e7/Ep386KenpachiProfile.png/revision/latest/scale-to-width-down/1000?cb=20230921204006&path-prefix=en" },
            { nome: "Bambietta Basterbine", anime: "Bleach", genero: "Feminino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2001, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/bleach/images/b/b6/Ep383BambiettaProfile.png/revision/latest?cb=20230729195015&path-prefix=en" },
            { nome: "Rangiku Matsumoto", anime: "Bleach", genero: "Feminino", cabelo: "Ruivo", demografia: "Shonen", ano_lancamento: 2001, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/bleach/images/d/d1/Ep24RangikuArrives.png/revision/latest/scale-to-width-down/1000?cb=20210331032855&path-prefix=en" },
            { nome: "Yasutora Sado", anime: "Bleach", genero: "Masculino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 2001, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/bleach/images/4/4d/Ep158SadoProfile.png/revision/latest/scale-to-width-down/1000?cb=20231105184802&path-prefix=en" },
            { nome: "Yoruichi Shihōin", anime: "Bleach", genero: "Feminino", cabelo: "Roxo", demografia: "Shonen", ano_lancamento: 2001, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/bleach/images/d/dc/Ep56YoruichiShih%C5%8Din.png/revision/latest?cb=20210412205032&path-prefix=en" },

            // --- Blue Lock ---
            { nome: "Yoichi Isagi", anime: "Blue Lock", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2018, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/bluelock/images/b/b1/Yoichi_Isagi_%28anime%29.png/revision/latest/scale-to-width-down/1000?cb=20221021040144" },
            { nome: "Meguru Bachira", anime: "Blue Lock", genero: "Masculino", cabelo: "Bicolor", demografia: "Shonen", ano_lancamento: 2018, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/universal-warriors/images/5/5d/444142.jpg/revision/latest/scale-to-width-down/1000?cb=20230515095905" },
            { nome: "Seishiro Nagi", anime: "Blue Lock", genero: "Masculino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 2018, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/p__/images/3/3f/Seishiro_Nagi.webp/revision/latest?cb=20230404222152&path-prefix=protagonist" },
            { nome: "Rensuke Kunigami", anime: "Blue Lock", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2018, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/azure-latch/images/d/df/Kunigami-Render.png/revision/latest?cb=20260302013821" },
            { nome: "Hyoma Chigiri", anime: "Blue Lock", genero: "Masculino", cabelo: "Ruivo", demografia: "Shonen", ano_lancamento: 2018, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/azure-latch/images/b/b8/Chigiri-Image.png/revision/latest/scale-to-width-down/1000?cb=20260302013624" },
            { nome: "Rin Itoshi", anime: "Blue Lock", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2018, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/azure-latch/images/1/16/Rin-Image.png/revision/latest?cb=20260302012916" },
            { nome: "Sae Itoshi", anime: "Blue Lock", genero: "Masculino", cabelo: "Rosa", demografia: "Shonen", ano_lancamento: 2018, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/azure-latch/images/d/d9/Sae-Image.png/revision/latest?cb=20260302012728" },
            { nome: "Michael Kaiser", anime: "Blue Lock", genero: "Masculino", cabelo: "Bicolor", demografia: "Shonen", ano_lancamento: 2018, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/azure-latch/images/a/ae/Kaiser-Image.png/revision/latest?cb=20260302012826" },

            // --- Gachiakuta ---
            { nome: "Rudo", anime: "Gachiakuta", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2022, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/gachiakuta/images/6/69/RudoP.png/revision/latest?cb=20220622091502" },
            { nome: "Enjin", anime: "Gachiakuta", genero: "Masculino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 2022, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/gachiakuta/images/4/4e/Engine_-_Chapter_1.png/revision/latest?cb=20220223174433" },
            { nome: "Zanka Nijiku", anime: "Gachiakuta", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2022, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/gachiakuta/images/8/86/Zanka.png/revision/latest?cb=20220423125144" },
            { nome: "Riyou", anime: "Gachiakuta", genero: "Feminino", cabelo: "Rosa", demografia: "Shonen", ano_lancamento: 2022, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/gachiakuta/images/a/a0/RiyouPic.png/revision/latest?cb=20220805190742" },
            { nome: "Jabber Wonger", anime: "Gachiakuta", genero: "Masculino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 2022, papel: "Antagonista",imageUrl: "https://static.wikia.nocookie.net/gachiakuta/images/3/36/Volume_07.png/revision/latest?cb=20230614121217" },
            { nome: "Amo Empool", anime: "Gachiakuta", genero: "Feminino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 2022, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/gachiakuta/images/c/c2/Amo_peace_sign_129.png/revision/latest?cb=20260304201041" },

            // --- Neon Genesis Evangelion ---
            { nome: "Shinji Ikari", anime: "Evangelion", genero: "Masculino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 1995, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/evangelion/images/d/de/Angel_Attack_phone.png/revision/latest?cb=20121216045302" },
            { nome: "Asuka Langley Soryu", anime: "Evangelion", genero: "Feminino", cabelo: "Ruivo", demografia: "Shonen", ano_lancamento: 1995, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/evangelion/images/5/59/Asuka_introduces_class.png/revision/latest?cb=20120707134630" },
            { nome: "Rei Ayanami", anime: "Evangelion", genero: "Feminino", cabelo: "Azul", demografia: "Shonen", ano_lancamento: 1995, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/evangelion/images/0/0c/Rei_Ayanami_Inside_Eva.png/revision/latest?cb=20120325154541" },
            { nome: "Misato Katsuragi", anime: "Evangelion", genero: "Feminino", cabelo: "Roxo", demografia: "Shonen", ano_lancamento: 1995, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/evangelion/images/d/dc/NGE01_30.png/revision/latest/scale-to-width-down/1000?cb=20190901081329" },
            { nome: "Kaworu Nagisa", anime: "Evangelion", genero: "Masculino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 1995, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/evangelion/images/9/92/A_Smile_of_Betrayal.png/revision/latest?cb=20120320222640" },
            { nome: "Gendo Ikari", anime: "Evangelion", genero: "Masculino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 1995, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/evangelion/images/b/b5/Young_Gendo.png/revision/latest?cb=20120317171139" },

            // --- Black Clover ---
            { nome: "Asta", anime: "Black Clover", genero: "Masculino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 2015, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/xianb/images/1/19/Black_Clover_2012099.png/revision/latest?cb=20180508170707" },
            { nome: "Yuno Grinberryall", anime: "Black Clover", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2015, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/xianb/images/2/2f/Black_Clover_Episode_118_0904.jpg/revision/latest?cb=20200607020417" },
            { nome: "Noelle Silva", anime: "Black Clover", genero: "Feminino", cabelo: "Prateado", demografia: "Shonen", ano_lancamento: 2015, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/xianb/images/7/7b/Black_Clover_Episode_72_1126.jpg/revision/latest?cb=20190413051431"},
            { nome: "Yami Sukehiro", anime: "Black Clover", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2015, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/xianb/images/8/88/Black_Clover_Episode_93_0998.jpg/revision/latest?cb=20190904211643" },
            { nome: "Julius Novachrono", anime: "Black Clover", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2015, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/xianb/images/7/7f/Black_Clover_Sword_of_the_Wizard_King_0048.jpg/revision/latest?cb=20230618195324" },
            { nome: "Licht", anime: "Black Clover", genero: "Masculino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 2015, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/xianb/images/4/41/Black_Clover_Episode_99_0877.jpg/revision/latest?cb=20191025232541" },
            { nome: "Nero/Secre", anime: "Black Clover", genero: "Feminino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2015, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/xianb/images/2/2c/Black_Clover_Episode_149_0110.jpg/revision/latest?cb=20210623210623" },


            // --- Soul Eater ---
            { nome: "Maka Albarn", anime: "Soul Eater", genero: "Feminino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2004, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/souleater/images/5/55/Maka_Albarn_%28Post_Timeskip%29_Profile.jpg/revision/latest?cb=20200511030041" },
            { nome: "Soul Eater Evans", anime: "Soul Eater", genero: "Masculino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 2004, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/souleater/images/6/6f/Soul_Evans_%28Post-Timeskip%29_Profile.png/revision/latest?cb=20150812164650" },
            { nome: "Death the Kid", anime: "Soul Eater", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2004, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/souleater/images/d/d2/Death_the_Kid_%28Pre-Timeskip_Colored%29_Profile.png/revision/latest?cb=20150827132117" },
            { nome: "Black☆Star", anime: "Soul Eater", genero: "Masculino", cabelo: "Azul", demografia: "Shonen", ano_lancamento: 2004, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/souleater/images/5/5e/Black_Star_%28Post-Timeskip%29_Profile.png/revision/latest?cb=20150812165236" },
            { nome: "Dr. Franken Stein", anime: "Soul Eater", genero: "Masculino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 2004, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/souleater/images/0/0f/Franken_Stein_%28Colored%29_Profile.png/revision/latest?cb=20230301163930" },
            { nome: "Medusa Gorgon", anime: "Soul Eater", genero: "Feminino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2004, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/souleater/images/9/9a/Medusa_Gorgon_%28Anime%29_Profile.png/revision/latest/scale-to-width-down/1000?cb=20160223021258" },

            // --- Sailor Moon ---
            { nome: "Usagi Tsukino", anime: "Sailor Moon", genero: "Feminino", cabelo: "Loiro", demografia: "Shoujo", ano_lancamento: 1991, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/allthetropes/images/a/ad/B609e7149b9c000bf3f4c21a55afd7c6.png/revision/latest?cb=20160731211126" },
            { nome: "Ami Mizuno", anime: "Sailor Moon", genero: "Feminino", cabelo: "Azul", demografia: "Shoujo", ano_lancamento: 1992, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/allthetropes/images/0/06/D254769e396a81a79b923059855c70de.png/revision/latest?cb=20160731212224" },
            { nome: "Rei Hino", anime: "Sailor Moon", genero: "Feminino", cabelo: "Preto", demografia: "Shoujo", ano_lancamento: 1992, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/allthetropes/images/e/ef/Acf362d10a444aa2c952ac72de2ffb56.png/revision/latest?cb=20160731212302" },
            { nome: "Makoto Kino", anime: "Sailor Moon", genero: "Feminino", cabelo: "Castanho", demografia: "Shoujo", ano_lancamento: 1992, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/allthetropes/images/3/31/1406938f389e0b80691d70170377b9e0.png/revision/latest?cb=20160731212351" },
            { nome: "Minako Aino", anime: "Sailor Moon", genero: "Feminino", cabelo: "Loiro", demografia: "Shoujo", ano_lancamento: 1991, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/allthetropes/images/1/18/F77fe357fdaa38db205dbe3709c23cc8.png/revision/latest?cb=20160731212832" },

            // --- Sword Art Online (SAO) ---
            { nome: "Kirito (Kazuto Kirigaya)", anime: "Sword Art Online", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2009, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/swordartonline/images/a/ad/Kirito_joining_the_Black_Cats_-_bust_shot.png/revision/latest/scale-to-width-down/1000?cb=20140310041913" },
            { nome: "Asuna Yuuki", anime: "Sword Art Online", genero: "Feminino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 2009, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/swordartonline/images/8/88/Asuna_SAO.png/revision/latest/scale-to-width-down/1000?cb=20140301055612" },
            { nome: "Sinon (Shino Asada)", anime: "Sword Art Online", genero: "Feminino", cabelo: "Azul", demografia: "Shonen", ano_lancamento: 2012, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/swordartonline/images/b/b0/Sinon_GGO.png/revision/latest/scale-to-width-down/1000?cb=20140727063131" },
            { nome: "Leafa (Suguha Kirigaya)", anime: "Sword Art Online", genero: "Feminino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2009, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/swordartonline/images/6/6a/Leafa.png/revision/latest/scale-to-width-down/1000?cb=20140228060137" },
            { nome: "Eugeo", anime: "Sword Art Online", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2014, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/swordartonline/images/c/c6/Eugeo.png/revision/latest?cb=20191103233507" },
            { nome: "Akihiko Kayaba", anime: "Sword Art Online", genero: "Masculino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 2009, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/swordartonline/images/8/8d/Heathcliff.png/revision/latest/scale-to-width-down/1000?cb=20131023203927" },
            
            // --- Chainsaw man ---
            { nome: "Denji", anime: "Chainsaw Man", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2018, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/chainsaw-man/images/d/d6/Denji_and_Pochita_%28Shonen_Jump_2019-01%29.png/revision/latest?cb=20240203082550" },
            { nome: "Makima", anime: "Chainsaw Man", genero: "Feminino", cabelo: "Ruivo", demografia: "Shonen", ano_lancamento: 2018, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/chainsaw-man/images/6/66/Makima_tells_Denji_the_type_of_boys_she_likes.png/revision/latest?cb=20230409100539" },
            { nome: "Power", anime: "Chainsaw Man", genero: "Feminino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2018, papel: "Co-protagonista", imageUrl: "https://static.wikia.nocookie.net/p__/images/3/30/Episode_2-5.webp/revision/latest?cb=20230828083037&path-prefix=protagonist" },
            { nome: "Aki Hayakawa", anime: "Chainsaw Man", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2018, papel: "Co-protagonista", imageUrl: "https://static.wikia.nocookie.net/chainsaw-man/images/9/93/Aki_Hayakawa_closeup.png/revision/latest?cb=20230523183144" },
            { nome: "Kobeni Higashiyama", anime: "Chainsaw Man", genero: "Feminino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 2018, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/chainsaw-man/images/f/f7/Kobeni_throwing_two_peace_signs.png/revision/latest?cb=20230610044459" },
            { nome: "Himeno", anime: "Chainsaw Man", genero: "Feminino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2018, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/chainsaw-man/images/a/a0/Himeno_explaining_her_Ghost_Devil_contract.png/revision/latest?cb=20230610052439" },
            { nome: "Reze", anime: "Chainsaw Man", genero: "Feminino", cabelo: "Roxo", demografia: "Shonen", ano_lancamento: 2018, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/chainsaw-man/images/0/09/Reze.png/revision/latest?cb=20230417051057" },
            { nome: "Kishibe", anime: "Chainsaw Man", genero: "Masculino", cabelo: "Grisalho", demografia: "Shonen", ano_lancamento: 2018, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/chainsaw-man/images/6/6e/Episode_7-1.png/revision/latest/scale-to-width-down/1000?cb=20221122095357" },
            { nome: "Pochita", anime: "Chainsaw Man", genero: "Nenhum", cabelo: "Nenhum", demografia: "Shonen", ano_lancamento: 2018, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/chainsaw-man/images/f/fe/Episode_1-2.png/revision/latest/scale-to-width-down/1000?cb=20221004092558" },
            { nome: "Angel Devil", anime: "Chainsaw Man", genero: "Masculino", cabelo: "Ruivo", demografia: "Shonen", ano_lancamento: 2018, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/chainsaw-man/images/5/5f/Episode_12-4.png/revision/latest/scale-to-width-down/1000?cb=20221227085327" },
            { nome: "Asa Mitaka", anime: "Chainsaw Man", genero: "Feminino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2018, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/chainsaw-man/images/c/ca/Asa_mugshot.png/revision/latest?cb=20240405085906" },
            { nome: "Yoru (War Devil)", anime: "Chainsaw Man", genero: "Feminino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2018, papel: "Co-protagonista", imageUrl: "https://static.wikia.nocookie.net/villains/images/1/18/Yoru_Bonus_Illustration.png/revision/latest/scale-to-width-down/1000?cb=20230701200444" },
            { nome: "Gun Devil", anime: "Chainsaw Man", genero: "Nenhum", cabelo: "Nenhum", demografia: "Shonen", ano_lancamento: 2018, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/chainsaw-man/images/e/eb/Gun_devil.png/revision/latest/scale-to-width-down/1000?cb=20240921222645" },
            { nome: "Katana Man", anime: "Chainsaw Man", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2018, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/chainsaw-man/images/6/63/Katana_Man_asks_Denji_to_plead_for_mercy.png/revision/latest/scale-to-width-down/1000?cb=20240224112401" },
            { nome: "Tomato Devil", anime: "Chainsaw Man", genero: "Nenhum", cabelo: "Nenhum", demografia: "Shonen", ano_lancamento: 2018, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/chainsaw-man/images/6/6e/Tomato_Devil_anime.png/revision/latest/scale-to-width-down/1000?cb=20240223064451" },
            
            // --- Doctor Stone ---
            { nome: "Senku Ishigami", anime: "Dr. STONE", genero: "Masculino", cabelo: "Branco e Verde", demografia: "Shonen", ano_lancamento: 2017, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/dr-stone/images/8/8b/Senku_Ishigami_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20190927164015" },
            { nome: "Tsukasa Shishio", anime: "Dr. STONE", genero: "Masculino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 2017, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/dr-stone/images/3/39/Tsukasa_admits_Senku_could_have_been_a_friend.png/revision/latest/scale-to-width-down/1000?cb=20190727002502" },
            { nome: "Kohaku", anime: "Dr. STONE", genero: "Feminino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2017, papel: "Co-protagonista", imageUrl: "https://static.wikia.nocookie.net/dr-stone/images/4/48/We_believe_in_science%2C_and_in_Senku.png/revision/latest/scale-to-width-down/1000?cb=20210314002009" },
            { nome: "Chrome", anime: "Dr. STONE", genero: "Masculino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 2017, papel: "Co-protagonista", imageUrl: "https://static.wikia.nocookie.net/dr-stone/images/b/b5/Chrome%27s_trust.png/revision/latest/scale-to-width-down/1000?cb=20210216161100" },
            { nome: "Gen Asagiri", anime: "Dr. STONE", genero: "Masculino", cabelo: "Preto e Branco", demografia: "Shonen", ano_lancamento: 2017, papel: "Co-protagonista", imageUrl: "https://static.wikia.nocookie.net/dr-stone/images/f/fe/Gen_Asagiri_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210228185813" },
            { nome: "Taiju Oki", anime: "Dr. STONE", genero: "Masculino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 2017, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/dr-stone/images/f/fb/Taiju_meets_Senku_face-to-face.png/revision/latest/scale-to-width-down/1000?cb=20210227225346" },
            { nome: "Yuzuriha Ogawa", anime: "Dr. STONE", genero: "Feminino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 2017, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/dr-stone/images/b/bd/Yuzuriha_in_casual_clothing_%28Dr._Stone_Ryusui%29.png/revision/latest/scale-to-width-down/1000?cb=20250702035308" },
            { nome: "Suika", anime: "Dr. STONE", genero: "Feminino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2017, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/dr-stone/images/3/32/Suika_without_her_helmet.png/revision/latest?cb=20210209140839" },
            { nome: "Ryusui Nanami", anime: "Dr. STONE", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2017, papel: "Co-protagonista", imageUrl: "https://static.wikia.nocookie.net/dr-stone/images/f/f8/Ryusui_Instincts.png/revision/latest/scale-to-width-down/1000?cb=20250724102057" },
            { nome: "Ukyo Saionji", anime: "Dr. STONE", genero: "Masculino", cabelo: "Loiro", demografia: "Shonen", ano_lancamento: 2017, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/dr-stone/images/a/a4/Ukyo_Portrait.png/revision/latest?cb=20210226213700" },
            { nome: "Hyoga", anime: "Dr. STONE", genero: "Masculino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 2017, papel: "Antagonista", imageUrl: "https://static.wikia.nocookie.net/dr-stone/images/7/70/Hyoga_observes_Ishigami_Village.png/revision/latest?cb=20210209111906" },

            // --- Dan da Dan ---
            
            { nome: "Momo Ayase", anime: "Dandadan", genero: "Feminino", cabelo: "Castanho", demografia: "Shonen", ano_lancamento: 2021, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/p__/images/3/38/Momo_Ayase_Infobox_Dandadan.webp/revision/latest?cb=20231202211222&path-prefix=protagonist" },
            { nome: "Ken Takakura (Okarun)", anime: "Dandadan", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2021, papel: "Protagonista", imageUrl: "https://static.wikia.nocookie.net/dandadan/images/c/c3/Okarun%27s_new_hairstyle_%28Anime%29.png/revision/latest?cb=20241010182037" },
            { nome: "Seiko Ayase", anime: "Dandadan", genero: "Feminino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 2021, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/dandadan/images/2/2d/Seiko_Ayase_Portrait.png/revision/latest?cb=20250925185351" },
            { nome: "Turbo-Baba (Vovó Turbo)", anime: "Dandadan", genero: "Feminino", cabelo: "Branco", demografia: "Shonen", ano_lancamento: 2021, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/dandadan/images/6/69/Turbo_Granny_%28Doll%29_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20241224032229" },
            { nome: "Aira Shiratori", anime: "Dandadan", genero: "Feminino", cabelo: "Rosa", demografia: "Shonen", ano_lancamento: 2021, papel: "Co-protagonista", imageUrl: "https://static.wikia.nocookie.net/dandadan/images/c/ca/Episode_5-1.png/revision/latest/scale-to-width-down/1000?cb=20241030051719" },
            { nome: "Jin Enjoji (Jiji)", anime: "Dandadan", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2021, papel: "Co-protagonista", imageUrl: "https://static.wikia.nocookie.net/dandadan/images/3/3c/Jiji_Anime_Infobox.png/revision/latest?cb=20240624155108" },
            { nome: "Kinta Sakata", anime: "Dandadan", genero: "Masculino", cabelo: "Preto", demografia: "Shonen", ano_lancamento: 2021, papel: "Coadjuvante", imageUrl: "https://static.wikia.nocookie.net/dandadan/images/7/7e/Kinta_Sakata_Anime_Infobox.png/revision/latest?cb=20250821174736" },
           
           

            // --- Atack on titan ---
            // --- Mob Psycho ---
            // --- Full Metal Achimist Brotherhood ---
            // --- Vinland Saga ---
            // --- Kaiju no 8 ---
            // --- Tengen Guren lagan ---
            //Adicionar Naruto, consertar foto da Shinobu, Saitama, Jolyne, 
            // Adicionar em Re:Zero -->Regulus, Otto, Roswaald, Aldebaran

        ];

        // --- 2. Estado Global do Jogo ---
        let personagemDoDia = null;
        let palpitesEnviados = [];
        let jogoConcluido = false;

        const searchInput = document.getElementById('search-input');
        const dropdown = document.getElementById('dropdown');
        const guessesBox = document.getElementById('guesses-box');
        const helpPanel = document.getElementById('instructions-panel');
        const hintPanel = document.getElementById('hint-panel');

        // --- 3. Inicialização ---
        function iniciarJogo() {
            personagemDoDia = listaPersonagens[Math.floor(Math.random() * listaPersonagens.length)];
            palpitesEnviados = [];
            jogoConcluido = false;
            guessesBox.innerHTML = "";
            searchInput.value = "";
            searchInput.disabled = false;
            hintPanel.classList.remove('show');
            hintPanel.innerHTML = "";
            document.getElementById('modal-victory').style.display = "none";
            document.getElementById('overlay').style.display = "none";
            console.log("Dica de Dev: O alvo hoje é", personagemDoDia.nome);
        }

        // Alternar painel de ajuda
        document.getElementById('btn-help').addEventListener('click', () => {
            helpPanel.classList.toggle('show');
        });

       // Evento do Botão de Dica (Atualizado com bloqueio de 5 tentativas)
document.getElementById('btn-hint').addEventListener('click', () => {
    if (jogoConcluido || !personagemDoDia) return;

    // --- CONDIÇÃO: Verifica se o jogador tem menos de 5 tentativas ---
    if (palpitesEnviados.length < 5) {
        hintPanel.innerHTML = `⚠️ Você precisa de pelo menos 5 tentativas para pedir uma dica! (Tentativas atuais: <strong>${palpitesEnviados.length}/5</strong>)`;
        hintPanel.classList.add('show');
        return; // Para a execução aqui e não mostra a dica real
    }

    // Se o jogador tiver 5 ou mais tentativas, mostra a primeira dica normalmente
    const inicial = personagemDoDia.nome.charAt(0);
    hintPanel.innerHTML = `💡 Primeira Dica: O personagem inicia com a letra "<strong>${inicial}</strong>" e estreou no ano de <strong>${personagemDoDia.ano_lancamento}</strong>!`;
    hintPanel.classList.add('show');
});

        // --- 4. Sistema de Autocompletar ---
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase().trim();
            dropdown.innerHTML = "";
            
            if (!query || jogoConcluido) {
                dropdown.style.display = "none";
                return;
            }

            const filtrados = listaPersonagens.filter(p => 
                p.nome.toLowerCase().includes(query) && !palpitesEnviados.includes(p.nome)
            );

            if (filtrados.length === 0) {
                dropdown.style.display = "none";
                return;
            }

            filtrados.forEach(p => {
                const item = document.createElement('div');
                item.classList.add('autocomplete-item');
                item.innerHTML = `
                    <img class="autocomplete-thumb" src="${p.imageUrl}" alt="${p.nome}">
                    <span>${p.nome}</span>
                `;
                item.addEventListener('click', () => {
                    processarPalpite(p);
                    dropdown.style.display = "none";
                    searchInput.value = "";
                });
                dropdown.appendChild(item);
            });

            dropdown.style.display = "block";
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                dropdown.style.display = "none";
            }
        });

        // --- 5. Lógica de Comparação e Feedback ---
        function processarPalpite(palpite) {
    if (jogoConcluido) return;

    palpitesEnviados.push(palpite.nome);

    const row = document.createElement('div');
    row.classList.add('grid-row');

    const atributos = ['imageUrl', 'nome', 'anime', 'genero', 'cabelo', 'demografia', 'ano_lancamento', 'papel'];

    atributos.forEach((attr) => {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');

        const ehIgual = palpite[attr] === personagemDoDia[attr];

        if (attr === 'imageUrl') {
            cell.classList.add('img-cell');
            cell.innerHTML = `<img src="${palpite[attr]}" alt="Avatar">`;
        } else if (attr === 'ano_lancamento') {
            let seta = "";
            if (palpite[attr] < personagemDoDia[attr]) {
                seta = " 🔼";
            } else if (palpite[attr] > personagemDoDia[attr]) {
                seta = " 🔽"; 
            }
            cell.innerText = palpite[attr] + seta;
            cell.classList.add(ehIgual ? 'correct' : 'incorrect');
        } else {
            cell.innerText = palpite[attr];
            cell.classList.add(ehIgual ? 'correct' : 'incorrect');
        }

        row.appendChild(cell);
    });

    guessesBox.insertBefore(row, guessesBox.firstChild);

    // --- NOVA LÓGICA: Verifica se atingiu 10 tentativas e exibe a segunda dica ---
    if (palpitesEnviados.length === 10 && palpite.nome !== personagemDoDia.nome) {
        hintPanel.innerHTML = `💡Dica : O personagem pertence ao anime <strong>"${personagemDoDia.anime}"</strong>!`;
        hintPanel.classList.add('show');
    }

    if (palpite.nome === personagemDoDia.nome) {
        encerrarJogo(true);
    }
}
       

        function encerrarJogo(vitoria) {
            jogoConcluido = true;
            searchInput.disabled = true;

            if (vitoria) {
                setTimeout(() => {
                    document.getElementById('victory-img-box').innerHTML = `<img src="${personagemDoDia.imageUrl}" alt="Vencedor">`;
                    document.getElementById('victory-name').innerText = personagemDoDia.nome;
                    document.getElementById('victory-tries').innerText = palpitesEnviados.length;
                    
                    document.getElementById('overlay').style.display = "block";
                    document.getElementById('modal-victory').style.display = "block";
                }, 800);
            }
        }

        document.getElementById('btn-restart').addEventListener('click', iniciarJogo);

        // Inicializa o game
        iniciarJogo();