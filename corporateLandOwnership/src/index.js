const {Command, flags} = require('@oclif/command');
const CompanyHierarchy = require('./Hierarchy/Company');
const CompanyRelations = require('./Reader/CompanyRelations');
const LandOwnership = require('./Reader/LandOwnership');
const FromRoot = require('./Renderer/FromRoot');
const TreeRenderer = require('./Renderer/Tree');
const appConfig = require('./Config/config');
const Expand = require('./Renderer/Expand');

class LandOwnershipCommand extends Command {
  constructor(argv, config) {
    super(argv, config);

    this.companyRelations = new CompanyRelations();
    this.landOwnership    = new LandOwnership();
    this.companyHierarchy = new CompanyHierarchy();
    this.rendererFromRoot = new FromRoot();
    this.rendererExpand   = new Expand();
    this.rendererTree     = new TreeRenderer();
  }

  run() {
    const { flags } = this.parse(LandOwnershipCommand);

    const companies =  this.companyRelations.read(appConfig.company_relations);
    const landOwners = this.landOwnership.read(appConfig.land_ownership);
    const hierarchy = this.companyHierarchy.generate(companies, landOwners, '', flags.companyId);
    if (flags.mode === 'expand') {
      this.rendererExpand.render(hierarchy[0], this.log, 0);
    }

    if (flags.mode === 'tree') {
      this.rendererTree.render(hierarchy[0], this.log, 0);
    }

    if (flags.mode === 'from_root' || typeof flags.mode === 'undefined') {
      this.rendererFromRoot.render(hierarchy[0], this.log, 0);
    }
  }
}

LandOwnershipCommand.description = `Print land ownership information`;

LandOwnershipCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  mode: flags.string({char: 'm', description: 'choose from tree, from_root and expand'}),
  companyId: flags.string({char: 'c', description: 'company id of output'}),
};

module.exports = LandOwnershipCommand;
