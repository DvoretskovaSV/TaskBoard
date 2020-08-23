Ext.define('TaskBoard.view.board.BoardController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.board',


    onDropRecord(plugin, view, record){
        const status = view.lookupViewModel().get('status');
        record.set('status', status);
    },


    onLoadStatuses(store, records, success) {
        if(!success){
            Ext.Msg.show({
                title:'Ошибка',
                message: 'Ошибка загрузки данных',
                buttons: Ext.Msg.CANCEL,
                icon: Ext.Msg.ERROR
            });

            return false;
        }

        const board = this.lookup('board');

        Ext.Array.each(records, record => {
            board.add({
                xtype: 'column-board',
                title: record.get('name'),
                flex: 1,
                viewModel: {
                    data: {
                        status: record.get('name')
                    }
                }
            });
        });
    }
});
