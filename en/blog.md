---
title: "Events"
place: blog
header: []
---
{% assign enposts = site.posts_en | sort: "date" | reverse  %}
<div class="sidebar sticky">
  <nav class="nav__list">
    <input id="ac-toc" name="accordion-toc" type="checkbox" />
    <label for="ac-toc">Toggle menu</label>
      <ul class="nav__items">
        {% for post in enposts %}
          <li> 
            <a href="@{{ post.id }}">
              <span class="nav__sub-title">{{ post.title }}</span>
            </a>
          </li>
        {% endfor %}
      </ul>
  </nav>
</div>


{% for post in enposts %}
  <h2 id={{ post.id }}>{{ post.title }}</h2>
  <p>{{ post.content | markdownify }}</p>
  <hr>
{% endfor %}