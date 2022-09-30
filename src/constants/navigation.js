import {
  AiOutlineStar,
  AiOutlineCompass,
  AiOutlineSmile,
  AiOutlineHeart,
} from "react-icons/ai";
import {
  HiOutlineFilm,
  HiOutlineEmojiSad,
  HiOutlineUserGroup,
  HiOutlineMusicalNote,
} from "react-icons/hi";
import { FiTv, FiGlobe } from "react-icons/fi";
import {
  GiFirePunch,
  GiWinchesterRifle,
  GiMagicBroom,
  GiGreekTemple,
  GiBoneKnife,
  GiMusicalNotes,
  GiPoliceCar,
  GiUfo,
  GiRaiseSkeleton,
  GiCrossedSwords,
} from "react-icons/gi";
import { RiMickeyLine } from "react-icons/ri";
import { BsCameraReels } from "react-icons/bs";

const Category = [
  {
    title: "Popular",
    icon: <HiOutlineFilm />,
    category: "popular",
  },
  {
    title: "Top Rated",
    icon: <AiOutlineStar />,
    category: "top_rated",
  },
  {
    title: "Upcoming",
    icon: <FiTv />,
    category: "upcoming",
  },
];

const Genres = [
  {
    title: "Action",
    icon: <GiFirePunch />,
    category: "action",
    genreId: 28,
  },
  {
    title: "Adventure",
    icon: <AiOutlineCompass />,
    category: "adventure",
    genreId: 12,
  },
  {
    title: "Animation",
    icon: <RiMickeyLine />,
    category: "animation",
    genreId: 16,
  },
  {
    title: "Comedy",
    icon: <AiOutlineSmile />,
    category: "comedy",
    genreId: 35,
  },
  {
    title: "Crime",
    icon: <GiWinchesterRifle />,
    category: "crime",
    genreId: 80,
  },
  {
    title: "Documentary",
    icon: <BsCameraReels />,
    category: "documentary",
    genreId: 99,
  },
  {
    title: "Drama",
    icon: <HiOutlineEmojiSad />,
    category: "drama",
    genreId: 18,
  },
  {
    title: "Family",
    icon: <HiOutlineUserGroup />,
    category: "family",
    genreId: 10751,
  },
  {
    title: "Fantasy",
    icon: <GiMagicBroom />,
    category: "fantasy",
    genreId: 14,
  },
  {
    title: "History",
    icon: <GiGreekTemple />,
    category: "history",
    genreId: 36,
  },
  {
    title: "Horror",
    icon: <GiBoneKnife />,
    category: "horror",
    genreId: 27,
  },
  {
    title: "Music",
    icon: <GiMusicalNotes />,
    category: "music",
    genreId: 10402,
  },
  {
    title: "Mystery",
    icon: <GiPoliceCar />,
    category: "mystery",
    genreId: 9648,
  },
  {
    title: "Romance",
    icon: <AiOutlineHeart />,
    category: "romance",
    genreId: 10749,
  },
  {
    title: "Science Fiction",
    icon: <GiUfo />,
    category: "science fiction",
    genreId: 878,
  },
  {
    title: "TV Movie",
    icon: <FiTv />,
    category: "tvmovie",
    genreId: 10770,
  },
  {
    title: "Thriller",
    icon: <GiRaiseSkeleton />,
    category: "thriller",
    genreId: 53,
  },
  {
    title: "War",
    icon: <GiCrossedSwords />,
    category: "war",
    genreId: 10752,
  },
  {
    title: "Western",
    icon: <FiGlobe />,
    category: "western",
    genreId: 37,
  },
];

export { Category, Genres };
