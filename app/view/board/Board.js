Ext.define('TaskBoard.view.board.Board', {
    extend: 'Ext.Container',
    xtype: 'board',

    controller: 'board',
    viewModel: {
        type: 'board'
    },

    layout: 'border',

    items: [
        {
            xtype: 'container',
            scrollable: true,
            reference: 'board',
            region: 'center',
            layout: {
                type: 'hbox',
                align: 'stretchmax'
            }
        },
        {
            xtype: 'task-details',
            height: 300,
            region: 'south',
            hidden: true,
            bind: {
                hidden: '{!task}',
            }
        }
    ]
});
