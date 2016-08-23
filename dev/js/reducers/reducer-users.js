/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Barry",
            last: "Allen",
            age: 27,
            description: "Barry Allen has entered the building.",
            thumbnail: "http://www.flickeringmyth.com/wp-content/uploads/2014/11/Flash.jpg"
        },
        {
            id: 2,
            first: "Bruce",
            last: "Wayne",
            age: 30,
            description: "Batman has entered the building.",
            thumbnail: "https://secure.static.tumblr.com/d9a9e19d62609cdcc1e31d29cb06a2a4/fllcrwu/T6kndecwz/tumblr_static_tumblr_static_3kspg1rqlu680gk8g4ksow4cw_640.jpg"
        }
        
    ]
}
