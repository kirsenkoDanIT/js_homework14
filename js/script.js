"use strict";

$(document).ready(function() {
  const newTabs = new Tabs(".tabs-title", "active", ".tabs-content li", "name");

  function Tabs(tabClass, tabClassActive, itemClass, dataName) {
    const defaultTab = $(`${tabClass}.${tabClassActive}`).data(dataName);
    $(itemClass).each(function() {
      $(this).data(dataName) === defaultTab ? $(this).show() : $(this).hide();
    });
    $(document).on("click", tabClass, event => {
      $(event.currentTarget)
        .addClass(tabClassActive)
        .siblings()
        .removeClass(tabClassActive);
      $(itemClass).each(function() {
        $(event.currentTarget).data(dataName) === $(this).data(dataName)
          ? $(this).show()
          : $(this).hide();
      });
    });
  }
});
