import React from 'react';

class ButtonWithLoading extends React.Component {
    state = {
      // eslint-disable-next-line react/prop-types
      loading: this.props.loading,
    }
  
    toggle = () => {
      this.setState(state => ({ on: !state.on }))
    }
    render() {
      // eslint-disable-next-line react/prop-types
      return this.props.render({
        loading: this.state.loading,
        // eslint-disable-next-line react/prop-types
        submit: this.props.submit,
      })
    }
  }

export default ButtonWithLoading