let users = [];

/* const todoTasks = document.getElementById("todo");
const doingTasks = document.getElementById("doing");
const realizedTasks = document.getElementById("realize");
//dragStarts
todoTasks.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
});
doingTasks.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
});
realizedTasks.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
});
//drag
todoTasks.addEventListener("drag", (e) => {
  e.target.classList.add("active");
});
doingTasks.addEventListener("drag", (e) => {
  e.target.classList.add("active");
});
realizedTasks.addEventListener("drag", (e) => {
  e.target.classList.add("active");
});
//dragEnd
todoTasks.addEventListener("dragend", (e) => {
  e.target.classList.remove("active");
});
doingTasks.addEventListener("dragend", (e) => {
  e.target.classList.remove("active");
});
realizedTasks.addEventListener("dragend", (e) => {
  e.target.classList.remove("active");
});
//dragOver
doingTasks.addEventListener("dragover", (e) => {
  e.preventDefault();
});
todoTasks.addEventListener("dragover", (e) => {
  e.preventDefault();
});
realizedTasks.addEventListener("dragover", (e) => {
  e.preventDefault();
});
//drop
doingTasks.addEventListener("drop", (e) => {
  e.preventDefault();
  const element = document.getElementById(e.dataTransfer.getData("text"));
  element.classList.remove("active");
  doingTasks.appendChild(todoTasks.removeChild(element));
});
realizedTasks.addEventListener("drop", (e) => {
  e.preventDefault();
  const element = document.getElementById(e.dataTransfer.getData("text"));
  element.classList.remove("active");
  realizedTasks.appendChild(doingTasks.removeChild(element));
});
 */

const getAll = async () => {
  const container = document.getElementById("hola");
  const response = await fetch(
    `https://6042a5877f50e000173ac830.mockapi.io/api/users`
  );
  const myInfo = await response.json();
  users = myInfo;
  myInfo.forEach((element) => {
    const div = document.createElement("h1");
    div.innerHTML = element.name;
    container.appendChild(div);
  });
};

const imprimirUsers = () => {
  console.log("users =>", users);
};

const crearUsuario = async () => {
  const response = await fetch(
    `https://6042a5877f50e000173ac830.mockapi.io/api/users`,
    {
      method: "post",
      headers: {
        token: "asdflkjasldf",
      },
      body: {
        age: "22",
        name: "Litzy Palomeque",
        email: "citlalypalomeque30@gmail.com",
        createdAt: 1633734088,
        id: "1",
      },
    }
  );
};
