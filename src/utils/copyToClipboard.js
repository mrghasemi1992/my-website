// @flow
function copyToClipboard(newClip: string, callBack: Function): void {
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
