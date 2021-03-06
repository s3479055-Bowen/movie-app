export const moviesData = [
    {
        id: 1,
        title: "Iron Man",
        director: "Jon Favreau",
        stars: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
        releaseDate: "30-04-2008",
        genres: "Action, Adventure, Sci-Fi",
        description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        posterUrl: "/image.png",
        trailerUrl: "youtube.com/qdqnwknf"
    },
    {
        id: 2,
        title: "Iron Man 2",
        director: "Jon Favreau",
        stars: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
        releaseDate: "30-04-2008",
        genres: "Action, Adventure, Sci-Fi",
        description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        posterUrl: "/image.png",
        trailerUrl: "youtube.com/qdqnwknf"
    },
    {
        id: 3,
        title: "Iron Man 3",
        director: "Jon Favreau",
        stars: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
        releaseDate: "30-04-2008",
        genres: "Action, Adventure, Sci-Fi",
        description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        posterUrl: "/image.png",
        trailerUrl: "youtube.com/qdqnwknf"
    },
    {
        id: 4,
        title: "Iron Man 4",
        director: "Jon Favreau",
        stars: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
        releaseDate: "30-04-2008",
        genres: "Action, Adventure, Sci-Fi",
        description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        posterUrl: "/image.png",
        trailerUrl: "youtube.com/qdqnwknf"
    },
    {
        id: 5,
        title: "Iron Man 5",
        director: "Jon Favreau",
        stars: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
        releaseDate: "30-04-2008",
        genres: "Action, Adventure, Sci-Fi",
        description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        posterUrl: "/image.png",
        trailerUrl: "youtube.com/qdqnwknf"
    }
];

export function getMovie(movieId) {

    console.log(movieId);
    let movie = moviesData.find(movie => movie.id = movieId);
    console.log(movie);

    return movie;
}

export const loginData = {
    username: "john.tester",
    password: "12345"
};

export const loginResponse = {
    user: {
        id: 1,
        username: "john.tester",
        email: "john@gmail.com",
        firstname: "John",
        lastname: "Swiwac",
        gender: "Male",
        age: 23,
        dob: "12/03/1995"
    },
    token: "super_secure_token"
};