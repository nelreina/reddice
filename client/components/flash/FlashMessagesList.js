import React from 'react';
import { connect } from 'react-redux';

import { removeFlashMessage } from '../../actions/flashMessages';

class FlashMessagesList extends React.Component {
	render() {
		const { userSignupRequest, addFlashMessage } = this.props;
		return (
			<div>
				{JSON.stringify(this.props.flashMessages, null, 2)}
			</div>
		);
	}
}
const mapState = state => ({flashMessages: state.flashMessages});
const mapActionProps = { removeFlashMessage };
export default connect(mapState, mapActionProps)(FlashMessagesList);
