---
permalink: /_buildinfo
---
build: {{ site.time }}<br/>
{{ jekyll | jsonify }}<br/>

<!--
layout: {{ layout | jsonify  | newline_to_br | escape }}<hr>
jekyll: {{ jekyll | jsonify  | newline_to_br | escape }}<hr>


static_files: {{ site.static_files | jsonify | newline_to_br | escape }}<hr> -->

{% for file in site.static_files %}
<a href="{{ file.path}}">{{ file.path}}</a><br/>
{% endfor %}


    

