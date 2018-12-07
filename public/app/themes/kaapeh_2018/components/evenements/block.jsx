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

    registerBlockType(
        'kaapeh/evenements',
        {
            title: 'Kaapeh Évènements',
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

                return (
                    <Fragment>
                        <div className="kaapeh-evenements">
                            <div className="inside">
                                <InnerBlocks
                                    template={
                                        [
                                            [ 'core/media-text', { } ]
                                        ]
                                    }
                                     />
                            </div>
                        </div>
                    </Fragment>
                );
            },
            save({ attributes }) {
                return (
                    <div className="kaapeh-evenements">
                        <div className="inside">
                            <InnerBlocks.Content />
                        </div>
                    </div>
                )
            }
        }
    );
})();
