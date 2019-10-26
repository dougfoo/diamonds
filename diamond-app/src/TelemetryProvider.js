import React, {Component, Fragment} from 'react';
import {withAITracking} from '@microsoft/applicationinsights-react-js';
import {ai} from './TelemetryService';
//import {withRouter} from 'react-router-dom';

/**
 * This Component provides telemetry with Azure App Insights
 * ** This is really for when we use react-router which we don't yet
 * ** And a wrapper for functions
 * 
 * NOTE: the package '@microsoft/applicationinsights-react-js' has a HOC withAITracking that requires this to be a Class Component rather than a Functional Component
 */
class TelemetryProvider extends Component {
    state = {
        initialized: false
    };

    componentDidMount() {
        const {history} = this.props;
        const {initialized} = this.state;
        const AppInsightsInstrumentationKey = '458001d5-9bee-48de-94ba-1b43967aff71'; // PUT YOUR KEY HERE
        if (!Boolean(initialized) && Boolean(AppInsightsInstrumentationKey) && Boolean(history)) {
            ai.initialize(AppInsightsInstrumentationKey, history);
            this.setState({initialized: true});
            console.log('TelemtryProvider:: initialized');            
        } else {
            console.log('TelemtryProvider:: did not initialize',
                    initialized, AppInsightsInstrumentationKey, history);

        }

        this.props.after();
    }

    render() {
        const {children} = this.props;
        return (
            <Fragment>
                {children}
            </Fragment>
        );
    }
}

export default withAITracking(ai.reactPlugin, TelemetryProvider);
