Ext.define('TaskBoard.view.board.BoardModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.board',

    data: {
        selection: null
    },

    stores: {
        Statuses: {
            autoLoad: true,
            model: 'TaskBoard.model.Status',
            listeners: {
                load: 'onLoadStatuses'
            }
        },

        Tasks: {
            autoLoad: true,
            pageSize: 2000,
            model: 'TaskBoard.model.Task',
            id: 'tasks'
        }
    }
});
