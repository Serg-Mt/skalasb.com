---
title: админка
permalink: "/_/admin"
sitemap: false
---
{% capture domain %}{{ site.url | remove: "http://" | remove: "httpы://" }}{% endcapture %}

* [GitHub Репозиторий]({{ site.github.repository_url }})
* [анализ сайта pr-cy.ru](https://a.pr-cy.ru/{{ domain }}/)
* [Яндекс Вебмастер](https://webmaster.yandex.ru/site/https:{{ domain }};443/dashboard/)
* [Яндекс Метрика](https://metrika.yandex.ru/dashboard?id=)
* [Google Search Console](https://search.google.com/search-console?hl=ru&resource_id=sc-domain:{{ domain }})
* [Microsoft Bing - Webmaster Tools](https://www.bing.com/webmasters/?siteUrl=https://{{ domain }}/) 




