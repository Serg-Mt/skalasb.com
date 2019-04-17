---
---


layout: {{ layout | jsonify  | newline_to_br | escape }}<br>
jekyll: {{ jekyll | jsonify  | newline_to_br | escape }}<br>


static_files: {{ site.static_files | jsonify | newline_to_br | escape }}<br> 

    

