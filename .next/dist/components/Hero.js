'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/fannytaviles/Documents/diplomado/node_modules/next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  max-width: 1024px\n  margin: 0 auto\n  text-align: center\n'], ['\n  max-width: 1024px\n  margin: 0 auto\n  text-align: center\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  background: linear-gradient(to left, #5179ff, #e983ee)\n  padding: 80px 0 186px\n'], ['\n  background: linear-gradient(to left, #5179ff, #e983ee)\n  padding: 80px 0 186px\n']);

var _react = require('/Users/fannytaviles/Documents/diplomado/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Logo = require('../components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Searcher = require('../components/Searcher');

var _Searcher2 = _interopRequireDefault(_Searcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.section(_templateObject);
var Container = _styledComponents2.default.section(_templateObject2);

function Hero() {
  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(
      Wrapper,
      null,
      _react2.default.createElement(
        _reactStyledFlexboxgrid.Row,
        null,
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xsOffset: 1, xs: 10 },
          _react2.default.createElement(_Logo2.default, null),
          _react2.default.createElement(_Searcher2.default, null)
        )
      )
    )
  );
}

exports.default = Hero;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVyby5qcyJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic2VjdGlvbiIsIkNvbnRhaW5lciIsIkhlcm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQ0EsSUFBTUEsVUFBVSwyQkFBT0MsT0FBakIsaUJBQU47QUFLQSxJQUFNQyxZQUFZLDJCQUFPRCxPQUFuQixrQkFBTjs7QUFLQSxTQUFTRSxJQUFULEdBQWdCO0FBQ2QsU0FDRTtBQUFDLGFBQUQ7QUFBQTtBQUNFO0FBQUMsYUFBRDtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssVUFBVSxDQUFmLEVBQWtCLElBQUksRUFBdEI7QUFDRSw2REFERjtBQUVFO0FBRkY7QUFERjtBQURGO0FBREYsR0FERjtBQWFEOztrQkFFY0EsSSIsImZpbGUiOiJIZXJvLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mYW5ueXRhdmlsZXMvRG9jdW1lbnRzL2RpcGxvbWFkbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcmlkLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LXN0eWxlZC1mbGV4Ym94Z3JpZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nbyc7XG5pbXBvcnQgU2VhcmNoZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hlcic7XG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1heC13aWR0aDogMTAyNHB4XG4gIG1hcmdpbjogMCBhdXRvXG4gIHRleHQtYWxpZ246IGNlbnRlclxuYDtcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzUxNzlmZiwgI2U5ODNlZSlcbiAgcGFkZGluZzogODBweCAwIDE4NnB4XG5gO1xuXG5mdW5jdGlvbiBIZXJvKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzT2Zmc2V0PXsxfSB4cz17MTB9PlxuICAgICAgICAgICAgPExvZ28vPlxuICAgICAgICAgICAgPFNlYXJjaGVyLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9Db250YWluZXI+XG4gIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvOyJdfQ==