Ext.define('TaskBoard.view.board.column.ColumnViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.column-board',

    data: {
        status: null
    },

    stores: {
        TasksChainedStore: {
            autoLoad: true,
            source: 'tasks',
            filters: [
                {
                    property: 'status',
                    operator: '=',
                    value: '{status}',
                    disableOnEmpty: true
                }
            ],

            sorters: [
                {
                    property: 'lastName',
                    direction: 'ASC'
                },
                {
                    property: 'priority',
                    direction: 'ASC'
                }
            ]
        }
    }
});