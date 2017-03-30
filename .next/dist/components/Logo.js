'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fannytaviles/Documents/diplomado/components/Logo.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  color: white;\n  font-weight: bold;\n'], ['\n  color: white;\n  font-weight: bold;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  font-weight: bold;\n'], ['\n  color: ', ';\n  font-weight: bold;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-family: ', '\n  font-size: 3rem\n'], ['\n  font-family: ', '\n  font-size: 3rem\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 18px;\n  margin: 24px 0 60px;\n  color: white;\n  font-family: ', ';\n'], ['\n  font-size: 18px;\n  margin: 24px 0 60px;\n  color: white;\n  font-family: ', ';\n']);

var Platzi = _styledComponents2.default.span(_templateObject);
var Music = _styledComponents2.default.span(_templateObject2, function (props) {
  return props.theme.colors.tertiary;
});
var Container = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.font.title;
});

var Subtitle = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.theme.font.title;
});

function Logo() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement(Platzi, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, 'Platzi'), _react2.default.createElement(Music, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'Music')), _react2.default.createElement(Subtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'Tu m\xFAsica sin l\xEDmites'));
}
exports.default = Logo;