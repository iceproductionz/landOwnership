class Company {
  // eslint-disable-next-line max-params
  constructor(
    id,
    name,
    open,
    children,
    directLand,
    indirectLand
  ) {
    this.id = id;
    this.name = name;
    this.open = open;
    this.children = children;
    this.directLand = directLand;
    this.indirectLand = indirectLand;
  }
}

module.exports = Company;
