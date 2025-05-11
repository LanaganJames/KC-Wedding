const registryItems = [
  { id: 1, item: "Toaster", price: "$30", link: "https://example.com/toaster" },
  { id: 2, item: "Dinner Set", price: "$50", link: "https://example.com/dinnerset" },
  { id: 3, item: "Blender", price: "$40", link: "https://example.com/blender" }
];

function renderRegistry() {
  const tableBody = document.querySelector("#registry-table tbody");
  tableBody.innerHTML = "";

  registryItems.forEach(item => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.item}</td>
      <td>${item.price}</td>
      <td><a href="${item.link}" target="_blank">View</a></td>
      <td>
        <button class="claim-btn" data-id="${item.id}">Claim</button>
        <div class="claim-form" id="form-${item.id}" style="display:none; margin-top:10px;">
          <input type="text" placeholder="Your name" id="name-${item.id}" required />
          <button class="submit-claim" data-id="${item.id}">Claim Item</button>
        </div>
      </td>
    `;

    tableBody.appendChild(row);
  });

  document.querySelectorAll(".claim-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = btn.dataset.id;
      document.getElementById(`form-${id}`).style.display = "block";
    });
  });

  document.querySelectorAll(".submit-claim").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = btn.dataset.id;
      const nameInput = document.getElementById(`name-${id}`);
      const userName = nameInput.value.trim();
      const itemName = registryItems.find(i => i.id == id).item;

      if (userName === "") {
        alert("Please enter your name.");
        return;
      }

      emailjs.init("XazxbhZhQ61_TY0Mb");

      emailjs.send("service_fdjfdno", "template_8jrv9lc", {
        item: itemName,
        name: userName,
        to_email: "tperm14@gmail.com"
      }).then(() => {
        alert(`Thank you, ${userName}! You claimed "${itemName}".`);
        document.getElementById(`form-${id}`).style.display = "none";
      }, (error) => {
        console.error("Failed to send email:", error);
        alert("Something went wrong. Please try again.");
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", renderRegistry);
