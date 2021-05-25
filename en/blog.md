---
title: "Events"
place: blog
header: []
---
{% assign enposts = site.posts_en | sort: "date" | reverse  %}
{% for post in enposts %}
  <h2 id="{{ post.id }}">{{ post.title }}</h2>
  <p>{{ post.content | markdownify }}</p>
  <hr>
{% endfor %}