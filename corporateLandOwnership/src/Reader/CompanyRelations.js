const fs = require("fs");

class CompanyRelations {
  read(strFile) {
    const rows = [];
    fs.readFileSync(strFile, "utf8")
    .split("\n")
    .slice(1) // header row
    .forEach((line) => {
      const [id, name, parentId] = line.split(",");
      // ... do something with the data
      rows.push(
        {
          id,
          name,
          parentId,
        }
      );
    });

    return rows;
  }
}

module.exports = CompanyRelations;
