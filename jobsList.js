window.addEventListener("load", () => {
  const params = new URL(document.location).searchParams;
  const title = params.get("title");
  const company = params.get("company");
  const description = params.get("description");

  document.getElementById("job-title").innerHTML = title;
  document.getElementById("company-name").innerHTML = company;
  document.getElementById("job-description").innerHTML = description;
});
const applyBtn = document.getElementById("apply");
applyBtn.addEventListener("click", function () {
  alert("Applied Successfully");
});
