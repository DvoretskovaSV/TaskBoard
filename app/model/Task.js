Ext.define('TaskBoard.model.Task', {
    extend: 'TaskBoard.model.Base',

    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'firstName', type: 'string'},
        {name: 'lastName', type: 'string'},
        {name: 'status', type: 'string'},
        {name: 'importance', type: 'string'},
        {name: 'date', type: 'date', dateFormat: 'Y-m-d'},
        {
            name: 'fullName', persist: false,
            calculate: data => {
                let {firstName, lastName} = data;

                firstName = firstName ? `${firstName}, ` : '';
                lastName = lastName || '';

                return `${firstName}${lastName}`;
            }
        },
        {
            name: 'priority', type: 'int', persist: false,
            calculate: data => {
                switch (data.importance) {
                    case 'MUST':
                        return 1;
                    case 'SHOULD':
                        return 2;
                    case 'COULD':
                        return 3;
                    default:
                        return Number.MAX_SAFE_INTEGER;
                }
            }
        }
    ]
});