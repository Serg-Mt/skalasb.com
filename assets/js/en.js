var language = navigator.language || navigator.browserLanguage;
if (!language.match(/ru/) && !window.location.pathname.match(/^\/en/) )
{ window.location.pathname='/en'+window.location.pathname }