const { Repository } = require("./repository");
const { mockPost } = require("./test_helper");
const { mockPosts } = require("./test_helper");

describe('Repository', () => {
    let repo;
    beforeEach(() => {
        repo = new Repository();
    })
    it('should init with empty posts', () => {
        expect.assertions(1);
        expect(repo.getPosts()).toStrictEqual([]);
    });
    describe('addPost() method', () => {
        it('should allow to add new post', () => {
            expect.assertions(1);
            const NEW_POST = mockPost(1);
            repo.addPost(NEW_POST);
            expect(repo.getPosts()).toStrictEqual([NEW_POST]);
        });
        it('should validate input', () => {
            expect.assertions(1);
            const WRONG_POST = {
                title: "test",
                body: "wrong",
            };
            expect(() => repo.addPost(WRONG_POST)).toThrow(new Error('Required fields missing'));
        });
    });
    it('should allow to add new post', () => {
        expect.assertions(1);
        const NEW_POST = mockPost(1);
        repo.addPost(NEW_POST);
        expect(repo.getPosts()).toStrictEqual([NEW_POST]);
    });
    it('should allow to get post by id', () => {
        expect.assertions(1);
        const NEW_POST_1 = mockPost(1);
        const NEW_POST_2 = mockPost(2);
        repo.addPost(NEW_POST_1);
        repo.addPost(NEW_POST_2);
        expect(repo.getPostById(NEW_POST_1.id)).toStrictEqual(NEW_POST_1);
    });
    it('should allow to delet post by id', () => {
        expect.assertions(3);
        const p1 = mockPost(1);
        const p2 = mockPost(2);
        const p3 = mockPost(3);
        repo.addPost(p1);
        repo.addPost(p2);
        repo.addPost(p3);

        repo.removePostById(p1.id);

        const posts = repo.getPosts();

        expect(posts.length).toStrictEqual(2);
        posts.forEach((p) => {
            expect(p).not.toStrictEqual(p1);
        });
    });
    it('should allow to update post by id', () => {
        expect.assertions(3);
        const posts = mockPosts();
        posts.forEach((p) => repo.addPost(p));
        const POST_TO_UPDATE = posts[3];
        const POST_TO_AFTER_UPDATE = {
            id: POST_TO_UPDATE.id,
            title: "new random title",
            body: "new random body",
        }

        expect(repo.updatedPostById(POST_TO_UPDATE.id, {
            title: "new random title",
            body: "new random body",
        })
        ).toStrictEqual(POST_TO_AFTER_UPDATE);
        expect(repo.getPosts().length).toEqual(10);
        expect(repo.getPostById(POST_TO_UPDATE.id)).toStrictEqual(POST_TO_AFTER_UPDATE);
    });
});