class Movie {

    constructor(id, name, description, posterUrl) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._posterUrl = posterUrl;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get posterUrl() {
        return this._posterUrl;
    }
}

export default Movie