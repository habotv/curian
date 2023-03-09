<script type="text/javascript">
const youtube_theme_manifestUri = 'https://av-live-cdn.mncnow.id/live/eds/MNCSports2-HD/sa_dash_vmx/MNCSports2-HD.mpd';
async function init() {
  const video = document.getElementById('youtube-theme');
    const ui = video['ui'];
    const config = {
      'seekBarColors': {
        base: 'rgba(255,255,255,.2)',
        buffered: 'rgba(255,255,255,.4)',
        played: 'rgb(255,0,0)',
      }
    }
   ui.configure(config);
    const controls = ui.getControls();
    const player = controls.getPlayer();
    player.configure({
  drm                               : {
  clearKeys                         : {
//   'key-id-in-hex'                : 'key-in-hex',
    '45fec91ce1f19b6b1f31d69dcfaaf6cd': '843e228ab109e9aa6c4822ee4ad05d7d',
    }
  }
})
  // Attach player and ui to the window to make it easy to access in the JS console.
  window.player = player;
  window.ui = ui;
  // Listen for error events.
  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
    try {
      await player.load(youtube_theme_manifestUri);
    } catch (error) {
      onPlayerError(error);
    }
function onPlayerErrorEvent(errorEvent) {
  // Extract the shaka.util.Error object from the event.
  onPlayerError(event.detail);
}
function onPlayerError(error) {
  // Handle player error
  console.error('Error code', error.code, 'object', error);
}
function onUIErrorEvent(errorEvent) {
  // Extract the shaka.util.Error object from the event.
  onPlayerError(event.detail);
}
function initFailed(errorEvent) {
  // Handle the failure to load; errorEvent.detail.reasonCode has a
  // shaka.ui.FailReasonCode describing why.
  console.error('Unable to load the UI library!');
}
    // TODO find a way to do this without jquery. -___- or find a way to replace them CSS. maybe usering :after  
    $('.shaka-overflow-menu-button').html('settings');
    $('.shaka-back-to-overflow-button .material-icons-round').html('arrow_back_ios_new');
}
document.addEventListener('shaka-ui-loaded', init);
// Listen to the custom shaka-ui-load-failed event, in case Shaka Player fails
// to load (e.g. due to lack of browser support).
document.addEventListener('shaka-ui-load-failed', initFailed);
</script>
