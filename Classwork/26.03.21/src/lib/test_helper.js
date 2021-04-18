mockPost = (id = 1, title = "New post", body = "New body post") => ({
    id,
    title,
    body,
});

const mockPosts = (qty = 10) => {
    const postArray = [];
    for (let i = 0; i < qty; i++) {
        postArray.push(mockPost(i + 1));
    }
    return postArray;
}

exports.mockPost = mockPost;
exports.mockPosts = mockPosts;