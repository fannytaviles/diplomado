'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Hero = require('../components/Hero');

var _Hero2 = _interopRequireDefault(_Hero);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _styledComponents = require('styled-components');

var _theme = require('../lib/theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('../lib/theme2');

var _theme4 = _interopRequireDefault(_theme3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fannytaviles/Documents/diplomado/pages/index.js?entry';


var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_styledComponents.ThemeProvider, { theme: _theme2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_Hero2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), _react2.default.createElement(_Footer2.default, {
        benefits: [{ title: 'Música', description: 'Platzi music cuenta con miles de canciones' }, { title: 'Playlist', description: 'Crea tus propias playlist' }, { title: 'Nuevos lanzamientos', description: 'Sencillos y álbumnes de la semana' }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

;