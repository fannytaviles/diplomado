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

var _jsxFileName = '/Users/fannytaviles/Documents/diplomado/components/Benefit.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin: 3rem 0;\n  @media (max-width:1023px) {\n    margin: 1.5rem 0;\n  }\n'], ['\n  margin: 3rem 0;\n  @media (max-width:1023px) {\n    margin: 1.5rem 0;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 1rem;\n  font-size: 1rem;\n  font-weight: bold;\n'], ['\n  margin-bottom: 1rem;\n  font-size: 1rem;\n  font-weight: bold;\n']);

var Container = _styledComponents2.default.article(_templateObject);

var Title = _styledComponents2.default.h3(_templateObject2);

function Benefit(props) {
  return _react2.default.createElement(Container, { key: props.key, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, props.title), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, props.description));
}

exports.default = Benefit;