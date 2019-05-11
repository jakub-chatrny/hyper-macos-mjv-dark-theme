'use strict'

const path = require('path');

const pluginConfig = {
    headerWidth: "59px",
    headerLeftOffset: "6px",
    headerBackground: "transparen", //"#393a3d",
    iconSize: "12px",

    closeIconPath: path.resolve(__dirname, 'assets/titlebutton-close@2.svg'),
    closeHoverIconPath: path.resolve(__dirname, 'assets/titlebutton-close-hover@2.svg'),
    closeActiveIconPath: path.resolve(__dirname, 'assets/titlebutton-close-active@2.svg'),

    minimizeIconPath: path.resolve(__dirname, 'assets/titlebutton-minimize@2.svg'),
    minimizeHoverIconPath: path.resolve(__dirname, 'assets/titlebutton-minimize-hover@2.svg'),
    minimizeActiveIconPath: path.resolve(__dirname, 'assets/titlebutton-minimize-active@2.svg'),

    maximizeIconPath: path.resolve(__dirname, 'assets/titlebutton-maximize@2.svg'),
    maximizeHoverIconPath: path.resolve(__dirname, 'assets/titlebutton-maximize-hover@2.svg'),
    maximizeActiveIconPath: path.resolve(__dirname, 'assets/titlebutton-maximize-active@2.svg'),
}

exports.decorateConfig = (config) => {
    return Object.assign({}, config, {
        css: `
            .header_windowControls {
                width: ${pluginConfig.headerWidth};
                left: ${pluginConfig.headerLeftOffset};
            }
            .header_windowHeader {
                background: ${pluginConfig.headerBackground};
                border: none;
            }
            .header_closeWindow, .header_minimizeWindowLeft, .header_maximizeWindowLeft {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                width: 20px;
            }
            .header_closeWindow:after, .header_maximizeWindowLeft:after, .header_minimizeWindowLeft:after {
                content: "";
                position:absolute;
                background-size: ${pluginConfig.iconSize};
                background-position: center;
                background-repeat: no-repeat;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
            }

            .header_closeWindow:after {
                background-image: url(${pluginConfig.closeIconPath});
            }
            .header_closeWindow:hover:after {
                background-image: url(${pluginConfig.closeHoverIconPath});
            }
            .header_closeWindow:active:after {
                background-image: url(${pluginConfig.closeActiveIconPath});
            }

            .header_minimizeWindowLeft:after {
                background-image: url(${pluginConfig.minimizeIconPath});
            }
            .header_minimizeWindowLeft:hover:after {
                background-image: url(${pluginConfig.minimizeHoverIconPath});
            }
            .header_minimizeWindowLeft:active:after {
                background-image: url(${pluginConfig.minimizeActiveIconPath});
            }

            .header_maximizeWindowLeft:after {
                background-image: url(${pluginConfig.maximizeIconPath});
            }
            .header_maximizeWindowLeft:hover:after {
                background-image: url(${pluginConfig.maximizeHoverIconPath});
            }
            .header_maximizeWindowLeft:active:after {
                background-image: url(${config.maximizeActiveIconPath});
            }
            
            .header_closeWindow > .header_shape, .header_maximizeWindowLeft > .header_shape, .header_minimizeWindowLeft > .header_shape {
                width: ${pluginConfig.iconSize};
                height: ${pluginConfig.iconSize};
    
                opacity: 0;
            }
        `
    })
}
