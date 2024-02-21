const inputText = document.querySelectorAll(".tag-de-input");

inputText.forEach(input =>{
  input.addEventListener('change',() => {
    if(input.value !== ""){
      input.classList.add("campo-preenchido")
    }else{
      input.classList.remove("campo-preenchido")
    }
  });
});

