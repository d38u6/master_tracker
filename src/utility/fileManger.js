export function readJsonFile(file) {
  return new Promise((resolve, reject) => {
    if (!file || file.type !== "application/json" || file.size > 5 * 1024 * 1024)
      return resolve(null);

    const reader = new FileReader();

    reader.addEventListener("error", (e) => {
      reader.abort();
      reject(e);
    });

    reader.addEventListener("loadend", (e) => resolve(JSON.parse(e.target.result)));

    reader.readAsText(file);
  });
}

export function saveDataToFile(data, fileName) {
  const a = document.createElement("a");
  const file = new Blob([data], { type: "application/json" });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}
