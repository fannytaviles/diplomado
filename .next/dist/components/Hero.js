'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Logo = require('../components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Searcher = require('../components/Searcher');

var _Searcher2 = _interopRequireDefault(_Searcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fannytaviles/Documents/diplomado/components/Hero.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  max-width: 1024px;\n  margin: 0 auto;\n  text-align: center;\n'], ['\n  max-width: 1024px;\n  margin: 0 auto;\n  text-align: center;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  background: url(/static/images/bgImage.jpg);\n  background-repeat: no-repeat;\n  background-position: center -100px;\n  position: relative;\n  background-size: 100% auto;\n  @media (max-width: 1023px) {\n    background: rgb(233, 131, 238);\n  }\n'], ['\n  background: url(/static/images/bgImage.jpg);\n  background-repeat: no-repeat;\n  background-position: center -100px;\n  position: relative;\n  background-size: 100% auto;\n  @media (max-width: 1023px) {\n    background: rgb(233, 131, 238);\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  background: linear-gradient(to left, ', ', ', ');\n  padding: 80px 0 186px;\n '], ['\n  background: linear-gradient(to left, ', ', ', ');\n  padding: 80px 0 186px;\n ']);

var Wrapper = _styledComponents2.default.section(_templateObject);
var Container = _styledComponents2.default.section(_templateObject2);

var Gradient = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.secondary;
});
function Hero() {
  return _react2.default.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement(Gradient, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(_reactStyledFlexboxgrid.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xsOffset: 1, xs: 10, __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement(_Logo2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), _react2.default.createElement(_Searcher2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }))))));
}

exports.default = Hero;