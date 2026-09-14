import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import arkoApiSidebar from './docs/projects/arko/api/sidebar';

// The generated per-tag categories (Auth, Workouts, Nutrition, ...) come with
// a `link` to a tag overview doc, which makes clicking the category label
// navigate instead of just expanding it. Strip the link and surface that same
// doc as an explicit "Overview" item at the top of the category instead.
function asPureToggleCategories(items: any[]): any[] {
  return items.map((item) => {
    if (item.type === 'category' && item.link?.type === 'doc') {
      const {link, items: subItems, ...rest} = item;
      return {
        ...rest,
        items: [{type: 'doc', id: link.id, label: 'Overview'}, ...subItems],
      };
    }
    return item;
  });
}

const sidebars: SidebarsConfig = {
  portfolioSidebar: [
    'intro',
    'about-me',
    'experience',
    {
      type: 'category',
      label: 'What I Do',
      items: ['technical-writing', 'docs-as-code', 'technical-stack'],
    },
  ],
  projectsSidebar: [
    {
      type: 'category',
      label: 'Projects',
      link: {
        type: 'generated-index',
        description:
          "A collection of projects I've worked on, with a look at the APIs and documentation behind them.",
      },
      items: [
        {
          type: 'category',
          label: 'Arko',
          items: [
            {type: 'doc', id: 'projects/arko/overview', label: 'Overview'},
            {
              type: 'category',
              label: 'API Reference',
              items: asPureToggleCategories(arkoApiSidebar),
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
