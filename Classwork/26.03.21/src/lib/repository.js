class Repository {
    #posts;
    _validate(post) {
        const REQUIRED_FIELDS = ['id', 'title', 'body'];
        for (let i = 0; i < REQUIRED_FIELDS.length; i++) {
            if (!post[REQUIRED_FIELDS[i]]) {
                return false;
            }
        }
        return true;
    }
    constructor() {
        this.#posts = [];
    }
    addPost(post) {
        if (!this._validate(post)) {
            throw new Error('Required fields missing');
        }
        this.#posts.push(post);
    }
    getPosts() {
        return this.#posts;
    }
    getPostById(id) {
        return this.#posts.find(p => p.id === id);
    }
    removePostById(id) {
        this.#posts = this.#posts.filter(p => p.id !== id);
        return this.#posts.length;
    }
    updatedPostById(id, changes) {
        let updatedItem = null;
        this.#posts.map(p => {
            if (p.id === id) {
                p.title = changes.title;
                p.body = changes.body;
                updatedItem = p;
                return p;
            } else {
                return p;
            }
        });
        return updatedItem;
    }
};

exports.Repository = Repository;