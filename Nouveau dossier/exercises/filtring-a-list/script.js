const list = document.querySelector('#list')
const input = document.querySelector('#filter')

const items = [...list.getElementsByTagName('li')]

const itemsText = items.map(function(element,index,array){
    return element.innerText
});

input.addEventListener('input',function(){
    list.innerHTML = '';

    const filteredItems = itemsText.filter(
        function(element,index,array){
            return element.toLowerCase().includes(input.value.toLowerCase());
        }
    )

    filteredItems.forEach(function(element,index, array){
        const li = document.createElement('li')
        li.innerText = element;
        list.appendChild(li)
    })
})


const movies = [
    {
      "id": 49063,
      "title": "Doraemon the Movie: Nobita's Little Star Wars 2021",
      "year": 2022,
      "rating": 6.5,
      "genres": [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Family",
        "Fantasy",
        "Sci-Fi"
      ],
      "language": "ja",
      "cover": "https://yts.mx/assets/images/movies/doraemon_the_movie_nobitas_little_star_wars_2021_2022/medium-cover.jpg"
    },
    {
      "id": 48686,
      "title": "The Star Wars Holiday Special",
      "year": 1978,
      "rating": 2.1,
      "genres": ["Adventure", "Family", "Musical", "Sci-Fi"],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/the_star_wars_holiday_special_1978/medium-cover.jpg"
    },
    {
      "id": 44037,
      "title": "Lego Star Wars Summer Vacation",
      "year": 2022,
      "rating": 5.6,
      "genres": [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Family",
        "Fantasy",
        "Sci-Fi"
      ],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/lego_star_wars_summer_vacation_2022/medium-cover.jpg"
    },
    {
      "id": 36223,
      "title": "Lego Star Wars Terrifying Tales",
      "year": 2021,
      "rating": 6.1,
      "genres": [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Family",
        "Fantasy",
        "Horror",
        "Sci-Fi"
      ],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/lego_star_wars_terrifying_tales_2021/medium-cover.jpg"
    },
    {
      "id": 33034,
      "title": "Star Wars Biomes",
      "year": 2021,
      "rating": 6.4,
      "genres": ["Action", "Sci-Fi"],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/star_wars_biomes_2021/medium-cover.jpg"
    },
    {
      "id": 27946,
      "title": "Star Wars: The Clone Wars",
      "year": 2008,
      "rating": 5.9,
      "genres": [
        "Action",
        "Adventure",
        "Animation",
        "Family",
        "Fantasy",
        "Sci-Fi"
      ],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/star_wars_the_clone_wars_2008/medium-cover.jpg"
    },
    {
      "id": 23813,
      "title": "The Lego Star Wars Holiday Special",
      "year": 2020,
      "rating": 6.4,
      "genres": [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Family",
        "Mystery",
        "Sci-Fi"
      ],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/the_lego_star_wars_holiday_special_2020/medium-cover.jpg"
    },
    {
      "id": 20017,
      "title": "Star Wars Galaxy's Edge: Adventure Awaits",
      "year": 2019,
      "rating": 5.7,
      "genres": ["Action", "Documentary"],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/star_wars_galaxys_edge_adventure_awaits_2019/medium-cover.jpg"
    },
    {
      "id": 19618,
      "title": "Empire of Dreams: The Story of the 'Star Wars' Trilogy",
      "year": 2004,
      "rating": 8.2,
      "genres": ["Action", "Documentary", "History", "Sci-Fi"],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/empire_of_dreams_the_story_of_the_star_wars_trilogy_2004/medium-cover.jpg"
    },
    {
      "id": 15953,
      "title": "Star Wars: Episode IX - The Rise of Skywalker",
      "year": 2019,
      "rating": 6.4,
      "genres": ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/star_wars_the_rise_of_skywalker_2019/medium-cover.jpg"
    },
    {
      "id": 15147,
      "title": "Battle Star Wars",
      "year": 2020,
      "rating": 1.9,
      "genres": ["Action", "Sci-Fi"],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/battle_star_wars_2020/medium-cover.jpg"
    },
    {
      "id": 10868,
      "title": "Star Wars: The Force and the Fury",
      "year": 2017,
      "rating": 4.5,
      "genres": ["Action"],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/star_wars_the_force_and_the_fury_2017/medium-cover.jpg"
    },
    {
      "id": 8906,
      "title": "Solo: A Star Wars Story",
      "year": 2018,
      "rating": 6.9,
      "genres": ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/solo_a_star_wars_story_2018/medium-cover.jpg"
    },
    {
      "id": 7295,
      "title": "Star Wars: Episode VIII - The Last Jedi",
      "year": 2017,
      "rating": 6.9,
      "genres": ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/star_wars_the_last_jedi_2017/medium-cover.jpg"
    },
    {
      "id": 6381,
      "title": "Rogue One: A Star Wars Story",
      "year": 2016,
      "rating": 7.8,
      "genres": ["Action", "Adventure", "Sci-Fi"],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/rogue_one_2016/medium-cover.jpg"
    },
    {
      "id": 5315,
      "title": "Star Wars: Episode VII - The Force Awakens",
      "year": 2015,
      "rating": 7.8,
      "genres": ["Action", "Adventure", "Fantasy", "Sci-Fi", "Thriller"],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/star_wars_episode_vii_the_force_awakens_2015/medium-cover.jpg"
    },
    {
      "id": 2863,
      "title": "Star Wars: Episode VI - Return of the Jedi",
      "year": 1983,
      "rating": 8.3,
      "genres": ["Action", "Adventure", "Fantasy", "Romance", "Sci-Fi"],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/Star_Wars_Episode_VI_Return_of_the_Jedi_1983/medium-cover.jpg"
    },
    {
      "id": 2862,
      "title": "Star Wars: Episode V - The Empire Strikes Back",
      "year": 1980,
      "rating": 8.7,
      "genres": ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/Star_Wars_Episode_V_The_Empire_Strikes_Back_1980/medium-cover.jpg"
    },
    {
      "id": 2861,
      "title": "Star Wars: Episode III - Revenge of the Sith",
      "year": 2005,
      "rating": 7.6,
      "genres": ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/Star_Wars_Episode_III_Revenge_of_the_Sith_2005/medium-cover.jpg"
    },
    {
      "id": 2860,
      "title": "Star Wars: Episode II - Attack of the Clones",
      "year": 2002,
      "rating": 6.6,
      "genres": ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/Star_Wars_Episode_II_Attack_of_the_Clones_2002/medium-cover.jpg"
    },
    {
      "id": 2859,
      "title": "Star Wars: Episode I - The Phantom Menace",
      "year": 1999,
      "rating": 6.5,
      "genres": ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/Star_Wars_Episode_I_The_Phantom_Menace_1999/medium-cover.jpg"
    },
    {
      "id": 2858,
      "title": "Star Wars: Episode IV - A New Hope",
      "year": 1977,
      "rating": 8.6,
      "genres": ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      "language": "en",
      "cover": "https://yts.mx/assets/images/movies/Star_Wars_Episode_IV_A_New_Hope_1977/medium-cover.jpg"
    }
  ]
  