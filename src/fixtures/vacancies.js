import moment from 'momentjs'

export default [
  {
    _id: 1,
    title: 'Medior front-end developer',
    status: 'open',
    location: 'Utrecht, the Netherlands',
    description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ex velit. Fusce mattis vulputate ultrices. Maecenas vestibulum id metus eget laoreet. Sed id lorem turpis. Maecenas mollis vitae justo non auctor. Aliquam et feugiat augue. Sed porttitor purus sed bibendum consequat. Maecenas nisl magna, laoreet a volutpat ut, blandit id eros. Aliquam erat volutpat. Curabitur vitae ipsum sodales, facilisis tellus et, iaculis sem. Quisque porttitor sit amet nibh ut sagittis. Donec libero augue, malesuada sed fermentum ac, tristique non leo. Cras eget est in ipsum aliquam placerat imperdiet sed nisi. Sed sit amet neque urna. Integer tempor faucibus pharetra. Nulla facilisi. Vivamus a erat non ligula sodales volutpat sit amet accumsan risus. Maecenas sit amet hendrerit nulla, a vehicula est. Sed quis ultricies purus. Mauris ut mi a ante efficitur molestie. Suspendisse vel fringilla sapien, quis fringilla tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla feugiat mauris est, ac tincidunt felis vulputate eu. Vestibulum dignissim, lacus eu vulputate lobortis, urna risus tincidunt ipsum, sit amet blandit sapien ante at nunc. Morbi accumsan nisi rhoncus consequat dictum.</p>',
    form_settings: {
      video: 'optional',
      first_name: true,
      last_name: true
    },
    created_at: moment().subtract(5, 'days').fromNow(),
  },
  {
    _id: 2,
    title: 'Bartender Okura Hotel',
    status: 'open',
    location: 'Amsterdam, the Netherlands',
    description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ex velit. Fusce mattis vulputate ultrices. Maecenas vestibulum id metus eget laoreet. Sed id lorem turpis. Maecenas mollis vitae justo non auctor. Aliquam et feugiat augue. Sed porttitor purus sed bibendum consequat. Maecenas nisl magna, laoreet a volutpat ut, blandit id eros. Aliquam erat volutpat. Curabitur vitae ipsum sodales, facilisis tellus et, iaculis sem. Quisque porttitor sit amet nibh ut sagittis. Donec libero augue, malesuada sed fermentum ac, tristique non leo. Cras eget est in ipsum aliquam placerat imperdiet sed nisi. Sed sit amet neque urna. Integer tempor faucibus pharetra. Nulla facilisi. Vivamus a erat non ligula sodales volutpat sit amet accumsan risus. Maecenas sit amet hendrerit nulla, a vehicula est. Sed quis ultricies purus. Mauris ut mi a ante efficitur molestie. Suspendisse vel fringilla sapien, quis fringilla tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla feugiat mauris est, ac tincidunt felis vulputate eu. Vestibulum dignissim, lacus eu vulputate lobortis, urna risus tincidunt ipsum, sit amet blandit sapien ante at nunc. Morbi accumsan nisi rhoncus consequat dictum.</p>',
    form_settings: {
      video: 'mandatory',
      first_name: true,
      last_name: true
    },
    created_at: moment().subtract(2, 'days').fromNow(),
  },
  {
    _id: 3,
    title: 'Flight attendant KLM',
    status: 'open',
    location: 'Hoofddorp, the Netherlands',
    description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ex velit. Fusce mattis vulputate ultrices. Maecenas vestibulum id metus eget laoreet. Sed id lorem turpis. Maecenas mollis vitae justo non auctor. Aliquam et feugiat augue. Sed porttitor purus sed bibendum consequat. Maecenas nisl magna, laoreet a volutpat ut, blandit id eros. Aliquam erat volutpat. Curabitur vitae ipsum sodales, facilisis tellus et, iaculis sem. Quisque porttitor sit amet nibh ut sagittis. Donec libero augue, malesuada sed fermentum ac, tristique non leo. Cras eget est in ipsum aliquam placerat imperdiet sed nisi. Sed sit amet neque urna. Integer tempor faucibus pharetra. Nulla facilisi. Vivamus a erat non ligula sodales volutpat sit amet accumsan risus. Maecenas sit amet hendrerit nulla, a vehicula est. Sed quis ultricies purus. Mauris ut mi a ante efficitur molestie. Suspendisse vel fringilla sapien, quis fringilla tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla feugiat mauris est, ac tincidunt felis vulputate eu. Vestibulum dignissim, lacus eu vulputate lobortis, urna risus tincidunt ipsum, sit amet blandit sapien ante at nunc. Morbi accumsan nisi rhoncus consequat dictum.</p>',
    form_settings: {
      video: 'mandatory',
      first_name: true,
      last_name: true
    },
    created_at: moment().subtract(1, 'days').fromNow(),
  }
]