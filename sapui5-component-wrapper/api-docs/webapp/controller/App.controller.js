sap.ui.define(["sap/ui/core/mvc/Controller"], function (BaseController) {
  "use strict";

  return BaseController.extend("apidocs.controller.App", {
    onInit: function () {
      this._swaggerLoaded = false;
    },
    onAfterRendering() {
      if (this._swaggerLoaded) return;

      // load the swagger UI into the predefined element
      this._swaggerUi = SwaggerUIBundle({
        url: sap.ui.require.toUrl("apidocs/model/specs.json"),
        dom_id: `#${this.byId("swagger-ui").getId()}`,
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis
          // SwaggerUIStandalonePreset
        ]
        // plugins: [
        //   SwaggerUIBundle.plugins.DownloadUrl
        // ],
        // layout: "StandaloneLayout"
      });

      this._swaggerLoaded = true;
    }
  });
});
