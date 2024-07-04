function createSelectBox(startYear, endYear) {
  document.write(`<div>`);
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}"> ${i} </option>`);
  }
  document.write(`</select>`);
  document.write(`</div>`);
}
createSelectBox(2000, 2021);
