/**
 * Классы для моделирования работы сервера
 *
 **/
Ext.define('TaskBoard.EntitySimlet', {
    requires: [
        'Ext.ux.ajax.JsonSimlet'
    ],

    extend: 'Ext.ux.ajax.JsonSimlet',
    alias: 'simlet.entity',

    processData: Ext.identityFn,

    getData(ctx) {
        const { params } = ctx;

        if ('id' in params) {
            return this.getById(this.data, params.id);
        }

        return this.callParent(arguments);
    }
});


Ext.define('TaskBoard.SimData', {
    requires: [
        'Ext.ux.ajax.*'
    ],

    singleton: true,

    dateFormat: 'Y-m-d',

    words: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.'.replace(/[,\.]/g, '').split(' '),
    statuses: ['PLAN', 'IN PROGRESS', 'TESTING', 'DONE'],
    users: [
        {
            name: 'Моисей',
            surname: 'Яшагин'
        },
        {
            name: 'Кондрат',
            surname: 'Ерзов'
        },
        {
            name: 'Максимильян',
            surname: 'Котельников'
        },
        {
            name: 'Виталий',
            surname: 'Салтанов'
        }
    ],
    importance: ['MUST', 'SHOULD', 'COULD'],


    getRandomDate(start = new Date(2020, 7, 10), end = new Date()) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    },


    sentence(min = 5, max = 50) {
        const words = this.words;

        let length = Ext.Number.randomInt(min, max),
            description = Ext.String.capitalize(
                this.getRandomElemOfArray(words)
            );

        while (length--) {
            description += ' ';
            description += this.getRandomElemOfArray(words);
        }

        description += '.';

        return description;
    },


    getRandomElemOfArray(array) {
        return array[Ext.Number.randomInt(0, array.length - 1)];
    },


    init() {
        const me = this;

        const {dateFormat, users, importance, statuses} = me,
            tasks = [];

        let count = Ext.Number.randomInt(20, 35),
            startId = Ext.Number.randomInt(1, 9999 - count);

        while (count--) {
            const id = (++startId).toString().padStart(4, 0),
                user = me.getRandomElemOfArray(users);

            tasks.push({
                id: `TSK-${id}`,
                name: me.sentence(),
                firstName: user.surname,
                lastName: user.name,
                status: me.getRandomElemOfArray(statuses),
                importance: me.getRandomElemOfArray(importance),
                date: Ext.Date.format(me.getRandomDate(), dateFormat)
            });
        }

        const modelStatuses = statuses.map((name, index) => ({
            id: index + 1,
            name: name
        }));

        const makeSim = data => ({
            type: 'entity',
            data: data
        });

        Ext.ux.ajax.SimManager.init().register({
            '/task': makeSim(tasks),
            '/status': makeSim(modelStatuses),
        });
    }
});
