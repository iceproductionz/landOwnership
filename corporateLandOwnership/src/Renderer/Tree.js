class FromRoot {
  render(results, printer, indentation)
  {
    results.forEach(company => {
      const totalLand = company.directLand + company.indirectLand;

      printer(
        this.indent(indentation) +
        this.open(company) +
        ' ' +
        company.id +
        ': ' +
        company.name +
        '; owner of ' + ( totalLand ) +' land parcels'
      );
        this.render(company.children, printer, indentation + 1);
    });
  }

  indent(indentation)
  {
    const char = '| -';
    let results =  '';

    for(var i=0; i< indentation; i++ ) {
      results += char;
    }
    return results;
  }

  open(company)
  {
    const open  = '|>';
    const closed = '|';
    if (company.open === true) {
      return open;
    }

    return closed;
  }
}

module.exports = FromRoot;
