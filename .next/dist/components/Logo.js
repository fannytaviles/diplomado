'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/fannytaviles/Documents/diplomado/node_modules/next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  color: white\n'], ['\n  color: white\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: #bfafd9\n'], ['\n  color: #bfafd9\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-family: ', '\n  font-size: 3rem\n'], ['\n  font-family: ', '\n  font-size: 3rem\n']);

var _react = require('/Users/fannytaviles/Documents/diplomado/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Platzi = _styledComponents2.default.span(_templateObject);
var Music = _styledComponents2.default.span(_templateObject2);
var Container = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.font.title;
});

function Logo() {
  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(
      Platzi,
      null,
      'Platzi'
    ),
    _react2.default.createElement(
      Music,
      null,
      'Music'
    )
  );
}
exports.default = Logo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTG9nby5qcyJdLCJuYW1lcyI6WyJQbGF0emkiLCJzcGFuIiwiTXVzaWMiLCJDb250YWluZXIiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiZm9udCIsInRpdGxlIiwiTG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLDJCQUFPQyxJQUFoQixpQkFBTjtBQUdBLElBQU1DLFFBQVEsMkJBQU9ELElBQWYsa0JBQU47QUFHQSxJQUFNRSxZQUFZLDJCQUFPQyxHQUFuQixtQkFDVztBQUFBLFNBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkMsS0FBMUI7QUFBQSxDQURYLENBQU47O0FBS0EsU0FBU0MsSUFBVCxHQUFnQjtBQUNkLFNBQ0U7QUFBQyxhQUFEO0FBQUE7QUFDRTtBQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUZGLEdBREY7QUFNRDtrQkFDY0EsSSIsImZpbGUiOiJMb2dvLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mYW5ueXRhdmlsZXMvRG9jdW1lbnRzL2RpcGxvbWFkbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUGxhdHppID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiB3aGl0ZVxuYDtcbmNvbnN0IE11c2ljID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAjYmZhZmQ5XG5gO1xuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udC50aXRsZX1cbiAgZm9udC1zaXplOiAzcmVtXG5gO1xuXG5mdW5jdGlvbiBMb2dvKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8UGxhdHppPlBsYXR6aTwvUGxhdHppPlxuICAgICAgPE11c2ljPk11c2ljPC9NdXNpYz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IExvZ287Il19