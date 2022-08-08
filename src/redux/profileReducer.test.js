import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
    posts: [
        {
            id: 'p1',
            likesCount: 12,
            text: "Oh, I was not made for heaven. No, I don't want to go to heaven. Hell is much better. Think of all the interesting people you're going to meet down there!"
        },
        {
            id: 'p2',
            likesCount: 3,
            text: "The reason we're successful, darling? My overall charisma, of course."
        },
        {
            id: 'p3',
            likesCount: 72,
            text: "I am a romantic, but I do put up a barrier around myself, so it is hard for people to get in and to know the real me."
        }
    ]
}


test('length of post should be incremented', () => {
    // 1.test data
    let action = addPost('post')

    // 2.action
    let newState = profileReducer (state, action)

    // 3.expectation
    expect(newState.posts.length).toBe(4)
});

test('text of new post should be correct', () => {
    // 1.test data
    let action = addPost('post')

    // 2.action
    let newState = profileReducer (state, action)

    // 3.expectation
    expect(newState.posts[0].text).toBe('post')

});

test('after deleting length of post should be decremented', () => {
    // 1.test data
    let action = deletePost('p1')

    // 2.action
    let newState = profileReducer (state, action)

    // 3.expectation
     expect(newState.posts.length).toBe(2)
});
