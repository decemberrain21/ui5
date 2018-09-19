sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("odatabasic.controller.Buyer_Detail", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf odatabasic.view.Buyer_Detail
		 */
		onInit: function() {
			// Get the Router Info
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// Validate/Match the Router Details sent from source using oRouter.navTo("Router_Detail", {SelectedItem: selectPO});
			oRouter.getRoute("Target_BuyerDetail").attachMatched(this._onRouteFound, this);
		},
		// Custom Method to bind the elements using the Event Arguments
		_onRouteFound: function(oEvt) {
				var oArgument = oEvt.getParameter("arguments");
				var oView = this.getView();
				oView.bindElement({
					path: "/Buyer('" + oArgument.SelectedItem + "')"
				});
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf odatabasic.view.Buyer_Detail
			 */
			//	onBeforeRendering: function() {
			//
			//	},
			/**
			 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
			 * This hook is the same one that SAPUI5 controls get after being rendered.
			 * @memberOf odatabasic.view.Buyer_Detail
			 */
			//	onAfterRendering: function() {
			//
			//	},
			/**
			 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
			 * @memberOf odatabasic.view.Buyer_Detail
			 */
			//	onExit: function() {
			//
			//	}
			,
		/**
		 *@memberOf odatabasic.controller.Buyer_Detail
		 */
		GoBuyerList: function() {
			//This code was generated by the layout editor.
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Target_BuyerList");
		}
	});
});