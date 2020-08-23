Ext.define('TaskBoard.view.task.ShowDetails', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.task-details',

    reference: 'task',

    config: {
        record: null
    },

    publishes: ['record'],

    bind: {
        title: '#{task.record.id}'
    },

    bodyPadding: 15,
    scrollable: true,
    header: {
        bind: {
            iconCls : 'x-fa fa-circle icon-importance-{task.record.importance:lowercase}'
        }
    },
    defaults: {
        xtype: 'displayfield',
    },

    items: [
        {
            fieldLabel: 'Дата',
            bind: '{task.record.date}',
            renderer:  Ext.util.Format.dateRenderer('d M Y')
        },
        {
            fieldLabel: 'Ответственный',
            bind: '{task.record.fullname}'
        },
        {
            fieldLabel: 'Статус',
            bind: '{task.record.status}'
        },
        {
            fieldLabel: 'Описание',
            bind: '{task.record.name}'
        },
    ]
});