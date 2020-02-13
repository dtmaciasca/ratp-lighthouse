'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 3000;
var loadedTime;

class LoadAudit extends Audit {
    static get meta() {
        return {
            id:'audit-api',
            title:'Api load time response',
            category: 'MyPerformance',
            name: 'audit-api',
            description: 'API responded in less than 3 second: ' + loadedTime,
            failureDescription: 'API responded in more than 3 second  ',
            helpText: 'Used to measure time from navigationStart to when the schedule' +
            ' card is shown.',

            requiredArtifacts: ['TimeToAPI']
        };
    }

    static audit(artifacts) {
        loadedTime = artifacts.TimeToAPI;

        const belowThreshold = loadedTime <= MAX_CARD_TIME;
        return {
            rawValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = LoadAudit;
