fetch("https://siruthozhil.in/feeds/posts/default?alt=json")
.then(res => res.json())
.then(data => {

let posts = data.feed.entry;
let html = "";

posts.forEach(post => {

let title = post.title.$t;
let link = post.link.find(l => l.rel === "alternate").href;

html += `<div class="post"><a href="${link}" target="_blank">${title}</a></div>`;

});

document.getElementById("posts").innerHTML = html;

});
