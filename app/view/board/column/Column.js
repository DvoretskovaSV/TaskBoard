Ext.define('TaskBoard.view.board.column.Column', {
    extend: 'Ext.Panel',
    alias: 'widget.column-board',

    layout: 'fit',

    viewModel: {
        type: 'column-board'
    },

    bodyPadding: 10,

    items: [
        {
            xtype: 'dataview',

            allowDeselect: true,
            selectedItemCls: 'task-selected',
            emptyText: 'Текущих задач не найдено',
            preserveScrollOnRefresh: true,

            plugins: [{
                ptype: 'viewdragdrop',
                highlightCls: 'board-column-highlight',
                dragItemCls: 'task-drag',
                listeners: {
                    drop: 'onDropRecord'
                }
            }],

            bind: {
                selection: '{task}',
                store: '{TasksChainedStore}'
            },

            tpl: [
                '<tpl for=".">',
                    '<div class="task-wrap importance-{importance:lowercase}">',
                        '<div class="task-header">',
                            '<div class="number">#{id}</div>',
                        '</div>',
                        '<div class="task-content">',
                            '{name}',
                        '</div>',
                    '</div>',
                '</tpl>'
            ],
            itemSelector: '.task-wrap'

        }
    ]

});
