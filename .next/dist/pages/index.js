'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/fannytaviles/Documents/diplomado/node_modules/next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/fannytaviles/Documents/diplomado/node_modules/next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/fannytaviles/Documents/diplomado/node_modules/next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/fannytaviles/Documents/diplomado/node_modules/next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/fannytaviles/Documents/diplomado/node_modules/next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('/Users/fannytaviles/Documents/diplomado/node_modules/next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  @font-face {\n    font-family: \'Operator Mono\';\n    src: url(\'../fonts/Operator-Mono.ttf\');\n  }\n\n  body {\n    margin: 0;\n  }\n'], ['\n  @font-face {\n    font-family: \'Operator Mono\';\n    src: url(\'../fonts/Operator-Mono.ttf\');\n  }\n\n  body {\n    margin: 0;\n  }\n']);

var _react = require('/Users/fannytaviles/Documents/diplomado/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Hero = require('../components/Hero');

var _Hero2 = _interopRequireDefault(_Hero);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _styledComponents = require('styled-components');

var _theme = require('../lib/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _styledComponents.injectGlobal)(_templateObject);

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);
    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _styledComponents.ThemeProvider,
        { theme: _theme2.default },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Hero2.default, null),
          _react2.default.createElement(_Footer2.default, {
            benefits: [{ title: 'Música', description: 'Platzi music cuenta con miles de canciones' }, { title: 'Playlist', description: 'Crea tus propias playlist' }, { title: 'Nuevos lanzamientos', description: 'Sencillos y álbumnes de la semana' }]
          })
        )
      );
    }
  }]);
  return Home;
}(_react.Component);

exports.default = Home;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFHQTs7SUFXcUJBLEk7Ozs7Ozs7Ozs7NkJBQ1Y7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFlLHNCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsNkRBREY7QUFFRTtBQUNFLHNCQUFVLENBQUMsRUFBQ0MsT0FBTyxRQUFSLEVBQWtCQyxhQUFhLDRDQUEvQixFQUFELEVBQStFLEVBQUNELE9BQU8sVUFBUixFQUFvQkMsYUFBYSwyQkFBakMsRUFBL0UsRUFBOEksRUFBQ0QsT0FBTyxxQkFBUixFQUErQkMsYUFBYSxtQ0FBNUMsRUFBOUk7QUFEWjtBQUZGO0FBREYsT0FERjtBQVVEOzs7OztrQkFaa0JGLEk7QUFhcEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Zhbm55dGF2aWxlcy9Eb2N1bWVudHMvZGlwbG9tYWRvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvSGVybyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vbGliL3RoZW1lJztcbmltcG9ydCB7IGluamVjdEdsb2JhbCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW5qZWN0R2xvYmFsYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZXJhdG9yIE1vbm8nO1xuICAgIHNyYzogdXJsKCcuLi9mb250cy9PcGVyYXRvci1Nb25vLnR0ZicpO1xuICB9XG5cbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZXJvLz5cbiAgICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgICBiZW5lZml0cz17W3t0aXRsZTogJ03DunNpY2EnLCBkZXNjcmlwdGlvbjogJ1BsYXR6aSBtdXNpYyBjdWVudGEgY29uIG1pbGVzIGRlIGNhbmNpb25lcyd9LCB7dGl0bGU6ICdQbGF5bGlzdCcsIGRlc2NyaXB0aW9uOiAnQ3JlYSB0dXMgcHJvcGlhcyBwbGF5bGlzdCd9LCB7dGl0bGU6ICdOdWV2b3MgbGFuemFtaWVudG9zJywgZGVzY3JpcHRpb246ICdTZW5jaWxsb3MgeSDDoWxidW1uZXMgZGUgbGEgc2VtYW5hJ30gXX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApXG4gIH1cbn07Il19