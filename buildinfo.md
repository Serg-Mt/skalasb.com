---
---


layout: {{ layout | jsonify  | newline_to_br | escape }}<br>
layout: {{ layout | inspect  | newline_to_br | escape }}<br>
jekyll: {{ jekyll | jsonify  | newline_to_br | escape }}<br>
jekyll: {{ jekyll | inspect  | newline_to_br | escape }}<br>

site.pages: {{ site.pages | jsonify  | newline_to_br | escape }}<br>
site.pages: {{ site.pages | inspect  | newline_to_br | escape }}<br>

    

