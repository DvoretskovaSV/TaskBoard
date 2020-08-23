Ext.define('TaskBoard.Application', {
    extend: 'Ext.app.Application',

    name: 'TaskBoard',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },


    onBeforeLaunch() {
        // All smoke-and-mirrors with data happens in SimData. This is a fake server that
        // runs in-browser and intercepts the various Ajax requests a real app would make
        // to a real server.
        TaskBoard.SimData.init();

        this.callParent();
    }
});
