import { Repository, Post } from "./repo";
describe("Repository", () => {
  it("should allow to add new post", () => {
    expect.assertions(1);
    const repo = new Repository();
    const newPost: Post = {
      id: "kkl",
      title: "title",
      body: "body",
    };
    repo.addPost(newPost);
    expect(repo.getPosts()).toHaveLength(1);
  });
});