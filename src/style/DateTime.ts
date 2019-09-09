export default {
  '@global': {
    '.date-time-container': {
      position: 'relative',
      display: 'inline-flex'
    },
    '.date-time-container .text-input': {
      width: '100px',
      height: '40px',
      margin: '0',
      padding: '0',
      color: '#333',
      'font-size': '14px',
      'text-align': 'center',
      outline: 'none',
      border: '1px solid #e3e7e8',
      'box-shadow': '2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset',
      'box-sizing': 'border-box'
    },
    '.date-time-container .text-input.time': {
      width: '80px'
    },
    '.date-time-container .text-input:focus': {
      'border-color': '#3498db',
      'box-shadow': '2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset',
      border: '1px solid #3498db',
      'background-color': '#fff',
      color: '#333'
    },
    '.date-time-container .date-picker-container, .time-picker-container': {
      position: 'absolute',
      width: '350px',
      background: '#fff',
      padding: '32px 32px 24px',
      'text-align': 'center',
      'font-size': '13px',
      'box-sizing': 'border-box',
      'box-shadow': '0 0 8px 2px rgba(0, 0, 0, 0.1)',
      'z-index': '2000'
    },
    '.time-picker-container': {
      width: '250px',
      padding: '0',
      'flex-flow': 'row wrap',
      'overflow-y': 'scroll',
      height: '180px'
    },
    '.date-time-container .month-year-container, .date-time-container .quick-selections-container': {
      position: 'relative',
      'line-height': '16px',
      height: '32px',
      padding: '0',
      outline: '0',
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      '-khtml-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none'
    },
    '.month-year-container .label': {
      outline: 'initial',
      '-webkit-touch-callout': 'initial',
      '-webkit-user-select': 'initial',
      '-khtml-user-select': 'initial',
      '-moz-user-select': 'initial',
      '-ms-user-select': 'initial',
      'user-select': 'text'
    },
    '.date-time-container .month-year-container': {
      'text-transform': 'uppercase',
      'border-bottom': '1px solid #e3e7e8'
    },
    '.date-time-container .month-year-container .label': {
      color: '#333',
      'font-weight': 'bold',
      'line-height': '20px'
    },
    '.date-time-container .month-year-container .prev, .date-time-container .month-year-container .next': {
      position: 'absolute',
      width: '38px',
      height: '24px',
      top: '-2px',
      'font-size': '24px',
      color: '#a2a2a2',
      'line-height': '20px',
      'font-family': 'Arial',
      cursor: 'pointer'
    },
    '.date-time-container .month-year-container .prev': {
      left: '0'
    },
    '.date-time-container .month-year-container .prev:before': {
      content: '"\\2039"'
    },
    '.date-time-container .month-year-container .next': {
      right: '0'
    },
    '.date-time-container .month-year-container .next:before': {
      content: '"\\203A"'
    },
    '.date-time-container .quick-selections-container .today, .date-time-container .quick-selections-container .none': {
      position: 'absolute',
      top: '10px',
      color: '#3498db',
      'font-size': '13px',
      cursor: 'pointer'
    },
    '.date-time-container .quick-selections-container .today': {
      left: '0'
    },
    '.date-time-container .quick-selections-container .none': {
      right: '0'
    },
    '.date-time-container .days-container': {
      width: '100%',
      display: 'flex',
      'align-items': 'center',
      'flex-wrap': 'wrap'
    },
    '.date-time-container .days-container .day, .date-time-container .days-container .wday-header': {
      'text-transform': 'uppercase',
      'font-weight': 'normal',
      'box-sizing': 'border-box',
      padding: '8px 0',
      'flex-basis': '38px',
      border: '1px solid #fff',
      color: '#333',
      'font-size': '10px',
      'line-height': '15px'
    },
    '.date-time-container .days-container .day': {
      cursor: 'pointer'
    },
    '.date-time-container .days-container .day.today': {
      color: '#fff',
      background: '#9b9b9b'
    },
    '.date-time-container .days-container .day.selected': {
      border: '1px solid #3498db'
    },
    '.date-time-container .days-container .grayed-out': {
      color: '#babcbc'
    },
    '.label-error': {
      'background-color': '#E54D41',
      color: '#FFFFFF',
      margin: '8px 0',
      padding: '0 15px',
      'font-size': '14px',
      'z-index': '1',
      position: 'absolute'
    },
    '.date-container': {
      display: 'inline-block'
    },
    '.time-container': {
      display: 'inline-block'
    },
    '.kuc-time-list-item': {
      width: '100%',
      'text-align': 'left',
      padding: '8px 16px 8px 25px',
      cursor: 'pointer',
      'box-sizing': 'border-box',
      'background-color': 'transparent',
      border: 'none',
      'font-size': '14px',
      outline: 'none',
      display: 'block',
      'line-height': '14px',
      '-webkit-user-select': 'none'
    },
    '.kuc-time-list-item:hover': {
      'background-color': '#E2F2FE'
    },
    'span.day': {
      outline: 'none'
    },
    '.calendar-button-control': {
      'background-color': 'transparent',
      border: 'none',
      outline: 'none'
    }
  }
};
