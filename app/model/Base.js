/**
 * This class is the base class for all entities in the application.
 */
Ext.define('TaskBoard.model.Base', {
    extend: 'Ext.data.Model',

    schema: {
        namespace: 'TaskBoard.model',
        proxy: {
            url: '{prefix}/{entityName:uncapitalize}'
        }
    }
});
