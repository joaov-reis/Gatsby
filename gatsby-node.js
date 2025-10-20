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
}