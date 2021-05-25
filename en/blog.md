---
title: "Events"
place: blog
header: []
---

{% assign enposts = site.posts_en | sort: "date" | reverse  %}
{% for post in enposts %}
  <p>{{ post.content | markdownify }}</p>
  <hr>
{% endfor %}