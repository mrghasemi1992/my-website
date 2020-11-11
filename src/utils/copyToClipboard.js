function copyToClipboard(newClip, callBack) {
  navigator.clipboard.writeText(newClip).then(
    function () {
      callBack();
    },
    function () {
      /* clipboard write failed */
    }
  );
}

export default copyToClipboard;
