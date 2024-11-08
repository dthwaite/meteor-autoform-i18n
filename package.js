Package.describe({
  name: "gwendall:autoform-i18n",
  summary: "Internationalization for Autoform",
  version: "0.1.9_2",
  git: "https://github.com/gwendall/meteor-autoform-i18n.git"
});

Package.onUse(function(api, where) {
  const packages = [
    'ecmascript',
    "aldeed:simple-schema@1.3.2 || 2.0.0",
    "tap:i18n@1.4.1 || 2.0.1",
    "templating@1.1.1",
    "underscore@1.0.3"
  ];
  api.versionsFrom(['2.3', '3.0']);
  api.use(packages);
  api.addFiles(["package-tap.i18n"]);
  api.mainModule("shared/lib.js");
});
