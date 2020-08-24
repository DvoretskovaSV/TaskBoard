Ext.define('TaskBoard.view.task.ShowDetails', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.task-details',

    bind: {
        title: '#{task.id}'
    },

    bodyPadding: 15,
    scrollable: true,
    header: {
        bind: {
            iconCls : 'x-fa fa-circle icon-importance-{task.importance:lowercase}'
        }
    },
    defaults: {
        xtype: 'displayfield',
    },

    items: [
        {
            fieldLabel: 'Дата',
            bind: '{task.date}',
            renderer:  Ext.util.Format.dateRenderer('d M Y')
        },
        {
            fieldLabel: 'Ответственный',
            bind: '{task.fullName}'
        },
        {
            fieldLabel: 'Статус',
            bind: '{task.status}'
        },
        {
            fieldLabel: 'Описание',
            bind: '{task.name}'
        },
    ]
});