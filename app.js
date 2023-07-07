class App {
  timer = {
    min_tens: document.getElementById("min_tens"),
    min: document.getElementById("min"),
    sec_tens: document.getElementById("sec_tens"),
    sec: document.getElementById("sec"),
  };

  submit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const time = formData.get("time");
  }
}

const app = new App();
