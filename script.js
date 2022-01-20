

let NumberOfFilms = +prompt("Axirinci ay erzinde nece film izleyibsiniz?");

let PersonalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    private: false,

    showMyDb: function () {
        if (showVisibilit.call(this.private)) {
            for (var i = 0; i < moviesKeys.length; i++) {
                this.movies[moviesKeys[i]] = moviesValues[i];
            }
            Object.entries(this.movies).forEach(([key, value]) => {
                console.log(`Movie: ${key} , Rating: ${value}`)
            });
        }
        else {
            console.log("Bu hesab şəxsidir")
        }

    }
}

let moviesKeys = [];
let moviesValues = [];

for (let i = 0; i < PersonalMovieDB.count; i++) {

    let film = prompt("Zəhmət olmasa filmin adini daxil edin");
    let rating = prompt(`(0-10) araliginda, ${film} necə qiymetlendirerdiniz?`);

    moviesKeys.push(film)
    moviesValues.push(rating)
}


function showVisibilit() {
    if (PersonalMovieDB.private == false) {
        return PersonalMovieDB.private = true;
    } else {
        return PersonalMovieDB.private = false;
    }
}

showVisibilit.call(PersonalMovieDB.showMyDb())