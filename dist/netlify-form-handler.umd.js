(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.netlifyFormHandler = factory());
}(this, (function () { 'use strict';

  /**
   * @param {HTMLFormElement}
   */
  var index = async (formElement) => {
    const formData = new FormData(formElement);
    const body = new URLSearchParams(formData).toString();

    const submissionSettings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    };

    return await fetch('/', submissionSettings)
  };

  return index;

})));
