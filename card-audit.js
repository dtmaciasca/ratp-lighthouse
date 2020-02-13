'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 2000;
var loadedTime;

class LoadAudit extends Audit {
    static get meta() {
        return {
            id:'card-audit',
            title:'Card audi tutorial',
            category: 'MyPerformance',
            name: 'card-audit',
            description: 'Schedule card initialized and ready: ' + loadedTime,
            failureDescription: 'Schedule Card slow to initialize',
            helpText: 'Used to measure time from navigationStart to when the schedule' +
            ' card is shown.',

            requiredArtifacts: ['TimeToCard']
        };
    }

    static audit(artifacts) {
        loadedTime = artifacts.TimeToCard;
        const belowThreshold = loadedTime <= MAX_CARD_TIME;

        return {
            numericValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = LoadAudit;
