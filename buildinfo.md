---
---
{{page.url}}
<hr>

layout: {{ layout | jsonify  | newline_to_br | escape }}<hr>
jekyll: {{ jekyll | jsonify  | newline_to_br | escape }}<hr>


static_files: {{ site.static_files | jsonify | newline_to_br | escape }}<hr>

    

