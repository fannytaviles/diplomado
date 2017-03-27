'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/fannytaviles/Documents/diplomado/node_modules/next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex\n  margin-top: 108px\n'], ['\n  display: flex\n  margin-top: 108px\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  flex: 1\n  margin-right: 1rem\n  border-radius: 4px\n  border: none\n  outline: none\n  padding: 0.5rem 1rem\n  font-size: 1rem\n'], ['\n  flex: 1\n  margin-right: 1rem\n  border-radius: 4px\n  border: none\n  outline: none\n  padding: 0.5rem 1rem\n  font-size: 1rem\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  background: #ea83ee\n  padding: 0.5rem 46px\n  text-transform: uppercase\n  font-weight: bold\n  color: white\n  outline: none\n  border: none\n  border-radius: 4px\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);\n  font-size: 1rem\n'], ['\n  background: #ea83ee\n  padding: 0.5rem 46px\n  text-transform: uppercase\n  font-weight: bold\n  color: white\n  outline: none\n  border: none\n  border-radius: 4px\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);\n  font-size: 1rem\n']);

var _react = require('/Users/fannytaviles/Documents/diplomado/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearcherForm = _styledComponents2.default.form(_templateObject);
var SearcherInput = _styledComponents2.default.input(_templateObject2);
var SearcherButton = _styledComponents2.default.button(_templateObject3);
function Searcher() {
  return _react2.default.createElement(
    SearcherForm,
    null,
    _react2.default.createElement(SearcherInput, { type: 'text', placeholder: 'Busca por canci\xF3n, artista o \xE1lbum' }),
    _react2.default.createElement(
      SearcherButton,
      null,
      'Buscar'
    )
  );
}

exports.default = Searcher;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoZXIuanMiXSwibmFtZXMiOlsiU2VhcmNoZXJGb3JtIiwiZm9ybSIsIlNlYXJjaGVySW5wdXQiLCJpbnB1dCIsIlNlYXJjaGVyQnV0dG9uIiwiYnV0dG9uIiwiU2VhcmNoZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSwyQkFBT0MsSUFBdEIsaUJBQU47QUFJQSxJQUFNQyxnQkFBZ0IsMkJBQU9DLEtBQXZCLGtCQUFOO0FBU0EsSUFBTUMsaUJBQWlCLDJCQUFPQyxNQUF4QixrQkFBTjtBQVlBLFNBQVNDLFFBQVQsR0FBb0I7QUFDbEIsU0FDRTtBQUFDLGdCQUFEO0FBQUE7QUFDRSxrQ0FBQyxhQUFELElBQWUsTUFBSyxNQUFwQixFQUEyQixhQUFZLDBDQUF2QyxHQURGO0FBRUU7QUFBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUZGLEdBREY7QUFNRDs7a0JBRWNBLFEiLCJmaWxlIjoiU2VhcmNoZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Zhbm55dGF2aWxlcy9Eb2N1bWVudHMvZGlwbG9tYWRvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTZWFyY2hlckZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgZGlzcGxheTogZmxleFxuICBtYXJnaW4tdG9wOiAxMDhweFxuYDtcbmNvbnN0IFNlYXJjaGVySW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGZsZXg6IDFcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtXG4gIGJvcmRlci1yYWRpdXM6IDRweFxuICBib3JkZXI6IG5vbmVcbiAgb3V0bGluZTogbm9uZVxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbVxuICBmb250LXNpemU6IDFyZW1cbmA7XG5jb25zdCBTZWFyY2hlckJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6ICNlYTgzZWVcbiAgcGFkZGluZzogMC41cmVtIDQ2cHhcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxuICBmb250LXdlaWdodDogYm9sZFxuICBjb2xvcjogd2hpdGVcbiAgb3V0bGluZTogbm9uZVxuICBib3JkZXI6IG5vbmVcbiAgYm9yZGVyLXJhZGl1czogNHB4XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgZm9udC1zaXplOiAxcmVtXG5gO1xuZnVuY3Rpb24gU2VhcmNoZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPFNlYXJjaGVyRm9ybT5cbiAgICAgIDxTZWFyY2hlcklucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCdXNjYSBwb3IgY2FuY2nDs24sIGFydGlzdGEgbyDDoWxidW1cIiAvPlxuICAgICAgPFNlYXJjaGVyQnV0dG9uPkJ1c2NhcjwvU2VhcmNoZXJCdXR0b24+XG4gICAgPC9TZWFyY2hlckZvcm0+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaGVyOyJdfQ==