import BungieImage from 'app/dim-ui/BungieImage';
import { DimItem } from 'app/inventory/item-types';
import { useD2Definitions } from 'app/manifest/selectors';
import { DestinyItemPerkEntryDefinition } from 'bungie-api-ts/destiny2';

export default function ItemPerks({ item }: { item: DimItem }) {
  if (!item.perks) {
    return null;
  }

  return (
    <div className="item-details item-perks">
      {item.perks.map((perk) => (
        <ItemPerk key={perk.perkHash} perk={perk} />
      ))}
    </div>
  );
}

function ItemPerk({ perk }: { perk: DestinyItemPerkEntryDefinition }) {
  const defs = useD2Definitions()!;
  const perkDef = defs.SandboxPerk.get(perk.perkHash);
  const { hasIcon, icon, name, description } = perkDef.displayProperties;

  return (
    <div className="item-perk">
      {hasIcon && <BungieImage src={icon} />}
      <div className="item-perk-info">
        <div className="item-perk-name">{name}</div>
        <div className="item-perk-description">{description}</div>
      </div>
    </div>
  );
}
