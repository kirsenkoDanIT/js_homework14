"use strict";
const tabs = document.querySelector(".tabs");
const tabsContent = document.querySelector(".tabs-content");

tabs.addEventListener("click", e => {
  [...tabs.children].forEach(elem => {
    elem.classList.remove("active");
  });
  e.target.classList.add("active");

  [...tabsContent.children].forEach(elem => {
    elem.style.display = "none";
    if (elem.dataset.name === e.target.innerText) {
      elem.style.display = "block";
    }
  });
});

[...tabs.children].forEach(tabsElem => {
  if (tabsElem.classList.contains("active")) {
    [...tabsContent.children].forEach(contentElem => {
      if (contentElem.dataset.name === tabsElem.innerText) {
        contentElem.style.display = "block";
      }
    });
  }
});
$(document).ready(function () {

  const newTabs = new Tabs(".tabs-title", "active", ".tabs-content li", "name");

  function Tabs(tabClass, tabClassActive, itemClass, dataName) {
    const defaultTab = $(`${tabClass}.${tabClassActive}`).data(dataName);
    $(itemClass).each(function () {
      $(this).data(dataName) === defaultTab ? $(this).show() : $(this).hide();
    });
    $(document).on("click", tabClass, event => {
      $(event.currentTarget)
        .addClass(tabClassActive)
        .siblings()
        .removeClass(tabClassActive);
      $(itemClass).each(function () {
        $(event.currentTarget).data(dataName) === $(this).data(dataName) ?
          $(this).show() :
          $(this).hide();
      });
    });
  };
})