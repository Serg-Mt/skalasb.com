---
title: "Перестраховщики"
---

Мы тщательно подбираем перестраховочные компании для размещений рисков от наших клиентов. Обязательно учитываются законодательные требования страны, Страховщик из которой к нам обратился. Уделяется особое внимание рейтингу и надежности компаний-перестраховщиков. 

Имея долгосрочные отношения со всеми российскими и международными перестраховщиками, мы можем качественно и оперативно организовывать перестраховочные программы любой сложности.


{{ site.collections | jsonify | escape }}
<hr>
{{ site.collections | where: "label", "reinslogo" | jsonify }}
<hr>
{{ site.collections.reinslogo | jsonify | escape }}
<hr>
{{ site.reinslogo.files  | jsonify | escape }}
<hr>

{% assign logos = site.collections | where: "label", "reinslogo" %}
{% for logo in logos.files %}
<img src="{{ logo.path }}">
logo.url
<br>
{% endfor %}
