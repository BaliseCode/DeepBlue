"use strict";

(function () {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$editor = wp.editor,
      InspectorControls = _wp$editor.InspectorControls,
      InnerBlocks = _wp$editor.InnerBlocks,
      PanelColorSettings = _wp$editor.PanelColorSettings,
      ContrastChecker = _wp$editor.ContrastChecker,
      BlockControls = _wp$editor.BlockControls,
      MediaUpload = _wp$editor.MediaUpload;
  var Fragment = wp.element.Fragment;
  var _wp$components = wp.components,
      Panel = _wp$components.Panel,
      PanelBody = _wp$components.PanelBody,
      RangeControl = _wp$components.RangeControl,
      ColorPalette = _wp$components.ColorPalette,
      Toolbar = _wp$components.Toolbar,
      IconButton = _wp$components.IconButton,
      Button = _wp$components.Button,
      SelectControl = _wp$components.SelectControl,
      TextControl = _wp$components.TextControl;
  var __ = wp.i18n.__;
  var ALLOWED_MEDIA_TYPES = ['image'];
  registerBlockType('kaapeh/evenements', {
    title: 'Kaapeh Évènements',
    icon: 'layout',
    category: 'layout',
    supports: {
      align: ['full', 'wide'],
      inserter: true
    },
    attributes: {
      columnsCount: {
        type: 'number',
        default: 1
      }
    },
    edit: function edit(_ref) {
      var className = _ref.className,
          attributes = _ref.attributes,
          setAttributes = _ref.setAttributes;
      return wp.element.createElement(Fragment, null, wp.element.createElement("div", {
        className: "kaapeh-evenements"
      }, wp.element.createElement("div", {
        className: "inside"
      }, wp.element.createElement(InnerBlocks, {
        template: [['core/media-text', {}]]
      }))));
    },
    save: function save(_ref2) {
      var attributes = _ref2.attributes;
      return wp.element.createElement("div", {
        className: "kaapeh-evenements"
      }, wp.element.createElement("div", {
        className: "inside"
      }, wp.element.createElement(InnerBlocks.Content, null)));
    }
  });
})();
"use strict";

(function () {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$editor = wp.editor,
      InspectorControls = _wp$editor.InspectorControls,
      InnerBlocks = _wp$editor.InnerBlocks,
      PanelColorSettings = _wp$editor.PanelColorSettings,
      ContrastChecker = _wp$editor.ContrastChecker,
      BlockControls = _wp$editor.BlockControls,
      MediaUpload = _wp$editor.MediaUpload;
  var Fragment = wp.element.Fragment;
  var _wp$components = wp.components,
      Panel = _wp$components.Panel,
      PanelBody = _wp$components.PanelBody,
      RangeControl = _wp$components.RangeControl,
      ColorPalette = _wp$components.ColorPalette,
      Toolbar = _wp$components.Toolbar,
      IconButton = _wp$components.IconButton,
      Button = _wp$components.Button,
      SelectControl = _wp$components.SelectControl,
      TextControl = _wp$components.TextControl;
  var __ = wp.i18n.__;
  var ALLOWED_MEDIA_TYPES = ['image'];
  registerBlockType('kaapeh/menu', {
    title: 'Kaapeh Menu',
    icon: 'layout',
    category: 'layout',
    supports: {
      align: ['full', 'wide'],
      inserter: true
    },
    attributes: {
      columnsCount: {
        type: 'number',
        default: 1
      }
    },
    edit: function edit(_ref) {
      var className = _ref.className,
          attributes = _ref.attributes,
          setAttributes = _ref.setAttributes;
      return wp.element.createElement(Fragment, null, wp.element.createElement("div", {
        className: "kaapeh-menu"
      }, wp.element.createElement("div", {
        className: "blackboard"
      }, wp.element.createElement(InnerBlocks, null))));
    },
    save: function save(_ref2) {
      var attributes = _ref2.attributes;
      return wp.element.createElement("div", {
        className: "kaapeh-menu"
      }, wp.element.createElement("div", {
        className: "blackboard"
      }, wp.element.createElement(InnerBlocks.Content, null)));
    }
  });
})();
"use strict";

(function () {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$editor = wp.editor,
      InspectorControls = _wp$editor.InspectorControls,
      InnerBlocks = _wp$editor.InnerBlocks,
      PanelColorSettings = _wp$editor.PanelColorSettings,
      ContrastChecker = _wp$editor.ContrastChecker,
      BlockControls = _wp$editor.BlockControls,
      MediaUpload = _wp$editor.MediaUpload;
  var Fragment = wp.element.Fragment;
  var _wp$components = wp.components,
      Panel = _wp$components.Panel,
      PanelBody = _wp$components.PanelBody,
      RangeControl = _wp$components.RangeControl,
      ColorPalette = _wp$components.ColorPalette,
      Toolbar = _wp$components.Toolbar,
      IconButton = _wp$components.IconButton,
      Button = _wp$components.Button,
      SelectControl = _wp$components.SelectControl,
      TextControl = _wp$components.TextControl;
  var __ = wp.i18n.__;
  var ALLOWED_MEDIA_TYPES = ['image'];

  var generateTemplate = function generateTemplate(count) {
    var template = [];

    for (var i = 0; i < count; i++) {
      template.push(['balise/section-block-col']);
    }

    return template;
  };

  var generateStyle = function generateStyle(attributes) {
    var style = {};

    if (attributes.backgroundColor) {
      style.backgroundColor = attributes.backgroundColor;
    }

    if (attributes.textColor) {
      style.color = attributes.textColor;
    }

    if (attributes.backgroundImage) {
      style.backgroundImage = "url(".concat(attributes.backgroundImage.sizes.full.url, ")");
    }

    if (attributes.paddingTop) {
      style.paddingTop = attributes.paddingTop + "%";
    }

    if (attributes.paddingBottom) {
      style.paddingBottom = attributes.paddingBottom + "%";
    }

    if (attributes.paddingRight) {
      style.paddingRight = attributes.paddingRight + "%";
    }

    if (attributes.paddingLeft) {
      style.paddingLeft = attributes.paddingLeft + "%";
    }

    return style;
  };

  registerBlockType('balise/section-block-col', {
    title: __('Column'),
    icon: 'layout',
    category: 'layout',
    parent: ['balise/section-block'],
    attributes: {
      textColor: {
        type: 'color'
      },
      backgroundColor: {
        type: 'color'
      },
      backgroundImage: {
        type: 'image'
      },
      paddingTop: {
        type: 'number'
      },
      paddingBottom: {
        type: 'number'
      },
      paddingLeft: {
        type: 'number'
      },
      paddingRight: {
        type: 'number'
      }
    },
    edit: function edit(_ref) {
      var className = _ref.className,
          attributes = _ref.attributes,
          setAttributes = _ref.setAttributes;

      var setTextColor = function setTextColor(textColor) {
        setAttributes({
          textColor: textColor
        });
      };

      var setBackgroundColor = function setBackgroundColor(backgroundColor) {
        setAttributes({
          backgroundColor: backgroundColor
        });
      };

      var onSelectImage = function onSelectImage(backgroundImage) {
        if (!backgroundImage) {
          setAttributes({
            backgroundImage: {
              url: undefined,
              alt: undefined,
              id: undefined,
              caption: undefined
            }
          });
        } else {
          setAttributes({
            backgroundImage: backgroundImage
          });
        }
      };

      var setPaddingTop = function setPaddingTop(paddingTop) {
        setAttributes({
          paddingTop: paddingTop
        });
      };

      var setPaddingBottom = function setPaddingBottom(paddingBottom) {
        setAttributes({
          paddingBottom: paddingBottom
        });
      };

      var setPaddingLeft = function setPaddingLeft(paddingLeft) {
        setAttributes({
          paddingLeft: paddingLeft
        });
      };

      var setPaddingRight = function setPaddingRight(paddingRight) {
        setAttributes({
          paddingRight: paddingRight
        });
      };

      var style = generateStyle(attributes);
      return wp.element.createElement(Fragment, null, wp.element.createElement(BlockControls, null, wp.element.createElement(Toolbar, null, wp.element.createElement(MediaUpload, {
        onSelect: onSelectImage,
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: attributes.backgroundImage && attributes.backgroundImage.id,
        render: function render(_ref2) {
          var open = _ref2.open;
          return wp.element.createElement(IconButton, {
            label: __('Edit image'),
            icon: "format-image",
            onClick: open
          });
        }
      }))), wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelColorSettings, {
        title: __('Color Settings'),
        initialOpen: true,
        colorSettings: [{
          value: attributes.backgroundColor,
          onChange: setBackgroundColor,
          label: __('Background Color')
        }, {
          value: attributes.textColor,
          onChange: setTextColor,
          label: __('Text Color')
        }]
      }), wp.element.createElement(PanelBody, {
        title: __('Padding')
      }, wp.element.createElement(RangeControl, {
        label: __('Top'),
        value: attributes.paddingTop,
        onChange: setPaddingTop,
        min: 0,
        max: 100
      }), wp.element.createElement(RangeControl, {
        label: __('Bottom'),
        value: attributes.paddingBottom,
        onChange: setPaddingBottom,
        min: 0,
        max: 100
      }), wp.element.createElement(RangeControl, {
        label: __('Left'),
        value: attributes.paddingLeft,
        onChange: setPaddingLeft,
        min: 0,
        max: 100
      }), wp.element.createElement(RangeControl, {
        label: __('Right'),
        value: attributes.paddingRight,
        onChange: setPaddingRight,
        min: 0,
        max: 100
      }))), wp.element.createElement("div", {
        className: "_sectionblock-slide ",
        style: {
          color: attributes.textColor,
          paddingTop: attributes.paddingTop,
          paddingBottom: attributes.paddingBottom
        }
      }, wp.element.createElement("div", {
        "class": "_background",
        style: style
      }), wp.element.createElement(InnerBlocks, {
        templateLock: false
      })));
    },
    save: function save(_ref3) {
      var attributes = _ref3.attributes;
      var style = generateStyle(attributes);
      console.log(style);
      return wp.element.createElement(Fragment, null, wp.element.createElement("div", {
        style: style
      }, wp.element.createElement(InnerBlocks.Content, null)));
    }
  });
  registerBlockType('balise/section-block', {
    title: 'Section Block',
    icon: 'layout',
    category: 'layout',
    supports: {
      align: ['full', 'wide'],
      inserter: true
    },
    attributes: {
      columnsCount: {
        type: 'number',
        default: 1
      }
    },
    edit: function edit(_ref4) {
      var className = _ref4.className,
          attributes = _ref4.attributes,
          setAttributes = _ref4.setAttributes;
      var classes = "_sectionblock has-".concat(attributes.columnsCount, "-columns");

      var ajustColumns = function ajustColumns(newColumnCount) {
        setAttributes({
          columnsCount: newColumnCount
        });
      };

      var onSelectImage = function onSelectImage(backgroundImage) {
        if (!backgroundImage) {
          setAttributes({
            backgroundImage: {
              url: undefined,
              alt: undefined,
              id: undefined,
              caption: undefined
            }
          });
        } else {
          setAttributes({
            backgroundImage: backgroundImage
          });
        }
      };

      var style = {};
      return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: __('Columns')
      }, wp.element.createElement(RangeControl, {
        label: __('Columns'),
        value: attributes.columnsCount,
        onChange: ajustColumns,
        min: 1,
        max: 6
      }))), wp.element.createElement("div", {
        className: "_sectionblock has-".concat(attributes.columnsCount, "-columns")
      }, wp.element.createElement(InnerBlocks, {
        template: generateTemplate(attributes.columnsCount),
        allowedBlocks: ['balise/section-block-col'],
        templateLock: "all"
      })));
    },
    save: function save(_ref5) {
      var attributes = _ref5.attributes;
      var style = {};
      return wp.element.createElement("div", {
        className: "_sectionblock has-".concat(attributes.columnsCount, "-columns")
      }, wp.element.createElement(InnerBlocks.Content, null));
    }
  });
})();