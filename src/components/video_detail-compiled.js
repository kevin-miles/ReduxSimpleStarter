"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoDetail = function VideoDetail(_ref) {
    var video = _ref.video;

    if (!video) {
        return _react2.default.createElement(
            "div",
            null,
            "Loading..."
        );
    }
    var videoId = video.id.videoId;
    var url = "https://www.youtube.com/embed/" + videoId;

    return _react2.default.createElement(
        "div",
        { className: "video-detail col-md-8" },
        _react2.default.createElement(
            "div",
            { className: "embed-responsive embed-responsive-16by9" },
            _react2.default.createElement("iframe", { src: url, className: "embed-responsive-item" })
        ),
        _react2.default.createElement(
            "div",
            { className: "details" },
            _react2.default.createElement(
                "div",
                null,
                video.snippet.title
            ),
            _react2.default.createElement(
                "div",
                null,
                video.snippet.description
            )
        )
    );
};

exports.default = VideoDetail;

//# sourceMappingURL=video_detail-compiled.js.map