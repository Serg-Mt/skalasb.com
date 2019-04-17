---
---


layout: {{ layout | jsonify  | newline_to_br | escape }}<br>
layout: {{ layout | inspect  | newline_to_br | escape }}<br>
jekyll: {{ jekyll | jsonify  | newline_to_br | escape }}<br>
jekyll: {{ jekyll | inspect  | newline_to_br | escape }}<br>

static_files: {{ site.static_files | newline_to_br | escape }}<br> 

    

