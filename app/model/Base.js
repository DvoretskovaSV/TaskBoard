/**
 * Базовый класс для всех сущностей в приложении
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
