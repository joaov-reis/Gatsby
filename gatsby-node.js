import fetch from "node-fetch";

export const sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
    const {createNode} = actions;

    const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await usersResponse.json();
    users.forEach(user => {
        createNode({
            ...user, //notação Spread
            id: createNodeId(`User-${user.id}`),
            parent: null,
            children: [],
            internal: {
                type: "User",
                contentDigest: createContentDigest(user),
            }
        });
    });

    const commentsResponse = await fetch("https://jsonplaceholder.typicode.com/comments")
    const comments = await commentsResponse.json();

    comments.forEach(comment => {
        createNode({
            ...comment, //notação Spread
            id: createNodeId(`Comment-${comment.id}`),
            parent: null,
            children: [],
            internal: {
                type: "comment",
                contentDigest: createContentDigest(comment),
            }
        });
    });
}