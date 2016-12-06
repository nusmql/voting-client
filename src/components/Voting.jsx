import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Vote from './Vote'
import Winner from './Winner'

export default React.createClass({
  mixins: [PureRenderMixin],
  getPair: function () {
    return this.props.pair || []
  },
  isDisabled: function() {
    return !!this.props.hasVoted;
  },
  hasVotedFor: function(entry) {
    return this.props.hasVoted === entry;
  },
  render: function() {
    return <div className="voting">
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
      </div>
  }
})
