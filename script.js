document.querySelector("#TextArea").addEventListener("input", () => {
  let InputTexts = document.getElementById("TextArea").value;
  InputTexts = InputTexts.length;
  document.getElementById("OutPut").innerText =
    " " + InputTexts + " Characters";
});
