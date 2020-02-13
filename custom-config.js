'use strict';

module.exports = {

    extends: 'lighthouse:default',

    passes: [{
        passName: 'defaultPass',
        gatherers: [
            'card-gatherer',
            'api-gatherer'
        ]
    }],

    audits: [
        'card-audit',
        'audit-api'
    ],

    categories: {
        ratp_pwa: {
            name: 'Ratp pwa metrics',
            description: 'Metrics for the ratp timetable site',
            auditRefs: [
                {id: 'card-audit', weight: 1},
                {id: 'audit-api', weight: 2}
            ]
        }
    }
};
