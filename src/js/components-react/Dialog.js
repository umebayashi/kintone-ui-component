import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

const Dialog = (props) => {
  if (props.isVisible === false) {
    return null;
  }
  const renderHeader = () => {
    if (props.header && typeof props.header === 'string') {
      return props.header;
    }
    if (props.headerJSX) {
      return props.headerJSX;
    }
    return <span />;
  };
  const renderContent = () => {
    if (props.content && typeof props.content === 'string') {
      return props.content;
    }
    if (props.contentJSX) {
      return props.contentJSX;
    }
    return null;
  };
  const renderFooter = () => {
    if (props.footer && typeof props.footer === 'string') {
      return props.footer;
    }
    if (props.footerJSX) {
      return props.footerJSX;
    }
    return null;
  }
  return (
    <div className="kuc-dialog-container">
      <div className="kuc-dialog-wrapper">
        <div className="kuc-dialog-header">
          {
            renderHeader()
          }
          {
            (props.showCloseButton) ?
              (
                <span
                  className="kuc-dialog-close-button"
                >
                  <IconButton type="close" onClick={props.onClose} />
                </span>
              ) :
              (
                <span />
              )
          }
        </div>
        <div className="kuc-dialog-body">
          {
            renderContent()
          }
        </div>
        <div className="kuc-dialog-footer">
          {
            renderFooter()
          }
        </div>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  header: PropTypes.any,
  headerJSX: PropTypes.any,
  content: PropTypes.any,
  contentJSX: PropTypes.any,
  footer: PropTypes.any,
  footerJSX: PropTypes.any,
  isVisible: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  onClose: PropTypes.func
};
Dialog.defaultProps = {
  isVisible: true,
  showCloseButton: true
};

export default Dialog;