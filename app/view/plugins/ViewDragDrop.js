Ext.define('TaskBoard.view.plugins.ViewDragDrop', {
    extend: 'Ext.plugin.Abstract',
    alias: 'plugin.viewdragdrop',

    mixins: [
        'Ext.mixin.Observable'
    ],

    relayedEvents: [
        'drop'
    ],


    constructor(config) {
        const me = this;

        me.callParent([
            config
        ]);
        me.mixins.observable.constructor.call(me);
    },


    init(view) {
        view.on('render', this.onViewRender, this, {
            single: true
        });
    },


    onViewRender(view){
        const me = this;

        me.dragZone = new Ext.dd.DragZone(view.getEl(), {

            getDragData(e) {
                const sourceEl = e.getTarget(view.itemSelector, 10),
                    store = view.getStore();

                if (sourceEl) {
                    const d = sourceEl.cloneNode(true);
                    d.id = Ext.id();

                    if(me.dragItemCls) {
                        Ext.fly(d).addCls(me.dragItemCls);
                    }

                    return {
                        ddel: d,
                        sourceEl: sourceEl,
                        repairXY: Ext.fly(sourceEl).getXY(),
                        sourceStore: store,
                        draggedRecord: store && store.getByInternalId(sourceEl.getAttribute('data-recordid'))
                    }
                }
            },

            onDragOut(e, view){
                Ext.fly(view).removeCls(me.highlightCls);
            }
        });

        me.dropZone = new Ext.dd.DropZone(view.getEl(), {

            overClass: me.highlightCls,

            getTargetFromEvent(e) {
                return e.getTarget('.x-component');
            },

            onNodeDrop(target, dd, e, data) {
                const { draggedRecord } = data;

                if (me.hasListeners && me.hasListeners.drop) {
                    me.fireEvent('drop', me, view, draggedRecord);
                }
            }
        });
    },


    destroy: function() {
        const me = this;

        me.dragZone = me.dropZone = Ext.destroy(me.dragZone, me.dropZone);
        me.callParent();
    },
});