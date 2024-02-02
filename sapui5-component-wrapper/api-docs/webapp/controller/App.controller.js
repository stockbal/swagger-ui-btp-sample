sap.ui.define(
  ["sap/ui/core/mvc/Controller", "swagger-ui-dist"],
  function (BaseController, SwaggerUI) {
    "use strict";

    const { SwaggerUIBundle } = SwaggerUI;

    return BaseController.extend("apidocs.controller.App", {
      onInit: function () {
        this._swaggerLoaded = false;
      },
      onAfterRendering() {
        if (this._swaggerLoaded) return;

        // REQUIRED: otherwise if string is used directly, ui5-tooling-modules-task will replace it with "apidocs/thirdparty/apidocs/model/specs.json"
        const path = "apidocs/model/specs.json";

        // load the swagger UI into the predefined element
        this._swaggerUi = SwaggerUIBundle({
          url: sap.ui.require.toUrl(path),
          dom_id: `#${this.byId("swagger-ui").getId()}`,
          deepLinking: true,
          presets: [SwaggerUIBundle.presets.apis],
        });

        this._swaggerLoaded = true;
      },
    });
  }
);
