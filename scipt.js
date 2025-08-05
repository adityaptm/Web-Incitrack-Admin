// Sidebar Toggle Function
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("closed");
}

// Add Row to Table
function addTableRow() {
  const table = document
    .getElementById("userTable")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  // Create cells and inputs
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);

  cell1.textContent = table.rows.length; // Auto increment row number
  cell2.innerHTML = `<input type="text" placeholder="Username" />`;
  cell3.innerHTML = `<input type="email" placeholder="Email" />`;
  cell4.innerHTML = `<input type="password" placeholder="Password" />`;
  cell5.innerHTML = `<select>
      <option value="terverifikasi">Terverifikasi</option>
      <option value="menunggu">Menunggu Verifikasi</option>
    </select>`;
}
