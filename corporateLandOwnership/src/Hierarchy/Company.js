const Model = require('../Model/Company');

class Company {
  generate(companies, landOwners, parentCompanyId, selectedCompanyId) {
    const results = [];
    let open = false;
    let returnResult = false;
    let indirectOwnership = 0;

    companies.forEach(element => {
      open = false;
      if (element.parentId === parentCompanyId) {
        const generated = this.generate(companies, landOwners, element.id, selectedCompanyId);
        const directLandOwnership = this.calcDirectLandOwnership(landOwners, element.id);

        if (generated[1] === true) {
          open = true;
        }

        if (element.id === selectedCompanyId) {
          open = true;
        }

        if (element.parentId === selectedCompanyId) {
          open = true;
        }

        if (open === true) {
          returnResult = true;
        }
        indirectOwnership += directLandOwnership;
        indirectOwnership += generated[2];

        results.push(
          new Model(
            element.id,
            element.name,
            open,
            generated[0],
            directLandOwnership,
            generated[2]
          )
        );
      }
    });

    return [
      results,
      returnResult,
      indirectOwnership,
    ];
  }

  calcDirectLandOwnership(landOwners, companyId) {
    let count = 0;

    landOwners.forEach(parcel => {
      if (parcel.companyId === companyId) {
        count += 1;
      }
    });

    return count;
  }
}

module.exports = Company;
