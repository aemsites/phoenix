// eslint-disable-next-line import/no-cycle
import { sampleRUM, loadScript, loadCSS } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// Chat
window.EDU = {
  Configs: {
    chatDomain: 'https://ucpgms.phoenix.edu',
    chatDataURL: '/genesys/2/chat/Chat',
    chatGWEHttpEndPoint: 'http://gwe.phoenix.edu',
    chatGWEHttpsEndPoint: 'https://gwe.phoenix.edu',
    chatCometURL: '/genesys/cometd',
    chatApiURL: '/genesys/2/chat/Chat',
    chatCallBackURL: '/genesys/1/service/callback',
  },
  Utils: {},
};

const event = new Event('DOMContentLoaded', {
  bubbles: true,
  cancelable: true,
});
// ClientLib Component scripts
loadScript('/etc.clientlibs/phxedu/clientlibs/clientlib-common-library.min.js').then(() => { document.dispatchEvent(event); });
loadScript('/etc.clientlibs/edu/clientlibs/clientlib-site.min.js');

// Load Launch script for tag manager
loadScript('https://assets.adobedtm.com/7679441b2bf7/5d94d460e974/launch-e14ec2ae782a-staging.min.js').then(() => { document.dispatchEvent(event); });

// Adobe Client Data Layer
loadScript('/aem/scripts/acdl/adobe-client-data-layer.min.js', { defer: true });
loadScript('/aem/scripts/acdl/setup.js', { defer: true });

// Clientlib libraries
loadScript('/etc.clientlibs/edu/clientlibs/clientlib-chat.min.js', { defer: true });
loadCSS('/etc.clientlibs/edu/clientlibs/clientlib-chat.min.css');
