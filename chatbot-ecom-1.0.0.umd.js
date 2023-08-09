(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('moment'), require('js-cookie')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'moment', 'js-cookie'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MyLibrary = {}, global.React, global.moment, global.Cookies));
})(this, (function (exports, React$1, moment, Cookies) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);
  var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
  var Cookies__default = /*#__PURE__*/_interopDefaultLegacy(Cookies);

  const Logo = ({
    styled
  }) => {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("svg", {
      width: "40",
      height: "40",
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `inline ${styled}`
    }, /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M33.9485 13.7227C33.7918 13.532 33.5987 13.3745 33.3804 13.2594C33.1622 13.1442 32.9231 13.0738 32.6773 13.0521L28.0278 12.6771L27.6082 9.72153C27.5301 9.16863 27.2549 8.66255 26.8333 8.29642C26.4117 7.93029 25.8721 7.72875 25.3137 7.72888H24.5509C24.5509 5.81386 23.7902 3.97728 22.4361 2.62316C21.082 1.26904 19.2454 0.508301 17.3304 0.508301C15.4153 0.508301 13.5788 1.26904 12.2246 2.62316C10.8705 3.97728 10.1098 5.81386 10.1098 7.72888H9.35023C8.7922 7.72885 8.25296 7.9305 7.83188 8.29668C7.4108 8.66287 7.13626 9.1689 7.05884 9.72153L6.02279 17.0311L3.08307 17.2694C2.77844 17.2929 2.48158 17.377 2.20988 17.5168C1.93819 17.6565 1.69714 17.8491 1.50087 18.0833C1.30461 18.3174 1.15709 18.5884  1.06696 18.8803C0.976827 19.1723 0.945906 19.4793 0.976008 19.7833L1.55124 25.2655C1.60741 25.8316 1.87273 26.3564 2.29533 26.7373C2.71792 27.1181 3.26739  27.3276 3.83627 27.3249H5.00262C5.17974 27.6668 5.43928 27.9592 5.75779 28.1756C6.0763 28.392 6.44372 28.5256 6.82684 28.5643L11.3905 32.3303C11.5301 32.4454  11.7054 32.5084 11.8863 32.5083C12.0654 32.5065 12.2388 32.445 12.3789 32.3335C12.5174 32.2186 12.612 32.0594 12.6468 31.8828C12.6815 31.7062 12.6543 31.523  12.5696 31.3642L11.0823 28.5834H27.6082C27.9406 28.5828 28.269 28.5107 28.5711 28.372C28.8731 28.2333 29.1418 28.0312 29.3589 27.7795C29.5759 27.5278 29.7363  27.2323 29.829 26.9131C29.9218 26.5939 29.9448 26.2585 29.8965 25.9297L29.3689 22.1796L31.1073 20.7463H32.102C32.5659 20.7477 33.0137 20.5763 33.358  20.2655C33.7024 19.9547 33.9186 19.5267 33.9644 19.0651L34.3712 15.1243C34.3996 14.8742 34.3768 14.6209 34.3041 14.38C34.2315 14.139 34.1104 13.9154 33.9485  13.7227ZM11.1872 8.4503V7.7257C11.1872 6.09642 11.8344 4.53387 12.9865 3.38179C14.1385 2.22972 15.7011 1.58249 17.3304 1.58249C18.9596 1.58249 20.5222 2.22972  21.6743 3.38179C22.8263 4.53387 23.4736 6.09642 23.4736 7.7257V8.4503C23.7636 8.52745 24.0157 8.70748 24.1828 8.95679C24.3498 9.20611 24.4205 9.50769 24.3816  9.80528C24.3427 10.1029 24.1969 10.3761 23.9713 10.5741C23.7458 10.7721 23.4559 10.8813 23.1558 10.8813C22.8556 10.8813 22.5658 10.7721 22.3402 10.5741C22.1147  10.3761 21.9688 10.1029 21.9299 9.80528C21.891 9.50769 21.9617 9.20611 22.1288 8.95679C22.2959 8.70748 22.5479 8.52745 22.838 8.4503V7.7257C22.838 6.26162 22.2564  4.85751 21.2211 3.82225C20.1858 2.78699 18.7817 2.20539 17.3177 2.20539C15.8536 2.20539 14.4495 2.78699 13.4142 3.82225C12.3789 4.85751 11.7973 6.26162 11.7973  7.7257V8.4503C12.0874 8.52745 12.3394 8.70748 12.5065 8.95679C12.6736 9.20611 12.7443 9.50769 12.7054 9.80528C12.6665 10.1029 12.5206 10.3761 12.2951 10.5741C12.0695  10.7721 11.7797 10.8813 11.4795 10.8813C11.1794 10.8813 10.8895 10.7721 10.664 10.5741C10.4384 10.3761 10.2926 10.1029 10.2537 9.80528C10.2148 9.50769 10.2855 9.20611  10.4525 8.95679C10.6196 8.70748 10.8717 8.52745 11.1617 8.4503H11.1872ZM5.6001 26.5653H3.83627C3.4604 26.5656 3.09781 26.4263 2.81886 26.1744C2.53992 25.9225 2.36451  25.5759 2.32669 25.2019L1.76099 19.7039C1.74089 19.5032 1.76094 19.3006 1.81997 19.1078C1.87899 18.9149 1.97582 18.7358 2.1048 18.5808C2.23377 18.4258 2.39232 18.298  2.57119 18.2049C2.75006 18.1118 2.94568 18.0553 3.14663 18.0385L18.4713 16.7959H18.5952C18.8154 16.7961 19.033 16.8443 19.2327 16.9371C19.4324 17.0298 19.6095 17.165  19.7516 17.3332C19.8938 17.5014 19.9976 17.6985 20.0559 17.9109C20.1141 18.1232 20.1254 18.3458 20.0889 18.5629L18.9512 25.2941C18.8938 25.6489 18.712 25.9716 18.4383  26.2046C18.1646 26.4375 17.8169 26.5654 17.4575 26.5653H9.10869L11.8831 31.7456L5.6001 26.5653ZM33.5989 15.0448L33.1921 19.0015C33.1645 19.2712 33.0377 19.5211 32.8363  19.7025C32.6348 19.884 32.3732 19.9841 32.102 19.9835H30.8308L26.2925 23.705L28.3074 19.9676H22.2691C22.0111 19.9676 21.7615 19.8763 21.5644 19.71C21.3672 19.5436  21.2352 19.313 21.1917 19.0587L20.3622 14.2026C20.3365 14.0465 20.3449 13.8866 20.387 13.734C20.429 13.5815 20.5037 13.4399 20.6059 13.319C20.708 13.1981 20.8352 13.1009  20.9786 13.034C21.122 12.967 21.2782 12.932 21.4364 12.9314H21.5286L32.5883 13.8276C32.7342 13.8383 32.8765 13.8782 33.0067 13.9447C33.137 14.0113 33.2526 14.1033  33.3468 14.2152C33.441 14.3272 33.5118 14.4568 33.5551 14.5966C33.5984 14.7363 33.6133 14.8833 33.5989 15.0289V15.0448Z",
      fill: "white"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M6.40415 21.1626C6.23997 21.162 6.07928 21.2101 5.94246 21.3008C5.80563 21.3916 5.69882 21.5209 5.63556 21.6724C5.57229 21.8239 5.55541 21.9908 5.58705 22.1519C5.6187 22.313 5.69745 22.4611 5.81332 22.5775C5.9292 22.6938 6.07699 22.7731 6.23798 22.8054C6.39897 22.8376 6.56591 22.8214 6.71766 22.7587C6.86942 22.696 6.99915 22.5897 7.09044 22.4532C7.18172 22.3167 7.23045 22.1563 7.23045 21.9921C7.23087 21.8833 7.20981 21.7755 7.16847 21.6749C7.12713 21.5743 7.06633 21.4828 6.98956 21.4057C6.91279 21.3287 6.82156 21.2675 6.7211 21.2258C6.62064 21.1841 6.51293 21.1626 6.40415 21.1626Z",
      fill: "white"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M10.2496 22.8184C10.4904 22.8184 10.7257 22.747 10.9259 22.6132C11.126 22.4795 11.282 22.2894 11.3742 22.067C11.4663 21.8446 11.4904 21.5998 11.4434 21.3637C11.3965 21.1276 11.2805 20.9107 11.1103 20.7405C10.9401 20.5702 10.7232 20.4543 10.4871 20.4073C10.251 20.3604 10.0062 20.3845 9.78382 20.4766C9.5614 20.5687 9.3713 20.7248 9.23755 20.9249C9.10381 21.1251 9.03242 21.3604 9.03242 21.6012C9.03242 21.924 9.16066 22.2336 9.38893 22.4619C9.6172 22.6901 9.9268 22.8184 10.2496 22.8184Z",
      fill: "white"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M14.0951 22.8184C14.3937 22.8184 14.6855 22.7298 14.9338 22.564C15.182 22.3981 15.3755 22.1623 15.4898 21.8865C15.604 21.6106 15.6339 21.3071 15.5757 21.0143C15.5174 20.7214 15.3736 20.4525 15.1625 20.2413C14.9514 20.0302 14.6824 19.8864 14.3896 19.8282C14.0968 19.77 13.7932 19.7998 13.5174 19.9141C13.2416 20.0284 13.0058 20.2218 12.8399 20.4701C12.674 20.7183 12.5855 21.0102 12.5855 21.3088C12.5855 21.7091 12.7445 22.0931 13.0276 22.3762C13.3108 22.6593 13.6947 22.8184 14.0951 22.8184Z",
      fill: "white"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M30.37 16.2398C30.248 16.2398 30.1288 16.2759 30.0275 16.3437C29.9261 16.4114 29.847 16.5077 29.8004 16.6204C29.7537 16.733 29.7415 16.857 29.7653 16.9766C29.7891 17.0962 29.8478 17.206 29.934 17.2923C30.0202 17.3785 30.1301 17.4372 30.2497 17.461C30.3693 17.4848 30.4933 17.4726 30.6059 17.4259C30.7186 17.3792 30.8149 17.3002 30.8826 17.1988C30.9504 17.0974 30.9865 16.9782 30.9865 16.8563C30.9865 16.6928 30.9216 16.536 30.806 16.4203C30.6903 16.3047 30.5335 16.2398 30.37 16.2398Z",
      fill: "white"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M27.5034 15.6613C27.3242 15.6613 27.1491 15.7145 27.0002 15.814C26.8512 15.9135 26.7351 16.055 26.6666 16.2205C26.598 16.386 26.5801 16.5681 26.615 16.7438C26.65 16.9195 26.7362 17.0809 26.8629 17.2076C26.9896 17.3342 27.151 17.4205 27.3267 17.4554C27.5024 17.4904 27.6845 17.4725 27.85 17.4039C28.0155 17.3353 28.1569 17.2193 28.2565 17.0703C28.356 16.9214 28.4091 16.7462 28.4091 16.5671C28.4091 16.3269 28.3137 16.0965 28.1438 15.9266C27.974 15.7568 27.7436 15.6613 27.5034 15.6613Z",
      fill: "white"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M24.6367 15.2259C24.4144 15.2266 24.1972 15.2931 24.0126 15.4171C23.828 15.5411 23.6843 15.717 23.5996 15.9227C23.515 16.1283 23.4931 16.3544 23.5369 16.5724C23.5807 16.7904 23.6881 16.9906 23.8455 17.1476C24.003 17.3046 24.2035 17.4115 24.4216 17.4546C24.6398 17.4978 24.8658 17.4753 25.0712 17.3901C25.2766 17.3048 25.4521 17.1606 25.5756 16.9757C25.6991 16.7908 25.765 16.5734 25.765 16.351C25.7654 16.2029 25.7365 16.0561 25.6799 15.9192C25.6233 15.7823 25.5402 15.658 25.4353 15.5534C25.3304 15.4488 25.2058 15.366 25.0688 15.3098C24.9317 15.2536 24.7849 15.2251 24.6367 15.2259Z",
      fill: "white"
    })));
  };

  const AttachmentIcon = ({
    style
  }) => {
    return /*#__PURE__*/React__default["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      fill: "currentColor",
      className: "bi bi-paperclip",
      viewBox: "0 0 16 16",
      style: style
    }, /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"
    }));
  };
  const SendIcon = ({
    style
  }) => {
    return /*#__PURE__*/React__default["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      fill: "currentColor",
      className: "bi bi-send-fill horizontal-icon",
      viewBox: "0 0 16 16",
      style: style
    }, /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M15.964,0.686a0.5,0.5,0,0,0-.65-0.65L0.767,5.855h0L0.315,6.035a0.5,0.5,0,0,0-.082,0.887l0.41,0.26,0.001,0.002L5.721,10.3l3.178,4.995,0.002,0.002,0.26,0.41a0.5,0.5,0,0,0,0.886-0.083l6-15Zm-1.833,1.89L6.637,10.07l-0.215-0.338a0.5,0.5,0,0,0-.154-0.154L6.03,9.263l7.494-7.494,1.178-0.471-0.47,1.178Z"
    }));
  };
  const CloseIcon = ({
    style
  }) => {
    return /*#__PURE__*/React__default["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      fill: "currentColor",
      className: "bi bi-x",
      viewBox: "0 0 16 16",
      style: style
    }, /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    }));
  };
  const ChatbotIcon = ({
    style
  }) => {
    return /*#__PURE__*/React__default["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      className: "bi bi-robot",
      viewBox: "0 0 16 16",
      style: style
    }, /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"
    }));
  };

  const makeId = length => {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const isCurrentTimezoneUTC = moment__default["default"]().utcOffset() === 0;
  const getCurrentDateTime = () => {
    let currentDateTime;
    if (!isCurrentTimezoneUTC) {
      // Nếu thời gian hiện tại không ở giờ UTC, chuyển nó sang giờ UTC trước khi format
      currentDateTime = moment__default["default"]().utc().format('YYYY-MM-DD HH:mm:ss');
    } else {
      currentDateTime = moment__default["default"]().format('YYYY-MM-DD HH:mm:ss');
    }
    return currentDateTime;
  };
  const convertToTimeFormat = timeString => {
    var formattedTime;
    if (isCurrentTimezoneUTC) {
      formattedTime = moment__default["default"](timeString).format('HH:mm A');
    } else {
      formattedTime = moment__default["default"].utc(timeString).local().format('HH:mm A');
    }
    return formattedTime;
  };
  const calculateTimeDifference = (timeString, currentTime) => {
    const targetTime = isCurrentTimezoneUTC ? moment__default["default"](timeString).utc() : moment__default["default"].utc(timeString);
    const timeDifferenceInMinutes = currentTime.diff(targetTime, 'minutes');
    if (timeDifferenceInMinutes === 0) {
      return 'Just now';
    } else if (timeDifferenceInMinutes < 60) {
      return timeDifferenceInMinutes + 'm ago';
    } else if (timeDifferenceInMinutes < 1440) {
      const hours = currentTime.diff(targetTime, 'hours');
      return hours + 'h ago';
    } else {
      const days = currentTime.diff(targetTime, 'days');
      return days + 'd ago';
    }
  };
  const BlinkingLoader = () => {
    return /*#__PURE__*/React.createElement("div", {
      className: "blinking-loader"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dot dot1"
    }), /*#__PURE__*/React.createElement("div", {
      className: "dot dot2"
    }), /*#__PURE__*/React.createElement("div", {
      className: "dot dot3"
    }));
  };
  const CustomButtonIntent = props => {
    const {
      arr_button,
      sendMess,
      id,
      setMessages,
      messages
    } = props;
    const updateMessageById = id => {
      const updatedMessages = messages.map(message => message.id === id ? {
        ...message,
        attachment: {
          ...message.attachment,
          hidden: true
        }
      } : message);
      setMessages(updatedMessages);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "custom-list-button"
    }, arr_button?.map((button, index) => /*#__PURE__*/React.createElement("div", {
      key: index
    }, /*#__PURE__*/React.createElement("button", {
      className: "custom-button-intent",
      onClick: () => {
        updateMessageById(id);
        sendMess({
          content: button.title,
          type: 'option',
          id: id,
          payload: button.payload
        });
      }
    }, button.title))));
  };

  const BoxChatAI = props => {
    const {
      handleChangeOpen,
      sendMess,
      messages,
      setMessages,
      isSend,
      isDisconnect,
      typing
    } = props;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "width-100 height-100"
    }, /*#__PURE__*/React__default["default"].createElement(HeaderChat, {
      handleChangeOpen: handleChangeOpen
    }), /*#__PURE__*/React__default["default"].createElement(BodyChat, {
      messages: messages,
      isSend: isSend,
      isDisconnect: isDisconnect,
      typing: typing,
      sendMess: sendMess,
      setMessages: setMessages
    }), /*#__PURE__*/React__default["default"].createElement(FooterChat, {
      sendMess: sendMess
    }));
  };
  const HeaderChat = ({
    handleChangeOpen
  }) => {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "chatbox-header"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "align-self-center width-20"
    }, /*#__PURE__*/React__default["default"].createElement(Logo, {
      styled: "mt-10px"
    })), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "width-65"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "width-100"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "chatbox-name text-align-left"
    }, "SaleCares"), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "chatbox-status text-align-left"
    }, "Online"))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "width-15 align-self-center"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "text-align-right"
    }, /*#__PURE__*/React__default["default"].createElement("button", {
      className: "custom-add-file",
      onClick: handleChangeOpen
    }, /*#__PURE__*/React__default["default"].createElement(CloseIcon, {
      style: {
        color: '#fff',
        width: '40px',
        height: '40px'
      }
    })))));
  };
  const BodyChat = ({
    messages,
    isSend,
    isDisconnect,
    typing,
    sendMess,
    setMessages
  }) => {
    React$1.useState(null);
    const chatRef = React$1.useRef(null);
    const [currentTime, setCurrentTime] = React$1.useState(moment__default["default"]());
    React$1.useEffect(() => {
      scrollToBottom();
    }, [messages, typing]);
    React$1.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(moment__default["default"]());
      }, 4000);

      // Clear interval khi component unmount để tránh memory leak
      return () => clearInterval(interval);
    }, []);
    const scrollToBottom = () => {
      chatRef.current?.scrollIntoView({
        behavior: "smooth"
      });
    };
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: " chatbox-body"
    }, isDisconnect && /*#__PURE__*/React__default["default"].createElement("div", {
      className: "no-connection-message"
    }, "Please wait a moment to reconnect!!!"), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "width-100"
    }, /*#__PURE__*/React__default["default"].createElement("ul", {
      className: "custom-list-chat"
    }, messages.length > 0 && messages.map((mes, index) => /*#__PURE__*/React__default["default"].createElement("li", {
      key: index,
      style: {
        textAlignLast: mes.object == 'visitor' ? 'right' : 'left'
      }
    }, (index === 0 || messages[index].object !== messages[index - 1].object) && (mes.object === 'chatbot' ? /*#__PURE__*/React__default["default"].createElement("div", {
      className: "custom-author"
    }, /*#__PURE__*/React__default["default"].createElement("p", {
      className: "sender-chatbot"
    }, `${capitalizeFirstLetter(mes.object)} - `), convertToTimeFormat(mes.created_at)) : /*#__PURE__*/React__default["default"].createElement("div", {
      className: "custom-author"
    }, convertToTimeFormat(mes.created_at))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: mes.object == "visitor" ? "" : "d-flex spacing-botchat"
    }, mes.object !== "visitor" && (index === messages.length - 1 || messages[index].object !== messages[index + 1].object) ? /*#__PURE__*/React__default["default"].createElement("div", {
      className: "image-chatbot"
    }, /*#__PURE__*/React__default["default"].createElement(ChatbotIcon, {
      style: {
        width: '24px',
        height: '24px',
        marginTop: '3px'
      }
    })) : /*#__PURE__*/React__default["default"].createElement("div", {
      className: "empty-image-botchat"
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "box-content"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: `${mes.object == 'visitor' ? 'visited-chat' : 'bot-chat'}`
    }, mes.content))), index == messages.length - 1 && !typing && /*#__PURE__*/React__default["default"].createElement("div", {
      className: "custom-time"
    }, calculateTimeDifference(mes.created_at, currentTime)), mes.attachment && !mes.attachment?.hidden && CustomButtonIntent({
      arr_button: mes.attachment.buttons,
      sendMess: sendMess,
      id: mes.id,
      setMessages: setMessages,
      messages: messages
    }))), typing && /*#__PURE__*/React__default["default"].createElement("li", {
      style: {
        textAlignLast: 'left'
      }
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "d-flex spacing-botchat"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "image-chatbot"
    }, /*#__PURE__*/React__default["default"].createElement(ChatbotIcon, {
      style: {
        width: '24px',
        height: '24px',
        marginTop: '3px'
      }
    })), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(BlinkingLoader, null))))), /*#__PURE__*/React__default["default"].createElement("div", {
      ref: chatRef
    })));
  };
  const FooterChat = ({
    sendMess
  }) => {
    const [customerMess, setCustomerMess] = React$1.useState("");
    const fileInputRef = React$1.useRef(null);
    const handleSend = () => {
      if (customerMess.content.trim() !== '') {
        sendMess({
          content: customerMess.content
        });
        setCustomerMess({
          ...customerMess,
          content: ''
        }); // Reset the content to an empty string
      }
    };

    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "height-10 chatbox-footer"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "width-10"
    }, /*#__PURE__*/React__default["default"].createElement("button", {
      className: "custom-add-file",
      "aria-label": "delete",
      color: "primary",
      onClick: () => {
        fileInputRef.current.click();
      }
    }, /*#__PURE__*/React__default["default"].createElement(AttachmentIcon, {
      style: {
        color: 'rgba(33, 150, 83, 0.85)',
        width: '24px',
        height: '24px'
      }
    }))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "width-90"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "text-field-send"
    }, /*#__PURE__*/React__default["default"].createElement("textarea", {
      className: "input-chatbot",
      type: "text",
      placeholder: "Type a message",
      value: customerMess.content,
      onChange: e => {
        setCustomerMess({
          ...customerMess,
          content: e.target.value
        });
      },
      onKeyPress: e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleSend();
        }
      }
    }), customerMess?.content !== "" && /*#__PURE__*/React__default["default"].createElement("button", {
      className: "send-button",
      onClick: e => {
        e.stopPropagation();
        e.preventDefault();
        handleSend();
      }
    }, /*#__PURE__*/React__default["default"].createElement(SendIcon, {
      style: {
        color: '#118264',
        width: '24px',
        height: '24px'
      }
    })))));
  };

  const {
    io
  } = require("socket.io-client");
  class SocketIO {
    constructor() {
      this.isConnect = false;
      const token_cache = Cookies__default["default"].get('chatbot-token');
      this.socket = io(process.env.REACT_APP_WSS_SOCKET, {
        transports: ["websocket"],
        upgrade: true,
        reconnection: true,
        query: token_cache ? {
          token: token_cache
        } : null
      });
      this.token = token_cache;
    }
    receiver_connect() {
      if (!this.socket) return;
      this.socket.on('connect', () => {
        console.log('Connected to the server');
        const engine = this.socket.io.engine;
        console.log('transports:', engine.transport.name); // in most cases, prints "polling"
        const sid = this.socket.id;
        console.log("Connected with socket ID:", sid);
        engine.once("upgrade", () => {
          // called when the transport is upgraded (i.e. from HTTP long-polling to WebSocket)
          console.log(engine.transport.name); // in most cases, prints "websocket"
        });
      });
    }

    receiver_connect_success(callback) {
      if (!this.socket) return;
      this.socket.on('connect_success', data => {
        const token_cache = data.token;
        this.token = token_cache;
        Cookies__default["default"].set('chatbot-token', token_cache);
        this.isConnect = true;
        if (callback) {
          callback(data);
        }
      });
    }
    receiver_disconnect(callback) {
      if (!this.socket) return;
      this.socket.on('disconnect', () => {
        console.log('Disconnected from the server');
        this.isConnect = false;
        if (callback) {
          callback();
        }
      });
    }
    receiver_message(callback) {
      if (!this.socket) return;
      this.socket.on('message', data => {
        if (callback) {
          callback(data);
        }
      });
    }
    send_message(object_mess, callback) {
      if (!this.socket) return;
      this.socket.emit('message', {
        ...object_mess,
        token: this.token
      });
      if (callback) {
        callback();
      }
    }
    receiver_conversation(callback) {
      if (!this.socket) return;
      this.socket.on('conversation', data => {
        if (callback) {
          callback(data);
        }
      });
    }
    receiver_typing(callback) {
      if (!this.socket) return;
      this.socket.on('typing', data => {
        if (callback) {
          callback(data);
        }
      });
    }
    receiver_send_success(callback) {
      if (!this.socket) return;
      this.socket.on('send_success', data => {
        if (callback) {
          callback(data);
        }
      });
    }
    load_conversation(offset, conversation_id, callback) {
      if (!this.socket) return;
      this.socket.emit('conversation', {
        offset: offset || 0,
        conversation_id: conversation_id || 0,
        token: this.token
      });
      if (callback) {
        callback();
      }
    }
    receiver_ping_pong(_socket) {
      if (!this.socket) return;
      this.socket.on('pong', data => {
        console.log('pong', data);
        setTimeout(function () {
          // console.log('ping', _socket)
          _socket.socket.emit("ping");
        }, 5000);
      });
    }
    disconnect() {
      if (!this.socket) return;
      // this.socket.emit("disconnect-clt");
    }
  }

  let socketInstance = null;
  function Button() {
    const [open, setOpen] = React$1.useState(false);
    const [socket, setSocket] = React$1.useState(null);
    const [conversation_id, setConversationId] = React$1.useState(null);
    const [messages, setMessages] = React$1.useState([]);
    const [isSend, setIsSend] = React$1.useState(false);
    const [isDisconnect, setIsDisconnect] = React$1.useState(false);
    const [typing, setTyping] = React$1.useState(false);
    const typingTimeoutRef = React$1.useRef(null);
    const currentDateTime = getCurrentDateTime();
    React$1.useEffect(() => {
      // Connect to the Socket.IO server
      if (!socketInstance) {
        socketInstance = new SocketIO();
        setSocket(socketInstance);
      }
      // Clean up the socket connection on component unmount
      return () => {
        socketInstance?.disconnect();
      };
    }, []);
    React$1.useEffect(() => {
      if (socket) {
        // Listen for 'message' events from the server
        socket.receiver_connect();
        socket.receiver_connect_success();
        socket.receiver_disconnect(() => {
          console.log(socket.isConnect, 'isConnect');
          setIsDisconnect(socket.isConnect);
        });
        socket.receiver_typing(data => {
          // Người khác đang typing sẽ bắn thông tin vào đây
          setTyping(true);
          clearInterval(typingTimeoutRef.current);
          typingTimeoutRef.current = setInterval(() => {
            setTyping(false);
          }, 3000);
        });
        socket.receiver_send_success(data => {
          // Lắng nghe gửi message thành công
          if (data) {
            setIsSend(true);
          }
          // console.log(data,'send_success')
        });

        socket.receiver_message(data => {
          // Viết logic sau khi nhận được tin nhắn vào đây
          // data là object chứa thông tin tin nhắn : nội dung tin, người gửi, thời gian gửi
          console.log(data, 'receiver mess');
          if (data) {
            setTyping(false);
          }
          if (!conversation_id) {
            setConversationId(data.conversation_id);
          }
          setMessages(prevData => [...prevData, data]);
        });
        socket.receiver_conversation(data => {
          // Trả về list message
          console.log(data, 'receiver_conversation');
          setMessages(data.items);
          setConversationId(data.conversation_id);
        });
        if (!conversation_id) {
          // Load list message lần đầu 
          socket.load_conversation(0, conversation_id);
        }
        socket.receiver_ping_pong(socket);
        socket.socket.emit("ping");
      }
    }, [socket]);
    const sendMess = mess => {
      console.log(mess, 'check messsss');
      const updatedMess = {
        ...mess,
        created_at: currentDateTime,
        object: "visitor"
      };
      socket.send_message({
        client_id: makeId(20),
        object: 'visitor',
        token: socket.token || null,
        conversation_id: conversation_id,
        ...mess
      }, () => {
        // Viết logic sau khi send vào đây
        // setIsSend(false)
        setMessages(prevData => [...prevData, updatedMess]);
      });
    };

    // const sendAttachment = (mess) =>{
    //   socket.send_message({
    //         type: 'text',
    //         message: mess,
    //         token: socket.token || null
    //       }, () => {
    //         // Viết logic sau khi send vào đây
    //       })
    // }

    const handleChangeOpen = () => {
      if (!conversation_id && !open) {
        socket.send_message({
          client_id: makeId(20),
          object: 'visitor',
          token: socket.token || null,
          is_start: true
        });
      }
      setOpen(!open);
      // sendMess('hello'); 
    };

    return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: `chatbox ${open ? 'show' : 'hide'}`
    }, /*#__PURE__*/React__default["default"].createElement(BoxChatAI, {
      messages: messages,
      setMessages: setMessages,
      handleChangeOpen: handleChangeOpen,
      sendMess: sendMess,
      isSend: isSend,
      setIsSend: setIsSend,
      isDisconnect: isDisconnect,
      typing: typing
    })), /*#__PURE__*/React__default["default"].createElement("button", {
      className: `custom-chatbot ${open ? 'hide' : 'show'}`,
      onClick: handleChangeOpen
    }, /*#__PURE__*/React__default["default"].createElement(ChatbotIcon, {
      style: {
        width: '32px',
        height: '32px'
      }
    })));
  }

  exports.Button = Button;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
