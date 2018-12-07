(()=>{
    const {
        registerBlockType
    } = wp.blocks;
    const {
        InspectorControls,
        InnerBlocks,
        PanelColorSettings,
        ContrastChecker,
        BlockControls,
        MediaUpload
    } = wp.editor;
    const {
        Fragment
    } = wp.element
    const {
        Panel,
        PanelBody,
        RangeControl,
        ColorPalette,
        Toolbar,
        IconButton,
        Button,
        SelectControl,
        TextControl
    } = wp.components
    const { __ } = wp.i18n
    const ALLOWED_MEDIA_TYPES = [ 'image' ];

    const generateTemplate = function(count) {
        let template = []
        for (var i=0; i < count; i++) {
            template.push(['balise/section-block-col'])
        }
        return template
    }
    const generateStyle = function(attributes) {
        let style = {};
        if (attributes.backgroundColor) {
            style.backgroundColor= attributes.backgroundColor;
        }
        if (attributes.textColor) {
            style.color = attributes.textColor;
        }
        if (attributes.backgroundImage) {
            style.backgroundImage= `url(${attributes.backgroundImage.sizes.full.url})`;
        }
        if (attributes.paddingTop) {
            style.paddingTop = attributes.paddingTop+"%";
        }
        if (attributes.paddingBottom) {
            style.paddingBottom = attributes.paddingBottom+"%";
        }
        if (attributes.paddingRight) {
            style.paddingRight = attributes.paddingRight+"%";
        }
        if (attributes.paddingLeft) {
            style.paddingLeft = attributes.paddingLeft+"%";
        }

        return style;
    }


    registerBlockType(
        'balise/section-block-col',
        {
            title: __( 'Column' ),
            icon: 'layout',
            category: 'layout',
            parent: [ 'balise/section-block' ],
            attributes: {
                textColor: {
                    type: 'color',
                },
                backgroundColor: {
                    type: 'color',
                },
                backgroundImage: {
                    type: 'image',
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

            edit({ className, attributes, setAttributes }) {
                const setTextColor = (textColor) => { setAttributes( { textColor } ); }
                const setBackgroundColor = (backgroundColor) => { setAttributes( { backgroundColor} ); }
                const onSelectImage = (backgroundImage) => {
                    if (!backgroundImage) {
                        setAttributes({ backgroundImage:  { url: undefined, alt: undefined, id: undefined, caption: undefined } })
                    } else {
                        setAttributes({ backgroundImage })
                    }
                }
                const setPaddingTop = (paddingTop) => { setAttributes( { paddingTop } ); }
                const setPaddingBottom = (paddingBottom) => { setAttributes( { paddingBottom } ); }
                const setPaddingLeft = (paddingLeft) => { setAttributes( { paddingLeft } ); }
                const setPaddingRight = (paddingRight) => { setAttributes( { paddingRight } ); }


                const style = generateStyle(attributes);
                return (
                    <Fragment>
                        <BlockControls>
                            <Toolbar>
                                <MediaUpload
                                    onSelect={ onSelectImage }
                                    allowedTypes={ ALLOWED_MEDIA_TYPES }
                                    value={ attributes.backgroundImage && attributes.backgroundImage.id }
                                    render={ ( { open } ) => (
                                        <IconButton
                                            label={ __( 'Edit image' ) }
                                            icon="format-image"
                                            onClick={ open }
                                            />
                                    ) }
                                    />
                            </Toolbar>
                        </BlockControls>
                        <InspectorControls>
                            <PanelColorSettings
                                title={ __( 'Color Settings' ) }
                                initialOpen={ true }
                                colorSettings={ [
                                    {
                                        value: attributes.backgroundColor,
                                        onChange: setBackgroundColor,
                                        label: __( 'Background Color' ),
                                    },
                                    {
                                        value: attributes.textColor,
                                        onChange: setTextColor,
                                        label: __( 'Text Color' ),
                                    },
                                ] }
                                />
                                <PanelBody title={ __( 'Padding' ) }>
                                    <RangeControl
                                        label={ __( 'Top' ) }
                                        value={ attributes.paddingTop }
                                        onChange={ setPaddingTop }
                                        min={ 0 }
                                        max={ 100 }
                                        />
                                        <RangeControl
                                            label={ __( 'Bottom' ) }
                                            value={ attributes.paddingBottom }
                                            onChange={ setPaddingBottom }
                                            min={ 0 }
                                            max={ 100 }
                                            />
                                            <RangeControl
                                                label={ __( 'Left' ) }
                                                value={ attributes.paddingLeft }
                                                onChange={ setPaddingLeft }
                                                min={ 0 }
                                                max={ 100 }
                                                />
                                                <RangeControl
                                                    label={ __( 'Right' ) }
                                                    value={ attributes.paddingRight }
                                                    onChange={ setPaddingRight }
                                                    min={ 0 }
                                                    max={ 100 }
                                                    />
                                </PanelBody>


                        </InspectorControls>

                        <div className="_sectionblock-slide " style={{
                                color: attributes.textColor,
                                paddingTop: attributes.paddingTop,
                                paddingBottom: attributes.paddingBottom
                            }}>
                            <div class="_background"  style={style}></div>
                            <InnerBlocks
                                templateLock={false} />
                        </div>
                    </Fragment>
                );
            },
            save({ attributes }) {
                const style = generateStyle(attributes);

                    console.log(style)
                return (
                    <Fragment>
                        <div style={style}>


                            <InnerBlocks.Content />
                        </div>
                    </Fragment>
                )
            }
        }
    );
    registerBlockType(
        'balise/section-block',
        {
            title: 'Section Block',
            icon: 'layout',
            category: 'layout',
            supports: {
                align: [ 'full', 'wide' ],

                inserter: true,
            },
            attributes: {
                columnsCount: {
                    type: 'number',
                    default: 1,
                },
            },
            edit({ className, attributes, setAttributes }) {
                const classes = `_sectionblock has-${ attributes.columnsCount }-columns`;

                const ajustColumns = (newColumnCount) => {
                    setAttributes( {
                        columnsCount: newColumnCount,
                    } );
                }
                const onSelectImage = (backgroundImage) => {
                    if (!backgroundImage) {
                        setAttributes({ backgroundImage:  { url: undefined, alt: undefined, id: undefined, caption: undefined } })
                    } else {
                        setAttributes({ backgroundImage })
                    }
                }

                let style = {};
                return (
                    <Fragment>
                        <InspectorControls>
                            <PanelBody title={ __( 'Columns' ) }>
                                <RangeControl
                                    label={ __( 'Columns' ) }
                                    value={ attributes.columnsCount }
                                    onChange={ ajustColumns }
                                    min={ 1 }
                                    max={ 6 }
                                    />
                            </PanelBody>
                        </InspectorControls>
                        <div className={ `_sectionblock has-${ attributes.columnsCount }-columns` }>
                            <InnerBlocks
                                template={generateTemplate(attributes.columnsCount)}
                                allowedBlocks={[ 'balise/section-block-col' ]}
                                templateLock="all" />
                        </div>
                    </Fragment>
                );
            },
            save({ attributes }) {
                let style = {};
                return (
                    <div className={ `_sectionblock has-${ attributes.columnsCount }-columns` }>
                        <InnerBlocks.Content />
                    </div>
                )
            }
        }
    );
})();
