document.getElementById("open-extensions").addEventListener("click", (event) => {
  event.preventDefault();

  chrome.tabs.create({
    url: "chrome://extensions/"
  });
});
