---
---


layout: {{ layout | jsonify  | newline_to_br | escape }}<br>
layout: {{ layout | inspect  | newline_to_br | escape }}<br>
jekyll: {{ jekyll | jsonify  | newline_to_br | escape }}<br>
jekyll: {{ jekyll | inspect  | newline_to_br | escape }}<br>

site.static_files: {{ site.static_files| jsonify  | newline_to_br | escape }}<br>
site.static_files: {{ site.static_files | inspect  | newline_to_br | escape }}<br>

    

