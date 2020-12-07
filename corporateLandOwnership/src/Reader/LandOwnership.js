const fs = require("fs");

class LandOwnership {
  read(strFile) {
    const rows = [];
    fs.readFileSync(strFile, "utf8")
    .split("\n")
    .slice(1) // header row
    .forEach((line) => {
      const [landId, companyId] = line.split(",");
      // ... do something with the data
      rows.push(
        {
          landId,
          companyId,
        }
      )
    });

    return rows;
  }
}

module.exports = LandOwnership;
