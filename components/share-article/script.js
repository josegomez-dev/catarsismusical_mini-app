const copyText = (e) => {
  // window.getSelection().selectAllChildren(textElement);
  document.getElementById("text").select(); //select input value
  document.execCommand("copy");
  e.currentTarget.setAttribute("tooltip", "Copied!");
};

const resetTooltip = (e) => {
  e.currentTarget.setAttribute("tooltip", "Copy to clipboard");
};

document.getElementById("copy").addEventListener("click", (e) => copyText(e));
document.getElementById("copy").addEventListener("mouseover", (e) => resetTooltip(e));
