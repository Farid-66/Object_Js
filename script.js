
let NumberOfFilms =questionAsker("Axirinci ay erzinde nece film izleyibsiniz?");

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

    let film = questionAsker("Zəhmət olmasa filmin adini daxil edin")
    let rating = questionAsker(`(0-10) araliginda, ${film} necə qiymetlendirerdiniz?`)

    moviesKeys.push(film)
    moviesValues.push(rating)

}

function questionAsker(params) {
    let answer = prompt(params);
    if(answer===null || answer==="" || Number(answer)>25){
        return questionAsker(params);
    }
    return answer;
}

function showVisibilit() {
    if (PersonalMovieDB.private == false) {
        return PersonalMovieDB.private = true;
    } else {
        return PersonalMovieDB.private = false;
    }
}

showVisibilit.call(PersonalMovieDB.showMyDb())