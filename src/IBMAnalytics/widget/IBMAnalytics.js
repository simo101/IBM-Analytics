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
        var bmsregion;
        switch(this.bmsRegion){
            case 'REGION_US_SOUTH':
                bmsregion = BMSClient.REGION_US_SOUTH;
                break;
            case 'REGION_UK':
                bmsregion = BMSClient.REGION_UK;
                break;
            case 'REGION_SYDNEY':
                bmsregion = BMSClient.REGION_SYDNEY;
                break;
            default:
                bmsregion = BMSClient.REGION_US_SOUTH;
                break;
        }

        var deviceEvents;

        switch(this.bmsDevice){
            case 'NONE':
                deviceEvents = BMSAnalytics.DeviceEvents.NONE;
                break;
            case 'ALL':
                deviceEvents = BMSAnalytics.DeviceEvents.ALL;
                break;
            case 'LIFECYCLE':
                deviceEvents = BMSAnalytics.DeviceEvents.LIFECYCLE;
                break;
            default:
                deviceEvents = BMSAnalytics.DeviceEvents.ALL;
                break;
        }

        var hasUserContext=true;
      
        BMSClient.initialize(bmsregion);
        BMSAnalytics.initialize(this.applicationName,this.apiKey,hasUserContext,deviceEvents,this.instanceID);
        BMSAnalytics.send();
    },
});
