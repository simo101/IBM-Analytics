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
		let bmsregion;
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

        let deviceEvents;

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
		let hasUserContext = false;
		if(this.hasUsrCont){
			hasUserContext = true;
			BMSAnalytics.setUserIdentity(mx.session.getUserName() + "-" + mx.session.getUserId());
		}
		BMSClient.initialize(bmsregion);
		BMSAnalytics.initialize(this.applicationName, this.apiKey, hasUserContext, deviceEvents, this.instanceID);
		if(this.storeLogs){
			BMSAnalytics.Logger.capture(true);
			BMSAnalytics.Logger.setLogLevel('error');
			// Overide the error function to send logs
            console._error = console.error;
            console.error = function(err) {
				console._error(err);
				this._reportError(err);
            }.bind(this);
		}
		const promise = BMSAnalytics.send();
		promise.then(function(result) {
				console.log(result); // "Stuff worked!"
			}, function(err) {
				console.log(err); // Error: "It broke"
			});
		if(this.enableUsageAnalytics){
			BMSAnalytics.enable();
		}
	},
	_reportError:function(error){
			try {
				const currentPage = mx.router._contentForm.path.replace(".page.xml", "");
				BMSAnalytics.Logger.error(`${currentPage} : ${error}`);
			} catch (e) {
				BMSAnalytics.Logger.error(`${error}`);
			}
			BMSAnalytics.Logger.send();
			console.log("sending " + error);
	}
});
