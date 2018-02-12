import {
    defineWidget,
    log,
    runCallback,
} from 'widget-base-helpers';

import BMSClient from '@/lib/bmsclient';
import BMSAnalytics from '@/lib/bmsanalytics';
// import BMSRequest from '@/lib/bmsrequest';

export default defineWidget('IBMAnalytics', false, {

    _obj: null,

    constructor() {
        this.log = log.bind(this);
        this.runCallback = runCallback.bind(this);
    },

    postCreate() {
        log.call(this, 'postCreate', this._WIDGET_VERSION);

        const applicationName = 'com.ibm.bmsstarterweb';
        const clientApiKey = '2bd5ad2a-ff2a-459c-bf0a-9d2ec90a538e';
        // const bmsregion = BMSClient.REGION_US_SOUTH; // REGION_UK (for Region United Kingdom)/ REGION_SYDNEY ( for Region Sydney)
        const deviceEvents = BMSAnalytics.DeviceEvents.ALL; // BMSAnalytics.DeviceEvents.(NONE/ LIFECYCLE /NETWORK )
        const instanceId = 'e22cf008-5c12-4662-9249-b74102c92dee';
        const hasUserContext = true;

        BMSClient.initialize(BMSClient.REGION_US_SOUTH);
        BMSAnalytics.initialize(applicationName, clientApiKey, hasUserContext, deviceEvents, instanceId);
        BMSAnalytics.send();
    },
});
