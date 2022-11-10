const ul = $("ul");
ul.append("<li>Banana</li>");
ul.prepend("<li>Pineapple</li>");
console.log(pretty($.html()));
