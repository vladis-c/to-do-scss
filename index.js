const form = document.querySelector(".section__enter-container")
const input = document.querySelector(".section__enter-container__enter")
const list = document.querySelector(".section__tasks-container__list")
const deleteAll = document.querySelector(
  ".section__button-container__remove-all-btn"
)

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const newTaskText = input.value
  if (!newTaskText) {
    alert("Please enter a task")
    return
  }
  const newTask = document.createElement("li")
  newTask.classList.add("section__tasks-container__list__list-item")

  const newTaskContent = document.createElement("input")
  newTaskContent.value = newTaskText
  newTaskContent.type = "text"
  newTaskContent.setAttribute("disabled", "disabled")
  newTaskContent.classList.add(
    "section__tasks-container__list__list-item__text"
  )
  newTaskContent.innerText = newTaskText

  const newCheckBtn = document.createElement("button")
  newCheckBtn.classList.add("section__tasks-container__list__list-item__btn")
  newCheckBtn.innerText = "✓"

  const newTaskDeleteBtn = document.createElement("button")
  newTaskDeleteBtn.classList.add(
    "section__tasks-container__list__list-item__btn"
  )
  newTaskDeleteBtn.innerText = "DELETE"

  newTask.appendChild(newCheckBtn)
  newTask.appendChild(newTaskContent)
  newTask.appendChild(newTaskDeleteBtn)

  list.appendChild(newTask)

  input.value = ""

  newTaskDeleteBtn.addEventListener("click", () => {
    list.removeChild(newTask)
  })



  newCheckBtn.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      newTaskContent.classList.toggle(
        "section__tasks-container__list__list-item__text_checked"
      )
    }
  })
})

deleteAll.addEventListener("click", () => {
  list.innerHTML = ""
})
