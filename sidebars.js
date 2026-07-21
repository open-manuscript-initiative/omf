// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        'introduction/vision',
        'introduction/manifesto',
        'introduction/roadmap',
      ],
    },

    {
      type: 'category',
      label: 'Foundations',
      collapsed: false,
      items: [
        'foundations/core-principles',
        'foundations/architecture-map',
      ],
    },

    {
      type: 'category',
      label: 'Core Specifications',
      collapsed: false,
      items: [
        'specifications/core/document-model',
        'specifications/core/anchor-model',
        'specifications/core/scholarly-object-model',
        'specifications/core/annotation-model',
        'specifications/core/metadata-model',
      ],
    },

    {
      type: 'category',
      label: 'Workflow Specifications',
      collapsed: false,
      items: [
        'specifications/workflow/review-model',
        'specifications/workflow/collaboration-model',
        'specifications/workflow/versioning-model',
        'specifications/workflow/publishing-model',
      ],
    },

    {
      type: 'category',
      label: 'Interoperability',
      collapsed: false,
      items: [
        'specifications/interoperability/citation-model',
        'specifications/interoperability/api',
        'specifications/interoperability/file-format',
        'specifications/interoperability/plugin-architecture',
      ],
    },

    {
      type: 'category',
      label: 'Artificial Intelligence',
      collapsed: false,
      items: [
        'specifications/ai/ai-assistance',
        'specifications/ai/ai-review',
        'specifications/ai/provenance',
      ],
    },

    {
      type: 'category',
      label: 'Studio',
      collapsed: false,
      items: [
        'studio/getting-started',
        'studio/editor',
        'studio/annotations',
        'studio/profiles',
        'studio/localization',
      ],
    },

    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'reference/json-schema',
        'reference/glossary',
        'reference/identifiers',
        'reference/changelog',
      ],
    },

    {
      type: 'category',
      label: 'Community',
      collapsed: false,
      items: [
        'community/governance',
        'community/contributing',
        'community/code-of-conduct',
        'community/implementations',
      ],
    },
  ],
};

export default sidebars;
