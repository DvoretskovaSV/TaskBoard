Ext.define('TaskBoard.Application', {
    extend: 'Ext.app.Application',

    name: 'TaskBoard',

    requires: [
        'TaskBoard.*',
        'Ext.plugin.Viewport'
    ],

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },


    onBeforeLaunch() {
        //Инициализация "фейкового" сервера
        //Запускается в браузере и перехватывает все запросы ajax
        TaskBoard.SimData.init();

        this.callParent();
    }
});
