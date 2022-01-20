

let NumberOfFilms = +prompt("Axirinci ay erzinde nece film izleyibsiniz?");




let PersonalMovieDB = {
    count: NumberOfFilms,
    movies: {
        [filmName]:[rating]
    },
    private: false,

    showMyDb: function () {
        if (showVisibilit.call(this.private)) {
            console.log(this.movies)
        }
        else {
            console.log("Bu hesab şəxsidir")
        }

    }
}

for (let i = 0; i < PersonalMovieDB.count; i++) {
    let filmName=prompt("Zəhmət olmasa filmin adını daxil edin");
    let rating=prompt(`(0-10) araliginda, ${filmName} necə qiymetlendirerdiniz?`);
    // PersonalMovieDB.movies[rating]
}

function showVisibilit() {
    if (PersonalMovieDB.private == false) {
        return PersonalMovieDB.private = true;
    } else {
        return PersonalMovieDB.private = false;
    }
}



showVisibilit.call(PersonalMovieDB.showMyDb())