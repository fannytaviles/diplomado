'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Benefit = require('../components/Benefit');

var _Benefit2 = _interopRequireDefault(_Benefit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fannytaviles/Documents/diplomado/components/Footer.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  max-width: 1024px\n  margin: 0 auto\n  font-family: ', '\n'], ['\n  max-width: 1024px\n  margin: 0 auto\n  font-family: ', '\n']);

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.font.title;
});

function Footer(props) {
  return _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_reactStyledFlexboxgrid.Row, { center: 'xs', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, props.benefits.map(function (benefit, index) {
    return _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 3, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, _react2.default.createElement(_Benefit2.default, (0, _extends3.default)({}, benefit, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    })));
  })));
}

exports.default = Footer;