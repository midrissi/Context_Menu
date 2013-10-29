
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		WAF.widget.Grid.prototype.editCell = function(row, column) {
		    var
		    gridView = this.gridController.gridView,
		        row = gridView._private.functions.getRowByRowNumber({
		            gridView: gridView,
		            rowNumber: row
		        });

		    gridView._private.functions.startEditCell({
		        gridView: gridView,
		        columnNumber: column,
		        row: row,
		        cell: row.cells[0]
		    });
		}

		$.contextMenu({
		    selector: '#dataGrid1 .waf-widget-content.waf-dataGrid-row',
		    callback: function(key, options) {
		        switch (key) {
		        case 'add':
		            sources.user.addNewElement();
		            $$('dataGrid1').editCell(sources.user.getPosition(), 0);
		            break;
		        case 'remove':
		            sources.user.removeCurrent();
		            break;
		        case 'edit':
					$$('dataGrid1').editCell(sources.user.getPosition(), 0);
		            break;
		        case 'refresh':
		            sources.user.serverRefresh();
		            break;
		        }
		    },
		    items: {
		        "add": {
		            name: "Add new",
		            icon: "add"
		        },
		        "remove": {
		            name: "Remove",
		            icon: "delete"
		        },
		        "edit": {
		            name: "Edit",
		            icon: "edit"
		        },
		        "sep1": "---------",
		        "refresh": {
		            name: "Refresh"
		        }
		    }
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
