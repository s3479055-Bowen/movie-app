import Movie from "../model/Movie"
import User from "../model/User";

const moviesData = [
    {
        id: 1,
        name: "Movie 1",
        description: "A short description of Movie 1.",
        posterUrl: "/image.png"
    },
    {
        id: 2,
        name: "Movie 2",
        description: "A short description of Movie 2.",
        posterUrl: "/image.png"
    },
    {
        id: 3,
        name: "Movie 3",
        description: "A short description of Movie 3.",
        posterUrl: "/image.png"
    },
    {
        id: 4,
        name: "Movie 4",
        description: "A short description of Movie 4.",
        posterUrl: "/image.png"
    },
    {
        id: 5,
        name: "Movie 5",
        description: "A short description of Movie 5.",
        posterUrl: "/image.png"
    },
    {
        id: 6,
        name: "Movie 6",
        description: "A short description of Movie 6.",
        posterUrl: "/image.png"
    },
    {
        id: 7,
        name: "Movie 7",
        description: "A short description of Movie 7.",
        posterUrl: "/image.png"
    }
];

const userData = {
    email: "john@movie.com",
    FirstName: "John",
    LastName: "Swiwac",
    gender: "male",
    Age: 23,
    dob: "12/03/1995"
};

export function login(username, password) {
    return new User(userData.email, userData.FirstName, userData.LastName, userData.gender, userData.Age, userData.dob);
}

export function getTrendingMovies() {
    return moviesData.map(movieData => new Movie(movieData.id, movieData.name, movieData.description, movieData.posterUrl));
}