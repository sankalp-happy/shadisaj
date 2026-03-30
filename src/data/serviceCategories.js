// Merged service categories - combining services (from instruct.txt) with existing equipment categories

export const serviceCategories = [
  // Service Providers (from instruct.txt requirements)
  {
    id: 'caterers',
    name: 'Caterers',
    icon: '🍽️',
    description: 'Food & beverage services for wedding celebrations',
    type: 'service'
  },
  {
    id: 'decorators',
    name: 'Decorators',
    icon: '🌺',
    description: 'Venue decoration, floral arrangements, mandap design',
    type: 'service'
  },
  {
    id: 'dj',
    name: 'DJ & Music',
    icon: '🎵',
    description: 'DJ services, live bands, sound systems',
    type: 'service'
  },
  {
    id: 'venues',
    name: 'Venues',
    icon: '🏛️',
    description: 'Wedding venues, banquet halls, destination properties',
    type: 'service'
  },
  {
    id: 'photography',
    name: 'Photography',
    icon: '📸',
    description: 'Wedding photography, videography, pre-wedding shoots',
    type: 'service'
  },
  {
    id: 'mehndi',
    name: 'Mehndi Artists',
    icon: '🖐️',
    description: 'Bridal mehndi, guest mehndi services',
    type: 'service'
  },
  {
    id: 'makeup',
    name: 'Makeup Artists',
    icon: '💄',
    description: 'Bridal makeup, hairstyling, draping',
    type: 'service'
  },
  {
    id: 'pandit',
    name: 'Pandit Services',
    icon: '🙏',
    description: 'Wedding ceremonies, puja rituals',
    type: 'service'
  },
  {
    id: 'invitations',
    name: 'Invitations',
    icon: '💌',
    description: 'Wedding cards, digital invites, stationery',
    type: 'service'
  }
];

// Equipment categories (existing from the app)
export const equipmentCategories = [
  {
    id: 'decorations',
    name: 'Decorations',
    icon: '🌸',
    description: 'Floral arrangements, centerpieces, backdrops',
    type: 'equipment'
  },
  {
    id: 'lighting',
    name: 'Lighting',
    icon: '💡',
    description: 'LED strips, fairy lights, spotlights',
    type: 'equipment'
  },
  {
    id: 'audio-equipment',
    name: 'Audio Equipment',
    icon: '🔊',
    description: 'Speakers, microphones, mixers',
    type: 'equipment'
  },
  {
    id: 'furniture',
    name: 'Furniture',
    icon: '🪑',
    description: 'Chairs, tables, lounges, stages',
    type: 'equipment'
  },
  {
    id: 'catering-supplies',
    name: 'Catering Supplies',
    icon: '🍴',
    description: 'Cookware, serving dishes, cutlery',
    type: 'equipment'
  },
  {
    id: 'stage-backdrop',
    name: 'Stage & Backdrop',
    icon: '🎭',
    description: 'Mandap structures, draping, arch frames',
    type: 'equipment'
  },
  {
    id: 'floral-supplies',
    name: 'Floral Supplies',
    icon: '💐',
    description: 'Fresh flowers, artificial florals, foam',
    type: 'equipment'
  }
];

// Combined all categories
export const allCategories = [...serviceCategories, ...equipmentCategories];

// Helper to get category by ID
export function getCategoryById(id) {
  return allCategories.find(c => c.id === id);
}

// Get only service categories
export function getServiceCategoriesOnly() {
  return serviceCategories;
}

// Get only equipment categories
export function getEquipmentCategoriesOnly() {
  return equipmentCategories;
}
