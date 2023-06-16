const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
    console.log(`  ${textInput.value.length} === ${textInput.getAttribute('data-length')}`)
    if (Number(textInput.value.length) === Number(textInput.getAttribute('data-length'))) {

        return textInput.classList.add("valid");
    } else {
        return textInput.classList.add("invalid");
    }
  });