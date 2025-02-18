const games = [
  {
    id: 1,
    name: "Cyberpunk 2077",
    price: 59.99,
    description: "Cyberpunk 2077 is a sprawling open-world action-adventure game set in the dystopian future of Night City. Players take on the role of V, a mercenary with cybernetic enhancements, navigating a high-tech, low-life world filled with political intrigue, dangerous factions, and life-altering choices. With its stunning visuals, customizable playstyle, and vast, interconnected world, Cyberpunk offers both narrative depth and immersive gameplay. The game allows for diverse combat strategies, hacking, and exploration.",
    developer: "CD Projekt Red",
    releaseDate: "December 2020",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
    category: "Action RPG",
    reviews: [
      { user: "John Doe", text: "Amazing world-building, 5/5!" },
      { user: "Jane Smith", text: "Too many bugs at launch, 3/5." }
    ]
  },
  {
    id: 2,
    name: "The Witcher 3: Wild Hunt",
    price: 49.99,
    description: "The Witcher 3 is a narrative-driven, open-world RPG set in a visually stunning fantasy universe full of rich history, political intrigue, and dark mysteries. Players follow Geralt of Rivia, a professional monster hunter, as he embarks on a quest to find his adopted daughter. The game features a vast world filled with meaningful side quests, deep character interactions, and a unique combat system involving magic, swordplay, and alchemy.",
    developer: "CD Projekt Red",
    releaseDate: "May 2015",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
    category: "RPG",
    reviews: [
      { user: "Mark Spencer", text: "A masterpiece, 5/5!" },
      { user: "Lucy Green", text: "Engaging from start to finish. 4/5." }
    ]
  },
  {
    id: 3,
    name: "Elden Ring",
    price: 59.99,
    description: "Elden Ring is an expansive open-world RPG developed by FromSoftware, known for its intricate lore, challenging gameplay, and stunning visual design. Players explore the mysterious world of the Lands Between, uncovering secrets while battling fearsome foes. The game’s deep customization options allow players to create their own combat style through a wide range of weapons, spells, and abilities. Elden Ring stands out for its massive, interconnected world and its unique blend of exploration, combat, and storytelling.",
    developer: "FromSoftware",
    releaseDate: "February 2022",
    imgSrc: "https://preview.redd.it/ar7ov0orncp81.jpg?width=1920&format=pjpg&auto=webp&s=6be83bc25eed9148637154ef695dc9cda17fd77a",
    category: "Action RPG",
    reviews: [
      { user: "Mira_Ramen", text: "0/10 Why tf did you nerf Radahn, majide Like, seriously come on! He was one of the best bosses in the game and so shit. Now, after the nerf, it just doesn’t feel the same. Radahn used to be a so stupid and now it feels like they took away the whole experience that made it so memorable. Bring back the real Radahn please" },
      { user: "J|K", text: "I played it with my friends, and man, we spent more time trying to summon each other than actually playing the game. So we gave up on the official co-op and started using mods instead, and honestly, it was a way better. good thing is, when there’s an invasion, we just gang up on the invader and destroy him lol. Deserved." },
      { user: "PillowFighter6900", text: "I jumped into Elden Ring thinking I’d have some fun invading, but then I ran into this pathetic duo. They ganked me like a couple of cowards. Seriously, what kind of loser needs two people to take out one player? If you’re gonna play like that, just quit the game already. Get some skill instead of relying on cheap tactics." },
    ]
  },
  {
    id: 4,
    name: "Red Dead Redemption 2",
    price: 39.99,
    description: "Red Dead Redemption 2 is a Western-themed action-adventure game that immerses players in a vast open world set during the late 1800s. As outlaw Arthur Morgan, players navigate the fading Wild West while balancing loyalty to their gang and their own moral compass. The game features an expansive, dynamic world with realistic wildlife, weather systems, and a captivating narrative filled with complex characters and choices that affect the storyline.",
    developer: "Rockstar Games",
    releaseDate: "October 2018",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
    category: "Action-Adventure",
    reviews: [
      { user: "Marty McFly", text: "Best game of the decade, 5/5!" },
      { user: "Doc Brown", text: "Feels like a real western movie, 4.5/5." }
    ]
  },
  {
    id: 5,
    name: "God of War",
    price: 29.99,
    description: "God of War is an action-adventure game that follows Kratos, the former Greek God of War, and his young son Atreus as they journey through the Norse realms. With stunning visuals, dynamic combat, and a deeply emotional narrative, the game explores themes of fatherhood, legacy, and redemption. The over-the-shoulder combat system and immersive story are complemented by epic boss battles, puzzle-solving, and exploration.",
    developer: "Santa Monica Studio",
    releaseDate: "April 2018",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    category: "Action-Adventure",
    reviews: [
      { user: "Thor Odinson", text: "Epic battles and emotional story, 5/5!" },
      { user: "Loki Laufeyson", text: "A truly immersive experience, 4/5." }
    ]
  },
  {
    id: 6,
    name: "Gachi Heroes",
    price: 19.99,
    description: "Gachi Heroes is a quirky and humorous parody action game inspired by internet meme culture. Players take on the role of muscular heroes with exaggerated physiques as they battle their way through various absurd levels filled with bizarre enemies and hilarious challenges. With a mix of tongue-in-cheek humor, catchy music, and chaotic gameplay, Gachi Heroes invites players to embrace the absurdity and unleash their inner hero. Featuring vibrant visuals and an eclectic soundtrack, this game is perfect for those looking to laugh and have fun while gaming.",
    developer: "Independent Developer",
    releaseDate: "March 2020",
    imgSrc: "https://cdn2.steamgriddb.com/grid/6771fbc3d669ab5153f819660b48bad4.png", 
    category: "Action RPG",
    reviews: [
      { user: "MemeLord99", text: "Absolutely hilarious! Perfect for a good laugh, 5/5!" },
      { user: "ComedyFan", text: "Crazy gameplay and funny memes, a must-try, 4.5/5." }
    ]
  },
  {
    id: 7,
    name: "House of Detention",
    price: 24.99,
    description: "House of Detention is a gripping horror adventure game that plunges players into a nightmarish world of fear and mystery. Set in a haunted detention center, players must navigate through eerie environments, solve complex puzzles, and evade sinister entities lurking in the shadows. With a chilling atmosphere, immersive storytelling, and a soundtrack that enhances the tension, players will be on the edge of their seats as they uncover the dark secrets of the house. Will you be able to escape the horrors that await within?",
    developer: "Ghostly Games",
    releaseDate: "October 2021",
    imgSrc: "https://cdn.k4g.com/files/media/cache/cover_270/cover/03a7735148993c21a53c8cbd451d4703.jpg", 
    category: "Horror",
    reviews: [
      { user: "HorrorFan123", text: "Genuinely terrifying! A true horror experience, 5/5!" },
      { user: "SpookySeeker", text: "Creepy atmosphere and great storytelling, 4.5/5." }
    ]
  },
  {
    id: 8,
    name: "Octopath Traveler",
    price: 59.99,
    description: "Octopath Traveler is a turn-based role-playing game that combines classic JRPG elements with a unique visual style reminiscent of retro games. Players can choose from eight distinct characters, each with their own storylines and abilities, as they journey through the beautifully crafted world of Orsterra. The game's innovative 'BRAVERY' system allows players to strategically boost their actions in combat, encouraging thoughtful decision-making. With its engaging narrative, stunning pixel art, and enchanting soundtrack, Octopath Traveler offers a nostalgic yet fresh RPG experience.",
    developer: "Square Enix",
    releaseDate: "July 2018",
    imgSrc: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2018/04/octopath_traveler_box_art_japan.jpg?resize=695%2C620&ssl=1",
    category: "RPG",
    reviews: [
        { user: "Mira_Ramen", text: "I stole your assets for my HTML Project." },
        { user: "PixelArtLover", text: "Stunning visuals and deep storytelling, a must-play for RPG fans, 4.5/5." }
    ]
  },
  {
    id: 9,
    name: "Goat Simulator",
    price: 999.99,
    description: "Goat Simulator is a hilarious open-world simulator that allows players to experience life as a goat in a quirky and chaotic environment. Players can roam freely, wreaking havoc in the town, headbutting unsuspecting pedestrians, and performing absurd stunts. With its deliberately buggy gameplay and ridiculous physics, Goat Simulator is designed to be a comedic experience that encourages players to explore the absurdity of goat life. Get ready to embrace the silliness and create your own goat adventures!",
    developer: "Coffee Stain Studios",
    releaseDate: "April 2014",
    imgSrc: "https://m.media-amazon.com/images/I/61uFryCx-uL._AC_UF894,1000_QL80_.jpg",
    category: "Simulation",
    reviews: [
      { user: "GoatLover", text: "So much fun and laughter! Best simulator ever, 5/5!" },
      { user: "MemeMachine", text: "I can't stop laughing at the craziness, 4.5/5." }
    ]
  },
  {
    id: 10,
    name: "Persona 5",
    price: 59.99,
    description: "Persona 5 is a critically acclaimed Japanese role-playing game that follows a group of high school students who form the Phantom Thieves of Hearts. Set in modern-day Tokyo, players navigate the dual life of a student by day and a thief by night, exploring dungeons known as Palaces and battling shadowy creatures. The game features a unique blend of turn-based combat, social simulation, and life management elements, allowing players to build relationships, manage time, and enhance their skills. With its stylish art direction, engaging story, and memorable characters, Persona 5 offers an unforgettable RPG experience.",
    developer: "Atlus",
    releaseDate: "September 2016",
    imgSrc: "https://i.redd.it/wref37r3j8o71.jpg",
    category: "RPG",
    reviews: [
      { user: "AnimeLover", text: "A masterpiece of storytelling and character development, 5/5!" },
      { user: "GamerGuy123", text: "Stylish and engaging, couldn't put it down, 4.8/5." }
    ]
  },
  {
    id: 11,
    name: "Ao Oni",
    price: 14.99,
    description: "Ao Oni is a survival horror game that immerses players in a terrifying world where they must escape a mansion haunted by a monstrous blue creature known as the Oni. Solve puzzles, uncover the mystery, and avoid the Oni as you navigate dark corridors and eerie environments. Will you survive the night?",
    developer: "Noprops",
    releaseDate: "April 2012",
    imgSrc: "https://m.media-amazon.com/images/M/MV5BMmUwMDQ5YTYtMzEyMy00NzNmLWI2ZGItNGZhYzY0MzhmMDY4XkEyXkFqcGc@._V1_.jpg",
    category: "Horror",
    reviews: [
      { user: "ScaredyCat", text: "Absolutely terrifying! I couldn't sleep after playing! 5/5!" },
      { user: "HorrorFan123", text: "Great atmosphere, but some puzzles were confusing. 4/5." }
    ]
  },
  {
    id: 12,
    name: "Amnesia: The Dark Descent",
    price: 19.99,
    description: "Amnesia: The Dark Descent is a first-person survival horror game that immerses players in a chilling atmosphere filled with psychological terror. Set in a dark and foreboding castle, players take on the role of Daniel, who suffers from amnesia and must explore the environment to uncover his forgotten memories while avoiding terrifying creatures. The game emphasizes stealth and puzzle-solving, with a focus on creating a sense of dread and vulnerability.",
    developer: "Frictional Games",
    releaseDate: "September 2010",
    imgSrc: "https://cdn1.epicgames.com/917551a8060244469eb4e6ab8a99cf24/offer/EGS_AmnesiaTheDarkDescent_FrictionalGames_S2-860x1148-473ca730cc2baaaeb9595f11bfc09fda.jpg",
    category: "Horror",
    reviews: [
      { user: "HorrorFan123", text: "A truly terrifying experience, 5/5!" },
      { user: "ScaredyCat", text: "Had to play with the lights on, 4.5/5." }
    ]
  }
];
