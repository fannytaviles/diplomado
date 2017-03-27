'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/fannytaviles/Documents/diplomado/node_modules/next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  max-width: 1024px\n  margin: 0 auto\n  font-family: ', '\n'], ['\n  max-width: 1024px\n  margin: 0 auto\n  font-family: ', '\n']);

var _react = require('/Users/fannytaviles/Documents/diplomado/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Benefit = require('../components/Benefit');

var _Benefit2 = _interopRequireDefault(_Benefit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.font.title;
});

function Footer(props) {
  return _react2.default.createElement(
    Wrapper,
    null,
    _react2.default.createElement(
      _reactStyledFlexboxgrid.Row,
      null,
      props.benefits.map(function (benefit) {
        return _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xs: 3 },
          _react2.default.createElement(_Benefit2.default, benefit)
        );
      })
    )
  );
}

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiZm9udCIsInRpdGxlIiwiRm9vdGVyIiwiYmVuZWZpdHMiLCJtYXAiLCJiZW5lZml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBLElBQU1BLFVBQVUsMkJBQU9DLEdBQWpCLGtCQUdXO0FBQUEsU0FBU0MsTUFBTUMsS0FBTixDQUFZQyxJQUFaLENBQWlCQyxLQUExQjtBQUFBLENBSFgsQ0FBTjs7QUFNQSxTQUFTQyxNQUFULENBQWlCSixLQUFqQixFQUF3QjtBQUN0QixTQUNFO0FBQUMsV0FBRDtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0dBLFlBQU1LLFFBQU4sQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxPQUFELEVBQWE7QUFDL0IsZUFDRTtBQUFBO0FBQUEsWUFBSyxJQUFJLENBQVQ7QUFDRSwyREFDTUEsT0FETjtBQURGLFNBREY7QUFPRCxPQVJBO0FBREg7QUFERixHQURGO0FBZUQ7O2tCQUVjSCxNIiwiZmlsZSI6IkZvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmFubnl0YXZpbGVzL0RvY3VtZW50cy9kaXBsb21hZG8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tICdyZWFjdC1zdHlsZWQtZmxleGJveGdyaWQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQmVuZWZpdCBmcm9tICcuLi9jb21wb25lbnRzL0JlbmVmaXQnXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiAxMDI0cHhcbiAgbWFyZ2luOiAwIGF1dG9cbiAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udC50aXRsZX1cbmA7XG5cbmZ1bmN0aW9uIEZvb3RlciAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxSb3c+XG4gICAgICAgIHtwcm9wcy5iZW5lZml0cy5tYXAoKGJlbmVmaXQpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICAgIDxCZW5lZml0IFxuICAgICAgICAgICAgICAgIHsuLi5iZW5lZml0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvUm93PlxuICAgIDwvV3JhcHBlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il19