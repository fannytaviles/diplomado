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

var _jsxFileName = '/Users/fannytaviles/Documents/diplomado/components/Searcher.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  font-weight: bold;\n  font-family: ', '\n  @media (max-width: 1023px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  font-weight: bold;\n  font-family: ', '\n  @media (max-width: 1023px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  flex: 1;\n  margin-right: 1rem;\n  ', '\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  @media (max-width: 1023px) {\n    margin-right: 0;\n  }\n'], ['\n  flex: 1;\n  margin-right: 1rem;\n  ', '\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  @media (max-width: 1023px) {\n    margin-right: 0;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  background: ', ';\n  padding: 0.5rem 46px;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: white;\n  ', '\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);\n  font-size: 1rem;\n  @media (max-width: 1023px) {\n    margin-top: 1rem;\n  }\n'], ['\n  background: ', ';\n  padding: 0.5rem 46px;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: white;\n  ', '\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);\n  font-size: 1rem;\n  @media (max-width: 1023px) {\n    margin-top: 1rem;\n  }\n']);

var SearcherForm = _styledComponents2.default.form(_templateObject, function (props) {
  return props.theme.font.title;
});
var DefaultStyles = '\n  outline: 0;\n  border: none;\n  border-radius: 4px;\n';
var SearcherInput = _styledComponents2.default.input(_templateObject2, DefaultStyles);
var ButtonContainer = _styledComponents2.default.button(_templateObject3, function (props) {
  return props.theme.colors.secondaryHex;
}, DefaultStyles);

function Searcher() {
  return _react2.default.createElement(SearcherForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement(SearcherInput, { type: 'text', placeholder: 'Busca por canci\xF3n, artista o \xE1lbum', __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement(ButtonContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, 'Buscar')));
}

exports.default = Searcher;