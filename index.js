'use strict'

const remote = require('electron').remote;

exports.decorateConfig = (config) => {
    return Object.assign({}, config, {
        css: `
            .header_windowControls {
                width: 59px;
                left: 6px;
            }
            .header_windowHeader {
                background: #393a3d;
                border: none;
            }
            .header_closeWindow, .header_minimizeWindowLeft, .header_maximizeWindowLeft {
                position: relative;
                width: 20px;
            }
            .header_closeWindow:after, .header_maximizeWindowLeft:after, .header_minimizeWindowLeft:after {
                content: "";
                position:absolute;
                background-size: 12px;
                background-repeat: no-repeat;
                background-position: center;
                border-radius: 50%;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                z-index: -1;
            }
            .header_closeWindow:after {
                background: url(/home/jakub/.themes/McOS-MJV-Dark-v2.0/gtk-3.0/objects-dark/title-buttons/titlebutton-maximize-active@2.svg);
            }
            .header_minimizeWindowLeft:after {
                background: url(/home/jakub/.themes/McOS-MJV-Dark-v2.0/gtk-3.0/objects-dark/title-buttons/titlebutton-maximize-active@2.svg);
            }
            .header_maximizeWindowLeft:after {
                background: url(/home/jakub/.themes/McOS-MJV-Dark-v2.0/gtk-3.0/objects-dark/title-buttons/titlebutton-maximize-active@2.svg);
            }
            
            .header_closeWindow > .header_shape, .header_maximizeWindowLeft > .header_shape, .header_minimizeWindowLeft > .header_shape {
                displau: none;
                /*width: 100%;
                height: 100%;
                padding: 0;
                fill: #393a3d;
    
                opacity: 1;
                transform: scale(0.2);*/
            }
        `
    })
}