import {
    defineWidget,
    log,
    runCallback,
} from 'widget-base-helpers';

export default defineWidget('IBMAnalytics', false, {

    _obj: null,

    constructor() {
        this.log = log.bind(this);
        this.runCallback = runCallback.bind(this);
    },

    postCreate() {
        log.call(this, 'postCreate', this._WIDGET_VERSION);

        var applicationName = 'com.ibm.bmsstarterweb';
        var clientApiKey='2bd5ad2a-ff2a-459c-bf0a-9d2ec90a538e';
        var bmsregion=BMSClient.REGION_US_SOUTH; // REGION_UK (for Region United Kingdom)/ REGION_SYDNEY ( for Region Sydney)
        var deviceEvents=BMSAnalytics.DeviceEvents.ALL;  //BMSAnalytics.DeviceEvents.(NONE/ LIFECYCLE /NETWORK )
        var instanceId = 'e22cf008-5c12-4662-9249-b74102c92dee';
        var hasUserContext=true;
      
        BMSClient.initialize(BMSClient.REGION_US_SOUTH);
        BMSAnalytics.initialize(applicationName,clientApiKey,hasUserContext,deviceEvents,instanceId);
        BMSAnalytics.send();
    },
});
